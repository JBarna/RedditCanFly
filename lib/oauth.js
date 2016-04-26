"use strict";

var opener = require('./opener'),
    URL = require('url'),
    values = require('./values'),
    fs = require('./fs_helper'),
    server = require('./server'),
    userConfig = require('../user_config'),
    https = require('./https_helper');

var tokenReadyCBs,
    beganOauth = false;

exports.beginOauth = function(){
    beganOauth = true;
    tokenReadyCBs = [];
    server.setUp(exports.requestAccess);
}

exports.requestAccess = function(){

    var requestUrl = URL.parse(values.request_authorization_url.base);
    
    requestUrl.query = values.request_authorization_url.queries;
    requestUrl.query.client_id = userConfig.client_id;
    requestUrl.query.scope = userConfig.scope.join(",");

    opener( URL.format(requestUrl) );
    
}

exports.getTokenFromReddit = function(code, cb){
    
    var url_options = values.auth_token.url_options;
    url_options.auth = userConfig.client_id + ":" + userConfig.client_secret;
    
    var dataToSend = values.auth_token.post_data.beginning + code + values.auth_token.post_data.end;
    
    https( url_options, dataToSend, returnedData => {
        
        values.access_token = returnedData.access_token;
        values.refresh_token = returnedData.refresh_token;
        values.token_time = Math.floor( Date.now() / 1000 );
        exports.writeConfigToFile();
        cb();
        
        for (var tokenCB of tokenReadyCBs)
            tokenCB(values.access_token);
        
    });
    
}

exports.refreshToken = function(cb){
    
    var url_options = values.refresh_token_url.url_options;
    url_options.auth = userConfig.client_id + ":" + userConfig.client_secret;
    
    var dataToSend = values.refresh_token_url.post_data.beginning + values.refresh_token;
    
    https( url_options, dataToSend, returnedData => {
        
        values.access_token = returnedData.access_token;
        values.token_time = Math.floor( Date.now() / 1000 );
        exports.writeConfigToFile();
        cb();
        
    });
    
}

exports.getAccessToken = function(cb){
    
    if (typeof values.access_token === "undefined"){
        if (!beganOauth) exports.beginOauth();
        tokenReadyCBs.push(cb);
    }
    
    else {
        
        let currentTime = Math.floor( Date.now() / 1000 );
        
        if (currentTime - values.token_time >= 3600 ){
            
            /* Need to request refresh token */
            exports.refreshToken(() => cb(values.access_token));
            
        }
        
        else process.nextTick(() => cb(values.access_token));
    }
}

exports.writeConfigToFile = function(){
    
    fs.writeFile('./lib/values.json', values);
    
}
                                 
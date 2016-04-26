module.exports = helper;

var https = require('https');

function helper( url_options, dataToSend, cb ){
//    console.log("url_options_before", url_options);
    
    https.request( url_options, res => {
        
        //console.log("url_options", url_options);
        
        /* Is reddit crashing?! */
        if (res.statusCode == 503){
            setTimeout(() => helper( url_options, dataToSend, cb), 10000);
            return;
        } else if (res.statusCode != 200)
            throw new Error("Https request returned with non 200 statusCode: " + res.statusCode);
            
        /* All is fine */
        var returnedData = "";
        res.setEncoding('utf8');
        res.on('data', chunk => returnedData += chunk);
        res.on('end', () => cb( JSON.parse( returnedData ) ));
        
    }).end( dataToSend != null ? dataToSend : undefined );
}
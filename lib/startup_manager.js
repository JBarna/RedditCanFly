"use strict";

var fs = require('fs'),
    path = require('path'),
    userConfig = require('../user_config');

module.exports = function(){

    if (process.platform === "win32"){

        let startupPath = path.resolve( process.env.APPDATA, 'Microsoft', 'Windows','Start Menu', 'Programs', 'Startup'); 
        let filePath = path.resolve( startupPath, 'RedditCanFly.bat');

        if (userConfig.runOnStartUp){
            if (fs.existsSync(startupPath)){

                let script = "start /B node " + require.main.filename;
                fs.writeFileSync(filePath, script, { encoding: 'utf8'} );

            }

        } else /* Does not want to run on startup */ {

            if (fs.existsSync(filePath))
                fs.unlinkSync(filePath);
            
        }
    }
}
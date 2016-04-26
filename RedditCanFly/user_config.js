var myinfo = require('./mysecrets');

module.exports = {
    
    "client_id" : myinfo.client_id,
    "client_secret": myinfo.client_secret,
    
    runOnStartUp: false,
    
    "scope": [
        "privatemessages"
    ],
    
    "crawlers": {
        
        "oranger": {
            "account": true,
            "path": "/message/unread"
        },
        
        "kitten pics":{
            "account": false,
            "path": "/r/aww/search",
            "queries": {
                
                "q": "kitten",
                "sort": "new",
                "restrict_sr": "on",
                "t": "all",
                "limit": 50
                
            }
        }
    }
}

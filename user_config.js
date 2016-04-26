module.exports = {
    
    "client_id" : "CLIENT_ID GOES HERE",
    "client_secret": "CLIENT_SECRET GOES HERE",
    
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

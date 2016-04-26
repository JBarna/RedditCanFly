"use strict"

var gui = require('./lib/gui_controller'),
    crawlManager = require('./lib/crawl_manager.js'),
    startupManager = require('./lib/startup_manager'),
    server = require('./lib/server');

startupManager();

gui.create()
crawlManager();
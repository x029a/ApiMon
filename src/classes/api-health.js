const request = require('request');
const uid = require('uid');
const messages = require('../modules/messages');

/**
 * 
 * @param {*} apiUrl 
 * @param {*} length 
 * @param {*} interval 
 * @param {*} options
 */
function ApiCheck(url, length, interval, options) {

    // The amount of times this ApiChecker ran.
    this.timesRuns = 0;

    // Check options object
    if ( options === null || option == null) {
        let apiCheckId = uid(10);
        this.name = `ApiCheck-${apiCheckId}`;
    } else {
        this.name = options.name;
    };

    this.interval = interval;

    // Verify something has been given for a url.
    // @todo: Verify that it's an actual URL.
    if(apiUrl === null || apiUrl === undefined || apiUrl === '') {
        throw new Error(`[${this.name}] -> Error: URL undefined! Please specify an API to check! `);
    } else {
        this.apiUrl = url;
    };

    // If length is 'null', then this ApiChecker will run indefinitely, until stopped.
    if (length === null) {
        this.length = 0;
    };
    
    // If length is 'undefined', then throw an error.
    if(length === undefined){
        throw new Error(`[${this.name}] -> Error: Length undefined! Please specify a length of time for ${tihs.name} to run. If you'd like it to run indefinitely, 0, or null will run ${this.name} will run until you run ${this.name}.stop()`);
    };


    // Last recorded error.
    this.lastError = '';

    // Last record successful pageload.
    this.lastSuccess = '';
};

/**
 * Starts an ApiChecker instance.
 */
ApiCheck.prototype.start = function(){

};

/**
 * Stops the current ApiChecker, and prints out it's information.
 */
ApiCheck.prototype.stop = function(){
    clearInterval(this.interVal);
    console.log(`[${this.name}] -> Stopped!`);
    console.log(`::: [${this.name}]s information :::`)
    console.log(this.info);
};

/*********************************
 * ApiChecker informative methods.
 *******************************/

/**
 * Prints out information about the current ApiChecker.
 */
ApiCheck.prototype.getInfo = function(){

};

/**
 * 
 */
ApiCheck.prototype.lastSuccess = function(){
    return this.lastSuccess;
};

/**
 * 
 */
ApiCheck.prototype.lastError = function(){
    return this.lastError;
};


/************************
 * ApiCheck Setters
 ***********************/

/**
 * 
 */
ApiCheck.prototype.setInterval =  function(newInterval){
    this.interval = newInterval;
};

ApiCheck.prototype.setName = function(newName){
    this.name = newName;
};

/**********************
 * ApiCheck Getters
 *********************/
ApiCheck.prototype.getName = function(){

};

ApiCheck.prototype.getLength = function(){

};

ApiCheck.prototype.getUrl = function(){

};

ApiCheck.prototype._closeingApiChecker = function(){
    console.log(`[${this.name}] -> Closing! : ${message}`);
};

function pollApi(){

};

module.exports = ApiCheck;
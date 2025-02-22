// Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Europe/London"
    let aestTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
    return aestTime; // Return the formatted date and time
};
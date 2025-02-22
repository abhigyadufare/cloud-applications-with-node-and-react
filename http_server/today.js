// Export a function named 'getDate' from the module

module.exports.getDate = function getDate() {
    const date = new Date();
    // Get the current date and time in the timezone "India"
    let istTime = date.toLocaleString("en-US");
    return {date, istTime}; // Return the formatted date and time
};
const ComfyJS = require("comfy.js");

function timed_message(text, time)
{
    setInterval(() => {
        ComfyJS.Say(text);
    }, time);
}

module.exports = {
    timed_message
}
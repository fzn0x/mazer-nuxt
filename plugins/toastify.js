import "toastify-js/src/toastify.css"

// Include bootstrap JS only 
if (process.browser) {
    window.Toastify = require('toastify-js')
}
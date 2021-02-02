import "toastify-js/src/toastify.css"

// Include Toastify JS only 
if (process.browser) {
    window.Toastify = require('toastify-js')
}
import "perfect-scrollbar/css/perfect-scrollbar.css"

// Include Perfect Scrollbar JS only 
if (process.browser) {
    window.PerfectScrollbar = require('perfect-scrollbar')
}
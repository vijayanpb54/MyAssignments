//port {test, expect} from '@playwright/test'
let browser = "Chrome";
function checkBrowserVersion(callback)
{
setTimeout(() =>
     {
        callback(browser);
    
}, 2000);
}
function browserversion(version)
{
     console.log("Browser version: " + version);
}

checkBrowserVersion(browserversion);
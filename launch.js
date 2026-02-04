function launchbrowser(browserlaunch){
    if (browserlaunch=="Chrome") {
        console.log("we have launched Chrome browser for Testing")
    }else
    {
        console.log("we can use different browser for Testing")
    }
}
function runTests(testType){
    switch (testType) {
        case "smoke":
            console.log("Running Smoke Tests")
            break
        case "sanity":
            console.log("Running Sanity Tests")
            break
        case "regression":
            console.log("Running Regression Tests")
            break
        default:
            console.log("Running Smoke Tests")
            break
    }
}
// Function calls
launchbrowser("FireFox")
runTests("smoke")
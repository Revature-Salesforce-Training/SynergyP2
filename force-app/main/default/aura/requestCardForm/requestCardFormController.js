({
    clickCreate: function(component, event, helper) {
        let validRequest = component.find('requestform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validRequest){
            // Create the new expense
            let newRequest = component.get("v.newRequest");
            console.log("Create request: " + JSON.stringify(newRequest));
            helper.createRequest(component, newRequest);
        }
    }
})
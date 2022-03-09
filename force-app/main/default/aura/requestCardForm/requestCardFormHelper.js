({
    createRequest: function(component, request) {
        console.log("Create request: " + JSON.stringify(request));
        let action = component.get("c.saveRequest");
        action.setParams({
            "request": request
        });
        action.setCallback(this, function(response){
            let state = response.getState();
            if (state === "SUCCESS") {
                let Requests = component.get("v.Requests");
                Requests.push(response.getReturnValue());
                component.set("v.Requests", Requests);
            }
        });
        $A.enqueueAction(action);
    },

})
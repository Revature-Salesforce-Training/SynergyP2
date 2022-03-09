public with sharing class RequestsController {
    @AuraEnabled
    public static Request__c saveRequest(Request__c request) {
        // Perform isUpdateable() checking first, then
        insert request;
        return request;
    }
}
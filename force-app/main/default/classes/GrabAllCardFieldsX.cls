public with sharing class GrabAllCardFieldsX {
    @AuraEnabled(cacheable=false)
    public static List<String> grabAllCardFieldsX() {
        // Schema.SObjectType targetType = Schema.getGlobalDescribe().get('Card__c');
        // Map<String, Schema.SObjectField> fieldMap = targetType.getDescribe().fields.getMap();
        // for (Schema.SObjectField field : fieldMap.values()) {
        //      System.debug(field.getDescribe().getName());
        //  }
            
        // return fieldMap;
        // }
        SObjectType cardType = Schema.getGlobalDescribe().get('Card__c');
        Map<String, Schema.SObjectField> fieldMap = cardType.getDescribe().fields.getMap();

        List<String> fieldNames = new List<String>();
        for (String s: fieldMap.keySet()){
            system.debug(s);
            fieldNames.add(String.valueOf(fieldMap.get(s)));
    
        }
        system.debug(fieldNames);
        return fieldNames;

    }
}
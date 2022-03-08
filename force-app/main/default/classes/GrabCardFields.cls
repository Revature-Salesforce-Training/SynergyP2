public class GrabCardFields {
    
    public static Map<String, Schema.SObjectField> getAllCardFields(){
	Schema.SObjectType targetType = Schema.getGlobalDescribe().get('Card__c');
	Map<String, Schema.SObjectField> fieldMap = targetType.getDescribe().fields.getMap();
    for (Schema.SObjectField field : fieldMap.values()) {
         System.debug(field.getDescribe().getName());
     }
        
	return fieldMap;
    }
}
public class GetPicklistValues {
	//gets the different rarities
    @AuraEnabled(cacheable=true)
    public static List<Map<String,String>> getRarity() {
		Schema.DescribeFieldResult fr = Schema.SObjectType.Card__c.fields.Rarity__c;
		
        List<Schema.PicklistEntry> pl = fr.getPicklistValues();
        List<String> picklistOptions = new List<String>();
        
        List<Map<String,String>> selectOpt = new List<Map<String,String>>();
        for(Schema.PicklistEntry pe : pl) {
            picklistOptions.add(pe.getValue());
            System.debug(pe.getValue());
            selectOpt.add(new Map<String, String>{'label' => pe.getLabel(), 'value' => pe.getValue()});
        }
        return selectOpt;
		//selectOpt.add(new Map<String, String>{'value' => null, 'label' => '--None--'});
        //return picklistOptions;
    }
    //gets the different recordtypes/card types
    @AuraEnabled(cacheable=true)
    public static List<Map<String,String>> getCardTypes() {

        Schema.DescribeSObjectResult R = Card__c.SObjectType.getDescribe();
        List<Schema.RecordTypeInfo> pl = R.getRecordTypeInfos();
		
        //List<String> cardTypeOptions = new List<String>();
        List<Map<String,String>> cardTypeOptions = new List<Map<String,String>>();
        for(Schema.RecordTypeInfo pe : pl) {
            if(pe.getName() != 'Master'){
            	cardTypeOptions.add(new Map<String, String>{'label' => pe.getName(), 'value' => pe.getName()});
            	System.debug(pe.getName());
            }
        }
        System.debug(cardTypeOptions);
        return cardTypeOptions;
    }
    //gets all the sets
    @AuraEnabled(cacheable=true)
    public static List<Map<String,String>> getSets() {
		
        List<Set__c> sets = [
            SELECT Name
            FROM Set__c
        	ORDER BY CreatedDate DESC
        ];
        List<Map<String,String>> SetsOptions = new List<Map<String,String>>();
        for(Set__c theSet : sets){
            SetsOptions.add(new Map<String, String>{'label' => theSet.Name, 'value' => theSet.Name});
        }
        System.debug(SetsOptions);
        return SetsOptions;
    }
    
}
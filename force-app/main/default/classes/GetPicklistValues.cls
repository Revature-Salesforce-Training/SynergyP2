/***************************
 * Written by: David Labib
 * Description: This apex method helps us
 * achieve dynamic apex for the sidebar filter
 * 3 different methods to get 3 different set of values
 * Rarities(Picklist) Sets(Records) Types(Record Type)
 ***************************/


public class GetPicklistValues {
	//gets the different rarities picklist options
    @AuraEnabled(cacheable=true)
    public static List<Map<String,String>> getRarity() {
		Schema.DescribeFieldResult fr = Schema.SObjectType.Card__c.fields.Rarity__c;
		//we use Describe field result to get info on the field
        List<Schema.PicklistEntry> pl = fr.getPicklistValues();//once we have that info, use the getPicklist values
        //to get the picklist values we will be returning
        List<String> picklistOptions = new List<String>();
        
        List<Map<String,String>> selectOpt = new List<Map<String,String>>();
        //loop through them to put them in a map for convenince
        //thats how the radio options take in the options
        for(Schema.PicklistEntry pe : pl) {
            picklistOptions.add(pe.getValue());
            System.debug(pe.getValue());
            selectOpt.add(new Map<String, String>{'label' => pe.getLabel(), 'value' => pe.getValue()});
        }
        return selectOpt; //return map

    }
    //gets the different recordtypes/card types
    @AuraEnabled(cacheable=true)
    public static List<Map<String,String>> getCardTypes() {

        //use DescribeSObjectResult to get info on the object
        Schema.DescribeSObjectResult R = Card__c.SObjectType.getDescribe();
        //once we have that info we can use the getRecordtypeInfo to get a list of all recordtypes
        List<Schema.RecordTypeInfo> pl = R.getRecordTypeInfos();
		
        //loop through em and add em to a map
        List<Map<String,String>> cardTypeOptions = new List<Map<String,String>>();
        for(Schema.RecordTypeInfo pe : pl) {
            //the Master record type is the default premade one, so we dont include it
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
		//run query to get all sets record names
        List<Set__c> sets = [
            SELECT Name
            FROM Set__c
        	ORDER BY CreatedDate DESC
        ];
        //format them into a map for the radio options
        List<Map<String,String>> SetsOptions = new List<Map<String,String>>();
        for(Set__c theSet : sets){
            SetsOptions.add(new Map<String, String>{'label' => theSet.Name, 'value' => theSet.Name});
        }
        System.debug(SetsOptions);
        return SetsOptions;
    }
    
}
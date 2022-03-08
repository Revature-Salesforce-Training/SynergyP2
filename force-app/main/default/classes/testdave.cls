public class testdave {    
    public static List<Map<String,String>> getFields(String selectedObject){
        List<Map<String,String>> reqFields = new List<Map<String,String>>();
        Map <String,Schema.SObjectType> gd = Schema.getGlobalDescribe();
        Schema.SObjectType sobjType = gd.get(selectedObject);
        Schema.DescribeSObjectResult r = sobjType.getDescribe();
        Map<String, Schema.SObjectField> MapofField = r.fields.getMap();
        
        for(String fieldName : MapofField.keySet()) {
            Schema.SObjectField field = MapofField.get(fieldName);
            Schema.DescribeFieldResult F = field.getDescribe();
            System.debug('field-->'+field);
            System.debug('F-->'+F.getType()); //type of field
            //reqFields.add(new Map<String, String>{'field' => field, 'type' => F.getType()});
	    	//reqFields.add(field);
        }
        System.debug(reqFields);
        return reqFields;
    }


}
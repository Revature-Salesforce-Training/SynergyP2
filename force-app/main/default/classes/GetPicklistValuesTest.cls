/****************************** 
 * Written by: David Labib
 * Description: Test for the GetPicklistValues
 * Code Coverage 95%
*****************************/

@isTest
public class GetPicklistValuesTest {
	@isTest
    public static void getRarityTest(){
    	List<Map<String,String>> expResult = new List<Map<String,String>>();
        
        expResult.add(new Map<String, String>{'label' => 'Common', 'value' => 'Common'});
        expResult.add(new Map<String, String>{'label' => 'Rare', 'value' => 'Rare'});
        expResult.add(new Map<String, String>{'label' => 'Super Rare', 'value' => 'Super Rare'});
        expResult.add(new Map<String, String>{'label' => 'Ultra Rare', 'value' => 'Ultra Rare'});
        expResult.add(new Map<String, String>{'label' => 'Secret Rare', 'value' => 'Secret Rare'});
        expResult.add(new Map<String, String>{'label' => 'Premium Gold Rare', 'value' => 'Premium Gold Rare'});
        
        System.assertEquals(expResult, GetPicklistValues.getRarity());
    }
    
    @isTest
    public static void getCardTypesTest(){
    	List<Map<String,String>> expResult = new List<Map<String,String>>();
        
        expResult.add(new Map<String, String>{'label' => 'Extra Deck Monster', 'value' => 'Extra Deck Monster'});
        expResult.add(new Map<String, String>{'label' => 'Main Deck Monster', 'value' => 'Main Deck Monster'});
        expResult.add(new Map<String, String>{'label' => 'Spell', 'value' => 'Spell'});
        expResult.add(new Map<String, String>{'label' => 'Trap', 'value' => 'Trap'});

        
        System.assertEquals(expResult, GetPicklistValues.getCardTypes());
    }
    
    @isTest
    public static void getSetsTest(){
    	List<Map<String,String>> expResult = new List<Map<String,String>>();
        
        expResult.add(new Map<String, String>{'label' => 'Circuit Break', 'value' => 'Circuit Break'});
        expResult.add(new Map<String, String>{'label' => 'Extreme Force', 'value' => 'Extreme Force'});
        expResult.add(new Map<String, String>{'label' => 'Raging Tempest', 'value' => 'Raging Tempest'});
        expResult.add(new Map<String, String>{'label' => '2019 Gold Sarcophagus Tin Mega Pack', 'value' => '2019 Gold Sarcophagus Tin Mega Pack'});
        expResult.add(new Map<String, String>{'label' => 'Maximum Gold - El Dorido', 'value' => 'Maximum Gold - El Dorido'});
        
        System.assertEquals(expResult, GetPicklistValues.getSets());
    }
}
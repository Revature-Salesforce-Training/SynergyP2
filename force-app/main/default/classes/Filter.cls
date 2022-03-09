/**********************************
 * Written by: David Labib
 * Description: This class houses the methods that will be called
 * to filter the database and return the correct records
 * 
 * We filter by: Card Type, Rarity, Set
 */

public class Filter {  
    //filter by card type
    @AuraEnabled
    public static List<Card__c> FilterByCardType(String CardType){
        //search org for cards that have this record type
        list <Card__c> cards = [
            SELECT Name
            FROM Card__c
            WHERE RecordType.Name IN (:CardType)
        ];
        System.debug(cards);
        for(Card__c card : cards){
            System.debug(card.Name);
        }
        return cards;

    }
    //filter by rarity
    @AuraEnabled
    public static List<Card__c> FilterByRarity(String Rarity){
        //search org for cards that have a specified picklist value for rarity
        list <Card__c> cards = [
            SELECT Name, Rarity__c
            FROM Card__c
            WHERE Rarity__c LIKE :Rarity
        ];
        System.debug(cards);
        for(Card__c card : cards){
            System.debug(card.Name);
        }
        return cards;
    }
    //filter by set
    @AuraEnabled
    public static List<Card__c> FilterBySet(String SetName){
        //search org for cards related to the setname specifid
        list <Card__c> cards = [
            SELECT Name
            FROM Card__c
            WHERE Card_Set__r.Name LIKE :SetName
        ];
        System.debug(cards);
        for(Card__c card : cards){
            System.debug(card.Name);
        }
        return cards;
    }
    


}
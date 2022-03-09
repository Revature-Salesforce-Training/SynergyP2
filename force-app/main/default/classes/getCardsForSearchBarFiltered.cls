/*******************************
 * Written by: Whitney Dwire
 * Description: This query gets all card records
 * that match(ish) with the string the end user sets
 ***********************************/

public with sharing class getCardsForSearchBarFiltered {
 
    @AuraEnabled
    public static List<Card__c> getAllCardsForSearchBar(String name) {
//we want to find cards that CONTAIN said string
        String filler = name + '%';
//query for the cards
        list <Card__c> cards = [
            SELECT Name
            FROM Card__c
            WHERE Name LIKE :filler
        ];
        
        return cards;

    
    }
}


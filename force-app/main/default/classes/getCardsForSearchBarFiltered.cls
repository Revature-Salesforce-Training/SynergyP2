public with sharing class getCardsForSearchBarFiltered {
 
    @AuraEnabled
    public static List<Card__c> getAllCardsForSearchBar(String name) {

        String filler = name + '%';

        list <Card__c> cards = [
            SELECT Name
            FROM Card__c
            WHERE Name LIKE :filler
        ];
        
        return cards;

    
    }
}


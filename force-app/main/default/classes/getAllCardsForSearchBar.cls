public with sharing class getAllCardsForSearchBar {
    @AuraEnabled
    public static List<Card__c> getAllCardsForSearchBar() {

        list<Card__c> cards = [
            SELECT Name
            FROM Card__c
        ];
        
        return cards;

    }
}

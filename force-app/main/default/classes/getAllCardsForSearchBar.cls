public with sharing class getAllCardsForSearchBar {
    @AuraEnabled(cacheable=true)
    public static List<String> getAllCardsForSearchBar() {

        list<Card__c> cards = [
            SELECT Name
            FROM Card__c
        ];
        list<String> listOfNames = new list<String>();
        for(Card__c car: cards){
            listOfNames.add(car.Name);
        }
        
        
        return listOfNames;

    }
}
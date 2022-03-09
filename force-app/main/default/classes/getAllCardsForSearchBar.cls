/*******************************
 * Written by: Miachael Siri
 * Description: This query gets all card records
 * and puts them in a string list
 ***********************************/
public with sharing class getAllCardsForSearchBar {
    @AuraEnabled(cacheable=true)
    public static List<String> getAllCardsForSearchBar() {
//query for all cards
        list<Card__c> cards = [
            SELECT Name
            FROM Card__c
        ];
        //loop through to put them in a string
        list<String> listOfNames = new list<String>();
        for(Card__c car: cards){
            listOfNames.add(car.Name);
        }
        
        
        return listOfNames;

    }
}
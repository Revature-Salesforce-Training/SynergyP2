public class Filter {  
    //filter by card type
    @AuraEnabled
    public static List<Card__c> FilterByCardType(String CardType){
        //String Type = '%' + CardType + '%';
        
        list <Card__c> cards = [
            SELECT Name
            FROM Card__c
            WHERE RecordType.Name IN (:CardType)
        ];
        System.debug(cards);
        for(Card__c card : cards){
            System.debug(card.Name);
        }
        //return JSON.serialize(cards);
        return cards;

    }
    //filter by rarity
    @AuraEnabled
    public static List<Card__c> FilterByRarity(String Rarity){
        //String RarityName = '%' + Rarity + '%';
        
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
        //String Type = '%' + CardType + '%';
        
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
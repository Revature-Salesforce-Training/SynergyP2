/****************************** 
 * Written by: David Labib
 * Description: Test for the Filter
 * Code Coverage 100%
*****************************/
@isTest
public class FilterTest {
	
    @isTest 
    public static void FilterByCardTypeTest(){
        List<Card__c> cards = new List<Card__c>();
        Card__c c1 = new Card__c(Name = 'Evenly Matched', RecordTypeId='0121h000002sDIGAA2', Id='a001h000005AxxVAAS');
        Card__c c2 = new Card__c(Name = 'Trap Trick', RecordTypeId='0121h000002sDIGAA2', Id='a001h000005AxnxAAC');
		cards.add(c1);
        cards.add(c2);
        System.assertEquals(cards, Filter.FilterByCardType('Trap'));
    }
    @isTest
    public static void FilterByRarityTest(){
        List<Card__c> cards = new List<Card__c>();
        Card__c c1 = new Card__c(Name = 'Sky Striker Mobilize - Engage', Id='a001h000005AxjGAAS', Rarity__c = 'Ultra Rare');
        Card__c c2 = new Card__c(Name = 'Trap Trick', Id='a001h000005AxnxAAC', Rarity__c = 'Ultra Rare');
		cards.add(c1);
        cards.add(c2);
        System.assertEquals(cards, Filter.FilterByRarity('Ultra Rare'));
    }
    @isTest
    public static void FilterBySetTest(){
        List<Card__c> cards = new List<Card__c>();
        Card__c c1 = new Card__c(Name = 'Heavymetalfoes Electrumite', Id='a001h000005AxltAAC');
        Card__c c2 = new Card__c(Name = 'Called by the Grave',  Id='a001h000005AxnzAAC');
		cards.add(c1);
        cards.add(c2);
        System.assertEquals(cards, Filter.FilterBySet('Extreme Force'));
    }
}
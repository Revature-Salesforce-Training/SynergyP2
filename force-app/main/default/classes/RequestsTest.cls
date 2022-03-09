/**********************************
 * Written by: Whitney Dwire and Michael Siri
 * Description: Test methods for the RequestTrigger
 */

@isTest
public class RequestsTest {
//Written by Whitney
    @isTest
    static void TestRequestTrigger(){
        Request__c req = new Request__c(Name = 'Dark Hole', Quantity__c = 100);
        insert req; 
		Request__c reqTest = [SELECT Priority__c FROM Request__c WHERE Name = 'Dark Hole'];
        System.assertEquals(reqTest.Priority__c, 'high');

    }
    
//Written by Michael
   @IsTest
   static void testThatEmailWasSent(){

       Request__c req = new Request__c(Name = 'Dark Hole', Quantity__c = 100, Fulfilled__c = false);
       insert req;
       
       req = [SELECT Priority__c FROM Request__c WHERE Name = 'Dark Hole'];
       delete req;

       System.assertEquals(1, Limits.getEmailInvocations(), 'Emails should be sent');
       Test.stopTest();
   }

    
}
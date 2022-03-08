/********************************
 * Written by: David Labib
 * Description: This trigger prevents a Set Record
 * from being deleted if it has a related
 * Card record
 *******************************/

 //this trigger will fire when a set is deleted
trigger SetDeletion on Set__c (before delete) {
	//  check the set if they have related cards.
    for (Set__c a : [SELECT Id FROM Set__c
                     WHERE Id IN (SELECT Card_Set__c FROM Card__c) AND
                     Id IN :Trigger.old]) {
                        //adds an error to prevent the deletion
                        Trigger.oldMap.get(a.Id).addError('Cannot delete a set with related cards.');
    }
}
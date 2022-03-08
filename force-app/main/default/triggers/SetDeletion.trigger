trigger SetDeletion on Set__c (before delete) {
	// Prevent the deletion of sets if they have related cards.
    for (Set__c a : [SELECT Id FROM Set__c
                     WHERE Id IN (SELECT Card_Set__c FROM Card__c) AND
                     Id IN :Trigger.old]) {
        Trigger.oldMap.get(a.Id).addError(
            'Cannot delete a set with related cards.');
    }
}
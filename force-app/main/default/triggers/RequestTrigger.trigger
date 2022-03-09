/*******************************************
 * Written by: Whitney Dwire AND Michael Siri
 * Description: This trigger will fire when
 * the user submits a new request form
 * This trigger has 2 functions
 * 1st: Will set priority field will be set based on 
 * the number of quanity requested
 * 
 * 2nd: Send an email to the user when their
 request is fullfilled/deleted
 *******************************************/


 //Written by: Whitney
trigger RequestTrigger on Request__c (before insert, before delete) {
    if(trigger.isBefore){
        if(trigger.isInsert){// checking what kind of trigger it is
            //dont want this action to fire on a delete trigger
            for(Request__c req : Trigger.New){
                    if(req.Quantity__c > 99){
                        req.Priority__c = 'High';
                    }else{
                        req.Priority__c = 'Normal';
                    }
            }
        }
        //Written by Michael
        if(Trigger.isDelete){//checking what kind of trigger it is
            //dont want to send this email on insert
                List<String> sendTo = new List<String>(); 

                sendTo.Add('davidlabib10@gmail.com');
            for(Request__c req1 : Trigger.old){
                if(req1.Fulfilled__c == false){//checking if the fullfilled checkbox is checked or not
                    List<Messaging.SingleEmailMessage> mails = new List<Messaging.SingleEmailMessage>();
                    
                    Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
                    mail.setToAddresses(sendTo);
                    mail.setSubject('Thank you for submitting your issue.');
                    String body = 'Thank you for your time. Your case will be resolved shortly.';
                    mail.setHtmlBody(body);
                    mails.add(mail);
                    Messaging.sendEmail(mails);
                }
            }
            
        }
    }
    


   
    
}
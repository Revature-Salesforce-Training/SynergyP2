trigger RequestTrigger on Request__c (before insert, before delete) {
    if(trigger.isBefore){
        if(trigger.isInsert){
            for(Request__c req : Trigger.New){
                    if(req.Quantity__c > 99){
                        req.Priority__c = 'High';
                    }else{
                        req.Priority__c = 'Normal';
                    }
            }
        }
        
        if(Trigger.isDelete){
                List<String> sendTo = new List<String>(); 

    sendTo.Add('davidlabib10@gmail.com');
            for(Request__c req1 : Trigger.old){
                if(req1.Fulfilled__c == false){
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
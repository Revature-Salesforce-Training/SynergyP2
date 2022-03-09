/********************
 * Written by: Whitney Dwire
 * Description: This trigger will fire when a user
 * sells their card on the Sell component
 * the trigger will send them an email
 * for confirmation with what they sold
 ******************/

trigger boughtCardTrigger on Bought_Card__c (after insert) {
    List<Messaging.SingleEmailMessage> mails = new List<Messaging.SingleEmailMessage>();
    for (Bought_Card__c record: Trigger.new){

            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();

            //the address to send email to
            List<String> sendTo = new List<String>();
            sendTo.add(record.Email__c);
            mail.setToAddresses(sendTo);

            //the email thats SENDING the email
            mail.setReplyTo('whitneydwire@gmail.com');
              mail.setSenderDisplayName('Card Hub');

            //setting the subject and body of the email
            mail.setSubject('Your Cards Sold!');

            String body =  record.First_Name__c + ', Thank you for selling us your cards!';
            mail.setHtmlBody(body);

            //sends the email
            mails.add(mail);
            Messaging.sendEmail(mails);


    }
}
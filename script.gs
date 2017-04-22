function myFunction() {
   
 var form = FormApp.openById('1FAIpQLSf1ETdi4UkbkTciVMCuovv8YzMNU4IEApv3EYEHHCY4viKHhw');
 var formResponses = form.getResponses();
 for (var i = 0; i < formResponses.length; i++) {
   var formResponse = formResponses[i];
   var itemResponses = formResponse.getItemResponses();
   for (var j = 0; j < itemResponses.length; j++) {
     var itemResponse = itemResponses[j];
     Logger.log('Response #%s to the question "%s" was "%s"',
         (i + 1).toString(),
         itemResponse.getItem().getTitle(),
         itemResponse.getResponse());
   }
 }
 
}

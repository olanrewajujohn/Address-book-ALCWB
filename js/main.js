
// collection of values from the form fields

var $contactName = document.getElementById('contactName');
var $contactNumber = document.getElementById('contactNumber');
var $contactMail = document.getElementById('contactMail');
// var $contacts = document.getElementById('contacts');
var $contactList = [];
var $index = -1;

var saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', function () {
   if (!$contactName.value || !$contactNumber.value) {
      document.getElementById('warning').innerHTML = 'Please fill out required fields..';
      return;
   }
   document.getElementById('warning').innerHTML = '';
   $index += 1;

   var index = $index;
   var $newContact = {
      name: $contactName.value,
      number: $contactNumber.value,
      mail: $contactMail.value,
      // index: $index
   };


   $contactList.push($newContact);

   var contactList = document.getElementById('contact-list');
   var oneContact = document.createElement('div');
   oneContact.className = 'aContact';
   var index = document.getElementsByClassName('aContact').length;
   oneContact.innerHTML =  `
      <div class="contact-car" style="padding: 1rem">
      <span>name: ${$contactName.value}</span><br>
      <span>phone: ${$contactNumber.value} </span><br>
      <span>e-mail: ${$contactMail.value}</span>
      <div class="buttons">
         <span><button type="button" onclick="editCard(${index})">Edit</button></span>
         <span><button type="button" onclick="confirmation(${index})">Delete</button></span>
      </div>
      </div>
   `;

   contactList.appendChild(oneContact);

   $contactName.value = ''
   $contactNumber.value = ''
   $contactMail.value = ''

});

// function to confirm whether the user really wants to delete the particular contact card

function confirmation(entry){
   if(confirm('Are you sure you want to delete this contact')){
      return deleteCard(entry)
   }
   return;
}

// function to delete a contact card from the log, 
// the index of the card is passed to it and the particular node gets removed from the DOM

function deleteCard(index){
   var contactList = document.getElementById('contact-list');
   // document.getElementsByClassName('aContact').indexOf()
   while(index > document.getElementsByClassName('aContact').length - 1){
      index = index - 1;
   }
   contactList.removeChild(document.getElementsByClassName('aContact')[index])
}

// function to edit a contact card, this funtion takes an index
// and renders the contact details in the form which gets update on submission

function editCard(index){
   while(index > document.getElementsByClassName('aContact').length - 1){
      index = index - 1;
   }
   
   $contactName.value = $contactList[index].name
   $contactNumber.value = $contactList[index].number
   $contactMail.value = $contactList[index].mail

   deleteCard(index);
}
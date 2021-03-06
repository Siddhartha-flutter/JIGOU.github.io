// INITIALIZE VARIABLES
const MainForm=document.getElementById('validateForm');
const NameDiv = document.getElementById('name');
const email = document.getElementById('email');
const phonenum = document.getElementById('phone');
const eyeIcon=document.getElementById('eye');
const submitBtn= document.getElementById('submitBtn');
const ResultDiv = document.getElementById('ResultDiv');

// DEFINE FUNCTIONS
    function validateName()
{
    if(NameDiv.value=="" || NameDiv.value.length<2)
    {
   //  console.log('Empty Field');
   document.getElementById('nameValidator').style.display="block";
   return false;
    }
    else
    {
   document.getElementById('nameValidator').style.display="none";
//    console.log(`${NameDiv.value}`)
   return true;
    }
   }
   const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   function validateEmail()
   {
    if(email.value=="" || !regex.test(email.value))
    {
   //  console.log('Empty Field');
   document.getElementById('emailValidator').style.display="block";
//    console.log(`${email.value}`)
   return false;
    }
    else
    {
   document.getElementById('emailValidator').style.display="none";
   console.log(`${email.value}`)
   return true;
    }
   }

  
// EVENT LISTENTERS

NameDiv.onkeyup = validateName;


    email.onkeyup = validateEmail;


submitBtn.onclick = function()
   {
       event.preventDefault();

   
 if(validateName() && validateEmail())
    {
       console.log('validated')
        document.getElementById('showName').innerHTML="Name: "+ NameDiv.value;
        document.getElementById('showEmail').innerHTML= "Email: "+email.value;
        document.getElementById('showPassword').innerHTML="Password: "+password.value;        
        MainForm.reset();     
        MainForm.style.display="none";
        ResultDiv.style.display="flex";
    }
   else 
  console.log('not validated')
   
}



  

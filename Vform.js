function clearerrors(){
    errors= document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = "";
    }
}



function seterror(id, error){
    element= document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateform(){
    var ok=true;
    clearerrors();
    var first = document.forms['newvol']["ffirst"].value;
    
    if(first.length<4){
        seterror("first", "* first name is too short");
        ok= false;
    }
    var last = document.forms['newvol']["flast"].value;
    
    if(last.length<4){
        seterror("last", "* last name is too short");
        ok= false;
    }
    var email = document.forms['newvol']["fmail"].value;
    
    if(email.length<25){
        seterror("mail", "*email too long");
        ok= false;
    }
    var adharno = document.forms['newvol']["fadharno"].value;
    
    if(adharno.length!=12){
        seterror("adharno", "*invalid adhar no.");
        ok= false;
    }
    var contact = document.forms['newvol']["fcontact"].value;
    
    if(contact.length !=10){
        seterror("contact", "* invalid contact no.");
        ok= false;
    }
    var pass = document.forms['newvol']["fpass"].value;
    
    if(pass.length<8){
        seterror("pass", "* password should contain atleast 8 characters ");
        ok= false;
    }
    var cpass = document.forms['newvol']["fcpass"].value;
    
    if(cpass!= pass){
        seterror("cpass", "* Passwordd is not matching");
        ok= false;
    }
    

    return ok;
}
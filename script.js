let form=document.getElementById("myform");
form.addEventListener("submit",function(e){
    e.preventDefault();
})

function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}
function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    var mailformat = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
    if (email.match(mailformat)) {
        returnval = true;
    }
    else {
        seterror("email", "*Enter email with proper format");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6) {

        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password) {
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}



var id = 0;

function add() {

    var name = document.forms['myForm']["fname"].value;
    var email = document.forms['myForm']["femail"].value;
    let password = document.forms['myForm']["fpass"].value;
    var table = `<tr>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${password}</td>
                    </tr>`;
    document.getElementById("tbl").innerHTML += table;
    clearForm();

}
function clearForm() {
    document.forms['myForm']["fname"].value = "";
    document.forms['myForm']["femail"].value = "";
    document.forms['myForm']["fpass"].value = "";
    document.forms['myForm']["fcpass"].value = "";
}


/* 
NOTE: validation will only show one error at a time because
that's how the sample code was set to do. Let me know if you
want to show all of errors at once. I just have to remove the
return statements in each if() statement.
*/

const stateAbbreviations = [
  'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
  'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
  'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
  'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
  'VT','VI','VA','WA','WV','WI','WY'
 ];
             
function Validate() {
    
                        /* Reset all error messages */
    document.getElementById("first_error").style.display = "none";
    document.getElementById("last_error").style.display = "none";
    document.getElementById("address_error").style.display = "none";
    document.getElementById("city_error").style.display = "none";
    document.getElementById("state_error").style.display = "none";
    document.getElementById("zip_error").style.display = "none";
    document.getElementById("email_error").style.display = "none";
    document.getElementById("phone_error").style.display = "none";
    document.getElementById("box_error").style.display = "none";
    
                        /* First Name Validaiton */
    if(document.getElementById("first-name").value.length == 0) {
        document.getElementById("first_error").style.display = "block";
        event.preventDefault();
        return
    }
    
                        /* Last Name Validation */
    if(document.getElementById("last-name").value.length == 0) {
        document.getElementById("last_error").style.display = "block";
        event.preventDefault();
        return
    }
    
                        /* Address Validation */
    if(document.getElementById("address").value.length == 0) {
        document.getElementById("address_error").style.display = "block";
        event.preventDefault();
        return
    }
    
                        /*City Validation */
    if(document.getElementById("city").value.length == 0) {
        document.getElementById("city_error").style.display = "block";
        event.preventDefault();
        return
    }
    
                        /* State Validation */
    let state = document.getElementById("state");
    let state_val = (state.value).toUpperCase();
    if(state.value.length == 0 || state.value.length != 2 || !(stateAbbreviations.includes(state_val))) {
        document.getElementById("state_error").style.display = "block";
        event.preventDefault();
        return
    }
    
                        /* Zip Validation */
    let zip = document.getElementById("zip");
    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip.value);
    if (zip.value.length == 0 || !(isValidZip)) {
        document.getElementById("zip_error").style.display = "block";
        event.preventDefault();
        return
    }
    
                        /* Email Validation */
    let email = document.getElementById("email_form");
    var isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value);
    if(!(isValidEmail)){
        document.getElementById("email_error").style.display = "block";
        event.preventDefault();
        return
    }
    
                        /* Phone validation */
    let phone = document.getElementById("phone");
    var isValidPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value);
    if (!(isValidPhone)) {
        document.getElementById("phone_error").style.display = "block";
        event.preventDefault();
        return
    }

                        /* Checkbox Validation */
    let checked = false;
    if($("#google").is(':checked')){
        checked = true;
    }
    if($("#friend").is(':checked')){
        checked = true;
    }
    if($("#newspaper").is(':checked')){
        checked = true;
    }
    if (checked == false){
        document.getElementById("box_error").style.display = "block";
        event.preventDefault();
        return   
    }

                        /* Success if all passed */
    event.preventDefault();
setTimeout('document.getElementById("visitorForm").style.display = "none"',700);
    document.getElementById("success").style.display = "block";
    setTimeout('document.getElementById("myform").submit();',2000);
    
}

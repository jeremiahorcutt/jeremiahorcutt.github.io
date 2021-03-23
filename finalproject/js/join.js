//form validation
window.onload = function()
{
  document.getElementById("submit").onclick = validateForm;
};
function validateForm(){
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let zip = document.getElementById('zip');
     if((name.checkValidity()) && (phone.checkValidity()) && (zip.checkValidity())) {
        window.location.href = "thanks.html";
     }
    else{
        return null;
    }
};
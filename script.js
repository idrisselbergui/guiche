var pass_input=document.getElementById("pass_form");
var error= document.getElementById("error");
onload();
function onload(){
    document.getElementById("pagePassword").style.display="none";
}
function Show(num){
   if(pass_input.textContent.length<=6){
        pass_input.textContent+=num;
        pass_input.value=pass_input.textContent;
        error.innerHTML="";
    }else{
        error.innerHTML="the pasword must contain 6 number";
    }

}
function display(){
    document.getElementById("container").style.display="none";
    document.getElementById("pagePassword").style.display="block";
}

function check_etat(){
  var checkbox= document.getElementById("check")
   if(checkbox.checked==true){
    pass_input.type='text';
}
   else{
    pass_input.type='password'
}
}

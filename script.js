var pass_input=document.getElementById("pass_form");
var new_montant=document.getElementById("new_montant");
var error= document.getElementById("error");
var montant_pass=[["123456",1000],["0000",4500]]
var montant;


function validation(){

    if(check_pass(pass_input.textContent)){
    document.getElementById("pass_form").innerHTML="";
    document.getElementById("pagePassword").style.display="none";
    document.getElementById("pagemontant").style.display="block";
    document.getElementById("mont").innerHTML=montant;
    }else{
        error.innerHTML=pass_input.textContent;
        pass_input.value="";
        pass_input.textContent="";
    }
 }

function check_pass(pass){
        if(montant_pass[0][0]===pass){
            montant=montant_pass[0][1];
            console.log(montant)
            return true;
        }
        else if(montant_pass[1][0]===pass){
            montant=montant_pass[1][1];
            console.log(montant)
            return true;
        }
    
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

function autre_montant(num){
    new_montant.textContent+=num;
    new_montant.value=new_montant.textContent;
 }
 function autre_montant_button(){
    document.getElementById("pagemontant").style.display="none";
    document.getElementById("pageautremontant").style.display="block";

 }


 function validation_montant(){

 }
 function montant(montant){

 }
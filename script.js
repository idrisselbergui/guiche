var pass_input=document.getElementById("pass_form");
var new_montant=document.getElementById("new_montant");
var error= document.getElementById("error");
var error_montants= document.getElementById("error2");
var error_montant_autre= document.getElementById("error_montant");
var montant_pass=[["123456",1000],["0000",4500]]
var recu=document.getElementById("recu");
var recu_tirer=document.getElementById("taking");
var recu_balance=document.getElementById("new_balance");
var pass_delete=document.getElementById("pass_delete");
var montant_delete=document.getElementById("montant_delete");
var montant;
var tirer;

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
    for(i=0;i<montant_pass.length;i++){
        if(montant_pass[i][0]===pass){
            montant=montant_pass[i][1];
            console.log(montant)
            return true;
        }
        
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
    if(Number(new_montant.value)<=montant){
        take(new_montant.value);
        error_montant_autre.innerHTML="";
        error_montants.innerHTML="";
        
    }else{
        error_montant_autre.innerHTML="you have just "+montant+" DH the montant u need is "+(Number(new_montant.value)-montant)+" DH";
    }
 }
 function take(para){
    error_montant_autre.innerHTML="";
    error_montants.innerHTML="";
    if(Number(para)<=montant){
        tirer=para;
        montant-=tirer;
        document.getElementById("pagemontant").style.display="none";
        document.getElementById("pageautremontant").style.display="none";
        recu.style.display="block";
        recu_tirer.innerHTML=tirer + " DH";
        recu_balance.innerHTML=montant + " DH";
        
    }else{
        error_montants.innerHTML="you have just "+montant+" DH the montant u need is "+(Number(para)-montant)+" DH"
    }
    document.getElementById("mont").innerHTML=montant;
 }
 function pass_delete_fun(){
    pass_input.value=""
    pass_input.textContent=""
 }
 function montant_delete_fun(){
    new_montant.textContent="";
    new_montant.value="";

 }
 function Quitter(){
    document.getElementById("pagemontant").style.display="block";
        recu.style.display="none";
 }
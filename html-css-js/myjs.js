//window.addEventListener("load",callme);
window.addEventListener("load",function(){
    alert(" I am Call When Window Load");
    if(document.getElementById("b1")) {
        document.getElementById("b1").addEventListener("click", clickme);
        function clickme() {
            document.getElementById("div1").innerHTML = "New DIV Value";
            document.getElementById("f1").innerHTML = "Guys";
            document.getElementById("t1").value = "Guys";

        }
        document.getElementById("check-password").addEventListener("click", checkPwd);
        function checkPwd() {
            var pwd = document.getElementById("pwd").value;
            var cpwd = document.getElementById("cpwd").value;
            if(pwd == cpwd){
                document.getElementById("pwd-text").innerHTML = 
                "password match"
            } else {
                document.getElementById("pwd-text").innerHTML = 
                "password do not match"
            }
           
        }
    }
    second();
});

function callme(){

    if(document.getElementById("b1")){
        document.getElementById("b1").addEventListener("click",clickme);
function clickme(){
    document.getElementById("div1").innerHTML="New DIV Value";
    document.getElementById("f1").innerHTML="Guys";
    document.getElementById("t1").value="Guys";

}
    }
}
function second(){

    alert("Second Call");
}

function add(){
 var a = parseInt(document.getElementById("fnum").value)?parseInt(document.getElementById("fnum").value):0;
 var b = parseInt(document.getElementById("snum").value)?parseInt(document.getElementById("snum").value):0;
 var c = a + b;
 alert("Sum is "+c);
 document.getElementById("output").innerHTML = "<p>Addition is: "+c+"</p>";

 }
 function sub(){
 var a = parseInt(document.getElementById("fnum").value);
 var b = parseInt(document.getElementById("snum").value);
 var c = a < b ? (b-a) : (a-b) ;
 alert("Subtraction is "+c);
 }
window.addEventListener("load",function(){
document.getElementById("pwd").addEventListener("blur",validate);

function validate(){
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var pwd = document.getElementById("pwd").value;
    if( ! (pattern).test(pwd) ) {
        document.getElementById("span").innerHTML = "Invalid password, Minimum 5 digits required!!!";
    }
    var isvalid= true;
    var pwd = document.getElementById("pwd").value;
    if(pwd){
        for(var i = 0 ; i<pwd.length; i++){
            if(pwd.charAt(i)=='@' || pwd.charAt(i)=='$'){
                isvalid= false;
                break;
            }
        }
        if(isvalid==false){
            document.getElementById("span").innerHTML="Invalid Password ";
        }
    }

    /*alert(" Blur Call");
    var str = document.getElementById("pwd").value;
    if(!str){
        document.getElementById("span").innerHTML = "You can not leave this field blank";
    }
    else if(isNaN(str)){
        document.getElementById("span").innerHTML = "Password Can only have numrical digits!!!";
    }
    else if( ! (/(\d+){5}/).test(str) ) {
        document.getElementById("span").innerHTML = "Invalid password, Minimum 5 digits required!!!";
    }
    else{
        document.getElementById("span").innerHTML = "";
    }*/
}
});
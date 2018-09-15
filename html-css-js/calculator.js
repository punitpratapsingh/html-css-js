window.addEventListener('load', loadAction);

function loadAction(){
    window.document.getElementById("add").addEventListener('click', add);

}
function add(){
	var a = parseInt(document.getElementById("fnum").value);
	var b = parseInt(document.getElementById("snum").value);
	var c = a + b;
	//alert("Sum is "+c);
    // document.getElementById("output").innerHTML = "<p>Addition is: "+c+"</p>";
    document.write('Result is', c)
	
}
function sub(){
	var a = parseInt(document.getElementById("fnum").value);
	var b = parseInt(document.getElementById("snum").value);
	var c = a < b ? (b-a) : (a-b) ;
		alert("Subtraction is "+c);
}
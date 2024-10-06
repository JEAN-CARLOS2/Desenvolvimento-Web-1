function soma(){
   
   const n1 = parseFloat(document.getElementById("n1").value);
   const n2 = parseFloat(document.getElementById("n2").value);

   if(n1 || n2 != Number){
    alert("Digite apenas números!");
   }else{
   const res = n1 +n2;

    alert("O resultado é: " + res);
 }
}
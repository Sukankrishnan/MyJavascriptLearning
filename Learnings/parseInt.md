<body>
    <form name="calculator">
    <h2>Basic Calculator</h2>
    <input type="button" id="no-one" value="5">
    <input type="button" id="plus" value="+">
    <input type="button" id="no-two" value="2">
    <input type="button" id="equal-to" value="=">
    <input id="sum"/>
    </form>

  <script>
   var one=document.querySelector("#no-one");
   var add=document.querySelector("#plus");
   var two=document.querySelector("#no-two");
   var equalTo=document.querySelector("#equal-to");
   var totalInCalc;


   equalTo.addEventListener("click", ()=>{
    //totalInCalc=parseInt(one.value)+parseInt(two.value);
    totalInCalc=one+two;
    document.getElementById('sum').value=totalInCalc;
    console.log(totalInCalc);
   })

   </script>
</body>
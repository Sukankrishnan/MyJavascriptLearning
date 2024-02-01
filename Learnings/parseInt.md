parseInt() function
---

parseInt() function in javascript is used to parse a string element and returns as an integer. It takes two parameters:

**String**: The string to be converted to an integer.

**Radix (optional)**: An integer between 2 and 36 that represents the base of the numeral system used in the string. This is an optional parameter, and if not specified, JavaScript assumes the following:

•	If the string begins with "0x" or "0X", it is parsed as a hexadecimal number. (Example is given at last)

•	Otherwise, it is parsed as a decimal number.


Let us see the examples:

Radix:
--

        var num3="0x12345";
        
        var num4="0X12345";
        
        var num5="0123";
        
        var num6="0012345";
        
        console.log(parseInt(num3));
        
        console.log(parseInt(num4));
        
        console.log(parseInt(num5));
        
        console.log(parseInt(num6));


The result will be 

        74565
        
        74565
        
        123
        
        12345


String:
---
I initialize two variables as String.

        var number1="10";
        
        var number2="20";
        
        console.log("Type of number1 is "+typeof(number1));
        
        console.log("Type of number2 is "+typeof(number2));


The result of the above code is 

        Type of number1 is string
        
        Type of number2 is string
        

Example 1
--
When I try to add, it concatenates the values

        //add two strings - concatenation
        
        var total1=number1+number2;

        console.log(`Total of two numbers is ${total1}`);


Result

        Total of two numbers is 1020

Example 2
--
When I try to add of two numbers by getting the values, the output would be NaN. Because 'value' is undefined and it is a string.

        var total2=number1.value+number2.value;
        
        console.log(`Total of two numbers is ${total2}`);

Result

        Total of two numbers is NaN


Example 3
--
Use parseInt but adding the numbers by getting the value of two numbers. Here also the output would be NaN. Because 'value' is undefined.

        var total3=parseInt(number1.value)+parseInt(number2.value);
        console.log(`Total of two numbers is ${total3}`);

Result
        Total of two numbers is NaN


Example 4
---
Converting string to integer using parseInt() function and adding the two integers

        //converting string to integer and then add the numbers
        
        var total4=parseInt(number1)+parseInt(number2);
        
        console.log(`Total of two numbers is ${total4}`);

The result would be the expected one

        Total of two numbers is 30
        

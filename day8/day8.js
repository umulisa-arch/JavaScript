let number = prompt("Enter a number", 0);
        if (number < 10) {
     alert("The number is less than 10");
         } else if (number < 30) {
     alert("The number is less than30");
        } else if (number < 60) {
     alert("The number is less than60");
        } else if (number < 90) {
     alert("The number is less than90");
        } else if (number < 100) {
     alert("<100");
    } else if (number == 100) {
        alert("The number is equals to 100")
    } else {
     alert("The number is greater than 100")}


 const INSURANCE_COST = 2.99;
 let shippingCost = 9.99;
 let isOrderValid = true;
 let userAge = 22;
 let points = 400;
 let cartValue = 199;
 let hasPromoCode = false;
 let hasParentsApproval = false;
 let addInsurance = true;

 /** calculate shipping cost*/
 if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) 
 {
 
 shippingCost = 0;
 } else if (userAge < 21 && hasParentsApproval) {
 shippingCost = shippingCost - 5;
 } else if (userAge < 21) {
 isOrderValid = false;
 }

 /** take account of insurance */
 if (isOrderValid && addInsurance && !hasPromoCode) {
 shippingCost += INSURANCE_COST;
 }

 /** show message */
 if (isOrderValid) {
 console.log(shippingCost);
 } else {
 console.log("Cannot order if under 21");
 }
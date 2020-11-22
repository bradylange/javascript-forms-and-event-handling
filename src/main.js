/* Author: Brady Lange */
/* Date: 11/29/17 */

//Function that returns monthly payments on the loan
function monthly(i, n, s) {
	return ((s*i/12*Math.pow(i/12+1, n))/(Math.pow(i/12+1, n)-1)).toFixed(2);
}

function showVal() {

	//Getting the loan amount
	loanAmount = document.fincalc.amount.value;
	//Convering the uses input String to a numeric value
	loanAmount = parseInt(loanAmount);
	
	//Getting the rate and converting it to a decimal
	rate = document.fincalc.interest.value;
	rate /= 100;
	
	//Getting the loan length in months
	months = document.fincalc.years.value;
	months *= 12;

	//Making sure the users loan amount input is valid
	while(loanAmount <= 0 || loanAmount === null || isNaN(loanAmount)) {
		if(loanAmount <= 0 || loanAmount === null)
			loanAmount = prompt("Please enter a positive value for loan amount");
		if(isNaN(loanAmount))
			loanAmount = prompt("Please enter a numeric value and not letters");
		
		loanAmount = parseInt(loanAmount);
	}
	
	//Getting the loan types and adding fees
	type = document.fincalc.type.value;
	if(type === "Personal ($1000 origination fee)") {
		loanAmount += 1000;
	}
	else if(type === "Business ($500 origination fee)") {
		loanAmount += 500;
	}
	else {
		loanAmount += 0;
	}
	
	//Checking if the user checked the student discount and decreasing the interest rate by 1%
	stuRate = document.fincalc.stu;
	if(stuRate.checked == true)
		rate -= 0.01;
	
	//Calculating the data using the monthly function
	result = monthly(rate, months, loanAmount);
	
	//Displaying the monthly loan payments
	if(result < 5000) {
		document.fincalc.monthpay.value = result;
		//Displaying the total loan payments
		result *= months;
		document.fincalc.total.value = result.toFixed(2);
	}
	else 
		alert("We need the last 5 years of tax returns for all loans over $5000.00");
}
function resetButton() {
	yesReset = confirm("Are you sure you want to reset this page?");
	if(yesReset) {
		formReset = document.getElementById("fincalc");
		formReset.reset();
	}
		
}

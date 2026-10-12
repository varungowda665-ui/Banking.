let customerID = 5434;
let employmentType = "salaried";
let monthlyIncome = 50000;
let loanAmount = 100000;
let existingEMI = 4000;
let creditScore = 850;

let loanEligibility = "Not Eligible";
let eligibilityCategory = "None";
let remarks = "";

if (
    !customerID ||
    !employmentType ||
    monthlyIncome <= 0 ||
    loanAmount <= 0 ||
    existingEMI < 0 ||
    creditScore < 300 ||
    creditScore > 900
) {
    remarks = "Invalid customer details.";

} else if (existingEMI > monthlyIncome * 0.40) {
    remarks = "Existing EMI exceeds the permissible limit.";

} else if (employmentType.toLowerCase() !== "salaried") {
    remarks = "Customer must be salaried.";

} else if (monthlyIncome < 30000) {
    remarks = "Monthly income must be at least Rs. 30,000.";

} else if (creditScore >= 750) {
    loanEligibility = "Eligible for Consideration";
    eligibilityCategory = "Standard";
    remarks = "Meets standard loan eligibility criteria.";

} else if (creditScore >= 650) {
    loanEligibility = "Eligible for Consideration";
    eligibilityCategory = "Restricted";
    remarks = "Meets restricted loan eligibility criteria.";

} else {
    remarks = "Credit score is below 650.";
}

console.log("Customer ID:", customerID);
console.log("Employment Type:", employmentType);
console.log("Monthly Income: Rs.", monthlyIncome);
console.log("Credit Score:", creditScore);
console.log("Existing EMI: Rs.", existingEMI);
console.log("Requested Loan Amount: Rs.", loanAmount);
console.log("Loan Eligibility:", loanEligibility);
console.log("Eligibility Category:", eligibilityCategory);
console.log("Remarks:", remarks);

console.log(
    "Note: This is a preliminary assessment only, not loan approval."
);
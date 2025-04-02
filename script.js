//CHALLENGE 1
function generateGrade() {
    let marks = document.getElementById("marks").value;
    
    // Convert to number
    marks = Number(marks);

    // Validate input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        document.getElementById("result1").textContent = "Invalid input! Enter marks between 0 and 100.";
        document.getElementById("result1").style.color = "red";
        return;
    }

    // Determine grade
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Display result
    document.getElementById("result1").textContent = `Grade: ${grade}`;
    document.getElementById("result1").style.color = "#007bff";
}

//CHALLENGE 2

function checkSpeed() {
    let speed = document.getElementById("speed").value;
    let result = document.getElementById("result2");
    
    if (speed === "" || isNaN(speed)) {
        result.textContent = "Please enter a valid speed";
        return;
    }
    
    speed = parseInt(speed);
    if (speed < 70) {
        result.textContent = "Ok";
    } else {
        let points = Math.floor((speed - 70) / 5);
        if (points > 12) {
            result.textContent = "License suspended";
        } else {
            result.textContent = `Points: ${points}`;
        }
    }
}

//CHALLENGE 3
function calculateNetSalary() {
    // Get input values
    let basicSalary = parseFloat(document.getElementById("basicSalary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);

    // Ensure valid input
    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert("Please enter valid numbers for salary and benefits.");
        return;
    }

    // Calculate Gross Salary
    let grossSalary = basicSalary + benefits;

    // PAYE Tax Calculation
    let paye = 0;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        paye = (24000 * 0.10) + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary <= 500000) {
        paye = (24000 * 0.10) + (8333 * 0.25) + ((grossSalary - 32333) * 0.30);
    } else if (grossSalary <= 800000) {
        paye = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((grossSalary - 500000) * 0.325);
    } else {
        paye = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((grossSalary - 800000) * 0.35);
    }

    // NHIF Deduction (2.75% of Gross Salary)
    let nhif = grossSalary * 0.0275;

    // NSSF Deduction (6% of pensionable pay)
    let nssf = grossSalary <= 8000 ? grossSalary * 0.06 : 8000 * 0.06 + (Math.min(grossSalary, 72000) - 8000) * 0.06;

    // Housing Levy (1.5% of Gross Salary)
    let housingLevy = grossSalary * 0.015;

    // Calculate Net Salary
    let netSalary = grossSalary - (paye + nhif + nssf + housingLevy);

    // Display Results
    document.getElementById("grossSalary").textContent = `Ksh ${grossSalary.toFixed(2)}`;
    document.getElementById("tax").textContent = `Ksh ${paye.toFixed(2)}`;
    document.getElementById("nhif").textContent = `Ksh ${nhif.toFixed(2)}`;
    document.getElementById("nssf").textContent = `Ksh ${nssf.toFixed(2)}`;
    document.getElementById("housingLevy").textContent = `Ksh ${housingLevy.toFixed(2)}`;
    document.getElementById("netSalary").textContent = `Ksh ${netSalary.toFixed(2)}`;
}

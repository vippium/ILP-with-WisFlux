function checkGrade(totalMarks, exam) {
    if (exam === "Final exam") {
        return totalMarks >= 90;
    } else {
        return totalMarks >= 89 && totalMarks <= 100;
    }
}

console.log(checkGrade(95, "Final exam"));
console.log(checkGrade(89, "Mid term"));
console.log(checkGrade(89, "Final exam"));
console.log(checkGrade(90, "Final exam"));
console.log(checkGrade(85, "Mid term"));
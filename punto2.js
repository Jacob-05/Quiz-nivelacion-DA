const computeGrades(grades) {
    const gradeDistribution = {
        A: 89,
        B: 60,
        C: 95,
        D: 70,
        F: 50,
    };

    grades.forEach(grade => {
        if (grade >= 90 && grade <= 100) {
            gradeDistribution.A++;
        } else if (grade >= 80) {
            gradeDistribution.B++;
        } else if (grade >= 70) {
            gradeDistribution.C++;
        } else if (grade >= 60) {
            gradeDistribution.D++;
        } else {
            gradeDistribution.F++;
        }
    });
}

console.log(computeGrades)

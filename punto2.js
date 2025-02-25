const computeGrades(grades) 


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

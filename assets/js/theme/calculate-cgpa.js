$(document).ready(function () {
  let semesterData = []; // Array to hold the semester data

  // Handle focus out event on credits and grades input
  $(document).on(
    "focusout",
    ".gpa-calculator__credits, .gpa-calculator__grate",
    function () {
      const semesterId = $(this)
        .closest(".gpa-calculator__main-li")
        .attr("class")
        .match(/semester-(\d+)/)[1]; // Extract the semester number

      // Clear and rebuild the subjects data for the current semester
      const subjectsData = []; // Array to hold subject data for the current semester

      // Loop through each course in the current semester
      $(this)
        .closest(".gpa-calculator__main-li")
        .find(".gpa-calculator__course-li")
        .each(function () {
          const grade = $(this).find(".gpa-calculator__grate").val();
          const credits = $(this).find(".gpa-calculator__credits").val();

          // Check if both grade and credits are valid
          if (
            grade !== "grade" &&
            credits &&
            !isNaN(parseFloat(credits)) &&
            parseFloat(credits) > 0
          ) {
            subjectsData.push({
              grade: parseFloat(grade), // Convert grade to float
              credits: parseFloat(credits), // Convert to float if necessary
            });
          }
        });

      // Only proceed if there are valid subjects data
      if (subjectsData.length > 0) {
        // Find the index of the current semester in the semesterData array
        const semesterIndex = semesterData.findIndex(
          (sem) => sem.semester === semesterId
        );

        if (semesterIndex !== -1) {
          // Update existing semester data
          semesterData[semesterIndex].subjects = subjectsData;
        } else {
          // Add new semester data
          semesterData.push({
            semester: semesterId,
            subjects: subjectsData,
          });
        }

        // Calculate CGPA
        calculateCGPA(semesterId);
      } else {
        // Clear the CGPA output if there are no valid subjects
        $("#cgpa-output").text("CGPA: N/A");
      }
    }
  );

  function calculateCGPA(semesterId) {
    let totalGradePoints = 0;
    let totalCredits = 0;

    let currentSemesterPoints = 0;
    let currentSemesterCredits = 0;

    // Iterate through semesterData to calculate total grade points and credits
    semesterData.forEach((semester) => {
      // Total grade points and credits for all semesters
      semester.subjects.forEach((subject) => {
        totalGradePoints += subject.grade * subject.credits; // Calculate grade points
        totalCredits += subject.credits; // Sum up total credits
      });

      // Only calculate for the current semester
      if (semester.semester === semesterId) {
        semester.subjects.forEach((subject) => {
          currentSemesterPoints += subject.grade * subject.credits; // Calculate grade points for the current semester
          currentSemesterCredits += subject.credits; // Sum up credits for the current semester
        });
      }
    });

    // Calculate Current Semester CGPA
    const currentSemesterCGPA =
      currentSemesterCredits > 0
        ? (currentSemesterPoints / currentSemesterCredits).toFixed(2)
        : 0.0;

    // Calculate total CGPA
    const totalCGPA =
      totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0.0;

    // Display the CGPA for the current semester and all semesters
    console.log("Current Semester CGPA:", currentSemesterCGPA);
    console.log("Total CGPA:", totalCGPA);

    $(".total_cgpa").text(totalCGPA);
    $(
      `.gpa-calculator__main-li.semester-${semesterId} .gpa-calculator__semester-cgpa`
    ).text(currentSemesterCGPA);

    $("#total_semester").text(semesterId);
    $("#total_completed_credits").text(totalCredits);
  }
});

$(document).ready(function () {
  let semesterCount = 1; // Initialize with the first semester

  // Function to initialize default semester and courses
  function initializeDefaults() {
    // Count the existing semesters and set semesterCount accordingly
    semesterCount = $(".gpa-calculator__main-li").length + 1; // Increment by 1 for the next new semester
  }

  // Call the function to initialize the default values
  initializeDefaults();

  // Handle "Add Semester" button click
  $(".gpa-calculator__add-semester__button").on("click", function (e) {
    e.preventDefault();

    // Create a new semester block
    const newSemester = `
      <li class="gpa-calculator__main-li semester-${semesterCount}">
        <div class="gpa-calculator__heading">
          <p class="gpa-calculator__header-text">Semester ${semesterCount}</p>
          <button type="button" class="gpa-calculator__remove-all delete-${semesterCount}">
            <i class="bi bi-x"></i>
          </button>
        </div>
        <ul class="gpa-calculator__course-ul">
          <li class="gpa-calculator__course-li course-1">
            <input type="text" name="course-name" class="gpa-calculator__course-name gpa-calculator__input" placeholder="Subject Name" />
            <select class="gpa-calculator__grate grades-1" name="grade">
              <option value="grade">Grade</option>
              <option value="4.0">A+</option>
              <option value="3.75">A</option>
              <option value="3.50">A-</option>
              <option value="3.25">B+</option>
              <option value="3.0">B</option>
              <option value="2.75">B-</option>
              <option value="2.50">C+</option>
              <option value="2.25">C</option>
              <option value="2.0">D</option>
              <option value="0.0">F</option>
            </select>
            <input type="number" name="credits" step="1" min="0" max="5" class="gpa-calculator__credits credits-1 gpa-calculator__input" placeholder="Credits" disabled="disabled" style="cursor: not-allowed" />
            <button class="gpa-calculator__remove-item courses-1">
              <i class="bi bi-x"></i>
            </button>
          </li>
        </ul>
        <div class="gpa-calculator__add-course-semester">
          <div class="gpa-calculator__semester-result">
            <span>Semester ${semesterCount} GPA: </span>
            <span class="gpa-calculator__semester-cgpa">0.00</span>
          </div>
          <div class="gpa-calculator__add-course">
            <button class="gpa-calculator__add-course__button" id="add-course-${semesterCount}">
              Add Subject
            </button>
          </div>
        </div>
      </li>
    `;

    // Append the new semester to the main list
    $(".gpa-calculator__main-ul").append(newSemester);

    // Increment semester count for the next addition
    semesterCount++;
  });

  // Handle "Remove All" button click
  $(document).on("click", ".gpa-calculator__remove-all", function (e) {
    e.preventDefault();
    $(this).closest(".gpa-calculator__main-li").remove();

    // Check if there are any semesters left
    if ($(".gpa-calculator__main-li").length === 0) {
      // Reset the semester count if no semesters are left
      semesterCount = 1;
    } else {
      // Update the semesterCount based on remaining semesters
      semesterCount = $(".gpa-calculator__main-li").length + 1;
    }
  });

  // Handle addition of courses within a semester
  $(document).on("click", ".gpa-calculator__add-course__button", function (e) {
    e.preventDefault();

    // Get the current semester
    const semesterId = $(this)
      .closest(".gpa-calculator__main-li")
      .attr("class")
      .match(/semester-(\d+)/)[1];
    const currentCourseCount =
      $(`.semester-${semesterId} .gpa-calculator__course-li`).length + 1;

    const newCourse = `
      <li class="gpa-calculator__course-li course-${currentCourseCount}">
        <input type="text" name="course-name" class="gpa-calculator__course-name gpa-calculator__input" placeholder="Subject Name" />
        <select class="gpa-calculator__grate grades-${currentCourseCount}" name="grade">
          <option value="grade">Grade</option>
          <option value="4.0">A+</option>
          <option value="3.75">A</option>
          <option value="3.50">A-</option>
          <option value="3.25">B+</option>
          <option value="3.0">B</option>
          <option value="2.75">B-</option>
          <option value="2.50">C+</option>
          <option value="2.25">C</option>
          <option value="2.0">D</option>
          <option value="0.0">F</option>
        </select>
        <input type="number" name="credits" step="1" min="0" max="5" class="gpa-calculator__credits credits-${currentCourseCount} gpa-calculator__input" placeholder="Credits" disabled="disabled" style="cursor: not-allowed" />
        <button class="gpa-calculator__remove-item courses-${currentCourseCount}">
          <i class="bi bi-x"></i>
        </button>
      </li>
    `;

    // Append the new course to the respective semester
    $(`.semester-${semesterId} .gpa-calculator__course-ul`).append(newCourse);
  });

  // Handle removal of individual courses
  $(document).on("click", ".gpa-calculator__remove-item", function (e) {
    e.preventDefault();
    $(this).closest(".gpa-calculator__course-li").remove();
  });

  // Handle change event on the grade select
  $(document).on("change", ".gpa-calculator__grate", function () {
    const creditsInput = $(this)
      .closest(".gpa-calculator__course-li")
      .find(".gpa-calculator__credits");

    if ($(this).val() !== "grade") {
      // Disable the credits input and set cursor style
      creditsInput
        .prop("disabled", false)
        .css("cursor", "allowed")
        .removeAttr("style");
    } else {
      // Disable the credits input and set cursor style to not-allowed
      creditsInput.prop("disabled", true).css("cursor", "not-allowed");
      creditsInput.attr("style", "cursor: not-allowed;"); // Ensuring style remains
    }
  });
});

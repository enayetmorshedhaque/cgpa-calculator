# CGPA Calculator

This is a **CGPA Calculator** web application built using HTML, CSS, JavaScript, and Bootstrap. It allows users to calculate their CGPA (Cumulative Grade Point Average) by adding semesters and courses, inputting grades and credits, and displaying results in real-time.

## Features

- **Add Semesters and Courses**: Users can dynamically add multiple semesters and courses.
- **Grade Input**: Users can select grades for each course.
- **Credit Input**: Credit values for courses are adjustable once a grade is selected.
- **Real-time GPA/CGPA Calculation**: GPA for each semester and total CGPA is calculated in real-time based on the grades and credits provided.
- **Grading System Table**: A table displays the grading system used for GPA calculation.
- **Responsive Design**: The layout is optimized for different screen sizes using Bootstrap.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the web page.
- **Bootstrap**: For layout and responsiveness.
- **JavaScript/jQuery**: For dynamic interactions and real-time GPA/CGPA calculations.

## How to Use

1. Clone or download the project.
2. Open the `index.html` file in a web browser.
3. Add semesters by clicking the `Add Semester` button.
4. For each semester, add courses and select grades from the dropdown menu.
5. Once a grade is selected, enter the course credits.
6. The GPA for the current semester and total CGPA will be updated automatically.

## File Structure

```bash
.
├── assets/
│   ├── css/
│   │   ├── bootstrap-5/        # Bootstrap CSS files
│   │   ├── bootstrap-icons/    # Bootstrap Icons CSS files
│   │   └── theme/              # Custom CSS files
│   ├── images/
│   │   └── fav-icon/           # Favicon files
│   └── js/
│       ├── bootstrap-5/        # Bootstrap JS files
│       └── jquery/             # jQuery library
├── index.html                  # Main HTML file
└── README.md                   # Project documentation
```

## Future Enhancements

- Add the ability to edit or remove individual semesters and courses.
- Implement local storage to save user inputs across sessions.
- Include additional customization options such as different grading scales.

## License

- This project is licensed under the MIT License.

## Credits

- [**Bootstrap**](https://getbootstrap.com/)
- [**Bootstrap Icons**](https://icons.getbootstrap.com/)
- [**jQuery**](https://jquery.com/)

Feel free to contribute to this project or report issues!

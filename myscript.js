

function showCourses() {
  fetch("http://localhost:8080/course")  // API endpoint
      .then((response) => response.json())  // Convert response to JSON
      .then((data) => {
          console.log("Fetched Data:", data);  // ✅ Verify data in the console

          const dataTable = document.getElementById("coursetable");
          
          // Clear the table before appending new rows (optional)
          dataTable.innerHTML = "";

          // ✅ Iterate over the fetched data and create table rows
          data.forEach(course => {
              const row = `
              <tr>
                  <td>${course.courseId}</td>
                  <td>${course.courseName}</td>
                  <td>${course.trainer}</td>
                  <td>${course.durationInWeeks}</td>
              </tr>`;
              
              dataTable.innerHTML += row;  // Append row to the table
          });
      });
}


// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  showEnrolledStudents();
});

function showEnrolledStudents() {
  fetch("http://localhost:8080/course/enrolled")  // API endpoint
      .then((response) => response.json())        // Convert response to JSON
      .then((data) => {
          console.log("Fetched Data:", data);      // ✅ Verify data in the console

          const dataTable = document.getElementById("enrolledtable");

          // ✅ Null check to prevent "Cannot set properties of null" error
          if (dataTable) {
              // Clear the table before appending new rows
              dataTable.innerHTML = "";

              // ✅ Append all rows at once for better performance
              let rows = "";
              data.forEach(course => {
                  rows += `
                  <tr>
                      <td>${course.username}</td>
                      <td>${course.emailid}</td>
                      <td>${course.courseName}</td>
                  </tr>`;
              });

              dataTable.innerHTML = rows;  // Add all rows at once
          } else {
              console.error("Element with ID 'coursetable' not found.");
          }
      });
}



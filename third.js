function showAlert() {
3
  alert("You clicked on the Portfolio Website project!");
4
}
5
​
6
// Example of form submission alert
7
document
8
  .getElementById("contact-form")
9
  .addEventListener("submit", function (event) {
10
    event.preventDefault();
11
    alert("Message sent successfully!");
12
  });
13
​
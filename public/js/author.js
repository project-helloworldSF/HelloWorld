$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  var nameInput = $("#username");
  var passInput = $("#password");
  var profile_picInput = $("#profile_pic");
  var ageInput = $("#age");
  var genderInput = $("#gender");
  var ethnicityInput = $("#ethnicity");
  var bootcamp_nameInput = $("#bootcamp_name");
  var date_rangeInput = $("#date_range");
  var locationInput = $("#location");
  var employedInput = $("#employed");
  var titleInput = $("#title");
  var salaryInput = $("#salary");
  
  $(document).on("submit", "#author-form", handleAuthorFormSubmit);

  // A function to handle what happens when the form is submitted to create a new Author
  function handleAuthorFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    // if (!nameInput.val().trim().trim()) {
    //   return;
    // }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertAuthor({
      username: nameInput.val().trim(),
      password: passInput.val().trim(),
      profile_pic: profile_picInput.val().trim(),
      age: ageInput.val().trim(),
      gender: genderInput.val().trim(),
      ethnicity: ethnicityInput.val().trim(),
      bootcamp_name: bootcamp_nameInput.val().trim(),
      date_range: date_rangeInput.val().trim(),
      location: locationInput.val().trim(),
      employed: employedInput.val().trim(),
      title: titleInput.val().trim(),
      salary: salaryInput.val().trim()
    });
  }
console.log(upsertAuthor);

  // A function for creating an author. Calls getAuthors upon completion
  function upsertAuthor(authorData) {
    $.post("/api/authors", authorData).then(reRoute());
  }

  function reRoute() {
    window.location.href = "/userProfile";
  }
});
module.exports = upsertAuthor();
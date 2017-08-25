/**
 * Created by DNA2 on 8/24/17.
 */

// Requiring our models
var db = require("../models");
var author = require("upsertAuthor");

// GET route for getting all of the posts
app.get("/api/posts", function(req, res) {
    var query = {};
    if (req.query.author_id) {
        query.AuthorId = req.query.author_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findAll({
        where: query,
        include: [db.Author]
    }).then(function(dbPost) {
        res.json(dbPost);
    });
});

// Get route for retrieving a single post
app.get("/api/posts/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findOne({
        where: {
            id: this.req.params.id
        },
        include: [db.Author]
    }).then(function(dbPost) {
        res.json(dbPost);
    });
});
console.log(dbPost);

// Our initial todos array
var getuserId_posts = [];

// Getting todos from database when page loads
getUserData();
// This function resets the todos displayed with new todos from the database

// This function grabs values from the database and appends these values to the html page
function getUserData() {
    $.get("/api/user/:id", function(data) {
        $("#username").append(db.Author.username);
        $("#profile_pic").append(db.Author.profile_pic);
        $("#bootcamp").append(db.Author.bootcamp_name);
        $("#location").append(db.Author.location);
        $("#employed").append(db.Author.employed);
        $("#title").append(db.Author.title);
        $("#salary").append(db.Author.salary);
        $("#duration").append(db.Author.duration);
        $("#age").append(db.Author.age);
        $("#gender").append(db.Author.gender);
        $("#ethnicity").append(db.Author.ethnicity);
    });
}
// get a hold of database
// isolate entries to a specific id row in mysql table
// grab specific object values I need to display
// find a way to translate the javascript object into a jquery object to view on the html page
// display the object as an id in a div on the html page
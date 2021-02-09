var express = require("express");
var router = express();


var bodyParser = require('body-parser');
var path = require('path')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

var getController = require("./controllers/getcontroller")
var postController = require("./controllers/postcontroller")
router.use(express.static(path.join(__dirname, "public")));



// view engine setup
router.set('views',  'views');
router.set('view engine', 'ejs');



const courses = [
    {
      id: 1,
      title: "Securing React Apps with Auth0",
      slug: "react-auth0-authentication-security",
      authorId: 1,
      category: "JavaScript"
    },
    {
      id: 2,
      title: "React: The Big Picture",
      slug: "react-big-picture",
      authorId: 1,
      category: "JavaScript"
    },
    {
      id: 3,
      title: "Creating Reusable React Components",
      slug: "react-creating-reusable-components",
      authorId: 1,
      category: "JavaScript"
    },
    {
      id: 4,
      title: "Building a JavaScript Development Environment",
      slug: "javascript-development-environment",
      authorId: 1,
      category: "JavaScript"
    },
    {
      id: 5,
      title: "Building Applications with React and Redux",
      slug: "react-redux-react-router-es6",
      authorId: 1,
      category: "JavaScript"
    },
    {
      id: 6,
      title: "Building Applications in React and Flux",
      slug: "react-flux-building-applications",
      authorId: 1,
      category: "JavaScript"
    },
    {
      id: 7,
      title: "Clean Code: Writing Code for Humans",
      slug: "writing-clean-code-humans",
      authorId: 1,
      category: "Software Practices"
    },
    {
      id: 8,
      title: "Architecting Applications for the Real World",
      slug: "architecting-applications-dotnet",
      authorId: 1,
      category: "Software Architecture"
    },
    {
      id: 9,
      title: "Becoming an Outlier: Reprogramming the Developer Mind",
      slug: "career-reboot-for-developer-mind",
      authorId: 1,
      category: "Career"
    },
    {
      id: 10,
      title: "Web Component Fundamentals",
      slug: "web-components-shadow-dom",
      authorId: 2,
      category: "HTML5"
    }
  ];
  
  const authors = [
    { id: 1, name: "Cory House" },
    { id: 2, name: "Scott Allen" },
    { id: 3, name: "Dan Wahlin" }
  ];
  
  const newCourse = {
    id: null,
    title: "",
    authorId: null,
    category: ""
  };
 
router.get('/',getController.getcourses)
router.get('/books/add',getController.addbooks)
router.get('/author/add',getController.addauthor)

router.post("/books/add",postController.postcourses)

router.post("/author/add",postController.postauthor)
 
router.listen( 3000, function(){
    console.log('Listening on port ' );
  });

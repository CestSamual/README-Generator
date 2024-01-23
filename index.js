const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { log } = require("console");

// array of questions for user
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      validate: (nameValue) => {
        if (nameValue) {
          return true;
        } else {
          console.log("Please try again. Enter a valid email address.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
      validate: (nameValue) => {
        if (nameValue) {
          return true;
        } else {
          console.log("Please try again. Enter a valid GitHub username.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "proTitle",
      message: "Please enter the title of your project.",
      validate: (nameValue) => {
        if (nameValue) {
          return true;
        } else {
          console.log("Please try again. Re-enter your project title.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "proDesc",
      message: "Please enter a project description.",
      validate: (nameValue) => {
        if (nameValue) {
          return true;
        } else {
          console.log("Please try again. Re-enter your project description.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "proInstall",
      message: "Please provide the steps to install your project.",
      validate: (nameValue) => {
        if (nameValue) {
          return true;
        } else {
          console.log(
            "Please try again. Re-enter the steps to install your project."
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "proUsage",
      message: "Please describe how to use the project application.",
      validate: (nameValue) => {
        if (nameValue) {
          return true;
        } else {
          console.log("Please try again. Re-enter the usage description.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "proLicense",
      message: "Please select a license for your project.",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
      default: ["MIT"],
      validate: (nameValue) => {
        if (nameValue) {
          return true;
        } else {
          console.log("Please try again. Re-select a license.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "proTest",
      message: "Please provide a comannd to run tests.",
      default: "npm test",
    },
    {
      type: "input",
      name: "proContributor",
      message: "Please provide details for contributors.",
    },
  ]);
};

// function to write README file
const writeToFile = (data) => {
  fs.writeFile("./README.md", data, (err) => {
    //Error if statement
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("The README has been successfully generated.");
    }
  });
};

// function to initialize program and gather user inputs
questions().then(
  (answers) => {
    return generateMarkdown(answers);
  })
  .then((data) => {
    return writeToFile(data);
  })


  //Error catch
  .catch((err) => {
    console.log(err);
  });

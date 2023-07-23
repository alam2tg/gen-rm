// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "Title",
		message: "Please name your Project.",
		validate: (titleInput = () => {
			if (titleInput) {
				return true;
			} else {
				return false;
			}
		}),
	},
	{
		type: "input",
		name: "Description",
		message: "Please describe the purpose and functionality of this project.",
		validate: (descriptionInput = () => {
			if (descriptionInput) {
				return true;
			} else {
				console.log("Please add a description of your project");
				return false;
			}
		}),
	},
	{
		type: "input",
		name: "Installation",
		message:
			"Please list any requirements to install your project. Provide a step-by-step guide.",
		validate: (installationInput = () => {
			if (installationInput) {
				return true;
			} else {
				return false;
			}
		}),
	},
	{
		type: "input",
		name: "Usage",
		message:
			"Please provide any instructions for use such as language/technologies.",
		validate: (usageInput = () => {
			if (usageInput) {
				return true;
			} else {
				console.log("Please add a description of usage");
				return false;
			}
		}),
	},
	{
		type: "Input",
		name: "Credits",
		message:
			"Add any contributor's Github's with a short message here. If none, enter N/A.",
	},
	{
		type: "list",
		name: "License",
		message: "What license are you using for your project?",
		choices: [
			"None",
			"MIT",
			"Apache 2.0",
			"Mozilla Public License 2.0",
			"Open Software License 3.0",
		],
		validate: (licenseInput = () => {
			if (licenseInput) {
				return true;
			} else {
				console.log("Please select a license.");
				return false;
			}
		}),
	},
	{
		type: "input",
		name: "Tests",
		message: "Provide a walkthrough of any required tests.",
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

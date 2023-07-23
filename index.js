// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
	{
		type: "input",
		name: "title",
		message: "Please name your Project.",
		validate: titleInput => {
			if (titleInput) {
				return true;
			} else {
				console.log('Please enter a project title');
				return false;
			}
		},
	},	
	{
		type: "list",
		name: "license",
		message: "What license are you using for your project?",
		choices: ["None","MIT","Apache_2.0","bsl-1.0","gpl-3.0","mpl-2.0","ms-pl","osl-3.0"],
		validate: licenseInput = () => {
			if (licenseInput) {
				return true;
			} else {
				console.log("Please select a license.");
				return false;
			}
		},
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
		name: "name",
		message: "Enter your first and last name.",
	},
	{
		type: "Input",
		name: "email",
		message: "Enter your email",
	},
	{
		type: "Input",
		name: "github",
		message: "Enter your Github username (not the url, just name)",
	},
	{
		type: "Input",
		name: "credits",
		message:
			"Add any contributor's Github's with a short message here. If none, enter N/A.",
	},{
		type: "input",
		name: "tests",
		message: "Provide a walkthrough of any required tests.",
	},{
		type: "input",
		name: "email",
		message: "Enter your email for questions."
	}
];


function writeToFile(fileName, data) {
	return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
	inquirer.prompt(questions)
	.then((responses) => {
		console.log("Creating your Professoinal README.md file...");
		writeToFile("./generate/README.md", generateMarkdown({ ...responses }));
	});
}

init();

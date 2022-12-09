const inquirer = require('inquirer')
const Intern = require('../../lib/intern')

const questions = [
	{
		type: 'input',
		name: 'name',
		message: "Enter the intern's name:",
	},
	{
		type: 'input',
		name: 'id',
		message: "Enter the intern's ID number (Must only include numbers):",
	},
	{
		type: 'input',
		name: 'email',
		message: "Enter the inter's email: ",
	},
	{
		type: 'input',
		name: 'school',
		message: "Enter the intern's school: ",
	},
]

function internPrompt() {
	inquirer.prompt(questions).then((internData) => {
		const intern = new Intern(
			internData.name,
			internData.id,
			internData.email,
			internData.office
		)
		return intern
	})
}

module.exports = internPrompt

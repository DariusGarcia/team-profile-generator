const inquirer = require('inquirer')
const Engineer = require('../../lib/engineer')

const questions = [
	{
		type: 'input',
		name: 'name',
		message: "Enter the engineer's name:",
	},
	{
		type: 'input',
		name: 'id',
		message: "Enter the engineer's ID number (Must only include numbers):",
	},
	{
		type: 'input',
		name: 'email',
		message: "Enter the engineer's email: ",
	},
	{
		type: 'input',
		name: 'github',
		message: "Enter the engineer's GitHub username: ",
	},
]

function engineerPrompt() {
	console.log('Team Profile Generator started...')
	inquirer.prompt(questions).then((engineerData) => {
		const engineer = new Engineer(
			engineerData.name,
			engineerData.id,
			engineerData.email,
			engineerData.office
		)
		return engineer
	})
}

module.exports = engineerPrompt

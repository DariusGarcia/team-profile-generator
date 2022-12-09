const inquirer = require('inquirer')
const Manager = require('../../lib/manager')

const questions = [
	{
		type: 'input',
		name: 'name',
		message: "Enter the manager's name:",
	},
	{
		type: 'input',
		name: 'id',
		message: "Enter the manager's ID number (Must only include numbers):",
	},
	{
		type: 'input',
		name: 'email',
		message: "Enter the manager's email: ",
	},
	{
		type: 'input',
		name: 'officeNumber',
		message: "Enter the manager's office number:",
	},
]
function managerPrompt() {
	console.log('Team Profile Generator started...')
	inquirer.prompt(questions).then((managerData) => {
		const manager = new Manager(
			managerData.name,
			managerData.id,
			managerData.email,
			managerData.office
		)
		console.log('manager prompt details: ' + manager.name + ' ' + manager.email)
		return manager
	})
}

module.exports = managerPrompt

const inquirer = require('inquirer')
const engineerPrompt = require('./engineerPrompt')
const internPrompt = require('./internPrompt')
const path = require('path')
const fs = require('fs')

const directory = path.resolve(__dirname, 'dist')
const pathObjective = path.join(directory, 'team.html')

function createFile() {
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory)
	}
	fs.writeFileSync(pathObjective, render(teamMembers), 'utf-8')
}

function joinTeam() {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'occupation',
				message: 'Select what kind of team member to add: ',
				choices: ['Engineer', 'Intern', 'Finished... Create team now'],
			},
		])
		.then((selection) => {
			switch (selection.memberChoice) {
				case 'Engineer':
					engineerPrompt()
					break
				case 'Intern':
					internPrompt()
					break
				default:
					createFile()
			}
		})
}

module.exports = joinTeam

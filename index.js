const inquirer = require('inquirer')
const managerPrompt = require('./src/utils/managerPrompt')
const fs = require('fs')
const path = require('path')

console.log('Welcome to Team Profile Generator')

inquirer.prompt(questions).then((data) => {
	const filename = 'index.html'
})

// import classes
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

function startPrompt() {
	managerPrompt()
}

startPrompt()

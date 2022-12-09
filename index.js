const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const joinTeam = require('./src/utils/joinTeam')
const managerPrompt = require('./src/utils/managerPrompt')
const teamArr = []

function startPrompt() {
	const managerDetails = managerPrompt()
	teamArr.push(managerDetails)
}

startPrompt()

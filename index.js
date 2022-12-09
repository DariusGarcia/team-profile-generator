const inquirer = require('inquirer')
const questions = require('./src/utils/questions')
const fs = require('fs')

console.log('Welcome to Team Profile Generator')

inquirer.prompt(questions).then((data) => {
	const filename = 'index.html'

	fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
		err ? console.log(err) : console.log('Success!')
	)
})

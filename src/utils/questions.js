const questions = [
	{
		type: 'input',
		name: 'name',
		message: 'Enter your name:',
	},
	{
		type: 'checkbox',
		message: 'Select what level you are:',
		name: 'occupation',
		choices: ['Engineer', 'Intern', 'Manager'],
	},
	{
		type: 'input',
		message: 'Enter your email:',
		name: 'email',
	},
	{
		type: 'input',
		message: 'Enter your GitHub username:',
		name: 'github',
	},
]

module.exports = questions

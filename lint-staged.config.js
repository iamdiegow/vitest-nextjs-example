const prettier = (filenames) => `prettier --write ${filenames.join(' ')}`
const eslint = (filenames) => `eslint --fix ${filenames.join(' ')}`

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	'**/*.{ts,tsx}': [eslint, prettier],
	'**/*.scss': [prettier],
	'**/*.{md,json}': [prettier],
}

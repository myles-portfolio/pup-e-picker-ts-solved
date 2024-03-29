module.exports = {
	settings: {
		react: {
			version: "detect",
		},
	},
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: {
			jsx: true,
		},
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "react"],
	rules: { "react/jsx-uses-react": "error" },
};

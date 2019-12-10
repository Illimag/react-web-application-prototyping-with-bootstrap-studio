# Bootstrap Studio Test

## Bootstrap Studio HTML to React.JS

Design Interface with Bootstrap Studio.

Export Code.

Create React App dir.

Install react boostrap dependency.

Use HTML to react components

	https://roman01la.github.io/html-to-react-components/

Convert HTML into components

Create Components dir in src dir of the React App.

Import Components into the App.js

	import Header from './component/header/header.js'

Then add the Component in the reactDOM render function

	class App extends React.Component {

	render() {
		return {
			<div>
				<Header/>
			</div>
		);
	}
	}

For multiple components put them inside a div

Compile and build to gh-pages

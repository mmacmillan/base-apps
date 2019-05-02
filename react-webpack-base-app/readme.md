# Minimal React Webpack base app

The goal here is to build a minimal React base application, that provides similar functionality to the huge boilerplate projects, in an effort to learn each of the components in the "blackbox" that is a modern toolchain.

The following tools serve as the base for the application:

	## Webpack
	[https://webpack.js.org/guides/getting-started/](https://webpack.js.org/guides/getting-started/)
	
	Webpack is the build-system for the application.  It is responsible for transpiling the ES5/6 source code into a version readable by all browsers, in addition to doing things like minification, code splitting, tree shaking, and so much more (webpack is awesome)
	
		... ### Webpack Dev Server
		https://webpack.js.org/configuration/dev-server/
		
		Webpack dev server is a stop-gap for having to not build a node server to host your static assets on a dev server.  It has features like hot reloading built in, and is configurable.  For your data layer, build a standalone microservice.

		Babel
		https://babeljs.io/setup#installation
		
		Babel adds the es5/6 transpiling functionality, allows us to use JSX, etc.  Babel has a plugin for webpack which we use to do this at build time, or on-the-fly when using HMR.
		
		HtmlWebpackPlugin
		https://github.com/jantimon/html-webpack-plugin
		
		During the webpack build process, this will inject all the compiled bundles into the specified htmltemplate, and write the file to the build destination (webpack doesn't touch html files without plugins, by default!).  It will also minify the html, and gives some options as to where the bundles are injected.
		
		Style Loader and CSS Loader
		https://github.com/webpack-contrib/style-loader
		https://github.com/webpack-contrib/css-loader
		
		These two webpack loaders will transform, minify, etc all your css, then add it to the javascript bundle.  It will be dynamically added to the html as a <style> tag, so it need not be added as a <link> to the source code…you just import it into the bundle:
		
		import css from './css/global.css'
		
		These plugins also allow things like scoped css modules, and a few more features.  Right now ive chosen to go the css-in-javascript route with Aphrodite for the styling each component requires (ie, non global styling)
		
	React
	https://reactjs.org/docs/getting-started.html
	
	React is a javascript framework from Facebook, you know what it is.
	
		react-hot-loader
		https://github.com/gaearon/react-hot-loader
		
		This allows us to hot-reload react components without reloading the page.  We invoke it with webpack-dev-server --hot, and the rest is transparent.  Webpack's HMR will reload the whole page on any source change in the tree; this allows us to reload just the individual react component (and its state!).  Possibly the largest boost to efficiency when building applications.
		
		Aphrodite
		https://github.com/Khan/aphrodite
		
		Aphrodite lets you use css-in-javascript, so that styles can be defined alongside the component, injected via javascript using the className:
		
		Import {Stylesheet, css} from 'aphrodite';
		…
		export default class SomeComp extends React.Component {
		…
		render() {
		  return (
		    <div className={ css(styles['content-div']) }></div>
		  );
		}
		…
		const styles = Stylesheet.create({
		  'content-div': {
		    padding: '1rem';
		  }
		});
		
		
		


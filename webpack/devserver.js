import applicationConfiguration from '../configuration'

const devserver = applicationConfiguration.webpack.devserver

// `webpack-dev-server` settings.
export const devServerConfig =
{
	// The port to serve assets on.
	port : devserver.port,

	proxy: [{
		context: '/',
		target: `http://localhost:${applicationConfiguration.services.rendering.port}`
	}],

 	// This is just for forcing `webpack-dev-server`
 	// to not disable proxying for root path (`/`).
  index: '',

	// Uncomment if using `index.html` instead of Server-Side Rendering.
	// https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback
	// historyApiFallback : true
}

// Modifies webpack configuration to get all files
// from webpack development server.
export function setDevFileServer(configuration)
{
	return {
		...configuration,
		output:
		{
			...configuration.output,
			publicPath: `http://${devserver.host}:${devserver.port}${configuration.output.publicPath}`
		}
	}
}
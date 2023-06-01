const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
module.exports = {
	output: {
		publicPath: 'http://localhost:3000/',
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
	},

	devServer: {
		port: 3000,
		historyApiFallback: true,
	},

	module: {
		rules: [
			{
				test: /\.m?js/,
				type: 'javascript/auto',
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},

	plugins: [
		new ModuleFederationPlugin({
			name: 'home',
			filename: 'remoteEntry.js',
			/* remotes is used to list all the remote MFEs that we want to consume in this repo */
			remotes: {
				home: 'home@http://localhost:3000/remoteEntry.js', // Adding home within itself allows to import modules using absolute paths
				pdp: 'pdp@http://localhost:3001/remoteEntry.js',
				cart: 'cart@http://localhost:3002/remoteEntry.js',
			},
			/* exposes is used to list all components/functions we want to expose for other MFEs from this repo */
			/* on doing this, module federation generates a <domain>/remoteEntry.js file which is to be used as a remote in other MFEs */
			exposes: {
				'./Header': './src/Header.jsx',
				'./Footer': './src/Footer.jsx',
				'./products': './src/products.js',
				'./HomeContent': './src/HomeContent.jsx',
				'./MainLayout': './src/MainLayout.jsx',
			},
			shared: {
				...deps,
				react: {
					/* When sharing code with other MFEs this states that, we use a single instance of react with the specified version */
					singleton: true,
					requiredVersion: deps.react,
				},
				'react-dom': {
					singleton: true,
					requiredVersion: deps['react-dom'],
				},
			},
		}),
		new HtmlWebPackPlugin({
			template: './src/index.html',
		}),
	],
};

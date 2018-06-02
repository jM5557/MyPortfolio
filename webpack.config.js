const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	
	entry: './src/index.js',

	output: {
		filename: 'index.js',

		path: path.resolve(__dirname, 'docs')
	},

	module: {
		rules: [
			{ 
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
		       	test: /\.jsx?$/,
		        loader: 'babel-loader',
		        exclude: /node_modules/,
		        query: {
		          cacheDirectory: true,
		          presets: ['react', 'env']
		        }
		    },
		    {
		    	test: /\.scss$/,
		    	use: [
		    		MiniCssExtractPlugin.loader,
		    		'css-loader',
		    		'sass-loader'
		    	]
		    },
		    {
		    	test: /\.css$/,
		    	use: [
		    		MiniCssExtractPlugin.loader,

		    		'css-loader'
		    	]
		    },
		    {
	            test: /\.(png|jp(e*)g|svg)$/,  
	            use: [{
	                loader: 'url-loader',
	                options: { 
	                    limit: 8000, // Convert images < 8kb to base64 strings
	                    name: 'images/[hash]-[name].[ext]'
	                } 
	            }]
	        }

		]
	},

	plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css"
        })
    ],

    optimization: {
	    splitChunks: {
	      cacheGroups: {
	        styles: {
	          name: 'main',
	          test: /\.css$/,
	          chunks: 'all',
	          enforce: true
	        }
	      }
	    }
	},


}
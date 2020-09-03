module.exports = {
    output: {
        filename: 'appBundle.js',
        path: `${__dirname}/public/`,
        publicPath: '/'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                disable: true
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader']
        },
        {
          test: /\.txt$/,
          use: 'raw-loader'
        }
      ]
    },
    stats: {
        assets: false,
        assetsSort: 'index',
        builtAt: false,
        moduleAssets: false,
        cached: false,
        cachedAssets: false,
        modules: false,
        chunks: true,
        chunkOrigins: false,
        chunksSort: 'size',
        colors: true,
        depth: false,
        entrypoints: false,
        env: true,
        errors: true,
        errorDetails: true,
        hash: false,
        logging: 'info',
        loggingTrace: true,
        maxModules: 8,
        modulesSort: 'size',
        moduleTrace: true,
        outputPath: false,
        performance: true,
        providedExports: false,
        publicPath: false,
        reasons: false,
        source: false,
        timings: false,
        version: true,
        warnings: true,
        all: undefined
    }
};
const webpack = require('webpack');

module.exports = {

    entry: {
        'roofs': './app.js',
        'landing': './landingApp/index.js',
        // 'prices': './landingApp/prices.js',
    },

    output: {
        path: __dirname + '/bin',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[chunkhash:8].bundle.js',
    },

    mode: 'development',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: [/node_modules/],
            use: [
                // 'react-hot-loader',
                'babel-loader',
                // options: {
                //     cacheDirectory: true,
                //     plugins: ['react-hot-loader/babel']
                // }
            ],

            // }, {
            //     test: /\.css$/,
            //     include(filepath) {
            //         if (filepath.includes('react-s-alert')) return true;
            //         return false;
            //     },
            //     use: [{loader: "style-loader"},
            //         {loader: "css-loader"},
            //         {loader: "postcss-loader"}]
        }, {
            test: /\.less$/,
            exclude: [/node_modules/, /bin/],
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: {
                            mode: 'local',
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                        localsConvention: 'camelCase'
                    }
                },
                {
                    loader: 'less-loader'
                }
            ]
        }, {
            test: /\.(css)$/,
            exclude: [/node_modules/, /out/, /styles/],
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        javascriptEnabled: true,
                        sourceMap: true,
                        modules: true,
                        localIdentName: '[local]___[hash:base64:5]',
                    },
                },
                {
                    loader: 'less-loader',
                    options: {
                        // javascriptEnabled: true,
                    },
                },
            ],
        },
            {
                test: /\.(css)$/,
                include: [/node_modules/, /styles/],
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // javascriptEnabled: true,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            // javascriptEnabled: true,
                        },
                    },
                ],
            },
            {
                test: /\.png$/,
                exclude: [/node_modules/, /bin/],
                use: [{
                    loader: 'url-loader',
                    options: {
                        'limit': 1000000,
                        'mimetype': 'image/png'
                    }
                }]
                // }, {
                //     test: /\.svg$/,
                //     use: [
                //         {
                //             loader: 'babel-loader',
                //             options: {
                //                 presets: ['es2015', 'react']
                //             }
                //         },
                //         {
                //             loader: 'react-svg-loader',
                //             // options: {
                //             //     svgo: {
                //             //         plugins: [{removeTitle: false}],
                //             //         floatPrecision: 2
                //             //     }
                //             // }
                //         }
                //     ]
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }]
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production'),
        // })
    ],

    devtool: 'source-map',
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        host: 'localhost', // Defaults to `localhost`
        port: 4004, // Defaults to 8080
        //     proxy: {
        // //        '/api/*': {
        //         '/': {
        //             target: `http://localhost:4003`,
        //             secure: false,
        //             changeOrigin: true
        //         }
        //     }
    }

};

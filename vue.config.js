const px2rem = require('postcss-px2rem');
const postcss = px2rem({
    remUnit: 12
})

module.exports = {
    // devServer: {
    //     proxy: {
    //         '^/api': {
    //             target: 'http://10.99.201.150:8080/iplat-ms/service/',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/api':''
    //             }
    //         }
    //     }
    // },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    }
}

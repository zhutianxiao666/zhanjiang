module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://10.99.201.150:8080/iplat-ms/service/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api':''
                }
            }
        },
        open: true
    },
}
module.exports = {
    plugins: [
        require('autoprefixer')({ 
            browsers:  [
                'last 5 versions',
                'IE 9',
                'iOS >= 8'
            ]
        })
    ]
}
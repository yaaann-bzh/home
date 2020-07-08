module.exports = {
    chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
            args[0].title = 'Yann Tachier développeur web'
            args[0].description = 'Yann Tachier, développeur applications web et sites intenet PHP, Symfony, JavaScript, Vuejs et WordPress, à la Roche sur Yon en Vendée.'
            return args
        })
    }
}
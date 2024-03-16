const { aliasWebpack } = require("react-app-alias-ex")
const webpack = require("webpack")


module.exports = config => {
    const fallback = config.resolve.fallback || {}
    Object.assign(fallback, {})
    config.resolve.fallback = fallback
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({ 
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'] 
        })
    ])
    return aliasWebpack({})(config)
};
/**
 * 编译时，react-app-rewired 会先取到 create-react-app 生成的默认的 webpack config，
 * 然后调用 override(config) 方法，对 config 进行修改，得到新的 webpack config。
 * webpack 最终会使用这个新的 config 进行打包。
 * @param {*} config 
 * @param {*} env 
 * @returns 
 */
module.exports = function override(config, env) {
    // 这里可以修改 webpack 的配置
    return config;
}
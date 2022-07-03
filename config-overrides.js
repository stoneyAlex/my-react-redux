/*
 * @Author: shimingxia
 * @Date: 2022-05-25 19:56:59
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-05-26 11:36:31
 * @Description: 
 */
const { override, fixBabelImports, addDecoratorsLegacy } = require('customize-cra')

module.exports = override(
  fixBabelImports("import", {
    // antd按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addDecoratorsLegacy() //配置装饰器
);
module.exports = {
  // github
  // publicPath: '/taiwanMusic2019/dist/',
  // 線上發布 多了一層2019的資料夾
  publicPath: '/2019/',
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? 'dist/'
  //   : '/',
  devServer: {
    port: 8822, // 端口
  },
  lintOnSave: false, // 取消 eslint 验证
};

// app.js
App({
  onLaunch() {
    console.log('app:', 'onLaunch')
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  },
 
  onShow (options) {
    console.log('app:', 'onShow')
  },
  onHide () {
    console.log('app:', 'onHide')
  },
  onError (msg) {
    console.log('app:', 'onError')
  },
  globalData: {
    userInfo: null
  }
})

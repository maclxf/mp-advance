// pages/index/index.js
/*****************************************************************************
 * 
 * 
 * 
 *  
 *                            首页
 * 用于观察 app 生命周期
 * 用于观察 页面生命周期
 * 用于观察 页面上组件的生命周期
 * 
 * 
 * 
 * ****************************************************************************/
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
    
    console.log('index-page:', 'onLoad')
  },

  goUrl(event) {
    console.log(event)
    wx.navigateTo({
      url: event.currentTarget.dataset.url,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('index-page:', 'onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('index-page:', 'onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('index-page:', 'onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('index-page:', 'onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('index-page:',  'onReachBottom')
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    console.log('index-page:', 'onShareAppMessage')
  }
})
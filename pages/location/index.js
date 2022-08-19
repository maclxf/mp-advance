// pages/location/index.js
/*****************************************************************************
 * 
 * 
 * 
 *  
 *                           定位实现
 * 
 * 
 * ****************************************************************************/
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude: 0,
    showLocation: false,
    showSettingBtn: false
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 源自这个地址，wgs84 gcj02这两个的坐标偶都可以打开地图，为什么？
    // https://blog.csdn.net/Smile_ping/article/details/103514428
    wx.getSetting({
      withSubscriptions: true,
    }).then((res) => {
      // console.log(res.authSetting['scope.userLocation'])
      if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != false) {
        this.setData({
          showLocation: true
        })
        this._getLocation()
      } else {
        this.setData({
          showLocation: false
        })
        this._getLocation()
      }
    })
  },

  handler(res) {
    console.log(res)
    console.log(res.detail.authSetting['scope.userLocation'])
    if (!res.detail.authSetting['scope.userLocation']) {
      this.setData({
        showLocation: false
      })
      
    } else {
      this.setData({
        showLocation: true
      })

      this._getLocation()
    }
  },

  _getLocation() {
    wx.getLocation({
      type: 'wgs84',
    }).then((res) => {
      this.setData({
        showLocation: true
      })
      let {latitude, longitude} = res
      this.setData({
        latitude,
        longitude
      })
    }).catch((reason) => {
      this.setData({
        showSettingBtn: true
      })
      console.log(reason)
    })
  },
  openMap() {
    wx.getLocation({
      type: 'wgs84',
    }).then((res) => {
      console.log(res)
      let {latitude, longitude} = res
      wx.openLocation({
        latitude: latitude,
        longitude: longitude,
      }).then((res) => {
        console.log(res)
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
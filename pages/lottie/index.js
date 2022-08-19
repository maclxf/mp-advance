// pages/lottie/index.js
/*****************************************************************************
 * 
 * 
 *  
 *                            lottie demo
 * 
 * 
 * ****************************************************************************/
import lottie from 'lottie-miniprogram'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: 'http://bigtalk.top/edk-loading.json',
    empty: 'http://bigtalk.top/orange-empty.json',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //https://github.com/wechat-miniprogram/lottie-miniprogram
    //https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html
    // https://www.jianshu.com/p/53e511c86bd5

    // https://juejin.cn/post/7079975710093213709
    // https://mp.weixin.qq.com/s?__biz=MzIxNjc0ODExMA==&mid=2247485270&idx=1&sn=ea6c76cdab342cde8a7af247960e498f&chksm=97851e77a0f297619f28aadc1ef51c3ea019d318d77d8377b3841eb547acbe4ece423fd8f0fa&scene=178&cur_album_id=1439395363538173953#rd
    // https://airbnb.io/lottie/#/after-effects?id=more-bodymovin-info
    // wx.createSelectorQuery().select('#lottie_demo').node(res => {
    //   const canvas = res.node
    //   const context = canvas.getContext('2d')
    //   canvas.width = 300
    //   canvas.height = 300
    //   lottie.setup(canvas)
    //   const ani = lottie.loadAnimation({
    //     loop: true,
    //     autoplay: true,
    //     // 本地素材需要json变js并加入 module.export
    //     // animationData: require('94994-loading-car.js'),
    //     // 线上素材直接引入json即可
    //     path: this.data.path,
    //     rendererSettings: {
    //       context,
    //     },
    //   })

    //   this.setData({
    //     ani
    //   })
    // }).exec()

  },
  empty() {
    // this.data.ani.path = this.data.empty
    // this.data.ani.loop = false
    // this.data.ani.play()
  },

  // 初始化加载动画
  init() {
    if (this.inited) {
      return
    }
    wx.createSelectorQuery().selectAll('#lottie_demo').node(res => {
      const canvas = res[0].node
      const context = canvas.getContext('2d')
      canvas.width = 200
      canvas.height = 200
      lottie.setup(canvas)
      this.ani = lottie.loadAnimation({
        loop: true,
        autoplay: true,
        // 本地素材需要json变js并加入 module.export
        // animationData: require('94994-loading-car.js'),
        // animationData: require('lf30_ygdxtetx.js'),
        // animationData: require('lf30_editor_942vfwj8.js'),

        animationData: require('edk/arrived.js'),
        // animationData: require('edk/complete.js'),
        // animationData: require('edk/fail.js'),
        // animationData: require('edk/not_found.js'),
        
        // animationData: require('edk/loading.js'),
        // animationData: require('edk/transporting.js'),
        
        // 线上素材直接引入json即可
        // path: 'https://assets7.lottiefiles.com/private_files/lf30_ygdxtetx.json',

        //path: 'http://bigtalk.top/edk/datav1.json',
        // path: 'http://bigtalk.top/edk-v1/arrived.json',
        // path: 'http://bigtalk.top/edk-v1/complete.json',
        // path: 'http://bigtalk.top/edk-v1/fail.json',
        // path: 'http://bigtalk.top/edk-v1/gift.json',
        // path: 'http://bigtalk.top/edk-v1/loading.json',
        // path: 'http://bigtalk.top/edk-v1/not_found.json',
        // path: 'http://bigtalk.top/edk-v1/transporting.json',
        rendererSettings: {
          context,
        },
      })
      this.inited = true
    }).exec()
  },
  play() {
    this.ani.play()
  },
  pause() {
    this.ani.pause()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow() {
  //   this.data.ani.play()
  // },

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
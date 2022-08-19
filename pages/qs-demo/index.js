// pages/qs-demo/index.js
/*****************************************************************************
 * 
 *  
 *                            实验 lottie
 * 
 * //https://learn-anything.cn/qs-weixin
 * // 高版本的 qs 小程序汇报这个错 module "miniprogram_npm/side-channel/call-bind/callBound" is not defined;
 *
 * 
 * 
 * ****************************************************************************/
import qs from 'qs'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    queryUrl: 'a=1&b=2',
    qsChangeToObj: '',
    qsChangeToString: '',
    jsonChangeToString: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  toObject() {
    let {queryUrl} = this.data
    let qsChangeToObj = qs.parse(queryUrl)
    console.log(qsChangeToObj)
    // qs.parse() 用于将URL解析成对象的形式
    this.setData({
      qsChangeToObj
    })
  },
  
  toqsString() {
    let {qsChangeToObj} = this.data
    //qs.stringify()将对象 序列化成URL的形式，以&进行拼接
    this.setData({
      qsChangeToString: qs.stringify(qsChangeToObj)
    })
  },

  tojsonString() {
    let {qsChangeToObj} = this.data
    this.setData({
      jsonChangeToString: JSON.stringify(qsChangeToObj)
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
// pages/computed-watch/index.js
// try this https://github.com/wechat-miniprogram/computed
// computed
// watch
// observers
  // observers 还只能在 Component 中使用
// watch VS computed
  // 性能上 watach 更好，但是用法上computed更简洁
  // 但是 computed 中用不了this
// watch VS  observer
  // 无论字段是否真的改变， observers 都会被触发，而 watch 只在字段值改变了的时候触发，并且触发时带有参数。


const computedBehavior = require('miniprogram-computed').behavior
const myBehavior = require('../../behavior/my-behavior') // 引入自定义 behavior


Component({
  behaviors: [myBehavior, computedBehavior],

  /**
   * 页面的初始数据
   */
  data: {
    a: 1,
    b: 2,
    d: 4,
    e: 5,
    difference: 0
  },
  computed: {
    sum(data) {
      console.log(1)
      return data.a + data.b + data.c
    }
  },
  watch: {
    'd,e': function(d, e) {
      console.log('watch action')
      this.setData({
        difference: (e - d)
      })
    }
  },
  observers: {
    'd, e': function(d, e) {
      console.log('observers action')
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        difference: (e - d)
      })
    }
  },
  
  methods: {
    doComputed() {
      this.setData({
        a: this.data.b,
        b: this.data.a + this.data.b,
      })
    },
    doWatch() {
      this.setData({
        // d: this.data.e,
        // e: this.data.d + this.data.e,
        d: 4,
        e: 3,
      })
    },
    doObserver() {
      this.setData({
        d: 4,
        e: 5,
      })
    },
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
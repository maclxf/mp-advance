// pages/websocket/index.js
// 实现到一半

var openWss = false
var timer = null

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // socket: null,
    heartBeat: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.socket = wx.connectSocket({
      //url: 'ws://bigtalk.top:8000',
      url: 'ws://127.0.0.1:8000',
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        console.log('已连接', res)
      },
      fail: (res) => {
        console.log(res)
      },
      complete: (res) => {
        console.log(res)
      },
    })


    let { heartBeat } = this.data
    let that = this

    this.socket.onOpen(function (res) {
      console.log('已打开', res)
      openWss = true

      console.log(heartBeat)
      if (heartBeat) {
        that.resetHeartBeat()
        that.startHeartBeat()
      }

      that.sendTestMessage()

      that.socket.onMessage(function (res) {
        console.log('已接受', res)
      })

    })

    that.socket.onClose((code, reason) => {
      console.log(`连接已关闭,信息:${code}-${reason}`)
      console.log(heartBeat)
      if (!heartBeat) {
        this.resetHeartBeat();
      }
      
    })

    this.socket.onError((errMsg) => {
      console.log(errMsg)
    })
  },
  sendMessage(event) {
    let that = this
    console.log(event.detail.value)
    if (openWss) {
      that.socket.send({
        data: event.detail.value,
        success(res) {
          console.log('已發送',res)
        },
        fail(err) {
          console.log('发送消息失败', err)
          that.reConnect()
        }
      })
    }
    //if (openWss) {
    //   socket.sendSocketMessage({
    //     data: event.detail.value,
    //   })
    // }
  },
  resetHeartBeat() {
    this.timer && clearTimeout(this.timer)
  },


  /**


   * 心跳检查开始


   */


  startHeartBeat() {
    let that = this
    this.timer = setInterval(() => {
      console.log(1211)
      that.sendTestMessage()
    }, 5000)


  },

  sendTestMessage() {
    let that = this;

    that.socket.send({
      // 心跳发送的信息应由前后端商量后决定

      data: "ping",

      success(res) {
        console.log("发送测试信息成功", res);
      },

      fail(err) {
        console.log("发送测试信息失败", err);

        that.resetHeartBeat();
      },
    });
  },
  reConnect() {
    setTimeout(() => {
      this.onLoad();
    }, 3000);
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
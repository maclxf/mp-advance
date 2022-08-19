// pages/websocket-v1/index.js
//https://juejin.cn/post/6844903647814352904
let heartCheck = {
  timeout: 10000, 
  timeoutObj: null,
  serverTimeoutObj: null,
  reset: function () {
    clearTimeout(this.timeoutObj);
    clearTimeout(this.serverTimeoutObj);
    return this;
  },
  start: function () {
    this.timeoutObj = setTimeout(()=> {
      console.log("发送ping");
      wx.sendSocketMessage({
        data:"ping",
        // success(){
        //   console.log("发送ping成功");
        // }
      });
      this.serverTimeoutObj = setTimeout(() =>{
        wx.closeSocket(); 
      }, this.timeout);
    }, this.timeout);
  }
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    limit: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.initSocket()
  },

  initSocket() {
    let that = this
    wx.connectSocket({
      url: 'ws://bigtalk.top:8000',
      success() {
        console.log('连接成功')
        that.initEventHandle()
      }
    })
  },
  initEventHandle(){
    let that = this
    wx.onSocketMessage((res) => {
      //收到消息
      if (res.data == 'pong') {
        console.log("接收pong");
        heartCheck.reset().start()
      } else {
        console.log('收到消息：' + res.data)
      }
    })
    wx.onSocketOpen(()=>{
      console.log('WebSocket连接打开')
      heartCheck.reset().start()
    })
    wx.onSocketError(function (res) {
      console.log('WebSocket连接打开失败')
      that.reconnect()

    })
    wx.onSocketClose(function (res) {
      console.log('WebSocket 已关闭！')
      that.reconnect()

    })
  },

  reconnect(){
    if (this.lockReconnect) return;
    this.lockReconnect = true;
    clearTimeout(this.timer)
    if (this.data.limit<12){
      this.timer = setTimeout(() => {
        this.initSocket();
        this.lockReconnect = false;
      }, 5000);
      this.setData({
        limit: this.data.limit+1
      })
    }
  },
  sendMessage(event) {
    wx.sendSocketMessage({
      data:event.detail.value,
      success(){
        console.log("发送" + event.detail.value + "成功");
      }
    });
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
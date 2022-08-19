// components/cpb/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    cpbData: 'This is cpb'
  },



  /**
   * 组件的方法列表
   */
  methods: {
    receiveFroma(event) {
      this.setData({
        cpbData: event.detail
      })
    }
  }
})

/*****************************************************************************
 * 
 * 
 * 
 *  
 *                            当页面用 component 构造器实现时
 * 用于观察 页面生命周期
 *          页面的生命周期函数需要放置于method中
 * 
 * 
 * ****************************************************************************/

Component({

  behaviors: [],

  properties: {
    
  },
  
  data: {}, // 私有数据，可用于模板渲染

  //还有一些特殊的生命周期，它们并非与组件有很强的关联，但有时组件需要获知，以便组件内部处理。这样的生命周期称为“组件所在页面的生命周期”，在 pageLifetimes 定义段中定义。其中可用的生命周期包括：
  // pageLifetimes: {
  //   show: function() {
  //     // 页面被展示
  //     console.log('component-constructor-page: ', 'pagelifetimes-show')
  //   },
  //   hide: function() {
  //     // 页面被隐藏
  //     console.log('component-constructor-page: ', 'pagelifetimes-ihde')
  //   },
  //   resize: function(size) {
  //     // 页面尺寸变化
  //     console.log('component-constructor-page: ', 'pagelifetimes-resiz')
  //   }
  // },

  // lifetimes: {
  //   // 生命周期函数，可以为函数，或一个在 methods 段中定义的方法名
  //   created() {
  //     //在组件实例刚刚被创建时执行	
  //     console.log('component-constructor-page: ', 'lifetimes-created') 
  //   },
  //   attached() {
  //     // 在组件实例进入页面节点树时执行	
  //     console.log('component-constructor-page: ', 'lifetimes-attached') 
  //   },
  //   ready() {
  //     //在组件在视图层布局完成后执行	
  //     console.log('component-constructor-page: ', 'lifetimes-ready') 
  //   },
  //   moved() {
  //     //在组件实例被移动到节点树另一个位置时执行	
  //     console.log('component-constructor-page: ', 'lifetimes-moved') 
  //   },
  //   detached() {
  //     //在组件实例被从页面节点树移除时执行	
  //     console.log('component-constructor-page: ', 'lifetimes-detached') 
  //   },
  //   error() {
  //     //每当组件方法抛出错误时执行	
  //     console.log('component-constructor-page: ', 'lifetimes-error') 
  //   },

  // },

  // 生命周期函数，可以为函数，或一个在 methods 段中定义的方法名
  /********************此处的声明会被 lifetimes 字段中的声明覆盖******************/
  // created() {
  //   console.log('component-constructor-page: ', 'created') 
  // },
  // attached() {
  //   console.log('component-constructor-page: ', 'attached') 
  // },
  // ready() {
  //   console.log('component-constructor-page: ', 'ready') 
  // },
  // moved() {
  //   console.log('component-constructor-page: ', 'moved') 
  // },
  // detached() {
  //   console.log('component-constructor-page: ', 'detached') 
  // },
  // error() {
  //   console.log('component-constructor-page: ', 'error') 
  // },
  /********************此处的声明会被 lifetimes 字段中的声明覆盖******************/


  methods: {
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      console.log('component-constructor-page: ', 'onLoad')
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
      console.log('component-constructor-page: ', 'onReady')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
      console.log('component-constructor-page: ', 'onShow')
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
      console.log('component-constructor-page: ', 'onHide')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
      console.log('component-constructor-page: ', 'onUnload')
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
      console.log('component-constructor-page: ',  'onReachBottom')
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {
      console.log('component-constructor-page: ', 'onShareAppMessage')
    }
  }

})
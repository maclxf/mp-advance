// components/my/index.js
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

  },

  pageLifetimes: {
    show: function() {
      // 页面被展示
      console.log('my-component: ', 'pagelifetimes-show')
    },
    hide: function() {
      // 页面被隐藏
      console.log('my-component: ', 'pagelifetimes-ihde')
    },
    resize: function(size) {
      // 页面尺寸变化
      console.log('my-component: ', 'pagelifetimes-resiz')
    }
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在 methods 段中定义的方法名
    created() {
      //在组件实例刚刚被创建时执行	
      console.log('my-component: ', 'lifetimes-created') 
    },
    attached() {
      // 在组件实例进入页面节点树时执行	
      console.log('my-component: ', 'lifetimes-attached') 
    },
    ready() {
      //在组件在视图层布局完成后执行	
      console.log('my-component: ', 'lifetimes-ready') 
    },
    moved() {
      //在组件实例被移动到节点树另一个位置时执行	
      console.log('my-component: ', 'lifetimes-moved') 
    },
    detached() {
      //在组件实例被从页面节点树移除时执行	
      console.log('my-component: ', 'lifetimes-detached') 
    },
    error() {
      //每当组件方法抛出错误时执行	
      console.log('my-component: ', 'lifetimes-error') 
    },

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

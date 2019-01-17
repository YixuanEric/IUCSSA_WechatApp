Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    title:{
      type:String,
      value:"default title"
    },
    heading:{
      type:String,
      value:"default heading"
    },
    imageUrl:{
      type:String,
      value:"../../images/logo.jpeg"
    },
    url:{
      type:String,
      value:"../home/home"
    }
  },
  data: {
    // 这里是一些组件内部数据
    
    
  },
  methods: {
    // 这里是一个自定义方法
    tapHandler() {
      const self = this;
      console.log("tap");
      wx.navigateTo({
        url: self.properties.url
      })
    }
  }
})

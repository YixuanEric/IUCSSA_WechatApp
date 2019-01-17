Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    title: {
      type: String,
      value: "表格"
    }
  },
  data: {
    // 这里是一些组件内部数据
    
    showTypeArray:["请选择","歌曲/乐队","舞蹈","小品相声","杂技武术","文艺综合","互动游戏","其他"],
    index: 0
  },
  methods: {
    // 这里是一个自定义方法
    bindPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value,
      }, () => this.setData({ showType: this.data.showTypeArray[this.data.index] }))
    },
    inputHandler(e) {
      let label = e.target.id;
      console.log(label)
      this.setData({
        [label]: e.detail.value
      })
    },
    formSubmit() {
      if (!this.data.wechat || !this.data.phone || !this.data.showName || !this.data.showLength || !this.data.performerAmount || !this.data.textarea || !this.data.showType || this.data.showType == "请选择") {
        wx.showModal({
          title: '请完成表格',
          icon: 'none',
          duration: 2000
        });
      } else {
        const formData = {
          showName: this.data.showName,
          showType: this.data.showType,
          wechat: this.data.wechat,
          phone: this.data.phone,
          textarea: this.data.textarea,
          performerAmount: this.data.performerAmount,
          showLength:this.data.showLength
        }
        console.log(JSON.stringify(formData))
        wx.request({
          url: 'https://529855693.iucssa.xyz/weapp/springGalaShowRegisterForm',
          data: formData,
          method: 'post',
          success: res => {
            console.log(res.data)
            wx.showToast({
              title: '提交成功',
              icon: 'success',
              duration: 3000,
              success: setTimeout(
                () => {
                  wx.navigateBack({
                    delta: 1
                  })
                }, 4000)
            })

          },
          fail: e => {
            console.log(e);
          }
        })
      }
    }
  }
}
)

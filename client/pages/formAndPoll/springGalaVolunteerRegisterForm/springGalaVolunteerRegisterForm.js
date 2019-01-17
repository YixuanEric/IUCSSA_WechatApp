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

    showTypeArray: ["请选择", "志愿者", "主持人"],
    gradeArray: ["请选择", "大一", "大二", "大三", "大四", "研究生及博士生", "其他"],
    index: 0,
    gradePickerIndex: 0
  },
  methods: {
    // 这里是一个自定义方法
    bindPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value);
      if (e.target.id === "grade") {
        this.setData({
          gradePickerIndex: e.detail.value,
        }, () => this.setData({
          grade: this.data.gradeArray[this.data.gradePickerIndex]
        }))
      } else {
        this.setData({
          index: e.detail.value,
        }, () => this.setData({
          registrationType: this.data.showTypeArray[this.data.index]
        }))
      }
    },
    inputHandler(e) {
      let label = e.target.id;
      console.log(label)
      this.setData({
        [label]: e.detail.value
      })
    },
    formSubmit() {
      if (!this.data.wechat || !this.data.phone ||  !this.data.textarea || !this.data.name || this.data.registrationType == "请选择" || this.data.grade == "请选择") {
        wx.showModal({
          title: '请完成表格',
          icon: 'none',
          duration: 2000
        });
      } else {
        const formData = {
          name: this.data.name,
          registrationType: this.data.registrationType,
          grade:this.data.grade,
          wechat: this.data.wechat,
          phone: this.data.phone,
          textarea: this.data.textarea,        
        }
        console.log(JSON.stringify(formData))
        wx.request({
          url: 'https://529855693.iucssa.xyz/weapp/springGalaVolunteerRegisterForm',
          data: formData,
          method: 'post',
          success: res => {
            console.log(res.data)
            wx.showToast({
              title: '提交成功',
              icon: 'success',
              duration: 3000,
              success: setTimeout(
                ()=>{wx.navigateBack({
                delta: 1
              })},4000)
            })

          },
          fail: e => {
            console.log(e);
          }
        })
      }
    }
  }
})
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    title:{
      type:String,
      value:"表格"
    }
  },
  data: {
    // 这里是一些组件内部数据
    gradeArray:["请选择","大一","大二","大三","大四","研究生","其他"],
    index:0
  },
  methods: {
    // 这里是一个自定义方法
    bindPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value,
      },()=>this.setData({grade:this.data.gradeArray[this.data.index]}))
    },
    inputHandler(e){
      let label = e.target.id;
      console.log(label)
      this.setData({
        [label]: e.detail.value
      })
    },
    formSubmit(){
      if(!this.data.wechat){
        wx.showModal({
          title: '微信号是必填项哟',
          icon: 'none',
          duration: 2000
        });

      } else if (!this.data.grade) {
        wx.showModal({
          title: '年级是必填项哟',
          icon: 'none',
          duration: 2000
        });
      }else{
        const formData = {
          name : this.data.name,
          email: this.data.email,
          wechat:this.data.wechat,
          grade:this.data.grade,
          textarea:this.data.textarea
        }
        console.log(JSON.stringify(formData))
        wx.request({
          url: 'https://529855693.iucssa.xyz/weapp/formSubmit',
          data:formData,
          method: 'post',
          success: res =>{
            console.log(res.data)
             wx.showToast({
              title: '提交成功',
              icon: 'success',
              duration: 3000,
              success: wx.navigateBack({
                delta: 1
              })
            })
            
          },
          fail: e=>{
            console.log(e);
          }
        })
        }
      }
    }
  }
)

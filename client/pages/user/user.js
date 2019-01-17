// pages/home/home.js
Page({
  data: {
    text: 'This is page data.',
    apiKey:"AIzaSyAxqRVR1Bjhc4IRcD_z4YcX9kLuhlneeMY"
  },
  onLoad() {
   
  },
  onReady() {
    // Do something when page ready.
    console.log("page ready now. Here is the data: "+ JSON.stringify(this.data));
  },
  onShow() {
    // Do something when page show.
  },
  onHide() {
    // Do something when page hide.
  },
  onUnload() {
    // Do something when page close.
  },
  onPullDownRefresh() {
    // Do something when pull down.
  },
  onReachBottom() {
    // Do something when page reach bottom.
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onPageScroll() {
    // Do something when page scroll
  },
  onResize() {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // Event handler.
  viewTap() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  loginButton(event){
    wx.login({
      success(res) {
        if (res.code) {
          // 发起网络请求
          console.log("got the code" +  res.code);
          wx.request({
            url: 'https://cgpnbzln.qcloud.la',
            data: {
              code: res.code
            },
          success(res){
              console.log("request successful " + res.data);
          }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  setAvatar(){
    wx.getUserInfo({
      success(res) {
        const userInfo = res.userInfo
        const nickName = userInfo.nickName
        const avatarUrl = userInfo.avatarUrl
        const gender = userInfo.gender // 性别 0：未知、1：男、2：女
        const province = userInfo.province
        const city = userInfo.city
        const country = userInfo.country
        this.setData({ avatarUrl }, () => console.log(JSON.stringify(this.data)));
      }
    })

  },
  customData: {
    hi: 'MINA'
  }
})
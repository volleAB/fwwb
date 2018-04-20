var app = getApp()
var to1;
Page({
  data: {
  },

  // 获取输入账号 
  emailInput: function (e) {
    this.setData({
      email: e.detail.value
    })
    console.log(e.detail.value)
  },

  // 激活码
  code: function () {
    to1 = app.globalData.token;
    var email = this.data.email;
    wx.request({
      url: 'http://119.28.179.110/recycle/user/identify.action',
      method:'POST',
      data: {
        token: to1,
        email: email
      },
      success: function (res) {
        console.log(res.data);
        wx.showToast({
          title: '提交成功',
          duration: 1500
        })
        setTimeout(
          function e() {
            wx.navigateTo({
              url: '../code/code',
            })
          },2000)
      }
    })
  }

 })
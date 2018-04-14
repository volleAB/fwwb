Page({
  data: {
    phone: ''
  },

  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 激活码
  code: function () {
    wx.navigateTo({
      url: '../code/code',
    })
  }

 })
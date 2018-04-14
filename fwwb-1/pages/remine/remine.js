var app = getApp()
Page({
  data: {
    userInfo: {},
    motto: 'Hello World',
    // orderItems
  },

  serve: function () {
    wx.navigateTo({
      url: '../remine/serve/serve',
    })
  },

  order: function () {
    wx.navigateTo({
      url: '../mine/order/order',
    })
  },
  recharge: function () {
    wx.navigateTo({
      url: '../remine/recharge/recharge',
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
      // wx.request({
      //   url: '',
      //   method: 'POST',
      //   data: {
      //     total: myprice
      //   }

      // })
  }
})

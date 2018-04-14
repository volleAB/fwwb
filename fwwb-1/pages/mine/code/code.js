// pages/mine/code/code.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  code:''
  },


  formSubmit: function (e) {
    var code = e.detail.value.code;
    var that = this;
    wx.request({
      url: '',
      method: 'POST',
      data: {
        code: code
      },
      header: {
        'Content-Type': 'application/json'
      },
      

      success: function (res) {
        console.log('data:', res.data)
        if (1) {

          wx.showToast({
            title: '认证成功，请重新登录',
            icon: 'success',
            duration: 2000
          })
          setTimeout(function () {
            wx.redirectTo({
              url: '../login/index'
            })
          }, 3000)
        } else if (0) {
          wx.showToast({
            title: '激活码错误，认证失败',
            duration: 2000
          })
          setTimeout(function () {
            wx.redirectTo({
              url: '../code/code'
            })
          }, 3000)
        }
      }   



    
})
}
})
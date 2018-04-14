
var app = getApp();

Page({
  data: {
    showTopTips: false,
    errorMsg: ""
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    });
  },

  formSubmit: function (e) {
    //   
    var username = e.detail.value.username;
    var nickname = e.detail.value.nickname;
    var phone = e.detail.value.phone;
    var password = e.detail.value.password;
    var address = e.detail.value.address;
    
    var that = this;
   
    wx.request({
      url: 'http://119.28.179.110/recycles/user/regist.action',
      method:'POST',
      data: {
        username:username,
        nickname:nickname,
        phone: phone,
        password: password,
        address:address 
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log('data:', res.data)
        wx.showModal({
          title: '注册状态',
          content: '注册成功点击登录',
          success: function (res) {
              
              wx.redirectTo({
                url: '../login/index'
              })  
          }
        })
      }  
  })
  }
}) 
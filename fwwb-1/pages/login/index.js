var app = getApp();

Page({
  data: {
    h: app.winHeight,
    msg: '',
    username: '',
    password: '',
    id: [
      '普通用户',
      '回收员',
      '管理员'
    ],
    index: 0
  },
  formBindSubmit: function (e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(e.detail.value.username)
    wx.request({
      url: 'http://119.28.179.110/recycle/user/login.action', 
      method: 'POST',
      // header: {
      //   'Content-Type': 'application/json'
      // },
      data: {
        "username": e.detail.value.username,
        "password": e.detail.value.password
      },
      success: function (res) {
        // console.log('data:', res.data[5].token);
        var getAppInfo = app.globalData.token;
        getApp().globalData.token = res.data[5].token;
        console.log(res.data, app.globalData.token);
        wx.reLaunch({
          url: '../home/home'
        }) 
      },
      fail: function (res) {
        console.log(res);
      },
    })
  },
  /**
 * 监听普通picker选择器
 */
  listenerPickerSelected: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: e.detail.value
    });
  },
})
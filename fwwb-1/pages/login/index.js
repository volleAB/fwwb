var app = getApp();

Page({

  data: {
    h: app.winHeight,
    msg: '',
    username: '',
    password: ''
  },

  onLoad: function () {
    // wx.login({
    //   success: function (res) {
    //     var code = res.code;
    //     var name = wx.getStorageSync("name")
    //     var pwd = wx.getStorageSync("pwd")
        // wx.getUserInfo({
        //   success: function (res) {
        //     wx.request({

        //       url: 'http://119.28.179.110/recycles/user/addGbalance.action',
        //       method: "POST",
        //       data: {
        //         username: name,
        //         password: pwd
        //       },
        //       fail: function (res) {
        //       },
        //       success: function (res) {
        //         console.log(res.data.message)
        //         var sessionId = res.data.contents.sessionId;
        //         var companySid = res.data.contents.companySid;
        //         app.data.session = sessionId;
        //         app.data.companySid = companySid;

        //         wx.switchTab({
        //           url: '../home/index'
        //         })
        //       }
        //     })
        //   }
        // })
    //   }
    // })
    // var that = this;
    // wx.getSystemInfo({
    //   success: function (res) {
    //     that.setData({
    //       h: res.windowHeight
    //     })

    //   }

    // })
    // var userName = wx.getStorageSync('name');
    // var userPassword = wx.getStorageSync('pwd');

    // console.log(userName);
    // // console.log(userPassword);
    // if (userName) {
    //   this.setData({ user: userName });
    // }
    // if (userPassword) {
    //   this.setData({ password: userPassword });
    // }
  },
  onLaunch: function () {

  },
  formBindSubmit: function (e) {
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(e.detail.value.username)
    wx.request({
      url: 'http://119.28.179.110/recycle/user/login.action', 
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        "username": e.detail.value.username,
        "password": e.detail.value.password
      },
      success: function (res) {
        console.log('data:', res.data)

      }
    })
  },
  listenerInput: function () {



  },



  onShow: function () {

  },

  // onLaunch: function () {
  //   wx.login({
  //     success: function (res) {
  //       var code = res.code;
  //       var name = wx.getStorageSync("name")
  //       var pwd = wx.getStorageSync("pwd")
  //       wx.getUserInfo({
  //         success: function (res) {
  //           wx.request({

  //             url: 'https://www.inteliagpf.cn/api/1.0/ll/system/account/login',
  //             method: "POST",
  //             data: {
  //               userNo: name,
  //               password: pwd
  //             },
  //             fail: function (res) {
  //             },
  //             success: function (res) {
  //               console.log(res.data.message)


  //               wx.switchTab({
  //                 url: 'pages/index/index'
  //               })
  //             }
  //           })
  //         }
  //       })
  //     }
  //   })
  // },
  onHide: function () {

  },

  onUnload: function () {

  },


  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },


  onShareAppMessage: function () {

  }
})
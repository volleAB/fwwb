// pages/admine/classify/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    price: ''
  },

  editSubmit: function (e) {
    var that = this;
    console.log(e)
    wx.request({
      url: 'http://119.28.179.110/recycle/category/add.action',
      method: 'POST',
      data: {
        cname: e.detail.value.name,
        cprice: e.detail.value.price
      },
      success: function (res) {
          wx.showToast({
            title:'保存成功',
            duration: 1500
        }),
        setTimeout(function e() {
            wx.reLaunch({
              url: '../../index'
            })
        },2000)
        
      }
    })
    //console.log(e.detail.value.name);
  }
})
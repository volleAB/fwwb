// pages/admine/classify/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // getmes: function (e) {
  //   var that = this;
  //   var id = e.currentTarget.dataset;
  //   console.log(id);
  // },

  editSubmit: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.editid;
    wx.request({
      url: 'http://119.28.179.110/recycle/category/add.action',
      method: 'POST',
      data: {
        cname: e.detail.value.name,
        // cprice: price
      },
      success: function (res) {
        if (res.data.status == 200) {
          wx.showToast({
            title: '充值成功',
            duration: 1500
          })
        } else {
          wx.showToast({
            title: '充值失败',
            duration: 1000
          })
        }
      }
    })
  }
})
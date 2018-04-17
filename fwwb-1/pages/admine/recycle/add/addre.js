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
      // header: {
      //   "Content-Type": "application/x-www-form-urlencoded"
      // },
      method: 'POST',
      data: {
        cname: e.detail.value.name,
        // cprice: price
      },
      success: function (res) {
        if (res.data.status == 200) {
          wx.showToast({
            title: '保存成功',
            duration: 1500
          })
        } else {
          wx.showToast({
            title: '保存失败',
            duration: 1000
          })
        }
        console.log(e.detail.value.name)
      }
    })
  }
})
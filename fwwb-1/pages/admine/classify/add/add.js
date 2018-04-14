// pages/admine/classify/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  editSubmit: function (e) {
    var that = this;
    var id = event.currentTarget.dataset.editid;
    wx.request({
      url: 'id=' + id,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'GET',
      data: {
          name: e.detail.value.name
      },
      success: function (res) {
        if (res.data.status == 0) {
          wx.showToast({
            title:'保存成功',
            duration: 1500
          })
        } else {
          wx.showToast({
            title:'保存失败',
            duration: 1000
          })
        }
  }
})
 }
})
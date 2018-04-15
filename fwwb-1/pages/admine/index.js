var app = getApp();
Page({
  data: {
  },
  navbarTapC: function () {
   wx.navigateTo({
     url: 'classify/classify',
   })
  },
  navbarTapR: function () {
    wx.navigateTo({
      url: 'recycle/recycle',
    })
  },
  navbarTapU: function () {
    wx.navigateTo({
      url: 'user/user',
    })
  },
  navbarTapL: function () {
    wx.navigateTo({
      url: 'list/list',
    })
  }, 
  deleteClick: function (e){
    var id = e.currentTarget.id;
    console.log(id);
    wx.request({
      url: 'http://119.28.179.110/recycle/category/delete.action',
      data: {
        cid : id
      },
      method: 'POST',
      success: function (res) {
        if (1) {
          wx.showToast({
            title:'删除成功',
            duration: 1500
          }) 
        } else {
          wx.showToast({
            title:'删除失败',
            duration: 1000
          })
        }
      } 
  })
  },
  add: function () { 
    wx.navigateTo({
      url: 'classify/add/add',
    }) 
  },
  editClick: function () {
    wx.navigateTo({
      url: 'classify/edit/edit',
    })
  },
  onLoad: function (options) {
    var that = this;
      wx.request({
        url: 'http://119.28.179.110/recycle/category/select.action',
        method: 'POST',
        data: {},
        success: function (res) {
          that.setData({
            categories: res.data.list,
          })
          console.log(res.data);
        }
      })
    },
  onPullDownRefresh: function () {
    wx.startPullDownRefresh()
  }
})
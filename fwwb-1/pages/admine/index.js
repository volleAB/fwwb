var app = getApp()
Page({
  data: {
    categories: [
      {
        id: "001",
        name: "可回收"
      },
      {
        id: "002",
        name: "循环利用"
      },
      {
        id: "003",       
        name: "不可回收"
      }
    ]
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
  deleteClick: function (event){
    var id = event.currentTarget.dataset.deleteid;
    wx.request({
      url: '?id=' + id,
      data: {},
      method: 'GET',
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
  }   
})

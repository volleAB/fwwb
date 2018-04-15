// pages/admine/classify/edit/edit.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cname:''
  },
  cnameInput: function (e) {
    this.setData({
      cname: e.detail.value,
    })
  },
  show: function (e) {
    console.log(this.data.cname)
    wx.request({
      url: 'http://119.28.179.110/recycle/category/edit.action',
      data: {
        cid: '',
        cname: cname,
        cprice: ''
      }
    })
    wx.navigateTo({
      url:'pages/admine/index'
    })
  },

})
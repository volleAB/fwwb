// pages/remine/recharge/recharge.js
var app = getApp()
var to1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  editSubmit: function (e) {
    var that = this;
    to1 = app.globalData.token;
    console.log(e)
    wx.request({
      url: 'http://119.28.179.110/recycle/guser/addBalance.action',
      method: 'POST',
      data: {
        token: to1,
        gbalance: e.detail.value.name
      },
      success: function (res) {
        wx.showToast({
          title: '保存成功',
          duration: 1500
        })
        console.log(e.detail.value.name)
        setTimeout(function e() {
          wx.reLaunch({
            url: '../remine'
          })
        },2000)
        
      },
    })
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
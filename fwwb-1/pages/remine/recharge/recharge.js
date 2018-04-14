// pages/remine/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  submit: function (e) {
    var money=e.detail.value.money;
    var that=this;
    wx.request({
      url: '',
      data:{
        money:money
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/json;charset=UTF-8;'
      },
      success: function (res) {
        wx.showToast({
          title: '已充值',
          icon: 'success',
          duration: 3000
        });
        this.setData({
          showDialog: !this.data.showDialog
        });
      }
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
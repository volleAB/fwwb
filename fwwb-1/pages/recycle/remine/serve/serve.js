// pages/mine/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // orders: [
    //   {
    //     goodslist: [
    //       {
    //         id: "001",
    //         imgUrl: "../../../images/bottomNav/bottle.jpg",
    //         name: "彩色瓶子",
    //         num: "3",
    //         price: "1.00"
    //       },
    //       {
    //         id: "002",
    //         imgUrl: "../../../images/bottomNav/gold.jpg",
    //         name: "废旧金属",
    //         num: "5",
    //         price: "5.00"
    //       }
    //     ],
    //     totalprice: "10元"
    //   }
    // ]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://119.28.179.110/recycle/order/order.action',
      method: 'POST',
      data: {
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          orders: res.data.list
        })
      },
    })
  },
sub:function()  {
    
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
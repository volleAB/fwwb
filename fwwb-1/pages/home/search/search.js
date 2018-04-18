var app = getApp();
var searchValue = ''
// pages/search/search.js  
Page({
  data: {
    centent_Show: true,
    searchValue: '',
    img: '',
    nanshen_card: ''
  },
suo: function(e) {
      var that = this;
      var value = that.data.searchValue;
      console.log(value)
      wx.request({
        url: 'http://119.28.179.110/recycle/garbage/search.action',//这里填写后台给你的搜索接口  
        method: 'post',
        data: { cname: value },
        success: function (res) {
          if (res.data.length == 0) {
            that.setData({
              centent_Show: false,
            });
          }
          that.setData({
            nanshen_card: res.data,
          });
          console.log(res.data);
        },
        fail: function (e) {
          wx.showToast({
            title: '网络异常！',
            duration: 2000
          });
        },
      });
    },
  searchValueInput: function (e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value,
    });
    // console.log(this.data.searchValue);
  },
  //suo: 
});  
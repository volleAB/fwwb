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
  onLoad: function () {
  },
  searchValueInput: function (e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value,
    });

  },
  suo: function (e) {
     var that = this;
     var search = that.data.searchValue;
     console.log(search);
    wx.request({
      url: 'http://119.28.179.110/recycle/garbage/select.action',//这里填写后台给你的搜索接口  
      method: 'post',
      data: { search: search},
      success: function (res) {

      that.setData({
        search: res.data.list
      });

      search = res.data.list;
      console.log(res.data)
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    });
  }
});  
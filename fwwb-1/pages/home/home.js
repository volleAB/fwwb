var id = '';
var goodslist = '';
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
// pages/home/home.js
    navbar: ['护肤', '彩妆', '香水', '个人护理'],
    currentTab: 0,
    imgUrls: [
      "../../images/bottomNav/bottle.jpg",
      "../../images/bottomNav/gold.jpg",
      "../../images/bottomNav/clothes.jpg"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
},

onLoad: function (e) {
  var that = this;
  wx.request({
    url: 'http://119.28.179.110/recycle/garbage/index.action',
    method: 'POST',
    dataType: '',
    success: function (res) {
      that.setData({
        goodslist: res.data.list
      })
      goodslist = res.data.list;
      console.log(goodslist)
    },
  })
},

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function () {

},

//获取id
getid : function (e) {
  console.log(e);
  id = e.currentTarget.id;
},
//跳转
bindFocus: function (e) {
    wx.navigateTo({
      title: "goback",
      url: './detail/index?id=' + id
    })
  },
suo: function (e) {
  wx.navigateTo({
    url: '../home/search/search'
  })
} 
})
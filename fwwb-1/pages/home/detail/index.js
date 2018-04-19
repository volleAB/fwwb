var app = getApp();
var id = '';
var wei = '';
Page({
  data: {
    wei: '',
    motto: 'wzh ... ',
    isLike: true,
    // banner
    imgUrls: [
      "../../../images/bottomNav/bottle.jpg",
      "http://mz.djmall.xmisp.cn/files/product/20161201/148057922659_middle.jpg",
      "http://mz.djmall.xmisp.cn/files/product/20161201/148057923813_middle.jpg",
      "http://mz.djmall.xmisp.cn/files/product/20161201/148057924965_middle.jpg",
      "http://mz.djmall.xmisp.cn/files/product/20161201/148057925958_middle.jpg"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  }, 
  getWei: function (e) {
      wei = e.detail.value;
      console.log(wei);
      this.setData({
        wei: wei,
      });
  },
  addcart: function (e) {
    var getAppInfo = app.globalData.token;
    console.log(app.globalData.token,wei);
    wx.request({
      url: 'http://119.28.179.110/recycle/cart/addCart.action',
      method:'POST',
      data: {
        token: getAppInfo,
        gid: id,
        weight: wei
      },
      success: function(res) {
        wx.showToast({
          title: '添加成功！',
          duration: 1500
        })
        wx.reLaunch({
          url: '../home'
        })
      }
    })
  },
  // 跳到购物车
  toCart: function () {
    wx.redirectTo({
    url: '../cart/cart'
  })
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },
  
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    that.setData({
      id: options.id,
    });
    id = options.id,
    wx.request({
      url: 'http://119.28.179.110/recycle/garbage/detail.action',
      data: {
        gid : id
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        that.setData({
          detail: res.data
        })
        console.log(res.data);
      },
      fail: function () {
        console.log("对不起，请求出错了！");
      }, 
      complete: function () {
      }
    });
    console.log(options.id);
  }
})
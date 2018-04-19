var app = getApp();
var cart = '';
var to1 = '';
console.log(to1)
Page({
  data: {
    iscart: false,
    count: 1,   //商品数量默认是1
  },
  onLoad: function (e) {
    var that = this;
    to1 = app.globalData.token;
    console.log(to1,typeof to1)
    setTimeout(function e() {
      console.log(to1+"pppp")
      wx.request({
        url: 'http://119.28.179.110/recycle/cart/select.action',
        method: 'POST',
        data: {
          token: to1
        },
        success: function (res) {
          that.setData({
            cart: res.data.list
          })
          cart = res.data.list;
          console.log(res, 'aaaa');
          to();
        }
      })
    },1000)
    setTimeout(function (){
    console.log(cart.length,cart[0])
    if(cart.length == 0) {
      console.log('add');
      that.setData({
        iscart: false
      });
    }
    else {
      that.setData({
        iscart: true
      })
    }
    },2000)
    function to() {
      var total = 0;
      for (var i = 0; i < cart.length; i++) {
        total =total + cart[i].garbage.category.cprice * cart[i].weight;
        console.log(total);
      }
      that.setData({
        total: total
      }) 
    }
  },
  cleanAll() {
    wx.request({
      url: 'http://119.28.179.110/recycle/cart/clear.action',
      method: 'POST',
      data:{
        token: to1
      },
      success: function(res){
        wx.showToast({
          title: '清空成功',
          duration: 1500
        })
      }
    })
    wx.reLaunch({
      url: '../home/home'
    })
  },
  delGoods(e) {
    console.log(e)
    wx.request({
      url: 'http://119.28.179.110/recycle/cart/delete.action',
      method: 'POST',
      data:{
        gid: e.currentTarget.id
      }, 
      success: function(res) {
        wx.showToast({
          title: '删除成功',
          duration: 1500
        })
      },
    })
    wx.navigateTo({
      title: "goback",
      url: '../home/home'
    })
  },
  toBuy() {
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 3000
    });
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
}) 
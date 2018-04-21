
var id = '';
Page({
  data: {
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

    // 商品详情介绍
    // detail:[{
      
    //   id: "001",
    //   name:"彩色杯子",
    //   price: "1.00",
    //   imgUrl: "../../images/bottomNav/bottle.jpg",
    //   detailImg: [
    //     "http://7xnmrr.com1.z0.glb.clouddn.com/detail_1.jpg",
    //     "http://7xnmrr.com1.z0.glb.clouddn.com/detail_2.jpg",
    //     "http://7xnmrr.com1.z0.glb.clouddn.com/detail_3.jpg",
    //     "http://7xnmrr.com1.z0.glb.clouddn.com/detail_4.jpg",
    //     "http://7xnmrr.com1.z0.glb.clouddn.com/detail_5.jpg",
    //     "http://7xnmrr.com1.z0.glb.clouddn.com/detail_6.jpg"
     
    //   ]
    //  } ]
    
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
 
  // 跳到购物车
  toCart: function () {
    wx.redirectTo({
    url: '../cart/cart'
  })
  },


  addcart: function (e) {
    this.setData({
      toastHidden: false
    });
    // 遍历列表 与 购物车列表  
    for (var i in this.data.detail) {
      // 列表中某一项item的id == 点击事件传递过来的id。则是被点击的项  
      if (this.data.detail[i].id == e.target.id) {
        // 给goodsList数组的当前项添加count元素，值为1，用于记录添加到购物车的数量  
        this.data.detail[i].count = 1;
        // 获取购物车的缓存数组（没有数据，则赋予一个空数组）  
        var arr = wx.getStorageSync('cart') || [];
        // 如果购物车有数据  
        if (arr.length > 0) {
          // 遍历购物车数组  
          for (var j in arr) {
            // 判断购物车内的item的id，和事件传递过来的id，是否相等  
            if (arr[j].id == e.target.id) {
              // 相等的话，给count+1（即再次添加入购物车，数量+1）  
              arr[j].count = arr[j].count + 1;
              // 最后，把购物车数据，存放入缓存（此处不用再给购物车数组push元素进去，因为这个是购物车有的，直接更新当前数组即可）  
              try {
                wx.setStorageSync('cart', arr)
              } catch (e) {
                console.log(e)
              }
              // 返回（在if内使用return，跳出循环节约运算，节约性能）  
              return;
            }
          }
          // 遍历完购物车后，没有对应的item项，把goodslist的当前项放入购物车数组  
          arr.push(this.data.detail[i]);
        }
        // 购物车没有数据，把item项push放入当前数据（第一次存放时）  
        else {
          arr.push(this.data.detail[i]);
        }
        // 最后，把购物车数据，存放入缓存  
        try {
          wx.setStorageSync('cart', arr)
          // 返回（在if内使用return，跳出循环节约运算，节约性能）  
          return;
        } catch (e) {
          console.log(e.target.id);
        }
      }
    }
    console.log()
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
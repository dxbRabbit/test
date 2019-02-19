//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    advertiseImage:'http://img8.zol.com.cn/bbs/upload/21650/21649969.jpg',
    currentIndex :0,
    locationAddr : "最新上架：10条",
    imgUrls: [
      'http://xdt.52cfzy.com/image/app_xz.jpg',
      'http://xdt.52cfzy.com/image/xzindex1.jpg',
      'http://xdt.52cfzy.com/image/xzindex2.jpg'
    ],
    colorList: [
      'item-red',
      'item-aqua',
      'item-blue'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swiper_height:'140px'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady : function(){
   
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      // wx.getUserInfo({
      //   success: res => {
      //     app.globalData.userInfo = res.userInfo
      //     this.setData({
      //       userInfo: res.userInfo,
      //       hasUserInfo: true
      //     })
      //   }
      // })
    }
    // setInterval(function(){
    //     // console.log(new Date());  

   
    console.log(this.data.advertiseImage)
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        // console.log(this);
        // this.setData({
        // locationAddr: res.latitude + "|" + res.longitude
        // })
        console.log(res.latitude + "|" + res.longitude)
      }
    })

  },
  getUserInfo: function(e) {
    console.log(e)
    console.log("-------------------")
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPullDownRefresh: function () {
    // 用户触发了下拉刷新操作
    // 拉取新数据重新渲染界面
    console.log("-------------------用户触发了下拉刷新操作")
    // wx.stopPullDownRefresh() // 可以停止当前页面的下拉刷新。
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    console.log('onPullDownRefresh', new Date())
  
  }
})

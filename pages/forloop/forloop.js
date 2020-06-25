// pages/forloop/forloop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: ['三国演义', "水浒传", "西游记", "红楼梦"],
    lines: [{
      "id": 1,
      "name": "itgoyo1"
    },{
      "id": 2,
      "name": "itgoyo2"
    },{
      "id": 3,
      "name": "itgoyo3"
    },{
      "id": 4,
      "name": "itgoyo4"
    }
  ]

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

  },

  tapEvent:function(evnet){
    var lines = this.data.lines;
    lines.splice(0,0,{id:5
    ,name:'switch5'})

    this.setData({
      lines:lines
    })


  }
})
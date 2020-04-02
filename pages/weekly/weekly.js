Page({
  data: {
    weeklyMovies:[
      {
        id:"1291841",
        name: "教父2",
        picturePath: "/images/jf.jpg",
        comment: "最精彩的剧本，最真实的黑帮电影",
        isHighlyRecommoned: false
      },
      {
        id:"1295644",
        name: "这个杀手不太冷",
        picturePath: "/images/zhegeshashou.jpg",
        comment: "大叔和小萝莉的暖心故事",
        isHighlyRecommoned: true
      },
      {
        id: "1292722",
        name: "泰坦尼克号",
        picturePath: "/images/taitanic.jpg",
        comment: "失去的才是永恒的",
        isHighlyRecommoned: true
      },

    ],
    currentIndex : 0
  },
  onLoad: function(options){
    this.setData({
      currentIndex : this.data.weeklyMovies.length - 1
    })
  },
  f0:function(event){
    this.setData({
      currentIndex: this.data.weeklyMovies.length - 1
    })
  },
  f1:function(event){
    console.log(event.currentTarget.dataset.movieId);
    var movieId = event.currentTarget.dataset.movieId;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + movieId,
    })
  },
  onShareAppMessage: function(){
    return{
      title:"每周推荐"
    }
  }
})
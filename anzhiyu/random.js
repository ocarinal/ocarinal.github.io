var posts=["2025/04/30/关于时·刻APP的UI设计开发思路思考/","2025/04/30/星途APP UI设计复盘/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["2025/04/26/MAYA2026 软件安装教程/","2025/04/26/PR 2025软件分享安装教程/","2025/04/26/kirta 5.2.9 软件分享安装教程/","2025/04/26/PS 2025软件下载安装教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
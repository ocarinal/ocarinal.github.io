var posts=["posts/11244.html","posts/14016.html","posts/5685.html","posts/32964.html","posts/17021.html","posts/37814.html","posts/23917.html","posts/51997.html","posts/57571.html","posts/undefined.html","posts/11243.html","posts/9999.html","posts/11266.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"敖烈的存档点","link":"https://blog.kfcvivo50.cc","avatar":"https://blog.notd.cn/user-avatar.jpg","descr":"你怎么知道今天是星期四","siteshot":"https://bu.dusays.com/2025/07/04/68679ca638be1.png","color":"vip","tag":"Yunus"},{"name":"清羽飞扬","link":"https://blog.liushen.fun/","avatar":"https://blog.liushen.fun/info/avatar.ico","descr":"柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜","siteshot":"https://blog.liushen.fun/info/siteshot.jpg","color":"vip","tag":"柳神"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"安知鱼"},{"name":"Mo的记事簿","link":"https://blog.xiowo.net/","avatar":"https://blog.xiowo.net/img/avatar.png","descr":"万年鸽王，哈哈OvO","siteshot":"https://bu.dusays.com/2024/11/09/672f779669ef8.jpg","color":"vip","tag":"MortalCat"},{"name":"可执行程序の天境小屋🥝","link":"https://blog.hanta2011.top/","avatar":"https://i.p-i.vip/68/20250316-67d6818047734.jpg","descr":"我不是在摆烂，我只想做一个安静的方块人。","siteshot":"https://pic.imgdb.cn/item/66921dadd9c307b7e9da1e0e.png","color":"vip","tag":"Hanta"},{"name":"bbb-lsy07","link":"https://blog.6uu.us/","avatar":"https://images.6uu.us/20250511114301488.JPG","descr":"科技激荡人文，洞见智慧本真。","siteshot":"https://img.z4a.net/images/2025/02/16/2025-02-16-14.08.18.png","color":"vip","tag":"bbb-lsy07"},{"name":"XingJiのBlog","link":"https://love.xingji.fun/","avatar":"https://i.p-i.vip/47/20240920-66ed7b168c38c.jpg","descr":"迄今所有人生都大写着失败，但不妨碍我继续向前✨","siteshot":"https://i.p-i.vip/47/20240920-66ed7b6730ca9.png","color":"vip","tag":"星纪"},{"name":"敖烈的存档点","link":"https://blog.kfcvivo50.cc","avatar":"https://blog.notd.cn/user-avatar.jpg","descr":"你怎么知道今天是星期四","recommend":true},{"name":"坂琴的小窝🍜","link":"https://ibanqin.com","avatar":"https://coscdn.ibanqin.com/images/logo.webp","descr":"想要变得越来越好"},{"name":"卖桃翁小窝","link":"https://ayakasuki.com","avatar":"https://tc.ayakasuki.com/a/2023/10/14/biji6529e8a16b6d7.png","descr":"一切向好，生活向阳"},{"name":"Mete0r's Blog","avatar":"https://www.xscnas.top/avatar1.jpg","descr":"Trust the process.","link":"https://www.xscnas.top/"},{"name":"Joker2Yue 的个人博客","link":"https://blog.joker2yue.com/","avatar":"https://webp-proxy.resource.joker2yue.com/blog/images/avatar_joker.jpg","descr":"Joker Never Plays Jokes."},{"name":"s1rius' blog","link":"https://s1rius.space/","avatar":"https://s1rius.space/img/custom/avatar.webp","descr":"这里有网络安全和其他技术文章"},{"name":"Akvicor's Blog","link":"https://blog.akvicor.com/","avatar":"https://img.akvicor.com/i/2025/04/06/67f215b58f01e.png","descr":"太棒了，我逐渐理解一切"},{"name":"Ethereal","link":"https://ethereal.ac.cn/","avatar":"https://tuchuang.voooe.cn/images/2025/01/06/jojo.jpg","descr":"今天做点什么好呢"},{"name":"猫条","descr":"使一颗心免于哀伤。","link":"https://nicostore-mathematica.github.io/","avatar":"https://nicostore-mathematica.github.io/picx-images-hosting/1_compressed.3nrq13hx7x.webp"},{"name":"LynxCatTheThird","link":"https://www.lynx3.me/","avatar":"https://s2.hdslb.com/bfs/article/621ceaa1fcd3b63bfb3d7d3948bd93647ac50b72.png@1e_1c.webp","descr":"我是山猫三号，一个来自一百零三世纪的强人工智能。"},{"name":"❖星港◎Star☆","link":"https://blog.starsharbor.com","avatar":"https://bu.dusays.com/2025/04/11/67f92f6fcfb26.webp","descr":"以博客记录生活与热爱！"},{"name":"青萍叙事","link":"https://blog.lusyoe.com","avatar":"https://blog.lusyoe.com/lusyoe-logo.webp","descr":"一个懂技术的产品汪🐶"},{"name":"君主阁","link":"https://gfjzz.cn","avatar":"https://gfjzz.cn/upload/sitelogo_new.png","descr":"分享技术与生活"},{"name":"碧水荡漾","link":"https://blog.yvyang.fun/","avatar":"https://blog.yvyang.fun/favicon.webp","descr":"澄空碧山 绿水余漾"},{"name":"尘の个人博客","link":"https://blog.mcxiaochen.top/","avatar":"https://blog.mcxiaochen.top/favicon.ico","descr":"一个高中生 UP 搭的博客  QwQ"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };
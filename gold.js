fetch('https://api.t1qq.com/api/v1/tool/daygold?key=jzt0Z4Pfhk4FobYRIhteB6BBbn')
  .then(response => response.json())
  .then(data => {
    console.log("黄金行情返回数据：", data);

    if (data.code === 200) {
      const goldData = data.data.ShanghaiGoldExchange;
      const price = goldData.price;
      const changePercent = goldData.changePercentage;

      document.getElementById('gold-prise').textContent = price;
      const changeElement = document.getElementById('gold-change');

      // 判断涨跌方向并插入 Font Awesome 图标
      let iconClass = '';
      let color = '';
      if (changePercent.includes('-')) {
        iconClass = 'fa-arrow-down';
        color = 'green';
      } else {
        iconClass = 'fa-arrow-up';
        color = 'red';
      }

      changeElement.innerHTML = `<i class="fas ${iconClass}"></i> ${changePercent.replace('-', '')}`;
      changeElement.style.color = color;
    } else {
      document.getElementById('gold-prise').textContent = '获取失败';
      document.getElementById('gold-change').textContent = '';
    }
  })
  .catch(error => {
    console.error('黄金行情获取失败：', error);
    document.getElementById('gold-prise').textContent = '加载失败';
    document.getElementById('gold-change').textContent = '';
  });

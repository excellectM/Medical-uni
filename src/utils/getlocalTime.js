 function padZero(num) {
  return num < 10 ? '0' + num : num.toString();
}

 function getCurrentTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = padZero(now.getMonth() + 1);
  const day = padZero(now.getDate());
  const hours = padZero(now.getHours());
  const minutes = padZero(now.getMinutes());

  return `${year}-${month}-${day} ${hours}:${minutes}`;
  // console.log('生成时间:', timeStr);
}

 function createTimeTimer(callback, interval = 60000) {
  // 立即执行一次，避免初始延迟
  callback(getCurrentTime());

  // 创建定时器并返回ID
  return setInterval(() => {
    callback(getCurrentTime());
  }, interval);
}

export {
  getCurrentTime,
  createTimeTimer,
  padZero
}

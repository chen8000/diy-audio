
//全屏
export const scrToMax  = () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen()
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen()
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
  }
}

// 退出全屏
export const scrToMin = () => {
  if (document.cancelFullScreen) {
    document.cancelFullScreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen()
  }
}

// 格式化分钟数： 把秒转为 00:00
export const transTime = t => {
  let d = parseInt(t)
  let m = parseInt(d/60)
  let sec = d % 60 + ''
  let isM0 = ':'
  if (m == 0) {
      m = '00'
  } else if (m < 10 ) {
      m = '0'+m
  }
  if (sec.length == 1) {
      sec = '0' + sec
  }
  return m + isM0 + sec
}

// 查找元素是否有clss
export const hasClass = (ele, cls) => {
　　cls = cls || '';
　　if (cls.replace(/\s/g, '').length == 0) return false;
　　return new RegExp(' ' + cls + ' ').test(' ' + ele.className + ' ');
}

// 添加class
export const addClass = (ele, cls) => {
　　if (!hasClass(ele, cls)) {
　　　　ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
　　}
}

// 移除class
export const removeClass = (ele, cls) => {
　　if (hasClass(ele, cls)) {
　　　　let newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
　　　　while (newClass.indexOf(' ' + cls + ' ') >= 0) {
　　　　　　newClass = newClass.replace(' ' + cls + ' ', ' ');
　　　　}
　　　　ele.className = newClass.replace(/^\s+|\s+$/g, '');
　　}
}
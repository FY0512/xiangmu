function getStyle(ele, attr) {
    var style
    if (window.getComputedStyle) {
        style = window.getComputedStyle(ele)[attr]
    } else {
        style = ele.currentStyle[attr];
    }
    return style;
}

// 编写一个 事件监听的兼容处理函数
// 参数：事件源，事件类型，事件处理函数    
function addEvent(ele, type, fn) {
    // 判断是否有 addEventListener 
    if (window.addEventListener) {
        ele.addEventListener(type, fn)
    } else {
        ele.attachEvent('on' + type, fn)
    }
}

function move(ele, option, callback) {
    let speed;
    let len = 0;
    for (let key in option) {
        clearInterval(ele[key])
        len++;
        ele[key] = setInterval(() => {
            let x;
            if (key == 'opacity') {
                x = getStyle(ele, key) * 100
            } else {
                x = parseInt(getStyle(ele, key));
            }
            speed = (option[key] - x) / 5;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            x = x + speed;

            if (key == 'opacity') {
                ele.style[key] = x / 100;
            } else {
                ele.style[key] = x + 'px';
            }
            if (x == option[key]) {
                clearInterval(ele[key]);
                len--;
                if (len == 0) {
                    callback && callback();
                }
            }
        }, 50);
    }
}
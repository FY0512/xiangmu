let box = document.querySelector('.box');
let imgBox = document.querySelector('.imgBox');
let lis = document.querySelectorAll('.imgBox li');

let pointBox = document.querySelector('.pointBox');
let left = document.querySelector('.left');
let right = document.querySelector('.right');

let str = '';
lis.forEach((item, index) => {
    if (index == 0) {
        str += '<li class="active">' + (index + 1) + '</li>';
    } else {
        str += '<li>' + (index + 1) + '</li>';
    }
});
pointBox.innerHTML = str;

let points = document.querySelectorAll('.pointBox li');
let firstLi = lis[0].cloneNode(true);
let lastLi = lis[lis.length - 1].cloneNode(true);
imgBox.appendChild(firstLi);
imgBox.insertBefore(lastLi, lis[0]);

lis = lis = document.querySelectorAll('.imgBox li');
imgBox.style.width = lis[0].offsetWidth * lis.length + 'px';

let index = 1;
let timer = setInterval(() => {
    index++;
    autoPlay();
}, 1500);

box.onmouseover = () => {
    clearInterval(timer)
}
box.onmouseout = () => {
    timer = setInterval(() => {
        index++;
        autoPlay();
    }, 2000);
}

let flag = true;
left.onclick = function () {
    if (flag) {
        flag = false;
        index--;
        autoPlay()
    }

}
right.onclick = function () {
    if (flag) {
        flag = false;
        index++;
        autoPlay()
    }
}

function autoPlay() {
    for (var i = 0; i < points.length; i++) {
        points[i].classList.remove('active');
    }
    if (index == lis.length - 1) {
        points[0].classList.add('active');
    } else if (index == 0) {
        points[points.length - 1].classList.add('active');
    } else {
        points[index - 1].classList.add('active');
    }

    move(imgBox, {
        left: -index * 1130
    }, function () {
        if (index === lis.length - 1) {
            index = 1;
            imgBox.style.left = -index * 1130 + 'px';
        } else if (index == 0) {
            index = lis.length - 2;
            imgBox.style.left = -index * 1130 + 'px';
        }
        flag = true
    });
}
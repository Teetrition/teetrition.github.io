//UA
let IE = 0;
let dark = 0;
const UA = navigator.userAgent;
if (UA.indexOf('Trident') > -1) {
    IE = 1;
}
if (UA.indexOf('Chrome') > -1) {
    let chromeVerStart = UA.slice(UA.indexOf('Chrome') + 7);
    let chromeVerEnd = chromeVerStart.indexOf('.');
    let chromeVer = chromeVerStart.slice(0, chromeVerEnd);
    if (chromeVer < 76) {
        dark = 1;
    }
}

//Scroll Shadow
function getScrollTop() {
    let scrollPos;
    if (window.pageYOffset) {
        scrollPos = window.pageYOffset;
    }
    else if (document.compatMode && document.compatMode !== 'BackCompat') {
        scrollPos = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scrollPos = document.body.scrollTop;
    }
    return scrollPos;
}

const headerClassList = document.querySelector('header').classList;

window.onscroll = function () {
    let scrollPos = getScrollTop();
    if (scrollPos === 0) {
        headerClassList.add('no-shadow');
        headerClassList.remove('box-shadow');
    } else {
        headerClassList.add('box-shadow');
        headerClassList.remove('no-shadow');
    }
}

//IE Message
if (IE) {
    document.getElementById('obsolete').style.display = 'block';
}

//Switch
let narrowNav = document.querySelector('body>nav').classList;
function widgets() {
    narrowNav.toggle('nav-open');
    narrowNav.toggle('nav-closed');
}

window.onresize = narrowNavHide;
function narrowNavHide() {
    if (document.documentElement.clientWidth >= 648) {
        narrowNav.remove('nav-open');
        narrowNav.add('nav-closed');
    }
}

let tunePanel = document.querySelector('#tune-panel').classList;
function tune() {
    tunePanel.toggle('tune-panel-off');
    tunePanel.toggle('tune-panel-on');
}
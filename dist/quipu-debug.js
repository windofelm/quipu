/**
** utils.js
** version : 0.0.1
** authors : syntaxe, utils.js contributors
** license : MIT
** utils.com
**/
;
var quipu = (function () {

    function _isSame(x, y) {
        return x == y;
    }

    function _isNotSame(x, y) {
        return x != y;
    }

    function _isEmail(str) {
        var pattern = new RegExp("^(([^<>()\\[\\]\\\\.,;:\\s@']+(\\.[^<>()\\[\\]\\\\.,;:\\s@']+)*)|('.+'))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$");
        return pattern.test(str);
    }

    function _getUrlParameters(url) {

        return url.match(/([^?=&]+)(=([^&]*))/g).reduce(function (a, v) {
            return a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a;
        }, {});
    }

    function _isValidJSON(obj) {
        try {
            JSON.parse(obj);
            return true;
        } catch (e) {
            return false;
        }
    }

    function _rgbToHex(r, g, b) {
        return ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
    }

    function _maxCallback(acc, cur) {
        return Math.max(acc, cur);
        //return Math.max(acc.x, cur.x);
    }

    function _findMax(arr) {
        return arr.reduce(_maxCallback);
    }

    function _minxCallback(acc, cur) {
        return Math.min(acc, cur);
    }

    function _findMin(arr) {
        return arr.reduce(_minxCallback);
    }

    function _jsonParse(data) {
        return JSON.parse(data);
    }


    return{
        isSame: _isSame,
        isNotSame: _isNotSame,
        isEmail: _isEmail,
        getUrlParameters: _getUrlParameters,
        isValidJSON: _isValidJSON,
        rgbToHex: _rgbToHex,
        findMax: _findMax,
        findMin: _findMin,
        jsonParse: _jsonParse
    }
})();

console.log(quipu.isSame("1", 1)); // test
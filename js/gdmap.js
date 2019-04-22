

/*
window.onLoad  = function(){
    map = new AMap.Map("container", {
        resizeEnable: true,
        center: [116.30946, 39.937629],
        zoom: 3,
        mapStyle: 'amap://styles/darkblue',/!*地图风格*!/
    });

    district = new AMap.DistrictSearch(opts);//注意：需要使用插件同步下发功能才能这样直接使用
    district.search('中国', function(status, result) {
        if(status=='complete'){
            getData(result.districtList[0]);
        }
    });
}
var url = '//webapi.amap.com/maps?v=1.4.14&key=35380e9ca7fbd13031eb6a6bb9021581&plugin=AMap.DistrictSearch&callback=onLoad';
var jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);

var url_2 = '//webapi.amap.com/demos/js/liteToolbar.js';
var jsapi_2 = document.createElement('script');
jsapi_2.charset = 'utf-8';
jsapi_2.src = url_2;
document.head.appendChild(jsapi_2);

/!*var url = 'https://webapi.amap.com/maps?v=1.4.14&key=35380e9ca7fbd13031eb6a6bb9021581&plugin=AMap.DistrictSearch&callback=onLoad"';
var jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);*!/

var map, district, polygons = [], citycode;
var citySelect = document.getElementById('city');
var districtSelect = document.getElementById('district');
/!*var container_ = document.getElementById('container');*!/
/!*    var areaSelect = document.getElementById('street');*!/

//行政区划查询
var opts = {
    subdistrict: 1,   //返回下一级行政区
    showbiz:false  //最后一级返回街道信息
};

function getData(data,level) {
    var bounds = data.boundaries;
    if (bounds) {
        for (var i = 0, l = bounds.length; i < l; i++) {
            var polygon = new AMap.Polygon({
                map: map,
                strokeWeight: 1,
                strokeColor: '#0091ea',
                fillColor: '#80d8ff',
                fillOpacity: 0.2,
                path: bounds[i]
            });
            polygons.push(polygon);
        }
        map.setFitView();//地图自适应
    }

    //清空下一级别的下拉列表
    if (level === 'province') {
        citySelect.innerHTML = '';
        districtSelect.innerHTML = '';
        /!*            areaSelect.innerHTML = '';*!/
    } else if (level === 'city') {
        districtSelect.innerHTML = '';
        /!*            areaSelect.innerHTML = '';*!/
    } else if (level === 'district') {
        /!*            areaSelect.innerHTML = '';*!/
    }

    var subList = data.districtList;
    if (subList) {
        var contentSub = new Option('--请选择--');
        var curlevel = subList[0].level;
        var curList =  document.querySelector('#' + curlevel);
        curList.add(contentSub);
        for (var i = 0, l = subList.length; i < l; i++) {
            var name = subList[i].name;
            var levelSub = subList[i].level;
            var cityCode = subList[i].citycode;
            contentSub = new Option(name);
            contentSub.setAttribute("value", levelSub);
            contentSub.center = subList[i].center;
            contentSub.adcode = subList[i].adcode;
            curList.add(contentSub);
        }
    }
}
function search(obj) {
    //清除地图上所有覆盖物
    for (var i = 0, l = polygons.length; i < l; i++) {
        polygons[i].setMap(null);
    }
    var option = obj[obj.options.selectedIndex];
    var keyword = option.text; //关键字
    var adcode = option.adcode;
    district.setLevel(option.value); //行政区级别
    district.setExtensions('all');
    //行政区查询
    //按照adcode进行查询可以保证数据返回的唯一性
    district.search(adcode, function(status, result) {
        if(status === 'complete'){
            getData(result.districtList[0],obj.id);
        }
    });
}
function setCenter(obj){
    map.setCenter(obj[obj.options.selectedIndex].center)
}*/

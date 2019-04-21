var request = window.indexedDB.open("demo1", 0);

request.onerror = function (event) {
    console.log('数据库打开报错');
    alert("数据库打开成功");
};

var db;

request.onsuccess = function (event) {
    db = request.result;
    console.log('数据库打开成功');
    alert("数据库打开成功");
};
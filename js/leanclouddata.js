AV.init({ appId: "PRPaPd9srLr3f29041is7qL4-gzGzoHsz", appKey: "yyNfnMyG5B7dsp8DU36pgBy0"});

/*// 声明一个 Todo 类型
var Todo = AV.Object.extend('Todo');
var Query=new AV.Query("Todo");

function adddata(province,city,district, poptotal,areatotal,ploughtotal,fieldcropsdata,cashcropdata,dealerdata,shopkeeperdata,plantinglargedata) {
    // 新建一个 Todo 对象
    Query.equalTo('district', district);

    Query.find().then(function(results) {
        // 返回一个符合条件的 list
        if(results.length!=0)
        {
            console.log("数据库中有该数据");
            var obj = results[0];
            console.log(obj.attributes);
            for(var i=0;i<results.length;i++)
            {
                var todo = AV.Object.createWithoutData('Todo', results[i].id);
                todo.destroy().then(function (success) {
                    // 删除成功
                }, function (error) {
                    // 删除失败
                });
            }
        }
        else
            {
                console.log("数据库中无该数据");

            }
        var todo = new Todo();
        todo.set('province', province);
        todo.set('city', city);
        todo.set('district', district);
        todo.set('poptotal', poptotal);
        todo.set('areatotal', areatotal);
        todo.set('ploughtotal', ploughtotal);
        todo.set('fieldcropsdata', fieldcropsdata);
        todo.set('cashcropdata', cashcropdata);
        todo.set('dealerdata', dealerdata);
        todo.set('shopkeeperdata', shopkeeperdata);
        todo.set('plantinglargedata', plantinglargedata);

        todo.save().then(function (todo) {
            // 成功保存之后，执行其他逻辑.
            console.log('New object created with objectId: ' + todo.id);
        }, function (error) {
            // 异常处理
            console.error('Failed to create new object, with error message: ' + error.message);
        });
    }).catch(function(error) {
        // catch 方法写在 Promise 链式的最后，可以捕捉到全部 error
        console.log(error);
});
}

function querydata(district) {

/!*    var todo=new new AV.Query("Todo");*!/
    Query.equalTo('district', district);

    Query.find().then(function(results) {
        // 返回一个符合条件的 list
        if(results.length!=0)
        {
                    console.log("数据库中有该数据");
            var obj = results[0];
            console.log(obj.attributes);
        }
        else
            {
                        console.log("数据库中无该数据");
            }
/!*        console.log(obj.attributes);*!/

        /!*    obj.set('phone', '182xxxx5548');
            // save 方法也是一个异步方法，会返回一个 Promise，所以在此处，你可以直接 return 出去，后续操作就可以支持链式 Promise 调用
            return obj.save();*!/
    }).catch(function(error) {
        // catch 方法写在 Promise 链式的最后，可以捕捉到全部 error
        console.log(error);
    });
}*/

function add_addressdata(tablename,comparison,province,city,district, data) {
    var Todo = AV.Object.extend(tablename);
    var Query=new AV.Query(tablename);

    // 新建一个 Todo 对象
    Query.equalTo('district', comparison);

    Query.find().then(function(results) {
        // 返回一个符合条件的 list
        if(results.length!=0)
        {
            console.log("数据库中有该数据");
            var obj = results[0];
            console.log(obj.attributes);
            for(var i=0;i<results.length;i++)
            {
                var todo = AV.Object.createWithoutData('Todo', results[i].id);
                todo.destroy().then(function (success) {
                    // 删除成功
                }, function (error) {
                    // 删除失败
                });
            }
        }
        else
        {
            console.log("数据库中无该数据");
        }

        var todo = new Todo();
        todo.set('province', province);
        todo.set('city', city);
        todo.set('district', district);
        todo.set('totalarea', data[0].value);//总面积
        todo.set('totalpopulation', data[1].value);//总人口
        todo.set('totalareaunder', data[2].value);//耕地面积
        todo.set('wheatdata', data[3].value);//小麦
        todo.set('maizedata', data[4].value);//玉米
        todo.set('ricedata', data[5].value);//水稻
        todo.set('peanutdata', data[6].value);//花生
        todo.set('oilseeddata', data[7].value);//油菜
        todo.set('sorghumdata', data[8].value);//高粱
        todo.set('cottondata', data[9].value);//棉花
        todo.set('soybeandata', data[10].value);//黄豆
        todo.set('podatodata', data[11].value);//土豆

        todo.save().then(function (todo) {
            // 成功保存之后，执行其他逻辑.
            console.log('New object created with objectId: ' + todo.id);
        }, function (error) {
            // 异常处理
            console.error('Failed to create new object, with error message: ' + error.message);
        });
    }).catch(function(error) {
        // catch 方法写在 Promise 链式的最后，可以捕捉到全部 error
        console.log(error);

        var todo = new Todo();
        todo.set('province', province);
        todo.set('city', city);
        todo.set('district', district);
        todo.set('totalarea', data[0].value);//总面积
        todo.set('totalpopulation', data[1].value);//总人口
        todo.set('totalareaunder', data[2].value);//耕地面积
        todo.set('wheatdata', data[3].value);//小麦
        todo.set('maizedata', data[4].value);//玉米
        todo.set('ricedata', data[5].value);//水稻
        todo.set('peanutdata', data[6].value);//花生
        todo.set('oilseeddata', data[7].value);//油菜
        todo.set('sorghumdata', data[8].value);//高粱
        todo.set('cottondata', data[9].value);//棉花
        todo.set('soybeandata', data[10].value);//黄豆
        todo.set('podatodata', data[11].value);//土豆

        todo.save().then(function (todo) {
            // 成功保存之后，执行其他逻辑.
            console.log('New object created with objectId: ' + todo.id);
        }, function (error) {
            // 异常处理
            console.error('Failed to create new object, with error message: ' + error.message);
        });
    });
}

function add_merchantdata(tablename,comparison,province,city,district,lng,lat, data) {
    var Todo = AV.Object.extend(tablename);
    var Query=new AV.Query(tablename);

    // 新建一个 Todo 对象
    Query.equalTo('district', comparison);

    Query.find().then(function(results) {
        // 返回一个符合条件的 list
        if(results.length!=0)
        {
            console.log("数据库中有该数据");
            var obj = results[0];
            console.log(obj.attributes);
            for(var i=0;i<results.length;i++)
            {
                var todo = AV.Object.createWithoutData('Todo', results[i].id);
                todo.destroy().then(function (success) {
                    // 删除成功
                }, function (error) {
                    // 删除失败
                });
            }
        }
        else
        {
            console.log("数据库中无该数据");
        }

        var todo = new Todo();
        todo.set('province', province);
        todo.set('city', city);
        todo.set('district', district);
        todo.set('lng', lng);
        todo.set('lat', lat);
        todo.set('name', data[0].value);//姓名
        todo.set('phonenumber', data[1].value);//手机号
        todo.set('cars', data[2].value);//车辆
        todo.set('storage', data[3].value);//存储
        todo.set('wheatmarket', data[4].value);//小麦销售
        todo.set('peanutmarket', data[5].value);//花生销售
        todo.set('xinlianxinmarket', data[6].value);//心连心销售
        todo.set('woliwomarket', data[7].value);//沃利沃销售
        todo.set('shoulashoumarket', data[8].value);//手拉手销售
        todo.set('zefengmarket', data[9].value);//泽丰销售
        todo.set('shidanglimarket', data[10].value);//史丹利销售
        todo.set('sangningmarkket', data[11].value);//三宁销售

        todo.save().then(function (todo) {
            // 成功保存之后，执行其他逻辑.
            console.log('New object created with objectId: ' + todo.id);
        }, function (error) {
            // 异常处理
            console.error('Failed to create new object, with error message: ' + error.message);
        });
    }).catch(function(error) {
        // catch 方法写在 Promise 链式的最后，可以捕捉到全部 error
        console.log(error);

        var todo = new Todo();
        todo.set('province', province);
        todo.set('city', city);
        todo.set('district', district);
        todo.set('lng', lng);
        todo.set('lat', lat);
        todo.set('name', data[0].value);//姓名
        todo.set('phonenumber', data[1].value);//手机号
        todo.set('cars', data[2].value);//车辆
        todo.set('storage', data[3].value);//存储
        todo.set('wheatmarket', data[4].value);//小麦销售
        todo.set('peanutmarket', data[5].value);//花生销售
        todo.set('xinlianxinmarket', data[6].value);//心连心销售
        todo.set('woliwomarket', data[7].value);//沃利沃销售
        todo.set('shoulashoumarket', data[8].value);//手拉手销售
        todo.set('zefengmarket', data[9].value);//泽丰销售
        todo.set('shidanglimarket', data[10].value);//史丹利销售
        todo.set('sangningmarkket', data[11].value);//三宁销售

        todo.save().then(function (todo) {
            // 成功保存之后，执行其他逻辑.
            console.log('New object created with objectId: ' + todo.id);
        }, function (error) {
            // 异常处理
            console.error('Failed to create new object, with error message: ' + error.message);
        });
    });
}


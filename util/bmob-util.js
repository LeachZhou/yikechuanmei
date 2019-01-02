Bmob.initialize("c2215724b1a13a2bf6722719d1699972", "2dac26d62e335e10d37619778fb92da2");

/**
 * 添加数据
 * @param obj {
        "img":"",
        "title":"",
        "author":"",
        "time":""
    }
 */
function addImageScore(obj, callback) {
    var imageScore = Bmob.Object.extend("image");
    var imageScoreObject = new imageScore();
    imageScoreObject.save(obj, {
        success: function (object) {
            console.log("create object success, object id:" + object.id);
        },
        error: function (model, error) {
            console.log("创建数据失败");
        }
    });
}


/**
 * 获取指定时间数据
 * @param time 20190101
 */
function getImageScore(time, callback) {
    var imageScore = Bmob.Object.extend("image");
    var query = new Bmob.Query(imageScore);
    query.containedIn("time", time);
    query.find({
        success: function (object) {
            console.log(object);
            callback(object);
        },
        error: function (object, error) {
            console.log("获取数据失败");
        }
    });
}

/**
 * 查询所有数据
 * @param callback
 */

function getAllImageScore(page, callback) {
    page = page || 1;
    var imageScore = Bmob.Object.extend("image");
    var query = new Bmob.Query(imageScore);
    query.limit(100);
    query.skip((page - 1) * 100);
    query.find({
        success: function (object) {
            // console.log(object);
            callback(object);
        },
        error: function (object, error) {
            console.log("获取数据失败");
        }
    });
}

/**
 * 修改数据
 * @type {void | *}
 */

function modifyImageScore() {
    var GameScore = Bmob.Object.extend("GameScore");
    var query = new Bmob.Query(GameScore);
    query.get("4edc3f6ee9", {
        success: function (object) {
            // The object was retrieved successfully.
            object.set("score", 1338);
            object.save(null, {
                success: function (objectUpdate) {
                    console.log("create object success, object score:" + objectUpdate.get("score"));
                },
                error: function (model, error) {
                    console.log("create object fail");
                }
            });
        },
        error: function (object, error) {
            console.log("query object fail");
        }
    });


}


/**
 * 删除数据
 * @type {void | *}
 */
function deleteImageScore() {
    var GameScore = Bmob.Object.extend("GameScore");
    var query = new Bmob.Query(GameScore);
    query.get("4edc3f6ee9", {
        success: function (object) {
            // The object was retrieved successfully.
            object.destroy({
                success: function (deleteObject) {
                    console.log("delete success");
                },
                error: function (GameScoretest, error) {
                    console.log("delete fail");
                }
            });
        },
        error: function (object, error) {
            console.log("query object fail");
        }
    });
}
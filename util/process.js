/**
 * 读取文件获取文件内容
 * @param select file选择器
 * @param callback 回调返回文件内容
 */
function getFile(select, callback) {
    var objFile = $(select);
    if (objFile.value == "") {
        alert("不能空")
    }
    var files = objFile[0].files[0];
    var files = $(select).prop('files');//获取到文件列表
    if (files.length == 0) {
        alert('请选择文件');
    } else {
        var reader = new FileReader();//新建一个FileReader
        reader.readAsText(files[0], "UTF-8");//读取文件
        reader.onload = function (evt) { //读取完文件之后会回来这里
            var fileString = evt.target.result; // 读取文件内容
            callback(fileString);
        }
    }
}
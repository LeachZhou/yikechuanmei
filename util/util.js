/**
 * 获取斐波那契数列的前n项
 * @param num 前num项
 * @returns {number[]} 1,1,2,3,5,8,13,21
 */
function fib(num) {
    var arr = [];
    if (num == 1) {
        return arr = [1];
    } else if (num == 2) {
        return arr = [1, 1];
    } else {
        arr = [1, 1];
        var a = 1;
        var b = 1;
        var c = 2;
        for (var i = 2; i < num; i++) {
            arr.push(c);
            a = b;
            b = c;
            c = a + b;
        }
        return arr;

    }
}
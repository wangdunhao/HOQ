/**
 * Created by Lcg on 2018/12/24.
 */

$(document).ready(function () {
//        如果主体矩阵发生变化，则进行布局运算
    $("#MainMatrix").click(function () {
        //获取主体矩阵的偏移量
        // alert(213);
        //
        w=$('#table').outerWidth()/2-$('#MainMatrix').outerWidth()/2;


        $('#MainMatrix').css({
            // 'left': w,
            // 'top':100
        });


    })
});


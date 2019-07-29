/**
 * Created by Lcg on 2017/9/18.
 */
// 旋转中心为div中心点
var rotation = -90;
var uprota=-45;
jQuery.fn.rotate = function(degrees) {
    $(this).css({
        // '-webkit-transform' : 'rotate('+ degrees +'deg)',
        // '-moz-transform' : 'rotate('+ degrees +'deg)',
        // '-ms-transform' : 'rotate('+ degrees +'deg)',
        'transform' : 'rotate('+ degrees +'deg)'});
};
/*
$('#CflMatrix').rotate(uprota);

$('#ReqMatrix').rotate(rotation);
$('.TagMatrix').rotate(rotation);
$('.DDLMatrix').rotate(rotation);*/

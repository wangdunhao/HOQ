var projectId = 0;//项目Id
var projectName;//项目名
var appResult = null;//word报告
var appNameChinese = 'HOQ';//app中文名（必填）
var USER_NAME = '';//当前登录用户名
// 添加项目后，自定义操作
function addSelfDefine(result) {
    //上一层函数查看basicAction.js中addProject()函数
    /*
    * your code.....
    **/
    removedynamicDiv();//删除动态生成的div以删除matrix矩阵
    dynamicDiv();//动态生成矩阵div
    console.log("add project successful");
}
// 查看项目后，自定义操作
function checkSelfDefine(node, result) {
    let id = projectId;
    let getTableData = JSON.parse(result.content.appContent);
    console.log(getTableData);

    removedynamicDiv();//删除动态生成的div以删除matrix矩阵
    dynamicDiv();//动态生成矩阵div
    let CflMatrixdata = getTableData.tableData0;
    drawHOQ(CflMatrixdata,CflMatrix,29,29);

    let ReqMatrixdata = getTableData.tableData1;
    drawHOQ1(ReqMatrixdata,ReqMatrix,140,40);

    let DDLMatrixdata =getTableData.tableData2;
    drawHOQ2(DDLMatrixdata,DDLMatrix,140,90);

    let MainMatrixdata = getTableData.tableData3;
    let colWidths = [140, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40];
    drawHOQ3(MainMatrixdata,MainMatrix,colWidths,40);

    let TimMatrixdata = getTableData.tableData4;
    drawHOQ4(TimMatrixdata,TimMatrix,90,40);

    let TagMatrixdata = getTableData.tableData5;
    drawHOQ5(TagMatrixdata,TagMatrix,95,40);

    let WitMatrixdata = getTableData.tableData6;
    let colWidth = [140, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40];
    drawHOQ6(WitMatrixdata,WitMatrix,colWidth,40);

    let GoalMatrixdata = getTableData.tableData7;
    drawHOQ7(GoalMatrixdata,GoalMatrix,140,95);

    let AHPMatrixdata = getTableData.tableData8;
    let colWidth1 = [45, 100, 35];
    drawHOQ8(AHPMatrixdata,AHPMatrix,colWidth1,25);

    divRotate();
    layout();
    auto();

    console.log("check project successful");
}
//删除项目后，自定义操作
function removeSelfDefine(result) {
    // 上一层函数查看basicAction.js中removeProject()函数
    /*
    * your code.....
    **/
    console.log("remove project successful");
}
// 生成图片函数
function occorPicture(){
    var content=document.getElementById("dynamicDiv");
    html2canvas(content, {
        onrendered: function(canvas) {
            //添加属性
            canvas.setAttribute('id','thecanvas');
            //读取属性值
            // var value= canvas.getAttribute('id');
            document.getElementById('images').innerHTML = '';
            document.getElementById('images').appendChild(canvas);
        }
    });
}
// 保存文件函数
function saveFile(data, filename){
    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    save_link.href = data;
    save_link.download = filename;
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    save_link.dispatchEvent(event);
}
function downLoadPicture(){
    occorPicture();
    var oCanvas = document.getElementById("thecanvas");
    // 获取图片资源
    var img_data1 = Canvas2Image.saveAsPNG(oCanvas, true).getAttribute('src');
    saveFile(img_data1, 'HOQ' + new Date().toLocaleDateString() + '.png');
}
//预览图片
function btnDetailShow(){
    occorPicture();
    var modal = document.getElementById('myModal');
    images.style.display = "none";
}
//定制初始化内容
function setCustomContext() {
    var title = "质量屋App使用结果";
    var chap1 = "质量屋分析结果";
    title = "<h2>1 " + title + "</h2>";
    chap1 = "<h3>1.1 " + chap1 + "</h3>";
    canvg();  //将SVG格式的图片转化成canvas格式
    var canv0 = document.getElementById(dynamicDiv);

    var image0 = new Image();

    if (canv0 != null) {
        image0.src = canv0.toDataURL("image/png");
    }
    var editor = $("#WYeditor");
    editor.append(title,chap1,image0);
}
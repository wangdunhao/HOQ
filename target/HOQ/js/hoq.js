var hot0,hot1,hot2,hot3,hot4,hot5,hot6,hot7,hot8;//定义全局变量
//HOQ模板
function hoqTemplate() {
    removedynamicDiv();//删除动态生成的div以删除matrix矩阵
    dynamicDiv();//动态生成Div
    let CflMatrixdata = [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "]
    ];
    let CflMatrix = document.getElementById('CflMatrix');
    drawHOQ(CflMatrixdata,CflMatrix,29,29);

    let ReqMatrixdata = [
        ["权重"],
        ["增加与客户的沟通"],
        ["减少产品履行周期时间"],
        ["减少支持响应周期时间"],
        ["加强售后服务"],
        ["减少产品开发周期时间"],
        ["缩短新产品开发周期"],
        ["增加互联网广告"],
        ["提高员工激励"],
    ];
    let ReqMatrix = document.getElementById('ReqMatrix');
    drawHOQ1(ReqMatrixdata,ReqMatrix,140,40);

    let DDLMatrixdata = [
        ["底线"]
    ];
    let DDLMatrix = document.getElementById('DDLMatrix');
    drawHOQ2(DDLMatrixdata,DDLMatrix,140,90);

    let MainMatrixdata = [
        ["减少需求分析周期时间", " 1", " ", " ", " ", " ", " ", " ", " ", " "],
        ["增加设计投资", " 3", " ", " ", " ", " ", " ", " ", " ", " "],
        ["减少产品开发周期时间", "4 ", " ", " ", " ", " ", " ", " ", " ", " "],
        ["减少履行周期时间", " 3", " ", " ", " ", " ", " ", " ", " ", " "],
        ["提高客户满意度", "5 ", " ", " ", " ", " ", " ", " ", " ", " "],
        ["提高客户忠诚度", " 4", " ", " ", " ", " ", " ", " ", " ", " "],
        ["降低退款率", " 2", " ", " ", " ", " ", " ", " ", " ", " "],
        ["增加市场份额", "4 ", " ", " ", " ", " ", " ", " ", " ", " "],
        ["增加利润", "5 ", " ", " ", " ", " ", " ", " ", " ", " "],
        ["提高员工满意度", "3 ", " ", " ", " ", " ", " ", " ", " ", " "]
    ];
    let colWidths = [140, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40];
    let MainMatrix = document.getElementById('MainMatrix');
    drawHOQ3(MainMatrixdata,MainMatrix,colWidths,40);

    let TimMatrixdata = [
        ["3 days"],
        ["5 days"],
        ["15 days"],
        ["5 days"],
        [">95%"],
        [">50% "],
        ["<5%"],
        [">15%"],
        ["20 million"],
        [">80%"]
    ];
    let TimMatrix = document.getElementById('TimMatrix');
    drawHOQ4(TimMatrixdata,TimMatrix,90,40);

    let TagMatrixdata = [
        [" "],
        ["daily meeting"],
        ["5 days"],
        ["in 24 hours"],
        ["tel support"],
        ["15 days"],
        ["25 days"],
        ["3 min"],
        ["increase 25%"]
    ];
    let TagMatrix = document.getElementById('TagMatrix');
    drawHOQ5(TagMatrixdata,TagMatrix,95,40);

    let WitMatrixdata = [
        ["权重", " ", "9 ", "8 ", "6 ", " 5", " 4", "8 ", " 10", "4 "],
        ["相对权重", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    ];
    let colWidth = [140, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40];
    let WitMatrix = document.getElementById('WitMatrix');
    drawHOQ6(WitMatrixdata,WitMatrix,colWidth,40);

    let GoalMatrixdata = [
        ["目标"]
    ];
    let GoalMatrix = document.getElementById('GoalMatrix');
    drawHOQ7(GoalMatrixdata,GoalMatrix,140,95);

    let AHPMatrixdata = [
        ["符号", "程度", "数值"],
        ["Θ", "强相关", "9"],
        ["O", "中等相关", "3"],
        ["▲", "弱相关", "1"],
        ["++", "强正相关"],
        ["▼", "强负相关"],
        ["+", "正相关"],
        ["-", "负相关"],
        ["★", "中等相关"]
    ];
    let colWidth1 = [45, 100, 35];
    let AHPMatrix = document.getElementById('AHPMatrix');
    drawHOQ8(AHPMatrixdata,AHPMatrix,colWidth1,25);

    divRotate();
    layout();
    auto();
}
//动态生成div
function dynamicDiv(){
    let CflMatrixDiv = document.createElement("div");
    let ReqMatrixDiv = document.createElement("div");
    let DDLMatrixDiv = document.createElement("div");
    let MainMatrixDiv = document.createElement("div");
    let TimMatrixDiv = document.createElement("div");
    let TagMatrixDiv = document.createElement("div");
    let WitMatrixDiv = document.createElement("div");
    let GoalMatrixDiv = document.createElement("div");
    let AHPMatrixDiv = document.createElement("div");

    let matrixDiv = [CflMatrixDiv,ReqMatrixDiv,DDLMatrixDiv,MainMatrixDiv,TimMatrixDiv,TagMatrixDiv,WitMatrixDiv,GoalMatrixDiv,AHPMatrixDiv];
    let matrixId = ["CflMatrix","ReqMatrix","DDLMatrix","MainMatrix","TimMatrix","TagMatrix","WitMatrix","GoalMatrix","AHPMatrix"];
    let matrixClassName = ["CflMatrix","ReqMatrix","DDLMatrix","MainMatrix","TimMatrix","TagMatrix","WitMatrix","GoalMatrix","AHPMatrix"];
    for(let i=0;i<matrixDiv.length;i++){
        matrixDiv[i] = document.createElement("div");
        matrixDiv[i].id = matrixId[i];
        matrixDiv[i].className = matrixClassName[i];
        if(matrixId[i] == "ReqMatrix" ||matrixId[i] == "DDLMatrix"||matrixId[i] == "GoalMatrix"||matrixId[i] == "AHPMatrix"){
            matrixDiv[i].style.cssText="padding:auto!important;width: auto;position: absolute";
        }else if(matrixId[i] == "MainMatrix" ||matrixId[i] == "TimMatrix"){
            matrixDiv[i].style.cssText="padding:auto!important;position: absolute";
        }else{
            matrixDiv[i].style.cssText="width:auto;position: absolute";
        }
        document.getElementById("dynamicDiv").appendChild(matrixDiv[i]);
    }
}
//删除动态生成的div
function removedynamicDiv() {
    let CflMatrixDiv = document.getElementById("CflMatrix");
    let ReqMatrixDiv = document.getElementById("ReqMatrix");
    let DDLMatrixDiv = document.getElementById("DDLMatrix");
    let MainMatrixDiv = document.getElementById("MainMatrix");
    let TimMatrixDiv = document.getElementById("TimMatrix");
    let TagMatrixDiv = document.getElementById("TagMatrix");
    let WitMatrixDiv = document.getElementById("WitMatrix");
    let GoalMatrixDiv = document.getElementById("GoalMatrix");
    let AHPMatrixDiv = document.getElementById("AHPMatrix");
    let matrixDiv =[CflMatrixDiv,ReqMatrixDiv,DDLMatrixDiv,MainMatrixDiv,TimMatrixDiv,TagMatrixDiv,WitMatrixDiv,GoalMatrixDiv,AHPMatrixDiv];
    if (CflMatrixDiv != null){
        for(let i=0;i<matrixDiv.length;i++){
            matrixDiv[i].parentNode.removeChild(matrixDiv[i]);
        }
    }
}
//布局算法
function layout() {
    var left = ($(window).width() - 190) / 2;
// 以冲突矩阵为定位点，上侧150px，中间在page-content居中
    $('.ReqMatrix').css({
        position: 'absolute',
        left: left - $('.ReqMatrix').outerWidth() / 2,
        top: 150
    });

    $('.DDLMatrix').css({
        position: 'absolute',
        left: left + $('.ReqMatrix').outerHeight() / 2 - 25,
        top: 150 + ($('.ReqMatrix').outerHeight() - $('.ReqMatrix').outerWidth()) / 2 + $('.ReqMatrix').outerWidth() / 2 - 46
    });

    $('.CflMatrix').css({
        position: 'absolute',
        left: left - $('.CflMatrix').outerWidth() / 2 + 22,
        top: 150 + ($('.ReqMatrix').outerHeight() - $('.ReqMatrix').outerWidth()) / 2 - $('.CflMatrix').outerHeight() / 2
    });

    $('.MainMatrix').css({
        position: 'absolute',
        left: left - ($('.MainMatrix').outerWidth()) / 2 - 70,
        top: 150 + $('.ReqMatrix').outerHeight() / 2 + $('.ReqMatrix').outerWidth() / 2
    });

    $('.TimMatrix').css({
        position: 'absolute',
        left: left - ($('.MainMatrix').outerWidth()) / 2 - 70 + $('.MainMatrix').outerWidth(),
        top: 150 + $('.ReqMatrix').outerHeight() / 2 + $('.ReqMatrix').outerWidth() / 2
    });

    $('.TagMatrix').css({
        position: 'absolute',
        left: left - $('.TagMatrix').outerWidth() / 2,
        top: 150 + $('.ReqMatrix').outerHeight() / 2 + $('.ReqMatrix').outerWidth() / 2 + $('.MainMatrix').outerHeight() - $('.TagMatrix').outerHeight() / 2 + $('.TagMatrix').outerWidth() / 2
    });
    $('.WitMatrix').css({
        position: 'absolute',
        left: left - ($('.WitMatrix').outerWidth()) / 2 - 70,
        top: 150 + $('.ReqMatrix').outerHeight() / 2 + $('.ReqMatrix').outerWidth() / 2 + $('.MainMatrix').outerHeight() + $('.TagMatrix').outerWidth()
    });
    $('.GoalMatrix').css({
        position: 'absolute',
        left: left - ($('.MainMatrix').outerWidth()) / 2 - 70,
        top: 150 + $('.ReqMatrix').outerHeight() / 2 + $('.ReqMatrix').outerWidth() / 2 + $('.MainMatrix').outerHeight()
    });
    $('.Take').css({
        position: 'absolute',
        left: left - ($('.MainMatrix').outerWidth()) / 2 - 70,
        top: 150 + $('.ReqMatrix').outerHeight() / 2 + $('.ReqMatrix').outerWidth() / 2 + $('.MainMatrix').outerHeight() + $('.WitMatrix').outerHeight() + 95
    });
    $('.page-content').css({
        width: window.screen.width - 210,
        height: 1000//document.body.scrollHeight
    })
}
//div旋转
function divRotate() {
    var rotation = -90;
    var uprota = -45;
    $('#CflMatrix').rotate(uprota);
    $('#ReqMatrix').rotate(rotation);
    $('.TagMatrix').rotate(rotation);
    $('.DDLMatrix').rotate(rotation);
}
//获取MainMatrix右键或左键事件时触发
function auto(){
    document.getElementById("MainMatrix").onmousedown = function (e) {
        if(e.button ==2){
            layout();
        }
    }
}
//定义表格绘制
function drawHOQ(data,myid,colWidth,rowHeight) {
    if(colWidth==null){
        colWidth=auto;
    }
    var container = myid;
    hot0 = new Handsontable(container, {
        data: data,// 预定义数据
        rowHeaders: false,// 行列标题定义
        colHeaders: false,
        copyable: true,// 允许拖动复制
        autoColumnSize: true,// 自适应行列文本宽度
        autoRowSize: true,
        className: "htCenter htMiddle",//  定义文本元素居中
        contextMenu: true,  //右键菜单
        mergeCells: true,  //合并单元格
        colWidths: colWidth,// 定义行列大小可缩放
        rowHeights: rowHeight,
        manualColumnResize: true,
        manualRowResize: true
    });
}
//定义表格绘制
function drawHOQ1(data,myid,colWidth,rowHeight) {
    if(colWidth==null){
        colWidth=auto;
    }
    var container = myid;
    hot1 = new Handsontable(container, {
        data: data,// 预定义数据
        rowHeaders: false,// 行列标题定义
        colHeaders: false,
        copyable: true,// 允许拖动复制
        autoColumnSize: true,// 自适应行列文本宽度
        autoRowSize: true,
        className: "htCenter htMiddle",//  定义文本元素居中
        contextMenu: true,  //右键菜单
        mergeCells: true,  //合并单元格
        colWidths: colWidth,// 定义行列大小可缩放
        rowHeights: rowHeight,
        manualColumnResize: true,
        manualRowResize: true
    });
}
//定义表格绘制
function drawHOQ2(data,myid,colWidth,rowHeight) {
    if(colWidth==null){
        colWidth=auto;
    }
    var container = myid;
    hot2 = new Handsontable(container, {
        data: data,// 预定义数据
        rowHeaders: false,// 行列标题定义
        colHeaders: false,
        copyable: true,// 允许拖动复制
        autoColumnSize: true,// 自适应行列文本宽度
        autoRowSize: true,
        className: "htCenter htMiddle",//  定义文本元素居中
        contextMenu: true,  //右键菜单
        mergeCells: true,  //合并单元格
        colWidths: colWidth,// 定义行列大小可缩放
        rowHeights: rowHeight,
        manualColumnResize: true,
        manualRowResize: true
    });
}
//定义表格绘制
function drawHOQ3(data,myid,colWidth,rowHeight) {
    if(colWidth==null){
        colWidth=auto;
    }
    var container = myid;
    hot3 = new Handsontable(container, {
        data: data,// 预定义数据
        rowHeaders: false,// 行列标题定义
        colHeaders: false,
        copyable: true,// 允许拖动复制
        autoColumnSize: true,// 自适应行列文本宽度
        autoRowSize: true,
        className: "htCenter htMiddle",//  定义文本元素居中
        contextMenu: true,  //右键菜单
        mergeCells: true,  //合并单元格
        colWidths: colWidth,// 定义行列大小可缩放
        rowHeights: rowHeight,
        manualColumnResize: true,
        manualRowResize: true
    });
}
//定义表格绘制
function drawHOQ4(data,myid,colWidth,rowHeight) {
    if(colWidth==null){
        colWidth=auto;
    }
    var container = myid;
    hot4 = new Handsontable(container, {
        data: data,// 预定义数据
        rowHeaders: false,// 行列标题定义
        colHeaders: false,
        copyable: true,// 允许拖动复制
        autoColumnSize: true,// 自适应行列文本宽度
        autoRowSize: true,
        className: "htCenter htMiddle",//  定义文本元素居中
        contextMenu: true,  //右键菜单
        mergeCells: true,  //合并单元格
        colWidths: colWidth,// 定义行列大小可缩放
        rowHeights: rowHeight,
        manualColumnResize: true,
        manualRowResize: true
    });
}
//定义表格绘制
function drawHOQ5(data,myid,colWidth,rowHeight) {
    if(colWidth==null){
        colWidth=auto;
    }
    var container = myid;
    hot5 = new Handsontable(container, {
        data: data,// 预定义数据
        rowHeaders: false,// 行列标题定义
        colHeaders: false,
        copyable: true,// 允许拖动复制
        autoColumnSize: true,// 自适应行列文本宽度
        autoRowSize: true,
        className: "htCenter htMiddle",//  定义文本元素居中
        contextMenu: true,  //右键菜单
        mergeCells: true,  //合并单元格
        colWidths: colWidth,// 定义行列大小可缩放
        rowHeights: rowHeight,
        manualColumnResize: true,
        manualRowResize: true
    });
}
//定义表格绘制
function drawHOQ6(data,myid,colWidth,rowHeight) {
    if(colWidth==null){
        colWidth=auto;
    }
    var container = myid;
    hot6 = new Handsontable(container, {
        data: data,// 预定义数据
        rowHeaders: false,// 行列标题定义
        colHeaders: false,
        copyable: true,// 允许拖动复制
        autoColumnSize: true,// 自适应行列文本宽度
        autoRowSize: true,
        className: "htCenter htMiddle",//  定义文本元素居中
        contextMenu: true,  //右键菜单
        mergeCells: true,  //合并单元格
        colWidths: colWidth,// 定义行列大小可缩放
        rowHeights: rowHeight,
        manualColumnResize: true,
        manualRowResize: true
    });
}
//定义表格绘制
function drawHOQ7(data,myid,colWidth,rowHeight) {
    if(colWidth==null){
        colWidth=auto;
    }
    var container = myid;
    hot7 = new Handsontable(container, {
        data: data,// 预定义数据
        rowHeaders: false,// 行列标题定义
        colHeaders: false,
        copyable: true,// 允许拖动复制
        autoColumnSize: true,// 自适应行列文本宽度
        autoRowSize: true,
        className: "htCenter htMiddle",//  定义文本元素居中
        contextMenu: true,  //右键菜单
        mergeCells: true,  //合并单元格
        colWidths: colWidth,// 定义行列大小可缩放
        rowHeights: rowHeight,
        manualColumnResize: true,
        manualRowResize: true
    });
}
//定义表格绘制
function drawHOQ8(data,myid,colWidth,rowHeight) {
    if(colWidth==null){
        colWidth=auto;
    }
    var container = myid;
    hot8 = new Handsontable(container, {
        data: data,// 预定义数据
        rowHeaders: false,// 行列标题定义
        colHeaders: false,
        copyable: true,// 允许拖动复制
        autoColumnSize: true,// 自适应行列文本宽度
        autoRowSize: true,
        className: "htCenter htMiddle",//  定义文本元素居中
        contextMenu: true,  //右键菜单
        mergeCells: true,  //合并单元格
        colWidths: colWidth,// 定义行列大小可缩放
        rowHeights: rowHeight,
        manualColumnResize: true,
        manualRowResize: true
    });
}

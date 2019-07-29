<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>创新方法工作平台</title>
    <!--添加页面框架-->
    <link rel="import" id="frame" href="/webresources/common/html/appFrame.html">
    <%--插件handsontable--%>
    <link rel="stylesheet" href="js/plug-in/Handsontable/css/handsontable.full.min.css">
    <link rel="stylesheet" href="js/plug-in/Handsontable/css/myTableStyle.css">
    <link rel="stylesheet" href="js/plug-in/Handsontable/css/vertical-text.css">
    <script type="text/javascript"src="js/plug-in/Handsontable/js/handsontable.full.js"></script>
    <script type="text/javascript"src="js/plug-in/Handsontable/js/tablePositaion.js"></script>
    <%--插件其它--%>
    <script type="text/javascript"src="js/plug-in/plug/canvg.min.js"></script>
    <script type="text/javascript"src="js/plug-in/plug/html5shiv.js"></script>
    <script type="text/javascript"src="js/plug-in/plug/jcanvas.min.js"></script>
    <script type="text/javascript"src="js/plug-in/plug/respond.min.js"></script>
    <%--转换为图片--%>
    <script type="text/javascript"src="js/plug-in/dom-to-image/base64.js"></script>
    <script type="text/javascript"src="js/plug-in/dom-to-image/canvas2image.js"></script>
    <script type="text/javascript"src="js/plug-in/dom-to-image/dom-to-image.js"></script>
    <script type="text/javascript"src="js/plug-in/dom-to-image/html2canvas.min.js"></script>
</head>
<body class="no-skin">
<div id="mainFunctionHtml">
    <div id="myCustomLi">
        <li class="active">
            <a data-toggle="tab" href="#abc">
                <i class="green ace-icon fa fa-desktop bigger-120"></i>HOQ</a>
        </li>
    </div>
    <div id="myCustomTab">
        <%--界面1--%>
        <div class="tab-pane active" id="abc"style="height: 1000px">
            <jsp:include page="jsp/start.jsp"/>
        </div>
    </div>
</div>
<!--帮助页面-->
<jsp:include page="jsp/help.jsp"/>
</body>
</html>
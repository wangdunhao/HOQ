<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!-- 前端主功能 -->
<script type="text/javascript" src="js/index.js"></script>
<script type="text/javascript" src="js/buttonAction.js"></script>
<script type="text/javascript" src="js/DivRotate.js"></script>
<script type="text/javascript" src="js/hoq.js"></script>
    <!-- 主界面区 -->
    <div id="main"style="height:1000px" >
        <div id="dataInfo" class="tab-pane active">
            <div id="toolbar" class="btn-group">
                <button type="button" class="btn btn-xs btn-info" id="hoqTemplate" onclick="hoqTemplate()">
                    <span class="ace-icon fa fa-save bigger-120"></span>HOQ模板
                </button>
                <button type="button" class="btn btn-xs btn-info" id="downLoadPicture" onclick="downLoadPicture()">
                    <span class="ace-icon fa fa-save bigger-120"></span>保存图片
                </button>
                <button type="button"  class="btn btn-xs btn-info"  onclick="saveProject()">
                    <i class="ace-icon fa fa-save bigger-120"></i>保存
                </button>
                <button type="button"  class="btn btn-xs btn-info"  onclick="saveAsProject()">
                    <i class="ace-icon fa fa-random bigger-120"></i>另存为
                </button>
            </div><br>
           <%-- 主功能区--%>
            <div id="dynamicDiv"><%-- div改为动态生成--%>
                <%--<div id="CflMatrix" class="CflMatrix" style="width:auto;position: absolute"></div>
                <div id="ReqMatrix" class="ReqMatrix" style="padding:auto!important;width: auto;position: absolute"></div>
                <div id="DDLMatrix" class="DDLMatrix" style="padding:auto!important;width: auto;position: absolute"></div>
                <div id="MainMatrix" class="MainMatrix" style="padding:auto!important;position: absolute"></div>
                <div id="TimMatrix" class="TimMatrix" style="padding:auto!important; position: absolute"></div>
                <div id="TagMatrix" class="TagMatrix" style="width:auto;position: absolute"></div>
                <div id="WitMatrix" class="WitMatrix" style="width:auto;position: absolute"></div>
                <div id="GoalMatrix" class="GoalMatrix" style="padding:auto!important;width: auto;position: absolute"></div>
                <br> <div id="AHPMatrix" class="AHPMatrix" style="padding:auto!important;width: auto;position: absolute"></div>--%>
            </div>
          <%--  <div class="Take" id="Take" style="width: 100px;height: 100px;background-color:white"></div>--%>
        </div>
    </div>
<div id="images" style="display:none;">图片预览区</div>
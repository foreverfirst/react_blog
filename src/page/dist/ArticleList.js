"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var ArticleList = /** @class */ (function (_super) {
    __extends(ArticleList, _super);
    function ArticleList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.props = {
            showUploadList: true,
            onRemove: function (file) {
                _this.setState(function (state) {
                    var index = state.fileList.indexOf(file);
                    var newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList
                    };
                });
            },
            beforeUpload: function (file) {
                console.log(file);
                var name = file.name;
                var fileExtension = name.substring(name.lastIndexOf('.') + 1); //截取文件后缀名
                _this.props.form.setFieldsValue({ 'filename': name, 'filetype': fileExtension }); //选择完文件后把文件名和后缀名自动填入表单
                _this.setState(function (state) { return ({
                    fileList: __spreadArrays(state.fileList, [file])
                }); });
                return false;
            },
            fileList: fileList
        };
        _this.handleOk = function (e) {
            var fileList = _this.state.fileList;
            var formData = new FormData();
            fileList.forEach(function (file) {
                formData.append('file', file);
            });
            _this.props.form.validateFields(function (err, values) {
                var filename = values.filename, filetype = values.filetype, describe = values.describe;
                formData.append('name', filename);
                formData.append('type', filetype);
                formData.append("dir", "1");
                if (describe == undefined) {
                    formData.append('description', "");
                }
                else {
                    formData.append('description', describe);
                }
                UploadFile(formData).then(function (res) {
                    if (res.status == 200 && res.data != undefined) {
                        notification.success({
                            message: "上传成功",
                            description: res.data
                        });
                    }
                    else {
                        notification.error({
                            message: "上传失败",
                            description: res.status
                        });
                    }
                });
                _this.setState({
                    visible: false
                });
            });
        };
        return _this;
    }
    ArticleList.prototype.render = function () {
        return title = "文件上传";
        visible = { "this": .state.visible };
        onOk = { "this": .handleOk }; //点击按钮提价表单并上传文件
        onCancel = { "this": .handleCancel }
            >
                layout;
        "vertical";
        onSubmit = { "this": .handleSubmit } >
            key;
        {
            Math.random();
        }
         > //点击关闭在次打开还会有上次上传文件的缓存
            __assign({}, props) >
            type;
        "primary" >
            type;
        "upload" /  > 选择文件
            < /Button>
            < /Upload>
            < /div>
            < /Form.Item>
            < antd_1.Form.Item;
        label = "文件名(可更改)" >
            />
            < /Form.Item>
            < antd_1.Form.Item;
        label = "描述(选填)" >
            />
            < /Form.Item>
            < antd_1.Form.Item;
        label = "文件类型" >
            disabled;
        {
            true;
        }
        />
            < /Form.Item>
            < /Form>
            < /Modal>;
    };
    return ArticleList;
}(react_1["default"].Component));
exports["default"] = ArticleList;

$(document).ready(function () {
    // Thiết lập các thông số
    gOptions.NotyDismissQueue = false;
    gOptions.PopupEditAutoClose = true;
    gOptions.ValidatePopupType = "warning";
    gOptions.GridShowNoDataMsg = true;
    // Thiết lập thông số cho AMS
    gOptions.IDPopupTimKiemTheTaiSan = 'popupTimKiemTheTaiSan';
    gOptions.IDPopupTimKiemNhanSu = 'popupTimKiemNhanSu';
    gOptions.IDPopupTimKiemHocSinh = 'popupTimKiemHocSinh';
    gOptions.IDPopupThayDoiMatKhau = 'PopupChagePassword';
    gOptions.IDPopupCauHinhHeThong = 'popupCauHinhHeThong';
    gOptions.IDPopupTieuChuanTrungHoc = 'popupTieuChuanTrungHoc';
    gOptions.IDPopupCoSoVatChatKhac = 'popupCoSoVatChatKhac';
    gOptions.IDPopupCoSoVatChat = 'popupCoSoVatChat';
    gOptions.IDPopupQuyetDinhKyLuat = 'popupQuyetDinhKyLuat';
    gOptions.IDPopupQuyetDinhDieuDong = 'popupQuyetDinhDieuDong';
    gOptions.IDPopupQuyetDinhNangLuong = 'popupQuyetDinhNangLuong';
    gOptions.IDPopupQuyetDinhChamDutHopDong = 'popupQuyetDinhChamDutHopDong';
    gOptions.IDPopupQuyetDinhThamNienNhaGiao = 'popupQuyetDinhThamNienNhaGiao';
    gOptions.IDPopupQuyetDinhNangThamNienNhaGiao = 'popupQuyetDinhNangThamNienNhaGiao';
    gOptions.IDPopupQuyetDinhKhenThuong = 'popupQuyetDinhKhenThuong';
    gOptions.IDPopupQuyetDinhNghiKhongLuong = 'popupQuyetDinhNghiKhongLuong';
    gOptions.IDPopupQuyetDinhTroLaiCongTac = 'popupQuyetDinhTroLaiCongTac';
    gOptions.IDPopupQuyetDinhNghiHuu = 'popupQuyetDinhNghiHuu';
    gOptions.IDPopupQuyetDinhThoiGiuChuc = 'popupQuyetDinhThoiGiuChuc';
    gOptions.IDPopupQuyetDinhBoNhiem = 'popupQuyetDinhBoNhiem';
    gOptions.IDPopupQuyetDinhCuDiHoc = 'popupQuyetDinhCuDiHoc';
    gOptions.IDPopupQuyetDinhBoNhiemToBoMon = 'popupQuyetDinhBoNhiemToBoMon';
    gOptions.IDPopupKyLaiHopDong = 'popupKyLaiHopDong';
    gOptions.IDPopupDanhMucMonHoc = 'popupDanhMucMonHoc';
    gOptions.IDPopupDonTuiDanhPhach = 'popupDonTuiDanhPhach';
    gOptions.IDPopupImportHocSinh = 'popupImportHocSinh';
    gOptions.IDPopupThanhToanHocPhi = "popupThanhToanHocPhi";
    gOptions.IDPopupPhieuChiMienGiam = "popupPhieuChiMienGiam";
    gOptions.IDPopupHuyPhieuThu = "popupHuyPhieuThu";
    gOptions.IDPopupGopTruong = "popupGopTruong";
    gOptions.IDPopupCauHinhMayIn = "popupCauHinhMayIn";
    gOptions.IDPopupTimKiemGiaoVienHopDong = "popupTimKiemGiaoVienHopDong";
    gOptions.IDPopupDanhMucPhongThiTruong = "popupDanhMucPhongThiTruong";

    gOptions.DefaultValidateDateOptions = {
        required: false,
        showMessage: true,
        startDateID: "TuNgay",
        endDateID: "DenNgay",
        startDateText: "",
        endDateText: "",
        useKendo: true,
        msgDateRequired: "",
        msgDateInvalid: "",
        msgDateRangeInvalid: ""

    };
    gOptions.ImageExtensions = [".jpg", ".jpeg", ".gif", ".png", ".JPG", ".JPEG", ".GIF", ".PNG"];
    gResources.FileExtensions = $.getResourceFromBody('data-not-correct-fileType-word-excel-txt');
    gResources.FileExtensionsNotCorrect = $.getResourceFromBody('data-not-correct-fileType-txt');
    gResources.msgSelectOne = $.getResourceFromBody('data-select-one');

    // Set lại vị trí footer
    var $mainContent = $("#middle");
    $mainContent.data("origin-height", $mainContent.outerHeight());
    setLayout();
    $(window).on("resize", setLayout);

    // Thêm nút xuất excel
    if ($(document).find("*[data-button-export]").length == 0 && $(document).find("*[data-noExport=true]").length == 0) {
        var grid = $(document).find(".k-widget.k-grid");

        // Có lưới
        if (grid.length > 0) {
            var template = kendo.template($("#buttonExportTemplate").html());
            var buttonHTML = $.trim(template({ gridID: "#" + $(grid).attr("id") }));
            //$("#header .toolbar").prepend(buttonHTML);
            if ($("#header .toolbar .k-button").length > 0) {
                $("#header .toolbar .k-button:eq(0)").before(buttonHTML);
            } else {
                $("#header .toolbar").prepend(buttonHTML);
            }
        }
    }

    // Extend KendoUI Validator
    (function ($, kendo) {
        $.extend(true, kendo.ui.validator, {
            rules: {
                requiredone: function (input) {
                    if (input.filter("[data-val-requiredone]").length) {

                        var url = input.attr("data-val-requiredone-url");
                        var valid = true;
                        var fields = eval(input.attr("data-val-requiredone-fields"));
                        var additionData = {};

                        $(fields).each(function (e) {
                            var fieldID = this;

                            if ($("#" + fieldID).attr("type") == "radio") {
                                additionData[fieldID] = $("[name=" + fieldID + "]:checked").val();
                            }
                            else {
                                additionData[fieldID] = $("#" + fieldID).val();
                            }
                        });

                        var model = { Value: input.val(), AdditionData: additionData };

                        $.ajax(
                        {
                            type: "POST",
                            url: url,
                            data: $.toJSON({ model: model }),
                            async: false,
                            traditional: true,
                            contentType: 'application/json; charset=utf-8',
                            success: function (e) {
                                if (!e.Passed) {
                                    if (!$.stringIsNullOrEmpty(e.Message)) {
                                        // Gán lại message
                                        input.attr("data-val-requiredone", e.Message);
                                    }
                                }

                                valid = e.Passed;
                            }
                        });

                        return valid;
                    }

                    return true;
                },
            },
            messages: {

                requiredone: function (input) {
                    return $.validateGetMessage(input, "data-val-requiredone");
                }
            }
        });
    })(jQuery, kendo);

});

function test() {
    var a = "a";
}

// Format culture vi-VN (số theo kiểu en-US)
(function () { kendo.cultures["vi-VN"] = { name: "vi-VN", numberFormat: { pattern: ["-n"], decimals: 2, ",": ",", ".": ".", groupSize: [3], percent: { pattern: ["-n %", "n %"], decimals: 2, ",": ",", ".": ".", groupSize: [3], symbol: "%" }, currency: { pattern: ["-n $", "n $"], decimals: 2, ",": ",", ".": ".", groupSize: [3], symbol: "₫" } }, calendars: { standard: { days: { names: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"], namesAbbr: ["CN", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy"], namesShort: ["C", "H", "B", "T", "N", "S", "B"] }, months: { names: ["Tháng Giêng", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai", ""], namesAbbr: ["Thg1", "Thg2", "Thg3", "Thg4", "Thg5", "Thg6", "Thg7", "Thg8", "Thg9", "Thg10", "Thg11", "Thg12", ""] }, AM: ["SA", "sa", "SA"], PM: ["CH", "ch", "CH"], patterns: { d: "dd/MM/yyyy", D: "dd MMMM yyyy", F: "dd MMMM yyyy h:mm:ss tt", g: "dd/MM/yyyy h:mm tt", G: "dd/MM/yyyy h:mm:ss tt", m: "dd MMMM", M: "dd MMMM", s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", t: "h:mm tt", T: "h:mm:ss tt", u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", y: "MMMM yyyy", Y: "MMMM yyyy" }, "/": "/", ":": ":", firstDay: 1 } } } })(this);
(function () { kendo.cultures.vi = { name: "vi", numberFormat: { pattern: ["-n"], decimals: 2, ",": ",", ".": ".", groupSize: [3], percent: { pattern: ["-n %", "n %"], decimals: 2, ",": ",", ".": ".", groupSize: [3], symbol: "%" }, currency: { pattern: ["-n $", "n $"], decimals: 2, ",": ",", ".": ".", groupSize: [3], symbol: "₫" } }, calendars: { standard: { days: { names: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"], namesAbbr: ["CN", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy"], namesShort: ["C", "H", "B", "T", "N", "S", "B"] }, months: { names: ["Tháng Giêng", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai", ""], namesAbbr: ["Thg1", "Thg2", "Thg3", "Thg4", "Thg5", "Thg6", "Thg7", "Thg8", "Thg9", "Thg10", "Thg11", "Thg12", ""] }, AM: ["SA", "sa", "SA"], PM: ["CH", "ch", "CH"], patterns: { d: "dd/MM/yyyy", D: "dd MMMM yyyy", F: "dd MMMM yyyy h:mm:ss tt", g: "dd/MM/yyyy h:mm tt", G: "dd/MM/yyyy h:mm:ss tt", m: "dd MMMM", M: "dd MMMM", s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", t: "h:mm tt", T: "h:mm:ss tt", u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", y: "MMMM yyyy", Y: "MMMM yyyy" }, "/": "/", ":": ":", firstDay: 1 } } } })(this);

/**************************
   Live event handler
***************************/

// Set mặc định enter sẽ thực hiện search 
$(document).on("keypress", "#div-search input,.div-search input", function (evt) {

    if (evt.keyCode == 13) {
        var $obj = $(this);
        var $divSearch = $(this).closest("#div-search,.div-search");
        var $searchButton = $divSearch.find("*[data-search-button]");
        $searchButton.trigger("click");
    }
});

$(document).on("change", ".k-datepicker input", function (evt) {
    console.log(evt);
    var target = $(evt.currentTarget);
    var datePicker = target.getKendoDatePicker();
    if (datePicker) {

        if (target.attr("min") == undefined) {
            target.attr("min", (kendo.toString(datePicker.min(), "yyyy-MM-dd")));
        }

        if (target.attr("max") == undefined) {
            target.attr("max", (kendo.toString(datePicker.max(), "yyyy-MM-dd")));
        }

        if (datePicker.value() == null) {
            target.val("");
        }

    }
});


/**********************************************
* Prevent multi click when click search button
*-
**********************************************/

//$(document).on("click", "*[data-search-button]", function (evt) {

//    var button = this;
//    var gridID = $(button).closest("form").attr("data-grid-id");
//    if (gridID) {
//        var kendoGrid = $("#" + gridID).getKendoGrid();
//        if (kendoGrid) {
//            kendoGrid.dataSource.bind("requestStart", function () {
//                $(button).disableButton();
//            });
//            kendoGrid.bind("dataBound", function () {
//                $(button).enableButton();
//            });

//        }
//    }
//});

/**
 * @preserve jQuery Column cell selector v1.0
 *
 * Licensed under the new BSD License.
 * Copyright 2009-2012, Bram Stein
 * All rights reserved.
 */
/*Column plugin*/
(function ($) {
    var equationRegExp = /([\+\-]?\d*)[nN]([\+\-]?\d*)/,
        cache, equation,
        pseudoSelector = jQuery.expr.filter.PSEUDO;

    function parseEquation(str) {
        var tmp = [],
            result = {
                multiplier: 0,
                offset: 0
            };

        if (str === 'even') {
            str = '2n';
        } else if (str === 'odd') {
            str = '2n+1';
        } else if (/^\d*$/.test(str)) {
            str = '0n+' + str;
        }

        tmp = equationRegExp.exec(str);

        if (tmp !== null) {
            result.multiplier = tmp[1] - 0;
            result.offset = tmp[2] - 0;
        }
        return result;
    }

    function generateCache(cells, equation) {
        var currentRow, currentSection, matrix = [], first = 0, lookup = [];

        $.each(cells, function (k, cell) {
            var i = 0, j = 0,
                rowSpan = cell.rowSpan || 1,
                colSpan = cell.colSpan || 1;

            if (cell.parentNode !== currentRow) {
                currentRow = cell.parentNode;

                if (currentRow.parentNode !== currentSection) {
                    currentSection = currentRow.parentNode;
                    matrix = [];
                }

                first = 0;

                if (matrix[currentRow.rowIndex] === undefined) {
                    matrix[currentRow.rowIndex] = [];
                }

            }

            for (i = 0; i < matrix[currentRow.rowIndex].length + 1; i += 1) {
                if (matrix[currentRow.rowIndex][i] === undefined) {
                    first = i;
                    break;
                }
            }

            lookup[k] = first;

            for (i = currentRow.rowIndex; i < currentRow.rowIndex + rowSpan; i += 1) {
                if (matrix[i] === undefined) {
                    matrix[i] = [];
                }

                for (j = first; j < first + colSpan; j += 1) {
                    matrix[i][j] = true;
                }
            }
        });
        return lookup;
    }

    function nthCol(element, match, index) {
        var difference = cache[index] - (equation.offset - 1);
        if (equation.multiplier === 0) {
            return difference === 0;
        } else {
            return (difference % equation.multiplier === 0 && difference / equation.multiplier >= 0);
        }
    }

    $.extend(jQuery.fn, {
        nthCol: function (e) {
            equation = parseEquation(e);
            cache = generateCache(this);
            return $(this).filter(function (i) {
                return nthCol(this, undefined, i);
            });
        }
    });

    $.extend(jQuery.expr.match, {
        COLUMN: new RegExp(":nth-col\\((even|odd|[\\dnN\\+\\-]*)\\)(?![\\^\\[]*\\])(?![\\^\\(]*\\))")
    });

    $.extend(jQuery.expr.leftMatch, {
        COLUMN: new RegExp("(^(?:.|\\r|\\n)*?):nth-col\\((even|odd|[\\dnN\\+\\-]*)\\)(?![\\^\\[]*\\])(?![\\^\\(]*\\))")
    });

    $.extend(jQuery.expr.preFilter, {
        COLUMN: function (match, items) {
            equation = parseEquation(match[1]);
            cache = generateCache(items);
            return match;
        }
    });



    $.extend(jQuery.expr.filter, {
        COLUMN: nthCol
    });
}(jQuery));


/**************************
   jQuery extend selector
***************************/
$.fn.extend({
    gridFilterExtend: function (filters) {
        var grid = $(this).data("kendoGrid");
        if (filters.length == 0 || (filters.length == 1 && filters[0].value === "")) {
            grid.dataSource.filter(null);
        } else {
            grid.dataSource.filter({
                logic: "and",
                filters: filters
            });
        }
    },
    gridCopy: function (target, url, popupID) {
        var $grid = $(this);
        $(this).gridSelectedConfirm(target, function () {
            var checkboxs = $grid.gridSelectedCheckbox();
            if (checkboxs.length > 1) //chọn nhiều
            {
                $.warning(gResources.msgSelectOne);
            } else {
                $grid.gridPopupEditor(popupID, url + "/?idCopy=" + checkboxs[0].value);
            }
        });
    },
    gridExportExcel: function (url, additionData, successAction) {
        var dataSource = $(this).gridDataSource();
        var filter = dataSource.filter();
        var sort = dataSource.sort();
        var strFilter = "", strSort = "";
        var additionJson = {};

        // Không có dữ liệu
        if (dataSource.data().length == 0) {
            $.warning("Chưa có dữ liệu trên lưới");
            return;
        }

        // Commit dữ liệu thay đổi
        $(this).gridInCellClientEditCommit();

        // Filter
        if (filter) {
            var logic = filter.logic;
            $(filter.filters).each(function () {
                strFilter += strFilter.length > 0 ? String.format("~{0}~", logic) : "";

                if (this.value instanceof Date) {
                    strFilter += String.format("{0}~{1}~'{2}'", this.field, this.operator, kendo.toString(this.value, 'yyyy-MM-ddTHH:mm:ss'));
                }
                else {
                    strFilter += String.format("{0}~{1}~'{2}'", this.field, this.operator, this.value);
                }
            });
        }

        // Sort
        if (sort) {
            $(sort).each(function () {
                strSort += strSort.length > 0 ? "~" : "";
                strSort += String.format("{0}-{1}", this.field, this.dir);
            });
        }

        // Có dữ liệu bổ sung
        if (additionData) {

            // Là function
            if (typeof additionData == "function") {
                additionJson = additionData();
            }
            else {
                // Là function name
                if (typeof getFunction(additionData) == "function") {
                    additionJson = getFunction(additionData).apply();
                } else {
                    url += additionData;
                }
            }
        }

        exportExcel(url, $.extend({}, additionJson, { page: 1, pageSize: 10000, filter: strFilter, group: "", sort: strSort, models: dataSource.data() }), successAction);
    },
    gridExportExcelEx: function (url, additionData, successAction) {
        var grid = $(this);
        var kendoGrid = $(this).grid();

        if (!kendoGrid) {
            $.warning("Không có dữ liệu để hiển thị");

            return;
        }

        var dataSource = $(this).gridDataSource();
        var filter = dataSource.filter();
        var sort = dataSource.sort();
        var group = dataSource.group();
        var strFilter = "", strSort = "";
        var additionJson = {};
        var readInfo = kendoGrid.dataSource.transport.options.read;
        var maxRecord = 1000;

        //======================
        // Không có dữ liệu
        if (dataSource.data().length == 0) {
            $.warning("Chưa có dữ liệu trên lưới");

            return;
        }

        //kendo.ui.progress($("#main"), true);

        // Commit dữ liệu thay đổi
        $(this).gridInCellClientEditCommit();

        // Filter
        if (filter) {
            var logic = filter.logic;
            $(filter.filters).each(function () {
                strFilter += strFilter.length > 0 ? String.format("~{0}~", logic) : "";

                if (this.value instanceof Date) {
                    strFilter += String.format("{0}~{1}~'{2}'", this.field, this.operator, kendo.toString(this.value, 'yyyy-MM-ddTHH:mm:ss'));
                }
                else {
                    strFilter += String.format("{0}~{1}~'{2}'", this.field, this.operator, this.value);
                }
            });
        }

        // Sort
        if (sort) {
            $(sort).each(function () {
                strSort += strSort.length > 0 ? "~" : "";
                strSort += String.format("{0}-{1}", this.field, this.dir);
            });
        }

        // Có dữ liệu bổ sung
        if (additionData) {

            // Là function
            if (typeof additionData == "function") {
                additionJson = additionData();
            }
            else {
                // Là function name
                if (typeof getFunction(additionData) == "function") {
                    additionJson = getFunction(additionData).apply();
                } else {
                    readInfo.url += additionData;
                }
            }
        }
        //======================

        var gridAdditionData = readInfo.data != undefined ? readInfo.data() : {};
        var totalPages = Math.floor(dataSource.total() / maxRecord) + 1;
        var exportKey = getUnique(8);
        var groupField = group.length > 0 ? group[0].field : "";
        var tableTemplate = typeof fnGetTableTemplate != "undefined" && typeof fnGetTableTemplate == "function" ? fnGetTableTemplate() : grid.gridGetTableTemplate();


        var title = $("#header .title").text();
        // Nếu grid nằm trên popup thì lấy title của popup 
        if (grid.closest(".k-window").length > 0) {
            title = grid.closest(".k-window").find(".k-window-title").text();
        }
        // Lấy dữ liệu theo hàm read
        for (var i = 1; i <= totalPages; i++) {
            $.ajaxPostJson(readInfo.url,
               $.toJSON($.extend({}, gridAdditionData, additionJson, { page: i, pageSize: maxRecord, filter: strFilter, group: "", sort: strSort, models: dataSource.data() })),
               function (data) {
                   exportExcel(url, {
                       models: data.Data, tableTemplate: tableTemplate, title: title, totalPages: totalPages, page: i, exportKey: exportKey,
                       groupFieldName: groupField
                   }, successAction);
               }
           );
        }

        /*
         var readUrl = buildUrl(readInfo.url, $.param(gridAdditionData));
        readUrl = buildUrl(readUrl, $.param(additionJson));
        // Test xuất excel
        exportExcel(url, { tableTemplate: grid.gridGetTableTemplate(), filter: strFilter, group: "", sort: strSort, url: readUrl }, successAction);
        */
        //kendo.ui.progress($("#main"), false);
    },
    gridGetTableTemplate: function () {
        var $grid = $(this);
        var tbl = new Array();
        var totalCols = 0;
        var noOfHeaderRows = $grid.find("thead tr").length;
        var r = /<[^>]+>[^<]*<[^>]+>|<[^\/]+\/>/ig;
        var getColumnType = function (pColName) {
            var fields = $grid.getKendoGrid().dataSource.options.schema.model.fields;
            var strType = "";
            $.each(fields, function (i, v) {
                if (i == pColName) {
                    strType = v.type;
                    return false;
                }
            });
            return strType;
        };

        // tỉnh tổng số cột
        $grid.find("thead tr:eq(0) th").each(function () {
            var $th = $(this);
            var colspan = $th.attr("colspan");

            if (colspan == undefined || colspan == 1) {
                totalCols += 1;
            } else {
                totalCols += ~~colspan;
            }
        });

        // duyệt qua từng cột
        for (var i = 0; i < totalCols; i++) {
            var cols = $grid.find("thead > tr th").nthCol(i + 1);

            var $th = $(cols[cols.length - 1]);

            // không thêm các cột không in
            if ($th.data("no-print") == undefined && $th.data("field") != "ID") {
                var colName = $th.data("field-extend");
                if (colName == undefined) {
                    colName = $th.data("field");
                }
                var groupAttr = $th.data("head-group");
                var col = {
                    ColumnName: colName,
                    Text: $th.text(),
                    Header: { Text: $th.text() },
                    Width: Math.round($th.width() / 7),
                    DataType: getColumnType(colName)
                };

                if (col.Width > 255) {
                    col.Width = 250;
                }

                //if ($th.data("title") == undefined) {
                //    col.Text = $th.text();
                //}

                col.Text.replace(r, "");

                if ($.trim(col.Text).length == 0 && !col.ColumnName) {
                    continue;
                }

                var colHeader = col.Header;

                // Hàm lấy header trên cùng
                var getLastParent = function (columHeader) {
                    var objHeader = columHeader;
                    while (objHeader.Parent != null) {
                        objHeader = objHeader.Parent;
                    }
                    return objHeader;
                };

                var getHeaderByLevel = function (columnHeader, level) {
                    var strExpression = "columnHeader";
                    for (var l = 2; l <= level; l++) {
                        strExpression += ".Parent";
                    }
                    return eval(strExpression);
                };

                // kiểm tra có group
                if (groupAttr != undefined) {

                    // Mỗi level cách nhau bằng dấu ";"
                    var levels = groupAttr.split(";");

                    // Duyệt qua các level group
                    for (var j = 0; j < levels.length; j++) {

                        if (levels[j].length > 0) {

                            // Parse thông tin
                            // 0: level, 1: colspan, 2: title
                            var groupInfos = levels[j].split("|");;

                            var colspan = groupInfos[1];
                            var text = groupInfos[2];
                            getLastParent(colHeader).Parent = {
                                Text: text.replace(r, ""),
                                Colspan: colspan
                            };
                        }
                    }
                }
                tbl.push(col);
            }
                // Nếu là cột không xuất ra excel
            else {
                if (noOfHeaderRows > 1) {
                    // Kiểm tra tr ở phía trên có merge
                    for (var k = 0; k < tbl.length; k++) {
                        for (var l = 2; l <= noOfHeaderRows; l++) {
                            var parent = getHeaderByLevel(tbl[k].Header, l);
                            if (parent != undefined) {
                                if ((parent.Colspan - 1) + k >= tbl.length) {
                                    parent.Colspan--;
                                }
                            } else {

                                break;
                            }

                        }
                    }
                }
            }
        }

        return tbl;
    },

    /**/
    showPopupView: function (popupID, url, closeFunction) {
        var popup;

        // Chưa tồn tại popup
        if ($("#" + popupID).length == 0) {
            popup = $("<div id='" + popupID + "' />").appendTo(document.body).kendoWindow({
                "modal": true,
                "iframe": false,
                "draggable": true,
                "title": "",
                "resizable": true,
                "width": 0,
                "scrollable": true,
                "actions": ["Close"],
                "visible": false,
                "close": function () {
                    $("#" + popupID).empty();
                    if (typeof (closeFunction) == 'function') {
                        closeFunction();
                    }
                }
            }).data('kendoWindow');

            // Canh vị trí
            popup.center();
        }
        $("#" + popupID).kendoWindowRefresh(url, "");
    },
    showPopup: function (popupID, url, options) {
        var popup;
        var defaultOptions = {
            "modal": true,
            "iframe": false,
            "draggable": true,
            "title": "",
            "resizable": true,
            "width": 0,
            "scrollable": true,
            "actions": ["Close"],
            "visible": false,
            "close": function () { $("#" + popupID).empty(); }
        };
        options = $.extend(options, defaultOptions);

        // Chưa tồn tại popup
        if ($("#" + popupID).length == 0) {
            popup = $("<div id='" + popupID + "' />").appendTo(document.body).kendoWindow(options).data('kendoWindow');

            // Canh vị trí
            popup.center();
        }
        $("#" + popupID).kendoWindowRefresh(url, "");
    },
    comboBoxRefreshDataSource: function () {
        var cbo = $(this).getKendoComboBox();

        if (cbo != undefined) {
            cbo.dataSource.read();
            // cbo.refresh();
            setTimeout(function () {
                cbo.value("");
            }, 20);


        }
    },
    // Set readonly cho form
    formReadOnly: function () {
        var $form = $(this);
        $form.find("input[id]:not([data-role])").prop("readonly", "readonly");

        // các widget của kendo thì dùng đối tượng kendo để set readonly
        $form.find("input[data-role]").each(function () {
            var $element = $(this);
            getKendoObject($element, $element.attr("data-role")).readonly(true);
        });

        // checkbox, radio set thuộc tính disable
        $form.find("input:radio,input:checkbox").prop("disabled", "disabled");
    },
    formFilter: function () {
        var form = $(this).parents("form");

        // Tìm thấy
        if (form.length > 0) {

            var gridID = form.data("grid-id");
            var searchSuffix = form.data("search-suffix");

            if (gridID && searchSuffix) {
                $("#" + gridID).gridFilterByForm(form, searchSuffix);
            }
        }
    },
    formFilterGridReadHandler: function () {
        var form = $(this);
        var gridID = form.data("grid-id");
        var searchSuffix = form.data("search-suffix");

        if (gridID && searchSuffix) {
            $("#" + gridID).gridDataSource().bind("requestStart", function (e) {
                if (!form.formIsValid) {
                    e.preventDefault();
                }
            });
        }
    }
});

jQuery.extend({
    checkExtensionFile: function (extension, acceptExtensions) {
        for (var i = 0; i < acceptExtensions.length; i++) {
            if (extension == acceptExtensions[i]) {
                return true;
            }
        }
        return false;
    },
    confirm: function (message, fnAccept, fnNo, showCancelButton) {
        var buttons = [];

        // Yes
        if (fnAccept != undefined) {
            buttons.push({
                addClass: 'btn btn-primary', text: gResources.txtAccept, onClick: function ($noty) {
                    $noty.close();
                    setTimeout(fnAccept, 0);
                }
            });
        }


        // No
        buttons.push({
            addClass: 'btn btn-danger', text: gResources.txtNotAccept, onClick: function ($noty) {
                $noty.close();
                if (fnNo != undefined) {
                    setTimeout(fnNo, 0);
                }
            }
        });

        if (showCancelButton) {
            // Hủy
            buttons.push({
                addClass: 'btn btn-warning', text: gResources.txtCancel, onClick: function ($noty) {
                    $noty.close();
                }
            });
        }



        noty({
            text: message,
            type: 'information',
            dismissQueue: false,
            layout: 'center',
            theme: 'defaultTheme',
            modal: true,
            animation: {
                open: { height: 'toggle' },
                close: { height: 'toggle' },
                easing: 'swing',
                speed: 0
            },
            buttons: buttons
        });
    },
    requiredOneValidate: function (url, data) {
        var valid = true;

        $.ajax(
        {
            type: "POST",
            url: url,
            data: $.toJSON(data),
            async: false,
            traditional: true,
            contentType: 'application/json; charset=utf-8',
            success: function (e) {
                if (!e.Passed) {
                    if (!$.stringIsNullOrEmpty(e.Message)) {
                        $.error(e.Message);
                    }
                }
                valid = e.Passed;
            }
        });

        return valid;
    }
});

/******************
Function
*******************/

function exportExcel(url, jsonData, successAction) {
    $.ajaxPostJson(url, $.toJSON(jsonData), function (e) {
        if (e.success) {
            // Download
            if (successAction == 1) {
                window.open(e.baseUrl + "/DownloadFile?key=" + e.key + "&fileDownloadName=" + e.fileDownloadName, "_self");
            }
                // View and print
            else if (successAction == 2) {
                window.open(e.baseUrl + "/ViewFile?key=" + e.key + "&fileDownloadName=" + e.fileDownloadName, "_blank");
            }
            else if (successAction == 3) {
                //In biểu mẫu liền
                //window.open(e.baseUrl + "/DownloadFile?key=" + e.key + "&fileDownloadName=" + e.fileDownloadName, "_self");
                //console.log(e.key);
                onInTuMayInBieuMau(e.key);
            }
            else { // Save
                // Có loại báo cáo
                if (e.loaiBaoCao) {
                    var title = "";

                    if ($(".title").length > 0) {
                        title = $(".title").text();
                    }

                    showPopup("popupSaveExport", String.format("{0}?loaiBaoCao={1}&key={2}&title={3}", e.baseUrl + "/SaveReportFile", e.loaiBaoCao, e.key, title), true);
                }
            }
        }
    });
}

// Lấy dữ liệu bằng ajax và bỏ vào container
function getView(url, container, fnSuccess, fnFailed) {
    $(container).setView(url, fnSuccess, fnFailed);
}

function getViewAsync(url, container, fnSuccess) {
    $.ajax({
        type: "GET",
        url: url,
        async: true,
        traditional: true,
        beforeSend: function () {
            kendo.ui.progress($("#middle"), true);
        },
        complete: function () {
            kendo.ui.progress($("#middle"), false);
        },
        success: function (e) {
            // Không có lỗi
            if (!ajaxErrorHandler(e)) {
                $(container).html(e);

                var title = $(container).find('[window-title]').attr('window-title');

                if (title != undefined) {
                    $('title').html(title);
                }

                if (fnSuccess != undefined) {
                    // Là function name
                    if (typeof fnSuccess == "function") {
                        fnSuccess();
                    } else if (typeof getFunction(fnSuccess) == "function") {
                        getFunction(fnSuccess).apply();
                    }
                }
            }
        },
        error: function (e) {
            showDefaultErrorMessage();
            kendo.ui.progress($("#middle"), false);

        }
    });
}

function debug() {
    var a = 1;
}

function attachEnterEvent(containerID) {
    var $divSearch = $(containerID);
    if ($divSearch.length > 0) {
        $divSearch.find("input[type=text]").each(function () {
            var $textbox = $(this);
            var triggerId = $divSearch.attr("data-trigger-id");
            if (!triggerId) {
                triggerId = "btnTim";
            }
            $textbox.on("keydown", function (evt) {
                triggerOnEnter(evt, triggerId, "click");
            });
        });
    }
}

function setLayout() {
    // setLayoutThongTin();

    var topHeight = $("#top").outerHeight();
    var mainHeight = $("#middle").data("origin-height");
    var footerHeight = $("#footer").outerHeight();
    var windowHeight = $(window).height();
    var bottomMainY = $("#middle").offset().top + mainHeight;
    var offsetWindowFooter = windowHeight - footerHeight;
    var offsetTop = 0;


    var middleMinHeight = Math.floor(mainHeight) + Math.ceil(offsetWindowFooter - bottomMainY) - 13;
    if ($("#div-login").length > 0) {
        var $divLogin = $("#div-login");
        offsetTop = Math.floor(middleMinHeight / 2 - $divLogin.height() / 2);
        $("#middle").css({ "padding-top": offsetTop + 5 });
    }
    if ($("#home-main").length > 0) {
        var $divHome = $("#home-main");
        offsetTop = Math.floor(middleMinHeight / 2 - $divHome.height() / 2 - 20);
        $("#middle").css({ "padding-top": offsetTop + 5 });
    }
    // Khi chiều cao top + middle < window - footer thì set footer ở cuối =>
    if (bottomMainY < offsetWindowFooter) {
        $("#middle").css("min-height", (middleMinHeight - offsetTop) + "px");
    }


}

function setLayoutThongTin() {
    if ($("#ThongTinNhanSu-container").length > 0) {
        var $divRight = $("#ThongTinNhanSu-container > #right");
        var $divLeft = $("#ThongTinNhanSu-container > #left");
        var left = $divLeft.offset().left + $divLeft.width() + 20;
        var width = $("#ThongTinNhanSu-container").outerWidth() - left;
        $divRight.css("width", width + "px");
    }
}

/* Chuyển ngày có dạng dd/MM/yyyy sáng MM/dd/yyyy */
function toMMddyyyy(ddMMyyyy) {
    if (ddMMyyyy != "" && ddMMyyyy.indexOf("/") != -1) {
        var arr = ddMMyyyy.split('/');
        return arr[1] + "/" + arr[0] + "/" + arr[2];
    } else {
        return "";
    }
}

/* Compare 2 date object */
function compareDate(d1, d2) {
    d1 = d1.getTime();
    d2 = d2.getTime();
    if (d1 == d2) {
        return 0;
    } else if (d1 > d2) {
        return 1;
    } else {
        return -1;
    }
}

function getIDWithPrefix(prefix, id) {
    return prefix + "_" + id;
}

/* Trigger an object with specified event when Enter key is pressed */
function triggerOnEnter(evt, id, eventType) {
    // Enter is pressed
    if (evt.keyCode == 13) {
        if (typeof eventType != "function") {
            $("#" + id).trigger(eventType);
        } else {
            eventType();
        }
    }
}

/* Get last day of month */
function getLastDateOfMonth(Year, Month) {
    var date = new Date(Year, Month + 1, 0);
    return date;
}

/* Kiểm tra thời gian */
function checkDate(options) {
    options = $.extend({}, gOptions.DefaultValidateDateOptions, options);
    var $startInputObj = $("#" + options.startDateID);
    var $endInputObj = $("#" + options.endDateID);
    var startDate;
    var endDate;
    var msg = "";
    var isValid = true;

    // Các input có sử dụng kendoUI
    if (options.useKendo) {
        startDate = $startInputObj.data("kendoDatePicker").value();
        endDate = $endInputObj.data("kendoDatePicker").value();
    } else {
        // Tạo đối tượng startDate, endDate từ giá trị lấy từ input
    }

    // Giá trị ngày bắt buộc nhập
    if (options.required) {

        // Người dùng có nhập nhưng sai định dạng
        if (startDate == null && $startInputObj.val() != "") {
            msg = StringFormat(options.msgDateInvalid, options.startDateText);
            isValid = false;
        } else if ($startInputObj.val() == "") {
            msg = StringFormat(options.msgDateRequired, options.startDateText);
            isValid = false;
        }
        if (endDate == null && $endInputObj.val() != "") {
            msg = StringFormat(options.msgDateInvalid, options.endDateText);
            isValid = false;
        } else if ($endInputObj.val() == "") {
            msg = StringFormat(options.msgDateRequired, options.endDateText);
            isValid = false;
        }
    } else {
        if (startDate == null && $startInputObj.val() != "") {
            msg = StringFormat(options.msgDateInvalid, options.startDateText);
            isValid = false;
        }
        if (endDate == null && $endInputObj.val() != "") {
            msg = StringFormat(options.msgDateInvalid, options.endDateText);
            isValid = false;
        }
    }

    // Kiểm tra khoảng thời gian
    if (startDate != null && endDate != null) {
        if (compareDate(startDate, endDate) > 0) {
            msg = options.msgDateRangeInvalid;
            isValid = false;
        }
    }
    if (options.showMessage && !isValid) {
        $.warning(msg);
    }
    return isValid;
}

function getKendoObject(objElement, role) {
    if (role == "combobox") {
        return objElement.getKendoComboBox();
    } else if (role == "numerictextbox") {
        return objElement.getKendoNumericTextBox();
    } else if (role == "dropdownlist") {
        return objElement.getKendoDropDownList();
    } else if (role == "datepicker") {
        return objElement.getKendoDatePicker();
    }
}

function showPopupTimKiemTheTaiSan() {
    $(this).showPopupView(gOptions.IDPopupTimKiemTheTaiSan, gOptions.UrlTimKiemTheTaiSan);
}

function showPopupTimKiemNhanSu(jsonData) {
    var url = gOptions.UrlTimKiemNhanSu;
    if (jsonData != undefined) {
        url = buildUrl(url, $.param(jsonData));
    }
    $(this).showPopupView(gOptions.IDPopupTimKiemNhanSu, url);
}

function showPopupTimKiemHocSinh(objQuery) {
    var query = "";
    var fnValidate = "";
    var isShow = true;
    if (objQuery && !$.isEmptyObject(objQuery)) {
        query = "?" + $.param(objQuery);

        fnValidate = objQuery.fnValidateBeforeShow;
    }
    // Là function

    if (typeof fnValidate == "function") {
        isShow = fnValidate();
    }
    //else {
    //    // Là function name
    //    if (typeof getFunction(fnValidate) == "function") {
    //        isShow = getFunction(fnValidate).apply();
    //    }
    //}

    if (isShow) {
        $(this).showPopupView(gOptions.IDPopupTimKiemHocSinh, gOptions.UrlTimKiemHocSinh + query);
    }

}

function closeTimKiemTheTaiSan() {
    $("#" + gOptions.IDPopupTimKiemTheTaiSan).kendoWindowClose();
}

function showPopupThayDoiMatKhau() {
    $(this).showPopupView(gOptions.IDPopupThayDoiMatKhau, gOptions.UrlThayDoiMatKhau);
}

function showPopupCauHinhHeThong() {
    $(this).showPopupView(gOptions.IDPopupCauHinhHeThong, gOptions.UrlCauHinhHeThong);
}

function showPopupTieuChuanTrungHoc() {
    $(this).showPopupView(gOptions.IDPopupTieuChuanTrungHoc, gOptions.UrlTieuChuanTrungHoc);
}

function showPopupTieuChuanTieuHoc() {
    $(this).showPopupView(gOptions.IDPopupTieuChuanTieuHoc, gOptions.UrlTieuChuanTieuHoc);
}

function showPopupTieuChuanMamNon() {
    $(this).showPopupView(gOptions.IDPopupTieuChuanMamNonc, gOptions.UrlTieuChuanMamNon);
}

function showPopupCoSoVatChatKhac() {
    $(this).showPopupView(gOptions.IDPopupCoSoVatChatKhac, gOptions.UrlCoSoVatChatKhac);
}


function showPopupCoSoVatChatKhacPhongGDDT() {
    $(this).showPopupView(gOptions.IDPopupCoSoVatChatKhac, gOptions.UrlCoSoVatChatKhacPhongGDDT);
}

function showPopupCoSoVatChatKhacSoGiaoDuc() {
    $(this).showPopupView(gOptions.IDPopupCoSoVatChatKhac, gOptions.UrlCoSoVatChatKhacSoGiaoDuc);
}

function showPopupCoSoVatChatKhacVaThuVien() {
    $(this).showPopupView(gOptions.IDPopupCoSoVatChatKhac, gOptions.UrlCoSoVatChatKhacVaThuVien);
}

function showPopupThongTinThietBiTruongHoc() {
    $(this).showPopupView(gOptions.IDPopupCoSoVatChat, gOptions.UrlThongTinThietBiTruongHoc);
}

function showPopupQuyetDinhKyLuat() {
    $(this).showPopupView(gOptions.IDPopupQuyetDinhKyLuat, gOptions.UrlQuyetDinhKyLuat);
}

function showPopupQuyetDinhDieuDong() {
    $(this).showPopupView(gOptions.IDPopupQuyetDinhDieuDong, gOptions.UrlQuyetDinhDieuDong);
}

function showPopupQuyetDinhNangLuong() {
    $(this).showPopupView(gOptions.IDPopupQuyetDinhNangLuong, gOptions.UrlQuyetDinhNangLuong);
}

function showPopupQuyetDinhChamDutHopDong() {
    $(this).showPopupView(gOptions.IDPopupQuyetDinhChamDutHopDong, gOptions.UrlQuyetDinhChamDutHopDong);
}

function showPopupQuyetDinhThamNienNhaGiao() {
    $(this).showPopupView(gOptions.IDPopupQuyetDinhThamNienNhaGiao, gOptions.UrlQuyetDinhThamNienNhaGiao);
}

function showPopupQuyetDinhNangThamNienNhaGiao() {
    $(this).showPopupView(gOptions.IDPopupQuyetDinhNangThamNienNhaGiao, gOptions.UrlQuyetDinhNangThamNienNhaGiao);
}

function showPopupQuyetDinhKhenThuong() {
    $(this).showPopupView(gOptions.IDPopupQuyetDinhKhenThuong, gOptions.UrlQuyetDinhKhenThuong);
}

function showPopupQuyetDinhNghiKhongLuong() {
    $(this).showPopupView(gOptions.IDPopupQuyetDinhNghiKhongLuong, gOptions.UrlQuyetDinhNghiKhongLuong);
}

function showPopupQuyetDinhTroLaiCongTac() {
    $(this).showPopupView(gOptions.IDPopupQuyetDinhTroLaiCongTac, gOptions.UrlQuyetDinhTroLaiCongTac);
}

function showPopupQuyetDinhNghiHuu() {
    $(this).showPopupView(gOptions.IDPopupQuyetDinhNghiHuu, gOptions.UrlQuyetDinhNghiHuu);
}

function showPopupQuyetDinhThoiGiuChuc() {
    $(this).showPopupView(gOptions.IDPopupQuyetDinhThoiGiuChuc, gOptions.UrlQuyetDinhThoiGiuChuc);
}

function showPopupQuyetDinhBoNhiem() {
    $(this).showPopupView(gOptions.IDPopupQuyetDinhBoNhiem, gOptions.UrlQuyetDinhBoNhiem);
}

function showPopupQuyetDinhCuDiHoc() {
    $(this).showPopupView(gOptions.IDPopupQuyetDinhCuDiHoc, gOptions.UrlQuyetDinhCuDiHoc);
}

function showPopupQuyetDinhBoNhiemToBoMon() {
    $(this).showPopupView(gOptions.IDPopupQuyetDinhBoNhiemToBoMon, gOptions.UrlQuyetDinhBoNhiemToBoMon);

}

function showPopupKyLaiHopDong() {
    $(this).showPopupView(gOptions.IDPopupKyLaiHopDong, gOptions.UrlKyLaiHopDong);
}

function showPopupDanhMucMonHoc(strIDs, callBack, loaiDanhGia) {
    var additionData = {
        ids: strIDs,
        callback: callBack,
        loaiDanhGia: loaiDanhGia
    };
    var url = buildUrl(gOptions.UrlDanhMucMonHoc, $.param(additionData));
    $(this).showPopupView(gOptions.IDPopupDanhMucMonHoc, url);
}

function showPopupDonTuiDanhPhach() {
    $(this).showPopupView(gOptions.IDPopupDonTuiDanhPhach, gOptions.UrlDonTuiDanhPhach);
}


function showPopupImportHocSinh(url) {
    $(this).showPopupView(gOptions.IDPopupImportHocSinh, url);
}

function showPopupDanhMucMucDoDoKho() {
    $(this).showPopupView("popupMucDoDoKho", gOptions.UrlDanhMucMucDoDoKho);
}

function showPopupCauHoi(idCauHoi, isTuLuan) {
    var strTuLuan = "";
    if (isTuLuan != undefined) {
        strTuLuan = isTuLuan ? "TuLuan" : "";
    }

    $(window).showPopupView('popupChiTietCauHoi', gOptions.UrlXemChiTietCauHoi + '?' + $.param({ idCauHoi: idCauHoi, tuLuan: strTuLuan }));
}

function showPopupXemBoDeThi(idBoDeThi, isTuLuan) {
    if (isTuLuan == undefined) {
        isTuLuan = false;
    }
    $(window).showPopupView('popupXemBoDeThi', gOptions.UrlXemBoDeThi + '?' + $.param({ idBoDeThi: idBoDeThi, isTuLuan: isTuLuan }));
}

function showPopupTimKiemTruong(options) {
    $(window).showPopupView('popupTimKiemTruong', gOptions.UrlTimKiemTruong + '?' + $.param(options));
}

function showPopupThanhToanHocPhi() {
    $(this).showPopupView(gOptions.IDPopupThanhToanHocPhi, gOptions.UrlThanhToanHocPhi);
}

function showPopupPhieuChiMienGiam() {
    $(this).showPopupView(gOptions.IDPopupPhieuChiMienGiam, gOptions.UrlPhieuChiMienGiam);
}

function showPopupHuyPhieuThu() {
    $(this).showPopupView(gOptions.IDPopupHuyPhieuThu, gOptions.UrlHuyPhieuThu);
}

function showPopupTrichXuatBaoCaoTheoCV() {
    $(this).showPopupView(gOptions.IDPopupTrichXuatBaoCaoTheoCV, gOptions.UrlTrichXuatBaoCaoTheoCV);
}

function showPopupSoGiaoDuc() {
    $(this).showPopupView("popupSoGiaoDuc", gOptions.UrlSoGiaoDuc);
}

function showPopupGopTruong() {
    $(this).showPopupView(gOptions.IDPopupGopTruong, gOptions.UrlGopTruong);
}

function showPopupCauHinhMayIn() {
    $(this).showPopupView(gOptions.IDPopupCauHinhMayIn, gOptions.UrlCauHinhMayIn);
}

function showPopupTimKiemGVHopDong(e) {
    var button = e.target;
    var additionData = $(button).attr("data-addition");
    var url = gOptions.UrlPopupTimKiemGiaoVienHopDong;

    // Có dữ liệu bổ sung
    if (additionData) {
        // Là function name
        if (typeof getFunction(additionData, {}) == "function") {
            var additionJson = getFunction(additionData).apply();
            url = buildUrl(url, $.param(additionJson));
        } else {
            readInfo.url += additionData;
        }
    }

    $(this).showPopupView(gOptions.IDPopupTimKiemGiaoVienHopDong, url);
}

function showPopupDanhMucPhongThiTruong(strIDs, idTruong, callBack) {
    var additionData = {
        ids: strIDs,
        idTruong:idTruong,
        callback: callBack
    };

    var url = buildUrl(gOptions.UrlDanhSachPhongThiTruong, $.param(additionData));
    $(this).showPopupView(gOptions.IDPopupDanhMucPhongThiTruong, url);
}

function replaceNull(obj, replacedValue) {
    if (obj == null) {
        if (replacedValue != undefined) {
            return replacedValue;
        } else {
            return "";
        }
    } else {
        return obj;
    }
}

/* Hack IE8 last child */
function last_child() {
    if (/msie [1-8]{1}[^0-9]/.test(navigator.userAgent.toLowerCase())) {
        $('*:last-child').addClass('last-child');
    }
}

function StringFormat(str) {
    for (var i = 1; i < arguments.length; i++)
        str = str.replace("{" + (i - 1) + "}", arguments[i]);
    return str;
}

function clearFilterDanhMuc(idInput, idDropDown, selectedValue) {
    $("#" + idInput).val("");
    if (selectedValue != null) {
        $("#" + idDropDown).data("kendoDropDownList").value(selectedValue);
    }
}

function checkCombobox(_combobox, valueField) {
    _combobox.input.on("blur", _combobox, function (e) {
        var inputField = $(e.currentTarget);
        var combobox = e.data;
        var found = false;
        var tooltip = "";

        if (inputField.val().length == 0) {
            found = true;
        } else {
            $.each(_combobox.dataSource._data, function (idx, item) {
                if (item[valueField] === inputField.val()) {
                    found = true;
                    return false;
                }
            });
        }
        if (found == false) {
            e.preventDefault();
            $(e.currentTarget).addClass("error").removeAttr("title");
            setTimeout(function () {
                inputField.focus().select();
            }, 100);
        } else {
            $(e.currentTarget).removeClass("error").attr("title", tooltip);
        }
    });
}

function cascadeComboboxDonVi(objKendoLoaiDonVi, objKendoPhong, objKendoTruong, isRequired, objKendoQuanHuyen, objKendoCapHoc) {
    var enableControl = function (enablePhong, enableTruong) {
        objKendoPhong.enable(enablePhong);
        objKendoPhong.value(null);
        objKendoTruong.enable(enableTruong);
        objKendoTruong.value(null);

        if (objKendoQuanHuyen != undefined && objKendoQuanHuyen != null) {
            objKendoQuanHuyen.enable(enableTruong);
            objKendoQuanHuyen.value(null);
        }

        if (objKendoCapHoc != undefined && objKendoCapHoc != null) {
            objKendoCapHoc.enable(enableTruong);
            objKendoCapHoc.value(null);
        }

        if (isRequired) {
            $(document).find("label[for=" + objKendoPhong.element.attr("id") + "]").toggleClass("required", enablePhong);
            if (enablePhong && objKendoPhong.element.attr("data-required-msg") != undefined) {
                objKendoPhong.element.attr("data-val-required", objKendoPhong.element.attr("data-required-msg"));
            } else {
                objKendoPhong.element.removeAttr("data-val-required");
            }
            $(document).find("label[for=" + objKendoTruong.element.attr("id") + "]").toggleClass("required", enableTruong);
            if (enableTruong && objKendoTruong.element.attr("data-required-msg") != undefined) {
                objKendoTruong.element.attr("data-val-required", objKendoTruong.element.attr("data-required-msg"));
            } else {
                objKendoTruong.element.removeAttr("data-val-required");
            }
        }

        if (enableTruong && objKendoTruong.dataSource.data().length == 1) {
            objKendoTruong.select(objKendoTruong.ul.children().eq(0));
        }

        if (enablePhong && objKendoPhong.dataSource.data().length == 1) {
            objKendoPhong.select(objKendoPhong.ul.children().eq(0));
        }
    };

    enableControl(false, false);
    objKendoLoaiDonVi.bind("change", function () {
        var loaiDonVi = objKendoLoaiDonVi.value();

        if (loaiDonVi == gOptions.LoaiDonVi["SoGiaoDuc"]) {
            enableControl(false, false);
        } else if (loaiDonVi == gOptions.LoaiDonVi["PhongGDDT"]) {
            enableControl(true, false);
        } else if (loaiDonVi == gOptions.LoaiDonVi["Truong"]) {
            objKendoTruong.dataSource.read();
            enableControl(false, true);
        } else {
            enableControl(false, false);
        }
    });



    objKendoLoaiDonVi.value(gOptions.DonViUser.LoaiDonVi);
    objKendoLoaiDonVi.trigger("change");
    if (gOptions.DonViUser.IsPhongGDDT) {
        objKendoPhong.value(gOptions.DonViUser.IDDonVi);
        objKendoPhong.enable();
    }
    if (gOptions.DonViUser.IsTruong) {
        objKendoTruong.value(gOptions.DonViUser.IDDonVi);
        objKendoTruong.enable();
    }

}

function xuatQuyetDinh(objButton, mauQuyetDinh) {
    if (mauQuyetDinh) {
        var url = $(objButton).attr("data-action-url");
        window.open(buildUrl(url, "mauQuyetDinh=" + mauQuyetDinh), "", "", "_blank");
        $(objButton).kendoWindowClose();
    } else {
        $.warning("Chưa chọn mẫu quyết định");
        e.preventDefault();
    }
}

function getUnique(size) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < size; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


/**********************************************************
 * Upload
 **********************************************************/

function uploadInit(sender, existFileID) {
    var existFiles = $("#" + existFileID);

    if (existFiles.length > 0) {
        $(sender.wrapper).append(existFiles);

        $(".k-file").each(function () {
            return $(this).data("fileNames", [{ name: $(this).data("att-id") }]);
        });

        existFiles.show();
    }
}

function uploadApplySettings(sender) {

    $(sender.wrapper).find(".k-file").css("display", "inline");
    $(sender.wrapper).find(".k-file").css("float", "left");
    $(sender.wrapper).find(".k-file").css("border", "1px solid #94C0D2;");

    $(sender.wrapper).find(".k-upload-files").css("height", "39px");
    $(sender.wrapper).find(".k-upload-files").css("overflow", "auto");
}

function uploadOnSelect(e) {
    var message = "";

    $.each(e.files, function (index, value) {
        // Kiểm tra đuôi
        if (e.sender.extensionsLimit != null &&
            e.sender.extensionsLimit.length > 0) {
            if ($.inArray(value.extension.toLowerCase().replace(".", ""), e.sender.extensionsLimit) == -1) {
                message += String.format(e.sender.extensionsLimitMsg, value.name) + "<br/>";;
            }
        }

        // Kiểm tra kích thước
        if (e.sender.exceedSizeLimit > 0) {
            if (value.size != null && value.size > e.sender.exceedSizeLimit) {
                message += String.format(e.sender.exceedSizeLimitMsg, value.name,
                    kendo.toString(e.sender.exceedSizeLimit / 1024, "n0") + " KB") + "<br/>";;
            }
        }
    });

    if (message.length > 0) {

        $.warning(message);

        e.preventDefault();
        return;
    }
}

function uploadOnComplete(e) {
    uploadApplySettings(e.sender);
}

function uploadOnSuccess(e) {
}

function uploadOnError(e) {
    if (e.XMLHttpRequest.response.length > 0) {
        $.error(e.XMLHttpRequest.response);
    }
    else {
        showDefaultErrorMessage();
    }
}

function uploadOnUpload(e) {
    uploadApplySettings(e.sender);
}

function uploadExtensionFileName(extension) {
    switch (extension) {
        case '.jpg':
        case '.img':
        case '.png':
        case '.gif':
            return "jpg";
        case '.doc':
        case '.docx':
            return "doc";
        case '.xls':
        case '.xlsx':
            return "xls";
        case '.ppt':
        case '.xlsx':
            return "xls";
        case '.pdf':
            return "pdf";
        case '.zip':
        case '.rar':
            return "zip";
        default:
            return "file";
    }
}

/// <summary>
/// Gets the identifier nien hoc gan nhat.
/// </summary>
/// <returns></returns>
/// <author>Phan Phuoc Tho</author>
/// <date format = "mm/dd/yyyy">12/26/2013</date>
function GetIDNienHocGanNhat() {
    var result = null;

    $.ajax({
        type: "POST",
        url: gOptions.UrlGetIDNienHocHienTai,
        async: false,
        success: function (res) {
            result = res;
        }
    });

    return result;
}

/// <summary>
/// Event when ComboBox load complete
/// </summary>
/// <returns></returns>
/// <author>Phan Phuoc Tho</author>
/// <date format = "mm/dd/yyyy">12/26/2013</date>
function SetDefaultValueWhenLoadComplete(e, identify) {
    var value = "";
    var cbo = e.sender;

    if (cbo != undefined && $(cbo).data("FirstLoad") != 1) {
        $(cbo.dataSource.data()).each(function () {
            if (this.ID == identify) {
                value = identify;
            }
        });

        $(cbo).data("FirstLoad", 1);

        if (cbo.dataSource.data().length == 1) {
            value = cbo.dataSource.data()[0].ID;
        }

        cbo.value(value.toString());

        cbo.trigger("change");
    }
}

/// <summary>
/// CheckDotTuyenSinhIsDaThi
/// </summary>
/// <returns></returns>
/// <author>Phan Phuoc Tho</author>
/// <date format = "mm/dd/yyyy">02/17/2014</date>
function CheckDotTuyenSinhIsDaThi(idDotTuyenSinh) {
    var result = true;

    $.ajax({
        type: "POST",
        url: gOptions.UrlCheckDotTuyenSinhIsDaThi,
        data: { idDotTuyenSinh: idDotTuyenSinh },
        async: false,
        success: function (res) {
            if (res > 0) {
                result = true;
            }
            else {
                result = false;
            }
        }
    });

    return result;
}

//function onSelectDropDownDanhMuc(evt,idNoiDung) {
//    $("#" + idNoiDung).attr("name", evt.sender.value());
//    alert(evt.sender.value());
//}


function emptyIfNull(val) {
    if (val) {
        return val;
    }
    return '';
}

function CheckKhoaBangLuong(loaiDonVi, idDonVi, thang, nam, loaiLuong) {
    var result = true;

    $.ajax({
        type: "POST",
        async: false,
        url: gOptions.CheckKhoaBangLuong,
        data: { loaiDonVi: loaiDonVi, idDonVi: idDonVi, thang: thang, nam: nam, loaiLuong: loaiLuong },

        success: function (res) {
            if (res == "True") {
                result = true;
            }
            else {
                result = false;
            }
        },
    });

    return result;
}

/// <summary>
/// Only allow number character
/// </summary>
/// <returns></returns>
/// <author>Phan Phuoc Tho</author>
/// <date format = "mm/dd/yyyy">8/26/2013</date>
function keydownForNumber(event) {
    // Allow: backspace, delete, tab, escape, and enter
    if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
        // Allow: Ctrl+A
        (event.keyCode == 65 && event.ctrlKey === true) ||
        // Allow: home, end, left, right
        (event.keyCode >= 35 && event.keyCode <= 39) ||
        (event.keyCode == 110)) {
        // let it happen, don't do anything
        return;
    }
    else {
        // Ensure that it is a number and stop the keypress
        if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
            event.preventDefault();
        }
    }
}

/// <summary>
/// When we check checkboxes
/// </summary>
/// <returns></returns>
/// <author>Phan Phuoc Tho</author>
/// <date format = "mm/dd/yyyy">8/26/2013</date>
function keyupForNumber(event) {
    // Allow: backspace, delete, tab, escape, and enter
    if (event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
        // Allow: Ctrl+A
        (event.keyCode == 65 && event.ctrlKey === true) ||
        // Allow: home, end, left, right
        (event.keyCode >= 35 && event.keyCode <= 39) ||
        (event.keyCode == 110)) {
        // let it happen, don't do anything
        return;
    }
    else {
        // Ensure that it is a number and stop the keypress
        if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
            event.preventDefault();
        }
    }
}

function millisecondsToString(milliseconds) {
    var oneHour = 3600000;
    var oneMinute = 60000;
    var oneSecond = 1000;
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var result;

    if (milliseconds >= oneHour) {
        hours = Math.floor(milliseconds / oneHour);
    }

    milliseconds = hours > 0 ? (milliseconds - hours * oneHour) : milliseconds;

    if (milliseconds >= oneMinute) {
        minutes = Math.floor(milliseconds / oneMinute);
    }

    milliseconds = minutes > 0 ? (milliseconds - minutes * oneMinute) : milliseconds;

    if (milliseconds >= oneSecond) {
        seconds = Math.floor(milliseconds / oneSecond);
    }

    if (hours > 0) {
        result = (hours > 9 ? hours : "0" + hours) + ":";
    } else {
        result = "00:";
    }

    if (minutes > 0) {
        result += (minutes > 9 ? minutes : "0" + minutes) + ":";
    } else {
        result += "00:";
    }

    if (seconds > 0) {
        result += (seconds > 9 ? seconds : "0" + seconds);
    } else {
        result += "00";
    }

    return result;
}

/***********
* Upload hình
***************/

function uploadOnSelectEditImageCommon(e) {
    // Check exist file
    if (e.files.length > 0) {
        // Check type is image
        if (!$.checkExtensionFile(e.files[0].extension.toLowerCase(), gOptions.ImageExtensions)) {
            $.warning('Chỉ upload các file có định dạng .gif, .jpg, .jpeg, .png');
            e.preventDefault();
        }
    } else {
        $(".div-photo k-upload").getKendoUpload().upload();
    }
}

function uploadImageCommonSuccess(res) {
    debug();
    var data = res.response.Data;
    var fileName = data[0];
    var filePath = data[1];
    $('#div-photo input[type=hidden]').val(fileName);
    $('#imageControlCommon').attr('src', filePath + "?t=" + (new Date()).getTime());
    //alert($("#div-photo input[type]").attr("idUser") + "_" + $("#div-photo input[type=file]").val());
}


function removeImageCommon() {
    $('#div-photo input[type=hidden]').val('');
    $('#imageControlCommon').attr('src', gOptions.UrlImageNoImage);
}


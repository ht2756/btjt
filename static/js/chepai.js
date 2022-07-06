
$(document).on("click", "body", function () {
    $("#textEnBox, #textJtBoxs").hide();
});

var isNew = false // 新能源
// //提交按钮，获取车牌号码
// function submms() {
//     var carNum = "";
//     $(".carLicenseMain ul li").each(function (index) {
//         var cartext = $(this).text();
//         console.log(index)
//         if (cartext == "" && index < 7) {
//             cartext = " ";
//         } else {

//         }
//         carNum += cartext;
//     })
//     $("#carinput").val(carNum);
//     if (carNum.indexOf(" ") != -1) {
//         alert("请填写完整车牌号");
//     } else {

//     }
// }



//点击小键盘时
$(document).on("click", ".provienceBox ul li", function (event) {
    event.stopPropagation();
    var dataqh = $(this).attr("datas");
    //如果点击的是”ABC“，显示英文键盘
    if (dataqh == "en") {
        var indexs = $(".carLicenseMain ul li.active").index();
        //如果是输入第一位，不能切换键盘
        if (indexs == 0) {
            alert("车牌号第一位只能是简称");
        } else {
            $("#textEnBox").show();
            $("#textJtBoxs").hide();
        }
        //如果点击的是”中“，显示省份键盘
    } else if (dataqh == "jt") {
        $("#textEnBox").hide();
        $("#textJtBoxs").show();

        //如果是”删除“，就删除
    } else if (dataqh == "delete") {
        var ontext = $(".carLicenseMain ul li.active").text();

        if (ontext) {
            $(".carLicenseMain ul li.active").text("");
        } else {
            var indexs = $(".carLicenseMain ul li.active").index();
            if (indexs == 0) {
                $(".carLicenseMain ul li.active").text("");
            } else {
                $(".carLicenseMain ul li").removeClass("active");
                $(".carLicenseMain ul li").eq(indexs - 1).addClass("active");
                $(".carLicenseMain ul li.active").text("");
            }
        }
        showBoard()
        // 判断新能源是否被删除
        var val = $('#xinengyuanLi').text();
        if (val === '') {
            isNew = false
            $('#xinnengyuan').removeClass('hide')
            $('#xinengyuanLi').addClass('hide');
        }
    } else {
        var textname = $(this).text();
        keyboard(textname)
    }
});


//点击车牌输入框时
$(document).on("click", ".carLicenseMain ul li", function (event) {
    event.stopPropagation();
    $(this).siblings("li").removeClass("active");
    $(this).addClass("active");
    showBoard()
});

function showBoard () {
    var indexs = $(".carLicenseMain ul li.active").index();
    if (indexs == 0) {
        $("#textEnBox").hide();
        $("#textJtBoxs").show()
    } else {
        $("#textEnBox").show();
        $("#textJtBoxs").hide();
    }
}

function keyboard(textname) {
    $(".carLicenseMain ul li.active").text(textname);
    var indexs = $(".carLicenseMain ul li.active").index();
    var max = isNew ? 7 : 6; 
    if (indexs == 0 || indexs == max) {
        $("#textEnBox").show();
        $("#textJtBoxs").hide();
    } else {

    }
    if (indexs >= max || indexs <= -1) {
        // $(".carLicenseMain ul li").removeClass("active");
        $("#textEnBox").hide();
        $("#textJtBoxs").hide();
        $('#chepaiUl li').removeClass("active");
    } else {
        $(".carLicenseMain ul li").removeClass("active");
        $(".carLicenseMain ul li").eq(indexs + 1).addClass("active");
    }
}

// 新能源
$('#xinnengyuan').on('click', (event) => {
    event.stopPropagation();
    isNew = true
    $('#xinnengyuan').addClass('hide')
    $('#chepaiUl li').removeClass("active");
    $('#xinengyuanLi').removeClass('hide').addClass("active");
    $("#textEnBox").show();
})

$('#chepaiSearch').on('click', () => {
    var carNum = ''
    $(".carLicenseMain ul li").each(function (index) {
        var cartext = $(this).text();
        carNum += cartext;
    })
    if (carNum.length !== (isNew ? 8 : 7)) {
        alert("请填写完整车牌号");
    }
    carNum = encodeURIComponent(carNum)
    window.location.href = `./parkdetail.html?carNum=${carNum}`
})
// 全局变量a和b，分别获取用户框和密码框的value值
var a = document.getElementsByName("user")[0].value;
var b = document.getElementsByName("password")[0].value;

//用户框失去焦点后验证value值
function oBlur_1() {
  a = document.getElementsByName("user")[0].value;
  if (!a) { //用户框value值为空
    document.getElementById("remind_1").innerHTML = "请输入用户名！";
    document.getElementById("change_margin_1").style.marginBottom = 1 + "px";
  } else { //用户框value值不为空
    document.getElementById("remind_1").innerHTML = "";
    document.getElementById("change_margin_1").style.marginBottom = 19 + "px";
  }
}

//密码框失去焦点后验证value值
function oBlur_2() {
  b = document.getElementsByName("password")[0].value;
  if (!b) { //密码框value值为空
    document.getElementById("remind_2").innerHTML = "请输入密码！";
    document.getElementById("change_margin_2").style.marginBottom = 1 + "px";
    document.getElementById("change_margin_3").style.marginTop = 2 + "px";
  } else { //密码框value值不为空
    document.getElementById("remind_2").innerHTML = "";
    document.getElementById("change_margin_2").style.marginBottom = 19 + "px";
    document.getElementById("change_margin_3").style.marginTop = 19 + "px";
  }
}

//用户框获得焦点的隐藏提醒
function oFocus_1() {
  document.getElementById("remind_1").innerHTML = "";
  document.getElementById("change_margin_1").style.marginBottom = 19 + "px";
}

//密码框获得焦点的隐藏提醒
function oFocus_2() {
  document.getElementById("remind_2").innerHTML = "";
  document.getElementById("change_margin_2").style.marginBottom = 19 + "px";
  document.getElementById("change_margin_3").style.marginTop = 19 + "px";
}

//若输入框为空，阻止表单的提交
function submitTest() {
  if (!a && !b) { //用户框value值和密码框value值都为空
    document.getElementById("remind_1").innerHTML = "请输入用户名！";
    document.getElementById("change_margin_1").style.marginBottom = 1 + "px";
    document.getElementById("remind_2").innerHTML = "请输入密码！";
    document.getElementById("change_margin_2").style.marginBottom = 1 + "px";
    document.getElementById("change_margin_3").style.marginTop = 2 + "px";
    return false; //只有返回true表单才会提交
  } else if (!a) { //用户框value值为空
    document.getElementById("remind_1").innerHTML = "请输入用户名！";
    document.getElementById("change_margin_1").style.marginBottom = 1 + "px";
    return false;
  } else if (!b) { //密码框value值为空
    document.getElementById("remind_2").innerHTML = "请输入密码！";
    document.getElementById("change_margin_2").style.marginBottom = 1 + "px";
    document.getElementById("change_margin_3").style.marginTop = 2 + "px";
    return false;
  }
}

function myfunction() {
  var logged = window.location.search.replace('?', '').split('&');
  if (logged.length == 2) {
    var dic = new Array();
    logged.forEach(element => {
      dic[element.split('=')[0]] = element.split('=')[1];
    });

    if (dic.user == 'admin' && dic.password == 'admin') {
      document.getElementById("s").innerHTML = "登陆成功";
    } else if (dic.user == 'admin') {
      document.getElementById("s").innerHTML = "密码错误";
    } else {
      document.getElementById("s").innerHTML = "用户名不存在";
    }
  }
  a = "document.getElementById('D1').innerHTML='<h1 id=t1>我出来啦</h1>'";
  setTimeout(a, 10000);
}

function newBrwWin() {
  window.open("https://www.baidu.com", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400");
}


function newMsgWin() {
  var myWindow = window.open("", "MsgWindow", "width=500,height=200");
  myWindow.document.write("知识通过分享而增加，而不是靠储蓄。请与你的朋友和你的组织分享这个网站。");
}

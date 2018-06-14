var system = {};
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
$("document").ready(function() {
//	if (system.win || system.mac || system.xll) {
//		window.location.href = "http://www.baidu.com/";
//	} else {
//		window.location.href = "http://www.sina.com.cn/";
//	}
//	document.write("<p>我的第一段 JavaScript</p>");
//	txt = "            "+navigator.appCodeName;
//	txt+= "            " + navigator.appName;
//	txt+= "            " + navigator.appVersion;
//	txt+= "            " + navigator.cookieEnabled;
//	txt+= "            " + navigator.platform ;
//	txt+= "            " + navigator.userAgent ;
//	txt+= "            " + navigator.systemLanguage;
//	alert(txt);
})
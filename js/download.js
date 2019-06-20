

//判断是否是微信
function is_weixin() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		return true;
	} else {
		return false;
	}
}


//点击andriod开启遮罩,引导用户在浏览器打开
$('.ad').click(function () {   
	var isWeixin = is_weixin();
	var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
	var weixinTip = $('<div id="weixinTip"><p><img src="/img/top_1.png" alt=""/>点击右上角，在浏览器打开</p></div>');
	
	if (isWeixin) {
		$("body").append(weixinTip);
	}else{
		window.location.href = "http://luckywin.ufile.ucloud.com.cn/download/win/win-v2.0.0.apk"
	}
	$("#weixinTip").click(function () {
		$("#weixinTip").css("display", "none");
	})
	
})



  



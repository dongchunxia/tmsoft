$(function(){

	//文档加载完毕，显示第一张图片
	$(".slide-container li").eq(0).show();

	//自动切换图片
	var num=$(".slide-container li").size();
	var i=0;
	var timer=setInterval(moveR,3000);

	//核心向右运动函数
	function moveR(){
			i++;
			if (i==num) {
				i=0;
			}
			$(".slide-container li").eq(i).fadeIn(800).siblings().fadeOut(800);
		}
	//核心向左运动函数
	function moveL(){
			i--;
			if (i==-1) {
				i=num-1;
			}
			$(".slide-container li").eq(i).fadeIn(800).siblings().fadeOut(800);
		}	

	$("#left").click(function(){
		moveL();
	})
	$("#right").click(function(){
		moveR();
	})

	//定时器的开始与结束
	$(".slide-container").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(moveR,3000);
	});

	//上拉菜单
	//案例
	$("#example").mouseover(function(){
		$("#example ul").show();
		$(this).css("background-color","#3c3c3c");
		$("#example>a").css("color","#fff");
	}).mouseout(function(){
		$("#example ul").hide();
		$(this).css("background-color","#2e2e2e");
		$("#example>a").css("color","#9d9d9d");
	})
	//服务
	$("#service").mouseover(function(){
		$("#service ul").show();
		$(this).css("background-color","#3c3c3c");
		$("#service>a").css("color","#fff");
	}).mouseout(function(){
		$("#service ul").hide();
		$(this).css("background-color","#2e2e2e");
		$("#service>a").css("color","#9d9d9d");
	})
	//关于我们
	$("#about").mouseover(function(){
		$("#about ul").show();
		$(this).css("background-color","#3c3c3c");
		$("#about>a").css("color","#fff");
	}).mouseout(function(){
		$("#about ul").hide();
		$(this).css("background-color","#2e2e2e");
		$("#about>a").css("color","#9d9d9d");
	})

})
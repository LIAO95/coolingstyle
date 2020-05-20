

var breakpoint = 0;

// Function to set equinav breakpoint
function equiNavBreakpoint () {
	$('.equinav ul.navbar-nav > li').each(function(){ breakpoint += $(this).innerWidth(); }); //add up all menu items width for breakpoint
}

equiNavBreakpoint();

// Function to apply equinav menu
function equiNavMenu () {
	
	$('.equinav ul.navbar-nav > li').removeAttr('style');
	
	var mq = window.matchMedia('(min-width: 768px)');
	
	var nav = $('.equinav').innerWidth(); // Navbar Width
	var items = $('.equinav ul.navbar-nav > li').length; // Total number of menu items
	var space = nav - breakpoint; // Empty navbar space
	var spacer = parseInt(space / items); // Number of pixels to spread out to individual menu items. Since decimal places is not good with pixels we have to use parseInt.
	var xspace = nav - (breakpoint + (spacer * items)); // The remaining space after getting the spacer with parseInt
	var xspacer = Math.ceil(xspace / items); // The remaning number of pixels to distribute to menu items
	
	var num = 0;
	
	if (mq.matches) {
	
	  if (nav > breakpoint) {
		
			$('.equinav').removeClass('equinav-collapse');
			
			if (breakpoint == 0) equiNavBreakpoint();
			
			$('.equinav ul.navbar-nav > li').each(function(){
				
					$(this).css({'width':'auto'});
					
					var itemwidth = 0;
					itemwidth = (num < xspace) ? ($(this).innerWidth() + spacer) + xspacer : $(this).innerWidth() + spacer;
					
					$(this).css({'width':itemwidth+'px'});
					
					num++;
					
					if ( $(this).find('.dropdown-menu').length != 0 ) {
						if (num == items) $(this).find('.dropdown-menu').addClass('pull-right');
						if ($(this).find('.dropdown-menu').innerWidth() < $(this).innerWidth()) $(this).find('.dropdown-menu').css({'width':$(this).innerWidth()+'px'});
					}
			});
			
		} else {
			
			$('.equinav').addClass('equinav-collapse');
			$('.equinav ul.navbar-nav > li > .dropdown-menu').removeAttr('style');
			
		}
		
	} else {
		
		$('.equinav').addClass('equinav-collapse');
		$('.equinav ul.navbar-nav > li > .dropdown-menu').removeAttr('style');
		
	};
}

equiNavMenu();

$(window).resize(function(){
	equiNavMenu();
});

// 鼠标滑过出现下拉菜单
$(function () {
    $(".dropdown").mouseover(function () {
        $(this).addClass("open");
    });

    $(".dropdown").mouseleave(function(){
        $(this).removeClass("open");
    })

})


//下拉菜单点击跳转链接
$(document).ready(function(){
$(document).off('click.bs.dropdown.data-api');
});


//banner自动轮播
$(function() {
	$('#myCarousel').carousel({
		interval: 3000
	});
})

//内容信息导航吸顶
	$(document).ready(function(){ 
	var navHeight= $("#navHeight").offset().top; 
	var navFix=$("#nav-wrap"); 
	$(window).scroll(function(){ 
		if($(this).scrollTop()>navHeight){ 
			// navFix.addClass("navFix");
			$(".index_top ").removeClass("fixed-top");
		} 
		else{ 
			// navFix.removeClass("navFix");
			$(".index_top ").addClass("fixed-top");
		} 
		}) 
	})


	//右侧客服
$(document).ready(function(){

	$("#leftsead a").hover(function(){
		if($(this).prop("className")=="youhui"){
			$(this).children("img.hides").show();
		}else{
			$(this).children("img.hides").show();
			$(this).children("img.shows").hide();
			$(this).children("img.hides").animate({marginRight:'0px'},'slow'); 
		}
	},function(){ 
		if($(this).prop("className")=="youhui"){
			$(this).children("img.hides").hide('slow');
		}else{
			$(this).children("img.hides").animate({marginRight:'-143px'},'slow',function(){$(this).hide();$(this).next("img.shows").show();});
		}
	});

	$("#top_btn").click(function(){if(scroll=="off") return;$("html,body").animate({scrollTop: 0}, 600);});

});


window.onresize = function() { //监听窗口变化
　　window.location.reload(); //兼容chrome safari
　　window.location.href = ""; //兼容火狐
}




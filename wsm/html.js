
var slideIndex = 1;
showSlides(slideIndex);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("header");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
 slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // 切换时间3秒
}
/*切换背景*/
$(document).ready(function(e) {
    $(".zuo").click(function(){
		$(".tiaoseban").slideToggle("slow");
		});
});
function f(n){
	var a=document.getElementById("zhuti");
	switch(n){
		case 1:
		a.style.backgroundImage="url('picture/1.png')";
		break;
		case 2:
		a.style.backgroundImage="url('picture/2.png')";
		break;
		case 3:
		a.style.backgroundImage="url('picture/3.png')";
		break;
		case 4:
		a.style.backgroundImage="url('picture/4.png')";
		break;
		case 5:
		a.style.backgroundImage="url('picture/5.png')";
		break;
		case 6:
        a.style.backgroundImage="url('picture/6.png')";	
        break;
		case 7:
		a.style.backgroundImage="url('picture/7.png')"
	}
	$(".tiaoseban").slideUp(500);
	}/*  eq选择器也行*/
/*模拟心跳*/
setInterval(function(){heart()},500);
var x=1;
function heart(){
	if(x==1){
		$(".fa-heart").css("transform","scale(1.2)");
		x=0;
		}else{
	   $(".fa-heart").css("transform","scale(1)");
	   x=1;
		}
	}	
/*时间*/
function startTime(){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();// 在小于10的数字前加一个‘0’
	m=checkTime(m);
	s=checkTime(s);
	document.querySelector('.time').innerHTML=h+":"+m+":"+s;
	t=setTimeout(function(){startTime()},500);
}
function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}
startTime();

$(".tips1").click(function(e) {
	shici();
    $(".tip1").slideToggle("slow");
});
/*历史上的今天*/
$(".tips2").click(function(e) {
	history();//平时不加载，点击时在加载  防止页面过多要素
	$(".history").fadeIn(1000);
});
$(".history-close").click(function(e) {
	remove();
 });
/*右部功能*/
$(".fa-angle-left").click(function(e) {
    $(".add").toggle();
	$(this).css("display","none");
});
$(function(){	
	$(window).scroll(function() {		
		if($(window).scrollTop() >= 300){
			$('#you').fadeIn(100); 
			$('.wsm').fadeIn(100);
			$('.fa-angle-left').fadeOut(100);	
			$('.time').fadeOut(100);
			$('.footer').fadeIn(200)
		}else{   
	     	$('#you').fadeOut(100); 
			$('.wsm').fadeOut(100);
			$(".change").css("visibility","visible");
		    $(".question").css("visibility","visible");/*添加我时，向下滚动，右标签下两个消失.未解决*/
			$(".add").css("height","160px");
			$('.fa-angle-left').fadeIn(100);
			$('.add').fadeOut(100);
			$('.youup').fadeOut(100);
			$('.add').css("margin-top","-870px");
			$('.time').fadeIn(100);
			$('.footer').fadeOut(200)
		}  
	});
	$('.up').click(function(){
	$('html,body').animate({scrollTop: '0px'}, 800);});
});
var a=1;
$(".addme").click(function(e) {
		if(a==1){
		$(".youup").fadeIn(100);
		$(".add").animate({marginTop:'-700px'});
		$(".change").css("visibility","hidden");
		$(".question").css("visibility","hidden");
		$(".add").css("height","40px")
		a=0;
		}else{
		$(".add").animate({marginTop:'-870px'});
		$(".add").fadeOut(100);
		$(".youup").fadeOut(100);
		$(".fa-angle-left").css("display","block");
		$(".change").css("visibility","visible");
		$(".question").css("visibility","visible");
		$(".add").css("height","160px")
		a=1;
			}
    });	/*可选用三目选择式*/
	/*其他地方关闭*/
	$(".question").click(function(e) {
        $(".model").css("display","block");
    });
/*切换背景色*/
$(".change").click(function(e) {
    $(document.body).toggleClass("body")
	$(".add").fadeOut(100);
	$(".fa-angle-left").css("display","block");
});
/*拟态框*/
$(".question").click(function(e) {
    $(".modal").fadeIn(1000);
});
$(".close").click(function(e) {
   $(".modal").fadeOut(1000);
});
window.onclick = function(event) {
    if (event.target ==document.getElementById("mymodal")){
        $(".modal").fadeOut(1000);
		$(".add").fadeOut(100);
		$(".fa-angle-left").fadeIn(100)
    }
}
/*search框*/
$("#search").focus(function(e) {
	$("#search").animate({width:'140px',height:'40px',fontSize:'20px'});
});$("#search").blur(function(e){
	$("#search").animate({width:'130px',height:'20px',fontSize:'14px'});
	$("#search").val("");
	});
$(".fa-close").click(function(e) {
    $("#search").val("");
});
//video区域
var videolength=0;
function videoshow(){
var videonumber = document.getElementsByClassName("video");
 for (video= 0; video < videonumber.length; video++) {
      videonumber[video].style.display = "none"; 
  }
  videolength++;
  if (videolength > videonumber.length) {videolength = 1}   
    videonumber[videolength-1].style.display = "block";
	stop();
}
videoshow();
function stop(){//切换视频，上一个视频暂停
	var videonumber = document.getElementsByClassName("video");
	for (video= 0; video < videonumber.length; video++) {
      videonumber[video].pause(); 
  }
}
function search(){
	var input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("pageContent");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
	hide();
}
/*list*/
var theUL = document.getElementById("pageContent"); 
var totalPage = document.getElementById("spanTotalPage"); 
var pageNum = document.getElementById("spanPageNum"); //获取当前页<span> 
var spanPre = document.getElementById("spanPre"); //获取上一页<span> 
var spanNext = document.getElementById("spanNext"); //获取下一页<span> 
var spanFirst = document.getElementById("spanFirst"); //获取第一页<span> 
var spanLast = document.getElementById("spanLast"); //获取最后一页<span> 
var numberRowsInTable = theUL.getElementsByTagName("li").length; //记录总条数 
var pageSize = 4; //每页显示的记录条数 
var page = 1; //当前页，默认第一页 

//下一页 
function next(){ 
hideTable(); 
currentRow = pageSize * page; 
maxRow = currentRow + pageSize; 
if ( maxRow > numberRowsInTable ) maxRow = numberRowsInTable; 
for ( var i = currentRow; i< maxRow; i++ ){ 
theUL.getElementsByTagName("li")[i].style.display = ''; 
} 
page++; 
if ( maxRow == numberRowsInTable ) { 
nextText(); 
lastText(); 
} 
showPage(); 
preLink(); 
firstLink(); 
} 

//上一页 
function pre(){ 
hideTable(); 
page--; 
currentRow = pageSize * page; 
maxRow = currentRow - pageSize; 
if ( currentRow > numberRowsInTable ) currentRow = numberRowsInTable; 
for ( var i = maxRow; i< currentRow; i++ ){ 
theUL.getElementsByTagName("li")[i].style.display = ''; 
} 
if ( maxRow == 0 ){ 
preText(); 
firstText(); 
} 
showPage(); 
nextLink(); 
lastLink(); 
} 

//第一页 
function first(){ 
hideTable(); 
page = 1; 
for ( var i = 0; i<pageSize; i++ ){ 
theUL.getElementsByTagName("li")[i].style.display = ''; 
} 
showPage(); 
firstText(); 
preText(); 
nextLink(); 
lastLink(); 
} 

//最后一页 
function last(){ 
hideTable(); 
page = pageCount(); 
currentRow = pageSize * (page - 1); 
for ( var i = currentRow; i<numberRowsInTable; i++ ){ 
theUL.getElementsByTagName("li")[i].style.display = ''; 
} 
showPage(); 
preLink(); 
nextText(); 
firstLink(); 
lastText(); 
} 

function hideTable(){ 
for ( var i = 0; i<numberRowsInTable; i++ ){ 
theUL.getElementsByTagName("li")[i].style.display = 'none'; 
} 
} 

function showPage(){ 
pageNum.innerHTML = page; 
} 

//总共页数 
function pageCount(){ 
return Math.ceil(numberRowsInTable/pageSize); 
} 
//显示链接 
function preLink(){ 
spanPre.innerHTML = "<a href='javascript:pre();'>上一页</a>"; 
} 
function preText(){ 
spanPre.innerHTML = "上一页"; 
} 
function nextLink(){ 
spanNext.innerHTML = "<a href='javascript:next();'>下一页</a>"; 
} 
function nextText(){ 
spanNext.innerHTML = "下一页"; 
} 
function firstLink(){ 
spanFirst.innerHTML = "<a href='javascript:first();'>首页</a>"; 
} 
function firstText(){ 
spanFirst.innerHTML = "首页"; 
} 
function lastLink(){ 
spanLast.innerHTML = "<a href='javascript:last();'>末页</a>"; 
} 
function lastText(){ 
spanLast.innerHTML = "末页"; 
} 

//隐藏 
function hide(){ 
for ( var i = pageSize; i<numberRowsInTable; i++ ){ 
theUL.getElementsByTagName("li")[i].style.display = 'none'; 
} 
totalPage.innerHTML = pageCount(); 
pageNum.innerHTML = '1'; 
nextLink(); 
lastLink(); 
} 
hide(); 
json();//json局部刷新，先执行获取数据，不然只能等5s后才出现数据
function json() {
            var url = "https://api.uixsj.cn/hitokoto/api.php?type=hitokoto&code=json"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
            var request = new XMLHttpRequest();
            request.open("get", url);/*设置请求方法与路径*/
            request.send(null);/*不发送数据到服务器*/
            request.onload = function () {/*XHR对象获取到返回信息后执行*/
                if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
                    var json = JSON.parse(request.responseText);
                    
					document.querySelector(".json").innerHTML=json.content;
                }
            }
       }
setInterval(function(){json()},20000);
//天气(自执行函数)
(function(){
	 var url = "https://tianqiapi.com/api?version=v61&appid=44148117&appsecret=cYkMG4cL"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
            var request = new XMLHttpRequest();
            request.open("get", url);/*设置请求方法与路径*/
            request.send(null);/*不发送数据到服务器*/
            request.onload = function () {/*XHR对象获取到返回信息后执行*/
                if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
                    var json = JSON.parse(request.responseText);
                   
					document.querySelector(".city").innerHTML=json.city;
					document.querySelector(".wea").innerHTML=json.wea;
                    document.querySelector(".week").innerHTML=json.week;
                }
            }
	}());
 function history() {
            var url = "https://api.nowtime.cc/v1/today_in_history"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
            var request = new XMLHttpRequest();
            request.open("get", url);/*设置请求方法与路径*/
            request.send(null);/*不发送数据到服务器*/
            request.onload = function () {/*XHR对象获取到返回信息后执行*/
                if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
                    var json = JSON.parse(request.responseText);
					var oUl = document.querySelector('.history-content');
                    var str = '<span><strong>历史上的今天：</strong></span>';  
                    for(var i=0;i<json.data.length;i++){
					str += '<span class="list">'+json.data[i].year+"年"+json.data[i].month+"月"+json.data[i].day+"日"+"&nbsp;&nbsp;&nbsp;&nbsp;"+json.data[i].data+ '<br/>'+'<br/>'+'</span>';
					}
				 oUl.innerHTML = str;
				    //json多数据的处理
                }else{
					alert("服务器响应出错");
					}
            }
       };
       function remove(){
        $(".history").fadeOut(1000)
        $("span",".history-content").each(function(){$(this).remove()})//删除创造的 span 标签       
       }
	   //2020年4月15日21:54:25
	   //作者：汪世民
       //QQ:2438541380
       function shici() {
        var url = "https://v1.jinrishici.com/all.json"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
        var request = new XMLHttpRequest();
        request.open("get", url);/*设置请求方法与路径*/
        request.send(null);/*不发送数据到服务器*/
        request.onload = function () {/*XHR对象获取到返回信息后执行*/
            if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
                var json = JSON.parse(request.responseText);
                document.querySelector(".tip1").innerHTML = json.content;
                //json多数据的处理
            }else{
                alert("服务器响应出错");
                }
        }
   };
   //2020年4月16日14:54:41
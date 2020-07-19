check(); /*检测本地数据*/
			/*逻辑部分*/
			let flag = 1; /*标识符*/
			var wsm = 1; /*标识符*/
			let password = 'cw0719';

			function set() { /*本地存储可用次数和密码*/
				localStorage.setItem('password', password);
				localStorage.setItem('setchances', a);
			}
			set(); /*设置参数*/
			function pick() { /*验证*/
				var text = $(".sure").val();
				var p = localStorage.getItem('password');
				var s = localStorage.getItem('setchances');
				if (s <= 0) {
					$("#open").hide();
				}
				if (text != p) { //判断密码
					s--;
					$(".sure").val("");
					$(".A").show().html('');
					alert("密码错误,还有" + s + "次机会");
					localStorage.setItem('setchances', s);
					$(".input").addClass("animated rubberBand").fadeOut(2000);
					setTimeout(function() {
						$('.input').removeClass('animated rubberBand');
					}, 1000);
					check();
				} else {
					console.info("OK");
					$(".sure").val("");
					$(".input").hide();
					localStorage.removeItem("setchances");
					$(".whead").addClass("fanzhuan");
					$(".t").hide();
					$(".contain").fadeOut(3000);
					$(".letter").delay(2000).fadeIn(3000).addClass('ups');
				}
			}

			function check() { /*检查次数*/
				a = localStorage.getItem('setchances');
				if (a == null) {
					a = 3;
				}
				if (a <= 0) {
					$("#open").hide();
					$(".whead>p").html("密码错了吧,就两分钟");
					var A = 120;

					function AT() {
						$(".A").html(A);
						A--;
						if (A <= 0) {
							clearInterval(X);
							$(".A").hide();
							$("button").show();
							a = 3;
							localStorage.setItem('setchances', a);
							$(".whead>p").html("一封来自远方的信");
						}
					}
				}
				var X = setInterval(AT, 1000);
			}
			/*图片*/
			function setpicture(href) {
				img = document.createElement('img');
				img.src = href;
				img.style = "margin-left:27px"
				document.querySelector('.mask').appendChild(img);
			}
			/*封面js*/
			$(".whead>p").hover(function() {
				$(this).addClass(' animated tada')
			}, function() {
				$(this).removeClass('animated tada')
			});
			setInterval(bunce, 3000);
			/*跳动*/
			function bunce() {
				if (wsm == 1) {
					$(".contain").addClass('animated bounce');
					$(".photo>div").find('img').removeClass('animated swing');
					wsm = 0;
				} else {
					$(".contain").removeClass('animated bounce');
					$(".photo>div").find('img').addClass('animated swing');
					wsm = 1
				}
			}
			$("#open").click(function() {
				$(".input").slideDown(1500);
				$("img").delay(1500).slideDown(2000);
				$(".sure").focus();
			});
			$(".giveup").click(function() {
				$(".input").delay(1500).slideUp(2000);
				$(".img").slideUp(2000);
			});
			$(".img").click(function() {
				$(".mask").slideDown();
				setpicture(this.src);
			});
			$(".mask").click(function() {
				$(this).slideUp().find('img').remove();
			});
			$(".letter").click(function() {
				$(this).remove();
				$(".letter1").fadeIn().addClass("ups");
				ajax();
			});
			document.oncontextmenu = () => false;
			new TypeIt(".letter", {
				strings: ["又是一个生日，对于朋友的生日，即使我再忙，也会提前准备的。即使准备不充分，但至少我用心去准备了。", "	",
					"可能我给不到手工的作品，但我用我所学的东西准备了一份不太精彩的礼物。纯手工QAQ", "	",
					"我们认识的时间虽然不长，561天，但带给我们的不仅仅是希望，更是方向。我们都曾迷惘过，但渐渐地我们看到努力的方向，可能 对于各自来说，都是催化剂，加快了反应的速度。", "	",
					"哎呀，平时闲聊时还能说很多,现在反而说不出啥了，反正就是朝着自己努力的方向一直前进。你说过，此时不为，何时为！！（ 反正就是那么个意思） 的确之前的日子都蹉跎了，但幸好的是，我们把握住了未来。", "	",
					"又是一年生日，毕竟一年就一个，也可以准备准备的。你说过，不想要没有实际意义的东西，要手工的。可能，这手工对于我而言 范围挺广的。不知道这样的手工还是否喜欢呢。不喜欢也得喜欢了吧。既然你说手工，行的，手工预定中......",
					"	",
					"回头点个赞，就很nice了！", "	",
					"明年就要毕业了，这也算是对于自己的大学生涯暂停了下。接下来的 你的公务员考试 ，我的应聘会。都能够圆满成功。即使小有失算，但要相信，最差的不过大器晚成 ，满身伤痕才是成长的痕迹。。"
				],
				speed: 120,
				waitUntilVisible: true
			}).go();
			/*2020年6月18日22:55:39*/
			/*2020年6月19日19:27:36  二次*/
			/*2020年6月27日21:26:01  css优化*/
			(function() {
				'use strict';
				var coreSocialistValues = ["2020❥(^_-)", "0719❥(^_-)", "陈雯❥(^_-)", "生日快乐❥(^_-)", "(´థ౪థ)σ你假期竟然没胖",
						"(((((((((((っ•ω•)っ Σ(σ｀•ω•´)σ 起飞！", "؏؏☝ᖗ乛◡乛ᖘ☝؏؏完美","我不休息我还能学    ⊂(‘ω’⊂ )))Σ≡=─༄༅༄༅༄༅༄༅༄༅","(๑╹ヮ╹๑)ﾉ Studying makes me happy",
						"(＊＞︶＜＊)","(/ω＼)(好害羞)"	   
					],
					index = Math.floor(Math.random() * coreSocialistValues.length);
				$(document).on('click', function(e) {
					var x = e.pageX,
						y = e.pageY,
						span = document.createElement('span');
					span.textContent = coreSocialistValues[index];
					index = (index + 1) % coreSocialistValues.length;
					span.style.cssText = [
						'z-index: 9999999; position: absolute; font-size: 104px; font-weight: bold; color: #3333ff; top: ', y - 20,
						'px; left: ', x, 'px;'
					].join('');
					var col = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy']
					Math.seed = 1999
					var r = Math.floor(Math.random() * col.length)
					span.style.color = col[r];
					var font = ['14px', '15px', '16px', '15px', '17px']
					var f = Math.floor(Math.random() * font.length)
					span.style.fontSize = font[f]
					document.body.appendChild(span);
					animate(span);
				});

				function animate(el) {
					var i = 0,
						top = parseInt(el.style.top),
						id = setInterval(frame, 16.7); // 消失速度,原来是16.7
					function frame() {
						if (i > 180) {
							clearInterval(id);
							el.parentNode.removeChild(el);
						} else {
							i += 2;
							el.style.top = top - i + 'px';
							el.style.opacity = (180 - i) / 180;
						}
					}
				}
			})();
			function ajax() {
				var xmlhttp;
				if (window.XMLHttpRequest) {
					//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
					xmlhttp = new XMLHttpRequest();
				} else {
					// IE6, IE5 浏览器执行代码
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						document.querySelector('.ajax').innerHTML = xmlhttp.responseText;
					}
				}
				xmlhttp.open("GET", "https://wsm1025.github.io/home/0719/a.txt", true);
				xmlhttp.send();
			}

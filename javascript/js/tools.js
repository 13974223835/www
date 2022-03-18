//尝试创建一个可以执行简单动画的函数
			/* 
			参数：
				obj：要执行动画的对象
				attr：要执行动画的样式，比如：left  top width height
				target：执行动画的目标位置
				speed：移动的速度()
				callack:回调函数，这个函数将会在动画执行完毕以后执行
			*/
			function move(obj , attr ,target , speed ,callback){
				//关闭上一个定时器
				clearInterval(obj.timer);
				
				//获取元素目前得位置
				var current = parseInt(getStyle(obj,attr));
				
				//判断速度得正负值
				//如果从0向800移动，则speed为正
				//如果从800向0移动，则speed为负
				if(current > target){
					//此时速度应为负值
					speed = -speed;
				}
				
				//开启哟个定时器。用来执行画效果
				//向执行 动画的对象中添加一个timer属性，用来保存它自己的定时器的标识
				obj.timer = setInterval(function(){
					
						//获取box1的原来的left值
					var oldValue = parseInt(getStyle(obj,attr));
					
					//在旧值的基础上增加
					var newValue = oldValue + speed;
					
					//判断newValue是否大于800
					//从800向0移动
					//向左移动时，需要判断newVaule是否小于target
					//向右移动时，需要判断newVaule是否大于target
					if(speed < 0 && newValue <target ||speed > 0 && newValue > target){
						newValue = target;
					}
					
					//将新值设置给box1
					obj.style[attr] = newValue + "px";
					
					//当元素移动到0px时，使其停止执行动画
					if(newValue === target){
						//达到目标，关闭定时器
						clearInterval(obj.timer);
						//动画执行完毕，调用回调函数
						callback && callback();
					}
				},30);
			}
			
			function getStyle(obj, name){

				if(window.getComputedStyle){
					return	getComputedStyle(obj,null)[name];
				}else{
					return obj.currentStyle[name];
				}
			
			}
/* 
			定义一个函数，用来向一个元素中添加指定的class属性值
			参数：
			obj 要添加class属性的元素
			cn 要添加的class值 
			 */
function addClass(obj, cn) {
	obj.className += " " + cn;

}
/* 
判断一个元素中是否含有指定的class属性值
如果有该class,
则返回true,
没有则返回false 
 */
function hasClass(obj, cn) {
	//正则判断
	// var reg=/cn\b/;//不行
	var reg = new RegExp("\\b" + cn + "\\b")

	return reg.test(obj.className)
}
//删除class
function removeclass(obj, cn) {
	var reg = new RegExp("\\b" + cn + "\\b")
	//移除
	obj.className = obj.className.replace(reg, "")
}
/* 
 toggleeClass可以用来切换一个类
 如果元素中具有该类，则删除
 如果元素中没有该类，则添加
 */
function toggleeClass(obj, cn) {
	//判断是否有cn
	if (hasClass(obj, cn)) {
		//移除class
		removeclass(obj, cn)
	} else {
		//添加
		addClass(obj, cn)
	}

}

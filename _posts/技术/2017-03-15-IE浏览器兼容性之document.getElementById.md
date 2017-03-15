---
layout: post
title: IE浏览器兼容性之document.getElementById
category: 技术
tags: [浏览器兼容性, JavaScript]
date: 2017-03-15
---

下午本来准备看丢了几天的《学习JavaScript数据结构与算法》，遇到一位在云南白药实习的主席团妹子向我求助，她无法登录云南白药学习平台，我当然义不容辞的接受的。<!-- more -->

按照妹子的给的账户和密码，用Google一登，果然不行，打开控制台，你猜我看到啥？  
![错误提示](/assets/img/2017-03-15-IE浏览器兼容性之document.getElementById/错误提示.png){: .post-content-center-image width="600px"} 

实习修了1个半月的Bug，如果这个都不知道是啥问题，我就白实习了，这就是DOM没有找到嘛。看代码如下： 
 
~~~javascript
function is_ok(){
	var username = document.getElementById("username").value;
	if(username==null || username.replace(/[ ]/g,"")==""){
		alert("用户名不能为空！");
		return false;
	}
	var password = document.getElementById("password").value;
	if(password==null || password.replace(/[ ]/g,"")==""){
		alert("密码不能为空！");
		return false;
	}
}
~~~

代码本身没有问题，它是通过id来获取用户名和密码的，那么再看对应的HTML，代码如下：  

~~~html
<input name="username" type="text" style="width：140px;height:20px;font-size:11px;color:#666666">

<input name="password" type="password" style="width:140px;height:20px;font-size:11px;color:#666666" onkeydown="if(event.keyCode==13) return submitcount();">
~~~

尼玛！哪里有id啊！！！！是name好不好！！！虽然是jsp写的，后端写前端也不至于那么弱智吧！！

然后，我看到界面上有个红色link *使用系统必备插件检测*，点进去一看，是这样的:

![浏览器插件检测结果](/assets/img/2017-03-15-IE浏览器兼容性之document.getElementById/浏览器插件检测结果.png){: .post-content-center-image width="1000px"}   

好吧，又是万恶的IE，要求用IE浏览器打开网页，然后就问妹子，你按照要求弄了没啊，妹子说全弄了，IE浏览器也升级成最新的了，还是显示浏览器检测失败。 

关于浏览器兼容问题，我还是比较才疏学浅，既然这样，那就试试代码暴力解决了。控制台脚本输入：  

~~~javascript
function is_ok(){
	var username = document.getElementsByName("username")[0].value;
	if(username==null || username.replace(/[ ]/g,"")==""){
		alert("用户名不能为空！");
		return false;
	}
	var password = document.getElementsByName("password")[0].value;
	if(password==null || password.replace(/[ ]/g,"")==""){
		alert("密码不能为空！");
		return false;
	}
}
~~~

然后，点击登录。OK！成功进入修改密码界面。然后复制这个链接给妹子，让妹子登，页面过期……好吧，我觉得我理论知识又捉急了，为什么我用那个地址能进入修改密码界面呢？难道是浏览器问题。好吧，我还是用IE浏览器试试。

转站到Windows电脑上，IE浏览器，先是试试问题是不是一样的，好吧。果然，还是找不到id，心里再默默鄙视下写这个前端的人。用在Google浏览器上同样办法，又进入了修改密码界面，复制地址发给妹子（没文化真可怕，我鄙视自己，图解HTTP，看了也是白看）。妹子说还是页面过期😭。

只有最后一个办法了，教妹子暴力代码法，还好妹子天资聪慧，跟着我的步骤一步一步终于K.O.了。顺利进入修改密码界面，顺利进入学习主页，我告诉妹子把网站地址记下，下次直接输地址进去学习，避开登陆界面。

好了，到了思考时间了，程序员不可能是弱智，这样写代码总是有原因的（这也是在实习期间明白的，任何代码都有写他的初衷）。

目前最大的疑问是：`document.getElementById（）`可以获取name属性？

有问题找Google，“IE浏览器中document.getElementById可以取name属性？” Google告诉我，IE浏览器中id和name是混淆的，既然这样为什么我和妹子的IE不行？难道是版本问题？！迅速查看自己浏览器版本，IE11，难道是版本太高？？那就又Google，“IE浏览器从哪个版本开始区分ID和NAME”，然后通过知乎找到了[Internet Explorer 8 中的标准合规性更新](https://msdn.microsoft.com/library/dd433047.aspx)，点击[getElementById](https://msdn.microsoft.com/library/ms536437.aspx)，然后有一段Remarks，这样写道：

>Windows Internet Explorer 8 and later. In IE8 Standards mode, getElementById performs a case-sensitive match on the ID attribute only. In IE7 Standards mode and previous modes, this method performs a case-insensitive match on both the ID and NAME attributes, which might produce unexpected results.

IE8以前才支持id和name不分，而且大小写不敏感。最后结论是，在浏览器插件检测的时候应该提醒用户在IE6或者IE7使用，而不是IE6或以上😂。明明是“带通滤波器”，你非要告诉我是“高通滤波器”（不好意思，硬件素养又来了），尼玛，简直是找抽！！

最后，在写这篇blog的时候，意识到的问题，同样的地址为什么换了浏览器就过期了呢？回想《图解HTTP部分》，能对上的就是cookie了，目前还没有涉及过这部分，打开Network查看post部分，果然Response Header和Request Header中都有cookie相关的头信息，这样就可以解释了，没有请求成功过，怎么会有Cookie😂。

结束语：虽然今天下午没有看成书，但是额外收获了新知识，通过写Blog还找到了思考上的盲点，很值了！再次说明，理论转化为自己所有还是需要不断的实践，敢想敢试，多试多想。

---
layout: post
title: Ajax、XML、JSON常用基础知识
category: 技术
tags: [Ajax, XML, JSON]
date: 2017-02-24
---

此处总结下Ajax、XML、JSON的基础知识。<!-- more -->

### 1 Ajax
#### 1.1 Ajax定义
Ajax全称“Asynchronous JavaScript and XML”（异步JavaScript和XML），它是一种创建交互式网页应用开发技术。

#### 1.2 Ajax的实现步骤
1. 创建XMLHttpRequest对象，也就是创建一个异步调用对象；
2. open() 创建一个新的HTTP请求，并指定该HTTP请求的方法（POST还是GET）、URL及验证信息；
3. 设置响应HTTP请求状态变化的函数；
4. send() 发送HTTP请求；
5. 获取异步调用返回的数据；
6. 使用JavaScript和DOM实现局部刷新。

#### 1.3 XMLHttpRequest对象的常用方法和属性
1. 常用的三个属性：
	- onreadystatechange属性（存有处理服务器相应的函数）
	- readyState属性（存有服务器响应的状态信息）
	- responseText属性（取回服务器返回的数据）
2. 两个方法：
	- open()方法
	- send()方法	

#### 1.4 XMLHttpRequest对象在IE和Firefox中创建方式的不同
IE： new ActiveXObject()  
Firefox：new XMLHttpRequest()

### 2 XML
#### 2.1 XML定义
- XML 指可扩展标记语言（EXtensible Markup Language）
- XML 是一种标记语言，很类似 HTML
- XML 的设计宗旨是传输数据，而非显示数据(HTML显示数据)
- XML 标签没有被预定义。您需要自行定义标签。

### 3 JSON
#### 3.1 JSON定义
- JSON 指的是 JavaScript 对象表示法（JavaScript Object Notation）
- JSON 是轻量级的文本数据交换格式
- JSON 独立于语言 *
- JSON 具有自我描述性，更易理解

JSON 使用 Javascript语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言。 目前非常多的动态（PHP，JSP，.NET）编程语言都支持JSON。

JSON 比 XML 更小、更快，更易解析。

#### 3.2 JSON.parse()
JSON 通常用于与服务端交换数据。
在接收服务器数据时一般是字符串。
我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。

#### 3.3 JSON.stringify()
JSON 通常用于与服务端交换数据。
在向服务器发送数据时一般是字符串。
我们可以使用 JSON.stringify() 方法将 JavaScript 对象转换为字符串。

	
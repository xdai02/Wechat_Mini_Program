[TOC]

# 微信小程序

## 第1章 初识微信小程序

### 1.1 注册小程序账号

小程序官网：https://mp.weixin.qq.com/cgi-bin/wx

邮箱：dxtterry@gmail.com

【开发】->【开发管理】->【开发设置】->【APPID】： wxf4df2562207e1992

【首页】->【小程序开发与管理】->【普通小程序开发者工具】->【微信开发者工具】->【稳定版Windows64】

<div STYLE="page-break-after: always;"></div>

### 1.2 第一个微信小程序

创建小程序：填写【目录（桌面）】、【APPID】、【开发模式：小程序】、【不使用云服务】、【JavaScript基础模板】

开发者工具：

1. 模拟器
2. 编辑器
3. 调试器
4. 资源管理器
5. 预览/真机调试

```html
<!--index.wxml-->
<view>Hello Wechat!</view>
```

<div STYLE="page-break-after: always;"></div>

### 1.3 字体样式设置

设计一个小程序，分别利用style和class属性设置字体样式，在`index.wxss`中定义样式类。所有的文字都包含在一个边框内，边框内上方有标题文字，边框和标题样例利用class属性来设置，在`app.wxss`中定义样式类。

![](./img/1.png)

1. 添加两段文本

```html
<!--index.wxml-->

<view>
  <view>利用style设置字体样式：</view>
  <view>字体：sans-serif，30像素</view>
</view>
===========================
<view>
  <view>利用class设置字体样式：</view>
  <view>字体：cursive、25像素、倾斜、加粗</view>
</view>
```

2. 添加style属性

```html
<!--index.wxml-->

<view style="font-family: sans-serif; font-size: 30px;">
  <view>利用style设置字体样式：</view>
  <view>字体：sans-serif，30像素</view>
</view>
===========================
<view>
  <view>利用class设置字体样式：</view>
  <view>字体：cursive、25像素、倾斜、加粗</view>
</view>
```

3. 添加class类

```css
/**index.wxss**/

.fontStyle {
  font-family: cursive;
  font-size: 25px;
  font-style: italic;
  font-weight: bold;
}
```

```html
<!--index.wxml-->

<view style="font-family: sans-serif; font-size: 30px;">
  <view>利用style设置字体样式：</view>
  <view>字体：sans-serif，30像素</view>
</view>
===========================
<view class="fontStyle">
  <view>利用class设置字体样式：</view>
  <view>字体：cursive、25像素、倾斜、加粗</view>
</view>
```

4. 添加边框

```css
/**app.wxss**/

.box {
  border: 1px solid silver;
}
```

```html
<!--index.wxml-->

<view class="box">
  <view style="font-family: sans-serif; font-size: 30px;">
    <view>利用style设置字体样式：</view>
    <view>字体：sans-serif，30像素</view>
  </view>
  ===========================
  <view class="fontStyle">
    <view>利用class设置字体样式：</view>
    <view>字体：cursive、25像素、倾斜、加粗</view>
  </view>
</view>
```

5. 设置边框相对边距

```css
/**app.wxss**/

.box {
  border: 1px solid silver;
  margin: 20rpx;
  padding: 20rpx;
}
```

6. 添加标题

```css
/**app.wxss**/

.box {
  border: 1px solid silver;
  margin: 20rpx;
  padding: 20rpx;
}

.title {
  font-size: 25px;
  text-align: center;
  margin-bottom: 15px;
  color: red;
}
```

```html
<!--index.wxml-->

<view class="box">
  <view class="title">字体样式设置</view>
  <view style="font-family: sans-serif; font-size: 30px;">
    <view>利用style设置字体样式：</view>
    <view>字体：sans-serif，30像素</view>
  </view>
  ===========================
  <view class="fontStyle">
    <view>利用class设置字体样式：</view>
    <view>字体：cursive、25像素、倾斜、加粗</view>
  </view>
</view>
```

| 属性        | 含义     | 说明                                              |
| ----------- | -------- | ------------------------------------------------- |
| font-family | 字体类型 | Serif, Sans-serif, Monospace, Cursive, Fantasy    |
| font-size   | 字体大小 | 5px/rpx/cm, large, small, medium, larger, smaller |
| font-style  | 字体倾斜 | italic, normal, oblique                           |
| font-weight | 字体加粗 | bold, bolder, lighter                             |

view组件支持使用style和class属性来设置组件的样式。

利用style可直接在WXML文件中设置，利用class需要先在WXSS文件中定义样式类。

静态样式一眼使用class设置，动态样式一般使用style设置，这样可以提高渲染速度。



在`app.wxss`中定义的样式类属于全局样式类，可以在项目的任何文件中使用。

在`index.wxss`中定义的样式类一般只在`index.wxml`中使用。

<div STYLE="page-break-after: always;"></div>

### 1.4 文本样式设置

创建一个微信小程序，利用class属性设置文本样式，包括：文本的颜色、字符间距、对齐文本、装饰文本、对文本进行缩进，等等。

![](./img/2.png)

1. 添加两段文本

```html
<!--index.wxml-->

<view class="box">
  <view class="title">文本样式设置</view>
  <view class="textStyle01">
    文本属性可定义文本的外观。通过设置文本属性，您可以改变文本的颜色、字符间距、对齐文本、装饰文本、对文本进行缩进，等等。
  </view>
  ===========================
  <view class="textStyle02">
    North China University of Technology (NCUT) is located in the western part of Beijing, which is a municipal university founded in 1946.
  </view>
</view>
```

2. 重复利用1.3章节中的`app.wxss`样式

```css
/**app.wxss**/

.box {
  border: 1px solid silver;
  margin: 20rpx;
  padding: 20rpx;
}

.title {
  font-size: 25px;
  text-align: center;
  margin-bottom: 15px;
  color: red;
}
```

3. 设置样式

```css
/**index.wxss**/

.textStyle01 {
  color: red;
  letter-spacing: 10px;
  text-align: left;
  text-indent: 50px;
  text-decoration: underline;
  text-decoration-color: #00f;
  line-height: 30px;
  white-space: normal;
}

.textStyle02 {
  text-align: justify;
  word-spacing: 20px;
  text-transform: uppercase;
  white-space: pre-wrap;
}
```

| 属性                  | 含义                       |
| --------------------- | -------------------------- |
| color                 | 字体颜色                   |
| text-align            | 文本对齐方式               |
| text-indent           | 首行缩进                   |
| letter-spacing        | 字母之间的距离             |
| word-spacing          | 单词间距，以空格来区分单词 |
| white-space           | 文档中的空白处             |
| text-decoration       | 文本修饰样式               |
| text-decoration-color | 文本修饰颜色               |

<div STYLE="page-break-after: always;"></div>

### 1.5 图片与声音

设计一个小程序，小程序运行后显示一张猫图，点击猫图后会发出猫叫的声音。

![](./img/3.png)

1. 添加标题和样式

```html
<!--index.wxml-->

<view class="box">
  <view class="title">图片和声音</view>
</view>
```

```css
/**app.wxss**/

.box {
  border: 1px solid silver;
  margin: 20rpx;
  padding: 20rpx;
}

.title {
  font-size: 25px;
  text-align: center;
  margin-bottom: 15px;
  color: red;
}
```

2. 添加图片路径，绑定点击事件

```html
<!--index.wxml-->

<view class="box">
  <view class="title">图片和声音</view>
  <view>
    <image src="{{imgSrc}}" bindtap="tapCat"></image>
  </view>
</view>
```

3. 设置图片路径

```js
// index.js

Page({
  data: {
    imgSrc: "/images/kitty.png"
  },
  // 事件处理函数
})
```

> 如图片显示超出边框，更换机型。

4. 实现tap事件

```js
// index.js

Page({
	data: {
		imgSrc: "/images/kitty.png"
	},
	// 事件处理函数
	tapCat: function () {
		let audio = wx.createInnerAudioContext();
		audio.src = "audios/meow.mp3";
		audio.play();
	}
})
```

images组件：支持JPG、PNG、SVG格式，用`src`属性指定图片的路径。

音频：首先利用API函数`wv.createInnerAudioContext()`创建音频上下文，然后设置该上下文的`src`，并利用`play()`函数播放音频。

数据绑定：WXML文件中的动态数据通过`{{}}`符号与JS文件中的数据进行绑定，这样JS中的数据就可以传给WXML文件。这种传递是单向的。

事件绑定：在WXML文件组件标签内利用`bind...=函数名`绑定组件事件与函数，并在JS文件中定义该事件函数。

<div STYLE="page-break-after: always;"></div>

## 第2章 盒模型与页面布局

### 2.1 盒模型

设计一个小程序，利用盒模型的相关属性实现不同的布局模式。

![](./img/4.png)

1. 添加三段文本

```html
<!--index.wxml-->

<view class="box">
	<view class="title">盒模型</view>
	<view class="boxModel01">
		.boxModel01 { width: 80%; height: 120px; background-color: yellow; border: 3px dashed #FF0000; padding: 20px; margin: 20px; }
	</view>
	<view class="boxModel02">
		.boxModel02 { width: 80%; height: 120px; border: 5px solid rgb(0, 255, 0); padding-top: 20px; margin-bottom: 20px; }
	</view>
	<view class="boxModel03">
		.boxModel03 { width: 80%; height: 120px; border: 5px dotted rgba(0, 0, 255, 0.3); padding-left: 20px; margin: 0 20px; }
	</view>
</view>
```

2. 设置盒模型样式

```css
/**index.wxss**/

.boxModel01 {
	width: 80%;
	height: 120px;
	background-color: yellow;
	border: 3px dashed #FF0000;
	padding: 20px;
	margin: 20px;
}

.boxModel02 {
	width: 80%;
	height: 120px;
	border: 5px solid rgb(0, 255, 0);
	padding-top: 20px;
	margin-bottom: 20px;
}

.boxModel03 {
  width: 80%;
  height: 120px;
  border: 5px dotted rgba(0, 0, 255, 0.3);
  padding-left: 20px;
  margin: 0 20px; /* 外上下边距为0，左右边距为20px */
}
```

所有WXML元素都可以看作盒子，在WXSS中，box model这一术语是用来设计和布局时使用。盒模型本质上是一个盒子，封装周围的WXML元素，它包括：边距、边框、填充和实际内容。

![](./img/5.png)

边框样式：`border-style`属性用来定义边框的样式。

| 边框样式 | 说明                                         |
| -------- | -------------------------------------------- |
| none     | 默认无边框                                   |
| dotted   | 定义一个点线边框                             |
| dashed   | 定义一个虚线边框                             |
| solid    | 定义实现边框                                 |
| double   | 定义两个边框                                 |
| groove   | 定义3D沟槽边框，效果取决于边框的颜色值       |
| ridge    | 定义3D脊边框，效果取决于边框的颜色值         |
| inset    | 定义一个3D的嵌入边框，效果取决于边框的颜色值 |
| outset   | 定义一个3D突出边框，效果取决于边框的颜色值   |

边框宽度：`border-width`属性用于设置边框宽度。

边框颜色：`border-color`属性用于设置边框的颜色。

单独设置各边：可以通过`border-top`、`border-right`、`border-bottom`、`border-left`属性设置不同侧面的边框。

一次性设置边框属性：可以利用`border`属性一次性设置边框宽度、边框样式和边框颜色。如`border: 3px dashed #00ff00`。

<div STYLE="page-break-after: always;"></div>

### 2.2 flex页面布局

设计一个小程序，利用flex弹性盒模型布局实现三栏布局、左右混合布局和上下混合布局。

![](./img/6.png)

```html
<!--index.wxml-->

<view class="box">
  <view class="title">页面局部示例</view>

  <!-- 实现三栏水平均匀布局 -->
  <view style="display: flex; text-align: center; line-height: 80rpx;">
    <view style="background-color: red; flex-grow: 1;">1</view>
    <view style="background-color: green; flex-grow: 1;">2</view>
    <view style="background-color: blue; flex-grow: 1;">3</view>
  </view>
  -------------------------------

  <!-- 实现左右混合布局 -->
  <view style="display: flex; height: 300rpx; text-align: center;">
    <view style="background-color: red; width: 250rpx; line-height: 300rpx;">1</view>
    <view style="display: flex; flex-direction: column; flex-grow: 1; line-height: 150rpx;">
      <view style="background-color: green; flex-grow: 1;">2</view>
      <view style="background-color: blue; flex-grow: 1;">3</view>
    </view>
  </view>
  -------------------------------

  <!-- 实现上下混合布局 -->
  <view style="display: flex; flex-direction: column; line-height: 300rpx; text-align: center;">
    <view style="background-color: red; height: 100rpx; line-height: 100rpx;">1</view>
    <view style="flex-grow: 1; display: flex; flex-direction: row;">
      <view style="background-color: green; flex-grow: 1;">2</view>
      <view style="background-color: blue; flex-grow: 1;">3</view>
    </view>
  </view>
</view>
```

Flex是Flexible Box的缩写，意为“弹性布局”，用来对盒状模型进行布局。

| 属性            | 含义                                 | 合法值                                                       |
| --------------- | ------------------------------------ | ------------------------------------------------------------ |
| flex-direction  | 设置主轴方向（即项目排列方向）       | row, row-reverse, column, column-reverse                     |
| flex-wrap       | 如果一条轴线排不下，如何换行         | nowrap, wrap, wrap-reverse                                   |
| justify-content | 项目沿主轴方向的对齐方式             | flex-start, flex-end, center, space-between, space-around    |
| align-items     | 项目在交叉轴上的对齐方式             | flex-start, flex-end, center, baseline, stretch              |
| align-content   | 酵母在交叉轴上有多根轴线时的对齐方式 | flex-start, flex-end, center, space-between, space-around, stretch |

| 属性        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| order       | 项目的排列顺序。数值越小，排列越靠前，默认为0                |
| flex-grow   | 各项目宽度之和小于容器宽度时，各项目分配容器剩余宽度的方法比例，默认为0，即不方法 |
| flex-shrink | 各项目宽度之和大于容器宽度时，各项目缩小自己宽度的比例，默认为1，即将项目缩小 |
| flex-basis  | 元素宽度的属性，和width功能相同，但比width的优先级高         |
| flex        | 是flex-grow、flex-shrink和flex-basis的简写，默认值为0 1 auto，后两个属性可选 |
| align-self  | 允许单个项目有与其它项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch |

`line-height`可以理解为每行文字所占的空度。比如说有一行高度为20px的文字，如果设置为`line-height: 50px`，那就是说，这行文字的高度会占50px，由于每个字的高度只有20px，于是浏览器就把多出来的30px（50px - 20px）在这行文字的上面加上了15px、下面加上了15px，这样文字就在这50px的空间内是居中的了。

<div STYLE="page-break-after: always;"></div>

### 2.3 导航与布局

设计一个实现导航功能的小程序。导航页面包含多行导航内容，每行导航内容包括1个图标、1个说明文本和1个图片，图标在最左侧，文本在图标右侧，图片在最右侧。当点击某一行导航内容时都能进入相应的页面。

![](./img/7.png)

1. 设计页面

```html
<!--index.wxml-->

<view class="box">
  <view class="title">框架案例</view>

  <navigator url="/pages/HelloWechat/index">
    <view class="waikuang">
      <icon type="success" class="myleft"></icon>
      <view class="mycenter">HelloWechat</view>
      <image src="/images/right-arrow.png" class="myright"></image>
    </view>
  </navigator>
</view>
```

2. 更改样式

```css
/**index.wxss**/

navigator {
  margin: 5px;
  font-size: 20px;
}

.waikuang {
  display: flex;
  flex-direction: row;
  margin: 5px 0px;
  padding: 5px 0px;
}

.myleft {
  margin-right: 10px;
}

.mycenter {
  flex: 1;
}

.myright {
  width: 40rpx;
  height: 40rpx;
  margin-top: 5px;
}
```

3. 将`HelloWechat`目录放到`pages`目录下

    HelloWechat

    	- index.js
    	- index.json
    	- index.wxml
    	- index.wxss

4. 修改配置文件，添加页面

```json
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs",
    "pages/HelloWechat/index"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Weixin",
    "navigationBarTextStyle":"black"
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}
```

5. 使用相同方法，完成其它导航栏。

```html
<!--index.wxml-->

<view class="box">
  <view class="title">框架案例</view>

  <navigator url="/pages/HelloWechat/index">
    <view class="waikuang">
      <icon type="success" class="myleft"></icon>
      <view class="mycenter">HelloWechat</view>
      <image src="/images/right-arrow.png" class="myright"></image>
    </view>
  </navigator>

  <navigator url="/pages/FontStyle/index">
    <view class="waikuang">
      <icon type="success" class="myleft"></icon>
      <view class="mycenter">FontStyle</view>
      <image src="/images/right-arrow.png" class="myright"></image>
    </view>
  </navigator>

  <navigator url="/pages/TextStyle/index">
    <view class="waikuang">
      <icon type="success" class="myleft"></icon>
      <view class="mycenter">TextStyle</view>
      <image src="/images/right-arrow.png" class="myright"></image>
    </view>
  </navigator>
</view>
```

```json
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs",
    "pages/HelloWechat/index",
    "pages/FontStyle/index",
    "pages/TextStyle/index"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Weixin",
    "navigationBarTextStyle":"black"
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}
```

`navigator`组件能够实现页面导航

- navigator组件属性

| 属性      | 说明                                                         |
| --------- | ------------------------------------------------------------ |
| target    | 在哪个目标上发生跳转，其合法值为self和miniProgram，默认值为self |
| url       | 当前小程序内的跳转地址                                       |
| open-type | 跳转方式                                                     |
| delta     | 当open-type为'navigatorBack'时有效，表示回退的层数           |
| app-id    | 当target="miniProgram"时有效，要打开的小程序的appId          |
| path      | 当target="miniProgram"时有效，打开的页面路径如果为空则打开首页 |

- open-type合法值

| 值           | 说明                                         |
| ------------ | -------------------------------------------- |
| navigate     | 保留当前页面，跳转到应用内的某个页面         |
| redirect     | 关闭当前页面，跳转到应用内的某个页面         |
| switchTab    | 跳转到tabBar页面，并关闭其它所有非tabBar页面 |
| reLaunch     | 关闭所有页面，打开应用内的某个页面           |
| navigateBack | 关闭当前页面，返回上一页面或多级页面         |
| exit         | 退出小程序，target="miniProgram"时生效       |

`icon`组件显示一个图标

- icon组件属性

| 属性名 | 说明                                                         |
| ------ | ------------------------------------------------------------ |
| type   | icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear |
| size   | icon的大小                                                   |
| color  | icon的颜色                                                   |

<div STYLE="page-break-after: always;"></div>

### 2.4 Float页面布局

设计一个小程序，利用float布局实现相应的布局效果。

![](./img/8.png)

1. 实现结构

```html
<!--index.wxml-->

<view class="box">
  <view class="title">Float页面布局</view>

  <view class="bg1">
    <view class="box1">box1</view>
    <view class="box2">box2</view>
    <view class="box3">box3</view>
    <view class="box4">box4</view>
  </view>

  <view class="bg2">
    <view class="header">header</view>
    <view class="leftBar">leftBar</view>
    <view class="main">main</view>
    <view class="rightBar">rightBar</view>
    <view class="footer">footer</view>
  </view>
</view>
```

2. 实现样式

```css
/**index.wxss**/

.bg1 {
  height: 240px;
  width: 200px;
  margin: 10px auto;  /* 上下边距为10px，左右边距平均分配（实现水平居中对齐） */
}

.box1 {
  width: 100px;
  height: 80px;
  background-color: red;
  margin: 0 auto;
}

.box2 {
  width: 100px;
  height: 80px;
  background-color: yellow;
  float: left;
}

.box3 {
  width: 100px;
  height: 80px;
  background-color: gold;
  float: right;
}

.box4 {
  width: 100px;
  height: 80px;
  background-color: greenyellow;
  clear: both;  /* 清除左右两边浮动 */
  margin: 0 auto;
}

.bg2 {
  height: 400rpx;
  text-align: center;
  margin: 10px auto;
}

.header {
  line-height: 100rpx;
  background-color: red;
}

.leftBar {
  width: 20%;
  line-height: 200rpx;
  background-color: yellow;
  float:left;
}

.main {
  width: 60%;
  line-height: 200rpx;
  background-color: rgb(157, 255, 0);
  float: left;
}

.rightBar {
  width: 20%;
  line-height: 200rpx;
  background-color: yellow;
  float: right;
}

.footer {
  line-height: 100rpx;
  background-color: red;
  clear: both;
}
```

`float`属性：浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

| 值      | 描述                                             |
| ------- | ------------------------------------------------ |
| left    | 元素向左浮动                                     |
| right   | 元素向右浮动                                     |
| none    | 默认值，元素不浮动，并会显示其在文本中出现的位置 |
| inherit | 规定应该从父元素继承float属性的值                |

`clear`属性：清除浮动。

| 合法值  | 说明                               |
| ------- | ---------------------------------- |
| left    | 在左侧不允许有浮动元素             |
| right   | 在右侧不允许有浮动元素             |
| both    | 在左右两侧均不允许有浮动元素       |
| none    | 默认值，允许浮动元素出现在左右两侧 |
| inherit | 继承父元素clear属性的值            |

利用`margin`属性实现水平居中对齐：如果要实现元素的水平居中对齐，可以通过让`margin`左右边距为`auto`的方式来实现，这样块元素将平均分配左右边距，从而实现水平居中对齐。

<div STYLE="page-break-after: always;"></div>

### 2.5 摄氏温度转华氏温度

设计一个根据设置温度C求华氏温度F的微信小程序，计算公式如下：
$$
F = (9 / 5) * C + 32
$$
![](./img/9.png)

1. 实现页面

```html
<!--index.wxml-->

<view class="box">
  <view class="title">摄氏温度转华氏温度</view>
  <view>
    <input placeholder="请输入摄氏温度" type="digit" bindblur="calc"></input>
  </view>
  <view>华氏温度为：{{F}}</view>
</view>
```

2. 实现样式

```css
/**index.wxss**/

input {
  margin: 20px 0; /* 设置上下边距为20px，左右边距为0 */
  border-bottom: 1px solid blue;  /* 下边框粗细为1px、实线、蓝色 */
}
```

3. 实现逻辑

```js
// index.js

Page({
  calc: function(e) {
    var C;
    C = e.detail.value; // 获取input组件中输入的数值
    this.setData({		// setData传入对象
      F: C * 9 / 5 + 32
    })
  }
})
```

`input`输入框组件：用于输入数据。

| 属性名            | 说明                                       |
| ----------------- | ------------------------------------------ |
| value             | 输入框中的内容                             |
| type              | input的类型                                |
| password          | 是否是密码类型                             |
| placeholder       | 输入框为空时占位符                         |
| placeholder-style | 指定placeholder的样式                      |
| maxlength         | 最大输入长度，设置为-1的时候不限制最大长度 |
| bindinput         | 键盘输入时触发                             |
| bindfocus         | 输入框聚焦时触发                           |
| bindblur          | 输入框失去焦点时触发                       |

`type`属性：真机运行时键盘的类型。

| 值     | 说明               |
| ------ | ------------------ |
| text   | 文本输入键盘       |
| number | 数字输入键盘       |
| idcard | 身份证输入键盘     |
| digit  | 带小数点的数字键盘 |

<div STYLE="page-break-after: always;"></div>

## 第3章 流程控制结构和函数

### 3.1 条件结构和数学函数

设计一个利用条件结构和数学函数进行计算的小程序。当输入x值时，根据下面的公式计算出y的值。
$$
y = |x| \ (x < 0)\\
y = e^x sinx \ (0 \le x \le 10)\\
y = x^3 \ (10 \le x < 20)\\
y = (3 +2x)lnx \ (x \ge 20)
$$

1. 实现页面

```html
<!--index.wxml-->
<view class="box">
  <view class="title">条件语句和数学函数</view>
  <view>
    <input placeholder="请输入x的值" bindblur="calc"></input>
  </view>
  <view>计算y的值为：{{y}}</view>
</view>
```

2. 实现样式

```css
/**index.wxss**/

input {
  border-bottom: 1px solid blue;
  margin: 20px 0; /* 上下外边距为20px，左右外边距为0 */
}
```

3. 实现逻辑

```js
// index.js

Page({
  calc: function(e) {
    var x, y;
    var x = e.detail.value; // 获取input组件的value值

    if(x < 0) {
      y = Math.abs(x);
    } else if(x < 10) {
      y = Math.exp(x) * Math.sin(x);
    } else if(x < 20) {
      y = Math.pow(x, 3);
    } else {
      y = (3 + 2 * x) * Math.log(x);
    }

    this.setData({
      y: y
    })
  }
})
```

`Math`对象：用于执行数学任务。

| 属性和方法 | 说明                                           |
| ---------- | ---------------------------------------------- |
| E          | 返回算术常量e，即自然对数的底数（约等于2.718） |
| PI         | 返回圆周率（约等于3.14159）                    |
| abs(x)     | 返回数的绝对值                                 |
| ceil(x)    | 对数进行上舍入                                 |
| cos(x)     | 返回数的余弦                                   |
| exp(x)     | 返回e的指数                                    |
| floor(x)   | 对数进行下舍入                                 |
| log(x)     | 返回数的自然对数（底为e）                      |
| max(x, y)  | 返回x和y中的最高值                             |
| min(x, y)  | 返回x和y中的最低值                             |
| pow(x, y)  | 返回x的y次幂                                   |
| random()   | 返回0-1之间的随机数                            |
| round(x)   | 把数四舍五入为最接近的整数                     |
| sin(x)     | 返回数的正弦                                   |
| sqrt(x)    | 返回数的平方根                                 |
| tan(x)     | 返回角的正切                                   |
| valueOf()  | 返回Math对象的原始值                           |

<div STYLE="page-break-after: always;"></div>

### 3.2 学生成绩计算器

设计一个计算学生平均成绩的小程序。当输入学生信息和各门功课成绩并提交后，能够显示学生的信息及平均成绩。

![](./img/10.png)

1. 实现页面

```html
<!--index.wxml-->

<view class="box">
  <view class="title">成绩计算器</view>
  
  <input placeholder="请输入你的名字" placeholder-class="placeholder" bindinput="nameInput"></input>
  <input placeholder="请输入语文成绩" placeholder-class="placeholder" bindinput="chineseInput" type="number"></input>
  <input placeholder="请输入数学成绩" placeholder-class="placeholder" bindinput="mathInput" type="number"></input>

  <button bindtap="mysubmit">提交</button>

  <view hidden="{{flag}}" class="content">
    <view class="content-item">姓名：{{name}}</view>
    <view class="content-item">语文成绩：{{chinese_score}}</view>
    <view class="content-item">数学成绩：{{math_score}}</view>
    <view class="content-item">平均成绩：{{average}}</view>
  </view>
</view>
```

2. 实现样式

```css
/**index.wxss**/

page {
  background: #f1f0f6;
}

.placeholder {
  font-size: 15px;
}

input {
  background: #fff;
  height: 120rpx;
  margin: 10px;
  padding-left: 8px;
  border: solid 1px silver;
}

button {
  margin: 30rpx 50rpx;
  background-color: red;
  color: white;
}

.content {
  background: #fff;
  padding: 10px;
  color: #f00;
}

.content-item {
  padding: 3rpx;
  font-size: 16px;
  line-height: 30px;
}
```

3. 实现逻辑

```js
// index.js

Page({
  data: {
    flag: true,
    name: '',
    chinese_score: '',
    math_score: '',
    average: ''
  },

  nameInput: function(e) {
    console.log("name");
    this.setData({
      name: e.detail.value
    });
  },

  chineseInput: function(e) {
    this.setData({
      chinese_score: e.detail.value
    });
  },

  mathInput: function(e) {
    this.setData({
      math_score: e.detail.value
    });
  },

  mysubmit: function() {
    console.log("test");
    if(this.data.name == "" || this.data.chinese_score == "" || this.data.math_score == "") {
      
      return;
    } else {
      var avg = (this.data.chinese_score * 1 + this.data.math_score * 1) / 2;
      this.setData({
        flag: false,
        average: avg,
      });
    }
  }
})
```

`button`组件

| 属性      | 说明                                                         |
| --------- | ------------------------------------------------------------ |
| size      | 按钮的大小。default：默认大小、mini：小尺寸                  |
| type      | 按钮类型。primary：绿色、default：白色、warn：红色           |
| plain     | 按钮是否镂空，背景色是否透明                                 |
| disabled  | 是否禁用                                                     |
| loading   | 是否带loading图标                                            |
| form-type | 用于<form>组件的提交或重置。submit：提交表单、reset：重置表单 |

<div STYLE="page-break-after: always;"></div>

### 3.3 循环求和计算器

设计一个小程序，利用循环语句求2个数之间所有整数的和。

1. 实现页面

```html
<!--index.wxml-->
<view class="box">
  <view class="title">利用循环语句求和</view>
  <view>
    <input placeholder="请输入起点数值" type="number" bindblur="startNum"/>
    <input placeholder="请输入终点数值" type="number" bindblur="endNum"/>
  </view>
  <view>两个数之间的和为：{{sum}}</view>
  <button type="primary" bindtap="calc">求和</button>
</view>
```

2. 实现样式

```css
/**index.wxss**/

input {
  border-bottom: 1px solid blue;
  margin: 20px 0;
}

button {
  margin-top:  20px;
}
```

3. 实现逻辑

```js
// index.js

var start, end, sum; // 全局变量

Page({
  startNum: function (e) {
    start = parseInt(e.detail.value);
  },

  endNum: function (e) {
    end = parseInt(e.detail.value);
  },

  calc: function () {
    sum = 0;
    for (var i = start; i <= end; i++) {
      sum = sum + i;
    }
    this.setData({
      sum: sum
    })
  }
})
```

JavaScript全局对象：可用于所有内建的JavaScript对象。

| 属性和方法   | 描述                           |
| ------------ | ------------------------------ |
| Infinity     | 代表正的无穷大的数值           |
| NaN          | 指示某个值是不是数字值         |
| undefined    | 指示未定义的值                 |
| isFinite()   | 是否为有穷大                   |
| isNaN()      | 是否是数字                     |
| Number()     | 把对象的值转换为数字           |
| parseFloat() | 解析一个字符串并返回一个浮点数 |
| parseInt()   | 解析一个字符串并返回一个整数   |
| String()     | 把对象的值转换为字符串         |

<div STYLE="page-break-after: always;"></div>

### 3.4 随机数求和

设计一个小程序，运行后产生一列100以内的随机数（保留小数点后2位），并显示这些随机数的和；当点击按钮时，产生一列新的随机数，并显示这些随机数的和。

![](./img/11.png)

1. 实现页面

```html
<!--index.wxml-->
<view class="box">
  <view class="title">随机数求和</view>
  <view>产生的随机数列为：</view>
  <view wx:for="{{rand}}">{{item}}</view>
  <view>随机数列的和为：{{sum}}</view>
  <button type="primary" bindtap="newRand">产生新的随机数</button>
</view>
```

2. 实现逻辑

```css
// index.js
var rand, sum;

function createRand() {
  rand = []
  sum = 0;
  for(var i = 0; i < 6; i++) {
    var r = (Math.random() * 100).toFixed(2) * 1;
    rand.push(r);
    sum += rand[i];
    console.log(rand[i]);
  }
  console.log(sum);
}

Page({
  onLoad: function() {
    createRand();
    this.setData({
      rand: rand,
      sum: sum
    })
  },

  newRand: function() {
    createRand();
    this.setData({
      rand: rand,
      sum: sum
    })
  }
})
```

对象时拥有属性和方法的数据，属性是静态数据，方法是能够在对象上执行的动作，即动态数据。

JavaScript中的常用对象包括：字符串、数字、数组、日期等。

`Array`对象：用于在单个的变量中存储多个值。

| 属性和方法 | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| length     | 设置或返回数组中元素的个数                                   |
| concat()   | 连接两个或更多的数组，并返回结果                             |
| join()     | 把数组的所有元素放入一个字符串，元素通过指定的分隔符进行分隔 |
| pop()      | 删除并返回数组的最后一个元素                                 |
| push()     | 向数组的添加一个或多个元素，并返回新的长度                   |
| reverse()  | 使数组中的元素反序                                           |
| shift()    | 删除并返回数组的第一个元素                                   |

`Number`对象：该对象是原始数值的包装对象。

| 属性和方法        | 说明                                               |
| ----------------- | -------------------------------------------------- |
| MAX_VALUE         | 可表示的最大数                                     |
| MIN_VALUE         | 可表示的最小数                                     |
| NaN               | 非数字值                                           |
| NEGATIVE_INFINITY | 负无穷大，溢出时返回该值                           |
| POSITIVE_INFINITY | 正无穷大，溢出时返回该值                           |
| toString()        | 把数值转换为字符串，使用指定的基数                 |
| toLocaleString()  | 把数值转换为字符串，使用本地数字格式熟顺序         |
| toFixed()         | 把数值转换为字符串，结果的小数点后有指定位数的数字 |
| toExponential()   | 把对象的值转换为指数计数法                         |
| toPrecision()     | 把数值格式化为指定的长度                           |
| valueOf()         | 返回一个Number对象的基本数字值                     |

<div STYLE="page-break-after: always;"></div>

### 3.5 计时器

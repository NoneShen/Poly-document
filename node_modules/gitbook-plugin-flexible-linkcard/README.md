# GitBook plugin: Flexible Linkcard

![Image](https://github.com/HaoqiangChen/gitbook-plugin-flexible-linkcard/raw/master/book/flexible-linkcard.png)

## 安装

安装您的插件使用:

```bash
$ gitbook install
OR
$ npm i -S gitbook-plugin-flexible-linkcard
```

将主题添加到您的图书配置 `book.json` 或者 `book.js`中:

```json5
{
    "plugins": [
        "flexible-linkcard"
    ]
}
```

## 配置

整体配置

```json5
{
    "plugins": [
        "flexible-linkcard"
    ],
    "pluginsConfig": {
        "flexible-linkcard":{
            "title": "flexible-linkcard",
            "hrefUrl": "https://github.com/HaoqiangChen/gitbook-plugin-flexible-linkcard",
            "target": "_blank",
            "imgSrc": "./book/logo.png",
            "imgClass": "rect"
        }
    }
}
```

### title
定义`flexible-linkcard`的默认标题

### hrefUrl
定义`flexible-linkcard`的默认网址

### target
定义`flexible-linkcard`的网址默认打开方式，即HTML`<a>`的target属性，属性值有`_seft`, `_blank`, `_parent`, `_top`几种，最好还是设置`_blank`新窗口打开

### imgSrc
定义`flexible-linkcard`的默认显示图片

### imgClass
定义`flexible-linkcard`的默认图片样式

## 使用

要使用该插件，只需修改现有的blockquote并在行匹配模式。
默认情况下，只需按照以下语法即可。

```markdown
> @[标题]{`网址` "打开方式"}
> `图片地址` "图片样式"
```

以上5个属性可选填，如果不写，那么就会自动去拿默认配置填入。  
下面写几个例子：

```markdown
> @[flexible-linkcard]{`https://github.com/HaoqiangChen/gitbook-plugin-flexible-linkcard` "_self"}
> `https://github.com/HaoqiangChen/gitbook-plugin-flexible-linkcard/raw/master/book/flexible-linkcard.png` "rect"
```
***
```markdown
> @[hqbook]{`https://haoqiangchen.github.io/hqbook`}
```
***
```markdown
> @[hqbook]{`https://github.com/HaoqiangChen/hqbook` "_top"}
> `https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=593140000,1704329025&fm=218&app=92&f=PNG?w=121&h=75&s=6BE43A629ED797B53DA9AC8403008091` rect
```
***
```markdown
> @[YouTube]{`https://www.youtube.com`}
> `https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=2490575401,1801720151&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=f6f1ed528d24f0a37c61b5c33443f4dd` "rect"
```
***
```markdown
> @[w3school]{`https://www.w3school.com.cn/`}
> `https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=2774097068,1221860048&fm=218&app=92&f=JPG?w=121&h=75&s=37B57626C412CC283A4FA46F0300B07B` "rect"
```
***
```markdown
> @[Sublime Text]{`www.sublimetext.com/`}
> `https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=3228505420,3063925350&fm=218&app=92&f=JPEG?w=121&h=75&s=E0889750BE04BE1F997DA4DA0100E0B1` "rect"
```
***
```markdown
> @[Bootstrap]{`https://www.bootcss.com/`}
> `https://dss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=3016058362,1365548868&fm=218&app=92&f=JPG?w=121&h=75&s=DA203A60C6F199C214138E8E0200A08D` "rect"
```
***

> **注意**

网址或者图片地址都需要用反引号 \` 或者 标签`<code></code>`包括起来，不然会直接被解析成a链接。并且需要注意的是，每个flexible-linkcard中间需要有东西隔开，可用分隔符`---`。

## 展示效果

![Image](https://github.com/HaoqiangChen/gitbook-plugin-flexible-linkcard/raw/master/book/flexible-linkcard.png)

## Links

[flexible-linkcard](https://github.com/HaoqiangChen/gitbook-plugin-flexible-linkcard)
[hqbook](https://github.com/HaoqiangChen/hqbook)
[theme](https://github.com/HaoqiangChen/gitbook-plugin-theme-hqbook)
[gitbook](http://gitbook.com/)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, HaoqiangChen


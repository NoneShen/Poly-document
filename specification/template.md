<h1 align="center">大标题（各个单词除介词外首字母大写）</h1>

## 二级标题（各个单词除介词外首字母大写）
这是二级标题的内容.（需要加标点符号）

### 三级标题（仅仅第一个单词首字母大写）
这是三级标题中的分点内容:(需要加冒号)
- 这是分点内容.（需要加句号）
- 这是分点内容.（需要加句号）
- 这是分点内容.（需要加句号）

#### 四级标题（仅仅第一个单词首字母大写）
这是四级标题的内容（需要加句号）

英文标题markdown代码样例
```markdown
## Put the Elephants Into Refrigerator
### Step1. Open the door
- Make sure space is enough.
- Clean up a little bit.
- Be careful.
### Step2. Put an elephant inside
- You should know it's heavy.
- You may need extra hands.
- Don't hurt elephants.
### Step3. Close the door
- Check if the door is good.
- Make sure the elephant is alright.
- Job done.
```
## 常见工具

### 提示框

#### 样式1
```markdown

> [!Note|style:flat|label:Notice]
> 提示框样式1
```

#### 样式2
```markdown
> [!Note]
> 提示框样式2
```

### 插入图片

```markdown
<div align=center><img src="your_image_path.png" alt=""/></div>
```

### 插入代码
\```go
Your Code Line1
Your Code Line2
Your Code Line3 
\```

### 折叠内容

详见 https://github.com/manchiyiu/gitbook-plugin-sectionx

```markdown
<!--sec data-title="你要展示的折叠标题" data-id="section3" data-collapse=true ces-->
要折叠的内容
<!--endsec-->
```


### 内部链接跳转

```markdown
[跳转到这个页面](文件的路径/readme.md)
```

### 外部链接跳转

```markdown
Please refer to the [code](https://github.com/polynetwork/poly/blob/4323af5cfcd2a3277653d5bdc4db015cd9755fee/native/service/cross_chain_manager/eth/utils.go#L41) for details.
```

### 联系我们样例

```markdown
> [!Note|style:flat|label:Notice]
> If your chain doesn't support techniques like Simple Payment Verification (SPV) protocol in Bitcoin or Light Ethereum Subprotocol (LES) in Ethereum, please get in touch with the 'poly team' via <a href="mailto:contact@poly.network">contact@poly.network</a> or https://t.me/polynetworkgroup for more support.
```

### 表格样例

```markdown

| 列标题1               | 列标题2    |
|--------------------|-------------|
| **表格内容**           | 表格内容 |
| **表格内容**           | 表格内容 |

```


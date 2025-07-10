---
title: "手写简易版防抖节流"
description: "this is a post example"
pubDate: 2024-05-20
category: "intro"
draft: false
---

### 防抖

什么是防抖?
防抖是触发高频事件后，n秒内函数只会执行一次，如果n秒内高频事件再次触发，则会重新计算时间。

 试想这样的一个场景，有一个搜索输入框，为了提升用户体验，希望在用户输入后可以立即展现搜索结果，而不是每次输入完后还要点击搜索按钮。最基本的实现方式应该很容易想到，那就是绑定 input 元素的键盘事件，然后在监听函数中发送 AJAX 请求。伪代码如下：

```JavaScript
const ipt = document.querySelector("input");

ipt.addEventListener("input", (e) => {
  search(e.target.value).then(
    (resp) => {
      // ...
    },
    (e) => {
      // ...
    }
  );
});
但其实这样的写法很容易造成性能问题。比如当用户在搜索“apple”这个词的时候，每一次输入字母都会触发搜索。而实际上，只有最后一次搜索结果是用户想要的，前面就意味着无效查询，浪费了网络带宽和服务器资源。
```

所以对于这类连续触发的事件，需要添加一个“防抖”功能，为函数的执行设置一个合理的时间间隔，避免事件在时间间隔内频繁触发，同时又保证用户输入后能即时看到搜索结果。

要实现这样一个功能我们很容易想到使用 setTimeout() 函数来让函数延迟执行。就像下面的伪代码，当每次调用函数时，先判断 timeout 实例是否存在，如果存在则销毁，然后创建一个新的定时器。

下面是简单的防抖实现：

```javascript
function debounce(fn,wait){
    let timeout = null;// 保存延时器的id, 用于清除延时器
    return function(){
        const that = this;// 保存返回函数内部this
        const args = this.arguments// 获取事件函数传递evnet对象参数
        clearTimeout(timeout);//清除事件反复执行时的前一个延时器
        timeout = setTimeout(() => {
            fn.apply(that,args)// 执行事件处理逻辑函数, 改变函数内部this并传参
        },wait)
    }
}
```

进阶版我们可以给防抖函数添加第三个参数用来立即执行事件处理逻辑函数.而且可以取消操作：

```js
function debounce(func,wait, immediate){
    let timeout,result;// result 用于接受立即执行函数的返回值
    let decounced =  function(){
        const args = arguments;// 获取事件函数传递evnet对象参数
        const that = this;// 获取保存返回函数内部this
        clearTimeout(timeout);//清除上一个延时器, 防止内存泄漏
        if(immediate){
            // 将timeout与callNow建立联系, 当timeout有值时,此时callNow为false
            // 当timeout为null时,此时callNow为true
            let callNow = !timeout;// 用来判断是否立即执行
            timeout = setTimeout(() =>{
                timeout = null;
            },wait);
            // 当callNow为true时,立即执行
            if(callNow) result = func.apply(that,args)
        }else{
            // 不会立即执行
             timeout = setTimeout(() => {
                func.apply(that, args)
            }, wait)
        }
        // 返回立即执行函数的结果
        return result
    }
    //给返回的防抖处理函数添加一个取消防抖操作的方法
    decounced.cancel = function(){
        clearTimeout(timeout);// 清空延时器, 取消防抖操作
        timeout = null;// 由于上面的代码形成了闭包, 所有得手动清空timeout变量, 防止内存泄漏
    }
    return decounced; // 返回防抖处理函数
```



### 节流

什么是节流?
节流指当高频事件触发时，稀释函数的执行频率,让其只会在n秒内执行一次。

映射到在我们日常生活中，我们咀嚼食物的频率是非常快的，但我们不可能咀嚼一口就把食物咽下去,我们通常只会在咀嚼的几秒后，才把食物咽下去.此时就相当于节流。

思路第一版:

利用时间戳
我们通过每次事件响应函数触发时计算，当前的时间戳与老的时间戳的差,判断是否大于需要等待的时间，此时就触发函数，将新的时间戳的值赋值给老的时间戳， 用于计算下一次事件触发的响应时间。

```javascript
function throttle(func,wait){
    let content,args;
    // 之前的时间戳
    let oldTime = 0;
    return function(){
        content = this;
        args = arguments
        // 获取当前时间戳
        let nowTime = new Date().valueOf();
        //如果现在的时间和以前的时间间隔大于等待的时间
        if(nowTime - oldTime > wait){
              // 立即执行
            func.apply(content,args);
            oldTime = nowTime
        }
    }
}
```

我们不难发现，上面的代码是只顾头，不顾尾的。也就是说事件触发函数的第一次会立即执行， 最后一次不会执行。

思路第二版:

利用延时器setTimeout

我们通过一个变量timeout来记录延时器的id,由于第一次默认值为fasle， 此时我们开启延时器并将其返回值赋值给timeout, 当延时器执行完毕时，将timeout赋值为null，使下一次判断timeout时条件为true，开启下一轮定时器。

```js
function throttle(func,wait){
    let content,args, timeout;
       return function () {
        content = this;
        args = arguments;
          // 如果timeout没有值, 就开启延时器
        if (!timeout) {
            timeout = setTimeout(() => {
                func.apply(content, args);
                // 延时器执行完之后清空timeout的值
                timeout = null
            }, wait);
        }
}
```


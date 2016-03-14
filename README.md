# a simple editor demo
editor demo

#使用 Html5 的 contenteditable 属性，将 div 做成类似 textarea 的wen本编辑框
#优点： 方便了实现元素的自增高
#麻烦： 接受富wen本 导致排版 以及 用户体验的影响，
        浏览器支持不普及


关于contenteditable, 在w3c的wen档中这样描述:
<https://w3c.github.io/editing/contentEditable.html>
The contenteditable attribute is an enumerated attribute whose keywords are the empty string (“”), “events”, “caret”, “typing”, “plaintext-only”, “true”, and “false”. There is one additional state, the inherit state, which is the missing value default (and the invalid value default).

参数：
contenteditable=""
contenteditable="events"
contenteditable="caret"
contenteditable="plaintext-only"
contenteditable="true"
contenteditable="false"

优化富文本：其他的不管，只看 plaintext-only --> 只支持纯文本
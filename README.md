# a simple editor demo
editor demo

#ʹ�� Html5 �� contenteditable ���ԣ��� div �������� textarea ��wen���༭��
#�ŵ㣺 ������ʵ��Ԫ�ص�������
#�鷳�� ���ܸ�wen�� �����Ű� �Լ� �û������Ӱ�죬
        �����֧�ֲ��ռ�


����contenteditable, ��w3c��wen������������:
<https://w3c.github.io/editing/contentEditable.html>
The contenteditable attribute is an enumerated attribute whose keywords are the empty string (����), ��events��, ��caret��, ��typing��, ��plaintext-only��, ��true��, and ��false��. There is one additional state, the inherit state, which is the missing value default (and the invalid value default).

������
contenteditable=""
contenteditable="events"
contenteditable="caret"
contenteditable="plaintext-only"
contenteditable="true"
contenteditable="false"

�Ż����ı��������Ĳ��ܣ�ֻ�� plaintext-only --> ֻ֧�ִ��ı�

#���ڸ��ı��Ĵ���
1.ͨ��CSS���ã�user-modify
  user-modify: read-only;
  user-modify: read-write;
  user-modify: write-only;
  user-modify: read-write-plaintext-only;
2.ͨ��JS����
  ��document.selection || window.getSelection ѡ���ı� 
  [JavaScript ��׼ selection ����]
<http://www.cnblogs.com/rainman/archive/2011/02/27/1966482.html>
  ��getRangeAt(index) ��ȡrange����
  ��TextRange  ����TextRange���󣬽��������ݴ������˶������
  �ܽ��������������²���
  [TextRange�ĳ��������뷽��]
<http://blog.csdn.net/truong/article/details/18658895>
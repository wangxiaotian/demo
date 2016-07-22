### LF will be replaced by CRLF in js小功能/拼图/jquery-1.12.2.js.
-  CRLF -- Carriage-Return Line-Feed 回车换行
就是回车(CR, ASCII 13, \r) 换行(LF, ASCII 10, \n)。
这两个ACSII字符不会在屏幕有任何输出，但在Windows中广泛使用来标识一行的结束。而在Linux/UNIX系统中只有换行符。
也就是说在windows中的换行符为 CRLF， 而在linux下的换行符为：LF
使用git来生成一个rails工程后，文件中的换行符为LF， 当执行git add .时，系统提示：LF 将被转换成 CRLF
- 解决办法：git config --gobal core.autocrlf false;
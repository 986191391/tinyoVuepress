# 引擎

事实上我们编写的JavaScript无论你交给浏览器或者Node执行，最后都是需要被CPU执行的。<br>
但是CPU只认识自己的指令集，实际上是机器语言，才能被CPU所执行。<br>
所以我们需要JavaScript引擎帮助我们将JavaScript代码翻译成CPU指令来执行。<br>

## 常见的引擎

- SpiderMonkey：第一款JavaScript引擎，由Brendan Eich开发（也就是JavaScript作者）。
- Chakra：微软开发，用于IT浏览器。
- JavaScriptCore：WebKit中的JavaScript引擎，Apple公司开发。
- V8：Google开发的强大JavaScript引擎，也帮助Chrome从众多浏览器中脱颖而出。


## V8引擎

Chrome V8是一款由Google开发的JavaScript引擎，用于解释和执行JavaScript代码。它是一款高性能的引擎，采用了即时编译技术，可以将JavaScript代码转换为本地机器代码，从而提高JavaScript代码的执行速度。V8引擎被广泛应用于Google Chrome浏览器和Node.js等应用程序中。

V8引擎采用了即时编译技术，即在代码执行时进行编译，将JavaScript代码转换为本地机器代码，然后再执行本地机器代码。这种方式可以避免解释器的性能瓶颈，提高代码的执行速度。

V8引擎的另一个特点是支持多线程执行JavaScript代码。V8引擎采用了一种称为“隔离”的技术，将每个JavaScript对象都封装在一个独立的容器中，从而实现了多线程执行JavaScript代码的能力。
# 代码题

## 给定一个字符串 str ，只会出现 {}()[] 这6种字符，请实现一个函数判断这个字符串中的括号是否是匹配的。

```js
function isValidParentheses(str) {
  const compareObj = {
    ']': '[',
    '}': '{',
    ')': '('
  }
  let stack = [];
  for (let val of str) {
    if (val === '[' || val === '{' || val === '(') {
      stack.push(val);
    } else {
      if (compareObj[val] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
```

## ab两个有序数组，a长度小于等于b，怎么判断a是不是b的子集

```js
function check(a, b) {
  let i = 0;
  let j = 0;
  while(i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
    } else if (a[i] > b[j]) {
      j++
    } else {
      return false
    }
  }
  return i >= a.length;
}
```


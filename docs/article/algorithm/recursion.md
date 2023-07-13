# 递归

1. 实现斐波那契数列。
即[1, 1, 2, 3, 5, 8, 13, 21]

```js
function fibonacci(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return fibonacci(n - 2) + fibonacci(n - 1)
}
```

2. 进阶版本，给以上 fibonacci 函数添加缓存。

```js
function createFibonacci() {
  let cache = [1, 1];
  return function fibonacci(n) {
    if (cache[n]) return cache[n];
    const result = fibonacci(n - 2) + fibonacci(n - 1);
    cache[n] = result;
    return result;
  }
}

const fibonacci = createFibonacci();
```

3. 台阶，每次可以走1步或2步或3步，求第n步时有多少种走法。
```js
function getStepNumber(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 4;
  return getStepNumber(n - 3) + getStepNumber(n - 2) + getStepNumber(n - 1);
}
```


4. 快速排序
```js
function quickSort(arr) {
  const midNum = arr.splice(Math.floor(arr.length / 2), 1)[0];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midNum) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return quickSort(leftArr).concat(midNum, quickSort(rightArr));
}
```
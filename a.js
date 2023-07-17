// 在针对字符串、数字和布尔值使用字面量时，只有在该值被视为对象的情况下才会创建实际的复杂对象。换句话说，在尝试使用与构造函数关联的方法或检索属性（如var len = 'abc'.length) 之前，一直在使用原始数据类型。当这种情况发生时，Javascript 会在幕后为字面量值创建一个包装器对象，以便将该值视为一个对象。调用方法以后，Javascript 即抛弃包装器对象，该值返回字面量类型。这就是字符串、数字、布尔值被认为是原始数据类型的原因。



// 6. 编写一个函数，接受一个字符串作为参数，并返回字符串中出现次数最多的字符及其出现次数。如果存在多个字符出现次数相同且最多，则返回任意一个即可。例如，输入"abbcccddddeeeee"，返回 { char: 'e', count: 5 }。

// function a(str) {
//   // 输入"abbcccddddeeeee"，返回 { char: 'e', count: 5 }。
//   let obj = {};
//   let count = 0;
//   let char = '';
//   for (let key of str) {
//     obj[key] = obj[key] ? obj[key] + 1 : 1;
//     if (obj[key] > count) {
//       count = obj[key];
//       char = key;
//     }
//   }
//   return { char, count }
// }

// console.log(a('abbcccddddeeeee'));


// 7. 编写一个函数，接受一个数组作为参数，返回一个新数组，其中的元素是原数组中的偶数，并且按照从小到大的顺序排列。例如，输入[3, 8, 2, 1, 6, 4]，返回 [2, 4, 6, 8]。

// function c(arr) {
//   return arr.filter(i => !(i % 2)).sort((x, y) => x - y);
// }

// console.log(c([3, 8, 2, 1, 6, 4]))



// 8. 编写一个函数，接受一个字符串作为参数，判断该字符串是否是有效的括号序列。有效的括号序列指的是括号的开闭顺序正确且嵌套规则正确。例如，输入"()[]{}"，返回 true；输入"([)]"，返回 false。

// function a(str) {
//   const strs = str.split('');
//   let arr = [];
//   let compareObj = { '}': '{', ']': '[', ')': '(' };
//   for(let key = 0; key < strs.length; key++) {
//     const strKey = strs[key];
//     if ( strKey === '{' || strKey === '[' || strKey === '(') {
//       arr.push(strKey);
//     } else {
//       const p = arr.pop();
//       if (p !== compareObj[strKey]) return false;
//     }
//   }
//   if (arr.length === 0) return true;
//   return false;
// }

// console.log(a('(()[]{})'));



// 编写一个函数，接受一个正整数作为参数，返回一个包含斐波那契数列的数组，
// 数组的长度为该正整数。斐波那契数列是指后一个数字是前两个数字之和的数列。例如，输入 8，返回 [0, 1, 1, 2, 3, 5, 8, 13]。

// function a(num) {
//   if (num === 1) return 0;
//   if (num === 2) return 1;

//   return a(num - 2) + a(num - 1);
// }



// 10. 编写一个函数，接受一个字符串作为参数，返回一个新的字符串，其中的单词以相反的顺序排列，但单词内部的字符顺序不变。
// 例如，输入"The quick brown fox"，返回 "ehT kciuq nworb xof"。

// function a (str) {
//   return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// }

// console.log(a('The quick brown fox'));


// 11. 编写一个函数，接受一个字符串作为参数，并返回一个新字符串，其中的每个单词的首字母都转换为大写。
// 例如，输入"hello world"，返回 "Hello World"。
// function a(str) {
//   return str.replace(/\b\w/g, i => i.toUpperCase());
// }

// console.log(a('hello world'))


// 12. 编写一个函数，接受一个二维数组作为参数，将其转换为一个一维数组，并且保持原数组中所有元素的顺序不变。
// 例如，输入[[1, 2], [3, 4], [5, 6]]，返回 [1, 2, 3, 4, 5, 6]。

// function a (arr) {
//   return arr.toString().split(',');
// }

// console.log(a([[1, 2], [3, 4], [5, 6]]))



// 13. 编写一个函数，接受一个正整数作为参数，并返回该正整数的阶乘结果。阶乘是指从 1 到该正整数的所有整数的乘积。
// 例如，输入 5，返回 120（1 * 2 * 3 * 4 * 5）。

// function a(num) {
//   if (num === 1) return 1;
//   return num * a(num - 1)
// }

// console.log(a(5))


// 14. 编写一个函数，接受一个字符串作为参数，并返回该字符串中最长的连续数字串。如果存在多个最长的连续数字串，则返回第一个遇到的。
// 例如，输入"abcd12345efgh6789"，返回 "12345"。

// function a(str) {
//   const match = str.match(/\d+/g);
//   console.log(match);
// }
// a('abcd12345efgh6789');



// 15. 编写一个函数，接受一个整数数组和一个目标值作为参数，在数组中找到两个数，使它们的和等于目标值，并返回这两个数的索引。假设每个输入只有一个正确答案，并且同一个元素不能使用两次。
// 例如，输入数组 [2, 7, 11, 15]，目标值为 9，那么函数应该返回 [0, 1]。

// function a(arr, target) {
//   let map = new Map();
//   for (let key = 0; key < arr.length; key++) {
//     const r = target - arr[key];
//     if (map.has(r)) {
//       return [map.get(r), key]
//     } else {
//       map.set(arr[key], key)
//     }
//   }
//   return []
// }

// console.log(a([2, 7, 11, 15], 22))


// 16. 编写一个函数，接受一个整数数组作为参数，并返回数组中乘积最大的连续子数组的乘积。
// 例如，输入数组 [2, 3, -2, 4]，最大乘积的连续子数组是 [2, 3]，乘积为 6。

// function a(arr) {
//   let max = 0;
//   for(let i = 0; i < arr.length - 1; i++) {
//     const num = arr[i] * arr[i + 1];
//     if (num > max) max = num;
//   }
//   return max;
// }
// console.log(a([2, 3, -2, 4]));  // 输出：6


// 17. 实现一个函数 findLongestPalindrome，接受一个字符串作为参数，并返回该字符串中最长的回文子串。回文子串是指正序和倒序读都相同的字符串片段。
// 例如，输入字符串 "babad"，函数应该返回 "bab" 或 "aba"。

// function findLongestPalindrome(str) {
//   let maxStr = '';

//   function checkStr (left, right) {
//     while (left > 0 && right < str.length && str[left] === str[right]) {
//       left--;
//       right++;
//     }
//     const resultStr = str.slice(left + 1, right);
//     if (resultStr.length > maxStr.length) {
//       maxStr = resultStr;
//     }
//   }

//   for (let i = 0; i < str.length; i++) {
//     checkStr(i, i);
//     checkStr(i, i + 1);
//   }

//   return maxStr;
// }

// console.log(findLongestPalindrome('babad'))


class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);


const root = new TreeNode(-10);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// function preorderTraversal(root) {
//   if (root === null) return null;

//   let result = [];
//   result.push(root.val);
//   if (root.left) result.push(...preorderTraversal(root.left));
//   if (root.right) result.push(...preorderTraversal(root.right));
  
//   return result;
// }

// function inorderTraversal(root) {
//   if (root === null) return null;

//   let result = [];
//   if (root.left) result.push(...inorderTraversal(root.left));
//   result.push(root.val);
//   if (root.right) result.push(...inorderTraversal(root.right));
  
//   return result;
// }


function maxPathSum(root) {
  if (root === null) return 0;

  return Math.max(maxPathSum(root.left), maxPathSum(root.right)) + root.val;
}

console.log('rrot', root);
console.log('rrot', maxPathSum(root));
// console.log('inorderTraversal', inorderTraversal(root)); // 

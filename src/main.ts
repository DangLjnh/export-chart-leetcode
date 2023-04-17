import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// let result = [];
// let count: any = {};
// for (let i = 0; i <= arr.length; i++) {
//   if (!count[arr[i]]) {
//     // count[arr[i]] is key
//     count[arr[i]] = 1;
//   } else {
//     count[arr[i]]++;
//   }
// }

// console.log('🚀 ~ file: main.ts:12 ~ count:', count);
// for (let key in count) {
//   if (+key === +count[key]) {
//     result.push(+count[key]);
//   }
// }

// if (result.length === 1) {
//   console.log('Lucky number is', result[0]);
// } else {
//   let max = result[0];
//   for (let i = 0; i <= result.length; i++) {
//     if (result[i] > max) {
//       max = result[i];
//     }
//   }
//   console.log('Lucky number is', max);
// }

// function twoSum(nums: number[], target: number) {
//   let result: any = [];
//   for (let i = 0; i <= nums.length; i++) {
//     for (let j = i + 1; j <= nums.length; j++) {
//       // 6 -> i = 2 thiếu 4, nếu target - nums[i] === nums[j]
//       // nghĩa là nếu số cần bằng với số j thì lấy số đó
//       if (nums[j] === target - nums[i]) {
//         // nếu
//         result = [i, j];
//       }
//     }
//   }
//   return result;
// }

// twoSum([2, 3, 5, 4], 6);

// var isPalindrome = function (x: number) {
//   let arr = x.toString().split('');
//   let newArr = [...arr];
//   let reverseString = [...newArr.reverse()];
//   if (arr == reverseString) {
//     return true;
//   }
//   return JSON.stringify(arr) === JSON.stringify(reverseString);
// };
// console.log(isPalindrome(121));

// var romanToInt = function (s: string) {
//   s = s.replace('IV', 'IIII');
//   s = s.replace('IX', 'VIIII');
//   s = s.replace('XL', 'XXXX');
//   s = s.replace('XC', 'LXXXX');
//   s = s.replace('CD', 'CCCC');
//   s = s.replace('CM', 'DCCCC');
//   let arr = s.split('');
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'I') {
//       sum += 1;
//     }
//     if (arr[i] === 'V') {
//       sum += 5;
//     }
//     if (arr[i] === 'M') {
//       sum += 1000;
//     }
//     if (arr[i] === 'X') {
//       sum += 10;
//     }
//     if (arr[i] === 'C') {
//       sum += 100;
//     }
//     if (arr[i] === 'L') {
//       sum += 50;
//     }
//     if (arr[i] === 'D') {
//       sum += 500;
//     }
//   }
//   return sum;
// };
// console.log(romanToInt('MCMXCIV'));

// function longestCommonPrefix(strs: string[]) {
//   if (strs.length === 0 || strs === null) return '';
//   for (let i = 0; i < strs[0].length; i++) {
//     let c = strs[0].charAt(i);
//     for (let j = 1; j < strs.length; j++) {
//       if (strs[j].charAt(i) !== c) {
//         return strs[0].slice(0, i);
//       }
//     }
//   }
//   return strs[0];
// }

// console.log(longestCommonPrefix(['flower', 'flowee', 'flower', 'flower']));

// var isValid = function (s: string) {
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     let c = s.charAt(i);
//     if (c === '[' || c === '{' || c === '[') {
//       stack.push(c);
//     } else if (stack.length > 0) {
//       if (
//         (c === '}' && stack[stack.length - 1] === '{') ||
//         (c === ']' && stack[stack.length - 1] === '[') ||
//         (c === ')' && stack[stack.length - 1] === '(')
//       ) {
//         stack.pop();
//       } else {
//         stack.push(c);
//       }
//     } else {
//       stack.push(c);
//     }
//   }
//   return stack.length === 0;
// };

// console.log(isValid('[({})]'));

// var mergeTwoLists = function (list1: number[], list2: number[]) {
//   const newList = list1.concat(list2);
//   for (let i = 0; i < newList.length; i++) {
//     let min = newList[i];
//     console.log('🚀 ~ file: main.ts:147 ~ mergeTwoLists ~ min:', min);
//     for (let j = i + 1; j < newList.length; j++) {
//       if (min > newList[j]) {
//         min = j;
//       }
//     }
//     return ([newList[i], newList[min]] = [newList[min], newList[i]]);
//   }
//   return newList;
// };

// function mergeTwoLists(
//   list1: ListNode | null,
//   list2: ListNode | null
// ): ListNode | null {
//   let dummy = new ListNode(0);
//   let current = dummy;
//   while (list1 !== null && list2 !== null) {
//     if (list1.val < list2.val) {
//       current.next = list1;
//       list1 = list1.next;
//     } else {
//       current.next = list2;
//       list2 = list2.next;
//     }
//   }
//   if (list1 !== null) {
//     current.next = list1;
//   } else if (list2 !== null) {
//     current.next = list2;
//   }
//   return dummy.next;
// }

// console.log(
//   mergeTwoLists(
//     new ListNode(1, new ListNode(2, new ListNode(4))),
//     new ListNode(1, new ListNode(3, new ListNode(4)))
//   )
// );

// function createTargetArray(nums: number[], index: number[]): number[] {
//   let result: number[] = [];
//   index.forEach((itemIndex, idx) => {
//     result.splice(itemIndex, 0, nums[idx]);
//   });
//   return result;
// }
// createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]);

// function removeDuplicates(nums: any[]): number {
//   let result: any[] = [];
//   let arr: any[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (!result.includes(nums[i])) {
//       result.push(nums[i]);
//     }
//     if (i === nums.length - 1) {
//       for (let j = 0; j < result.length; j++) {
//         arr.push('_');
//       }
//     }
//   }
//   nums = result.concat(arr);
//   return nums.length;
// }
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// function removeElement(nums: number[], val: number): number {
//   let result: any[] = [...nums];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       result.splice(i, 1, '_');
//     }
//   }
//   const filteredResult = result.filter((item) => {
//     return typeof item === 'number';
//   });
//   nums = filteredResult;
//   return nums.length;
// }
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// function removeElement(nums: number[], val: number): number {
//   let cnt = 0;
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       cnt++;
//     } else {
//       nums[j++] = nums[i];
//     }
//   }
//   return nums.length - cnt;
// }
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// function strStr(haystack: string, needle: string): number {
//   if (haystack.includes(needle)) {
//     return haystack.indexOf(needle);
//   }
//   return -1;
// }
// console.log(strStr('sadbutsad', 'sad'));

// function searchInsert(nums: number[], target: number): number {
//   let index = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       index = i;
//       break;
//     }
//     if (nums.length === 1 && nums[i] === target) {
//       index = 0;
//       break;
//     }
//     if (i === nums.length - 1 && !index) {
//       for (let j = 0; j < nums.length; j++) {
//         if (nums[j] > target) {
//           index = j;
//           break;
//         }
//         if (j === nums.length - 1) {
//           index = nums.length;
//           break;
//         }
//       }
//     }
//   }
//   return index;
// }

// function searchInsert(nums: number[], target: number): number {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     const mid = Math.floor(left + right) / 2;
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] > target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return left;
// }

// console.log(searchInsert([1, 2, 3, 4, 23], 1));

// function lengthOfLastWord(s: string): number {
//   return s.trim().split(' ').slice(-1).toString().length;
// }
// console.log(lengthOfLastWord('   fly me   to   the moon  '));

// function plusOne(digits: number[]): number[] {
//   const result: number[] = [];
//   BigInt(+digits.join('') + 1)
//     .toString()
//     .split('')
//     .forEach((item) => result.push(+item));
//   return result;
// }

// function plusOne(digits: number[]): number[] {
//   const num = BigInt(digits.join(''));
//   const result = String(num + BigInt(1))
//     .split('')
//     .map(Number);
//   return result;
// }

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

// Fibonacci sequence is sum 2 number previous n
// function climbStairs(n: number): number {
//   const memo = new Array(n + 1).fill(0);
//   memo[0] = 1;
//   memo[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     memo[i] = memo[i - 1] + memo[i - 2];
//   }
//   return memo[n];
// }
// console.log(climbStairs(4));

// function deleteDuplicates(head: ListNode | null): ListNode | null {
//   let dummy = new ListNode(0);
//   let current = dummy;
//   while (head !== null) {
//     if ((head.val == head.next?.val) === false) {
//       current.next = head;
//     }
//     head = head.next;
//   }
//   return dummy.next;
// }
// console.log(
//   deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2))))
// );

// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   const filterZero1 = nums1.filter((item) => item !== 0);
//   const filterZero2 = nums2.filter((item) => item !== 0);
//   const result = filterZero1.concat(filterZero2).sort((a, b) => a - b);
// }
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// function isPalindrome(s: string): boolean {
//   if (s === '') return true;
//   s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
//   // console.log(s.split('').reverse().join(''));
//   return s === s;
// }
// isPalindrome('A man, a plan, a canal: Panama');

// function singleNumber(nums: number[]): number {
//   let result: number[] = [];
//   nums.map((item) => {
//     if (!result.includes(item)) {
//       result.push(item);
//     } else {
//       result = result.filter((num) => {
//         return num !== item;
//       });
//     }
//   });
//   return +result.join('');
// }

// console.log(singleNumber([4, 1, 2, 1, 2]));

// function majorityElement(nums: number[]): number {
//   const obj: any = {};
//   let num = 0;
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (!obj[nums[i]]) {
//       obj[nums[i]] = 1;
//     } else {
//       obj[nums[i]]++;
//     }
//   }
//   for (let key in obj) {
//     if (num < obj[key]) {
//       result = +key;
//       num = obj[key];
//     }
//   }
//   return result;
// }
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

function longestPalindrome(s: string): number {
  let freq: any = {};
  for (let i = 0; i < s.length; i++) {
    freq[s[i]] = (freq[s[i]] || 0) + 1;
  }
  console.log('🚀 ~ file: main.ts:411 ~ longestPalindrome ~ freq:', freq);
  return s.length;
}
console.log(longestPalindrome('abccccdd'));

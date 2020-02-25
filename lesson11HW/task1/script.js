// function reconstructTree(inOrder, preOrder) {
//   
//   const 
//   
// }
//
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
//
// function getBinaryTree(inOrder, preOrder) {
//   if () {
//     return null;
//   }
//
//   const node = new Node();
//
//   node.left = getBinaryTree();
//   node.right = getBinaryTree();
//
//   return node;
// }
//
// console.log([4,[2,[1,[],[]],[3,[],[]]],[6,[5,[],[]],[]]])
// // [4,[],[]]
// // [4,[2,[],[]],[6,[],[]]]
// // [4,[2,[1,[],[]],[3,[],[]]],[6,[5,[],[]],[]]]
//
// reconstructTree([1,2,3,4,5,6],[4,2,1,3,6,5]) 
//
// // (function() {
// //   class Node {
// //     constructor(data) {
// //       this.data = data;
// //       this.left = null;
// //       this.right = null;
// //     }
// //   }
// //
// //   function getBinaryTree(arr, initialValue, acc = 0) {
// //     let nodeValue;
// //     const firstElement = arr[0];
// //
// //     if (!arr.length) {
// //       return null;
// //     }
// //
// //     if(!initialValue) {
// //       nodeValue = firstElement;
// //     } else {
// //       nodeValue = initialValue + acc;
// //     }
// //
// //     const node = new Node(nodeValue);
// //     const newArr = arr.slice(1);
// //     const nextAcc = newArr[0];
// //     
// //     node.left = getBinaryTree(newArr, nodeValue, -nextAcc);
// //     node.right = getBinaryTree(newArr, nodeValue, nextAcc);
// //
// //     return node;
// //   }
// //
// //   function recPreOrder(node, depth, maxDepth) {
// //     const nodeDepth = depth;
// //
// //     if (nodeDepth === maxDepth) {
// //       sums.push(node.data)
// //     }
// //
// //     if (node.left != null) recPreOrder(node.left, nodeDepth + 1, maxDepth);
// //     if (node.right != null) recPreOrder(node.right, nodeDepth + 1, maxDepth);
// //   }
// //
// //   let sums = [];
// //
// //   function getSolution(arr, sum) {
// //     const depth = 0;
// //     const maxDepth = arr.length - 1;
// //     const tree = getBinaryTree(arr); //Node { data: arr[0], left: Node, right: Node }
// //
// //     recPreOrder(tree, depth, maxDepth); 
// //
// //     const variety = removeRepeating(sums); // array of all possible sums
// //     let matched = false;
// //     
// //     variety.forEach(item => {
// //       if (item === sum) {
// //         matched = true;
// //         return;
// //       }
// //     })
// //
// //     sums = [];
// //
// //     return matched;
// //   }
// //
// //   function removeRepeating(arr) {
// //     return arr.filter((item, index) => arr.indexOf(item) === index)
// //   }
// //
// //   getSolution([1, 3, 4, 6, 8], -2) // true
// //   getSolution([15, 2, 3], 10) //true
// //   getSolution([15, 3], 18) //true
// //   getSolution([1, 5, 3, 2, 5], -2) //false
// // })()
// //

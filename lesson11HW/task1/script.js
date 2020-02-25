class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let preIndex = 0;

function reconstructTree(inOrder, preOrder) {
  const root = createTree(inOrder, preOrder, 0, inOrder.length - 1);
  return root;
}

function createTree(inOrder, preOrder, inStart, inEnd) {
  if (inStart > inEnd) {
    return null;
  }

  const node = new Node(preOrder[preIndex++]);

  if (inStart === inEnd) {
    return node;
  }

  const inIndex = search(inOrder, inStart, inEnd, node.data)

  node.left = createTree(inOrder, preOrder, inStart, inIndex - 1);
  node.right = createTree(inOrder, preOrder, inIndex + 1, inEnd);

  return node;
}

function search(arr, start, end, nodeValue) {
  for (let i = start; i <= end; i++) {
    if (arr[i] === nodeValue) {
      return i;
    }
  }
  return i;
}

reconstructTree([1,2,3,4,5,6],[4,2,1,3,6,5]);


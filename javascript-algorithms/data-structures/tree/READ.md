트리는 보통 이진트리(Binary Tree)를 많이 구현하므로, 여기서는 이진트리를 어떻게 표현하는지 알아보도록 하자. 구현 방법은 크게 두 가지가 있는데, 배열을 이용하는 방법과 연결 리스트를 이용하는 방법이다. 우선 배열을 이용하는 방법부터 알아보도록 하자. 배열은 단순하게  트리 번호대로 배열에 집어넣으면 끝이다. 한 가지 포인트는 index 0은 비워두는 것인데, root를 1부터 시작하게 해서, 왼쪽 자식 노드는 index * 2, 오른쪽 자식 노드는 index * 2 + 1로 참조하기 쉽게 약간의 트릭을 쓴다.

/*       5
 *     /   \
 *    3      8
 *   / \   /  \
 *  1   4  7   9
 */
const tree = [null, 5, 3, 8, 1, 4, 7, 9];
연결 리스트를 이용한 구현 방법은 위에서 구현한 Node 구현체와 거의 비슷하다. left, right를 이용하여 자식 노드를 참조하도록 구현한다.

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let root = new Node(5);
let left = new Node(3);
let right = new Node(8);
root.left = left;
root.right = right;
한 가지 더. 트리 문제에서 불가분의 관계를 가지고 있는 게 순회(traversal)이다. 연결 리스트를 이용해 트리를 구현했을 경우, 다음과 같이 재귀 함수를 이용하면 쉽게 트리를 순회할 수 있다.

function traversal(node) {
  if (node === null) return;
  
  traversal(node.left);
  traversal(node.right);
}
트리의 순회 방법에는 루트 노드의 방문 순서에 따라 크게 세 가지로 나눌 수 있는데, preorder, inorder, postorder가 있다. 핵심이 루트 노드 방문 순서이므로, 어느 시점에서 접근하냐에 따라 트리 순회 방법을 표현할 수 있다. 참고로 이진 탐색 트리에서 inorder는 오름차순으로 정렬된다.

function traversal(node) {
  if (node === null) return;
  
  console.log('preorder', node.val);
  traversal(node.left);
  console.log('inorder', node.val);
  traversal(node.right);
  console.log('postorder', node.val);
}

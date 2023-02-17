# Linked List
Javascript에서는 포인터가 없기 때문에 Linked List를 자바스크립트에서 객체를 참조하는 방식으로 구현할 수 있다.

### Javascript Linked List 구현
```
function Node(val) {
  this.val = val;
  this.next = null;
}

let head = new Node(0);
let node1 = new Node(1);
let node2 = new Nodw(2);

head.next = node1;
node1.next = node2;
```

### Javascript Double Linked List 구현
prev 추가해서 양방향으로 참조하도록 구현
```
function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

let head = new Node(0);
let node1 = new Node(1);
let node2 = new Nodw(2);

head.next = node1;
node1.next = node2;
node1.prev = head;
node2.prev = node1;
```

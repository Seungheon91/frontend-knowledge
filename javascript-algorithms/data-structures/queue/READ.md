# Queue
큐는 FIFO(First In, First Out) 구조를 가집니다. 자바스크립트에서는 구현체가 없어서 Array를 이용해서 간단하게 구현합니다.
큐의 주요 메소드에는 enqueue와 dequeue가 있는데 enqueue는 큐에 삽입을 하는 메소드, dequeue는 큐에서 제일 처음으로 들어간 값을 빼는 메소드이다.
prototype 메소드를 사용하면 되며 큐에 삽입은 push 메소드를 사용하고 큐에서 값을 뺄때는 shift 메소드를 사용한다.

```
const queue = [];

queue.push(1); // enqueue 1
queue.push(2); // enqueue 2
queue.push(3); // enqueue 3

queue.shift(); // dequeue 1
queue.shift(); // dequeue 2
queue.shift(); // dequeue 3
```

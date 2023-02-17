# Stack
스택은 LIFO (Last In, First Out) 구조를 가진다. 자바스크립트에서는 스택 관련 Object가 없어서 직접 만들어야 한다.
Array.prototype 형태로 스택과 비슷한 메소드들이 구현되어 있어 응용이 가능하다.
기본적인 push/pop과 같은 경우는 protorype에 정의된 메소드를 사용하고, peek은 적절하게 매열 접근으로 구현하면 좋다.
스택은 괄호 매칭이나 구간합을 구하는데 응용하면 편리함

```
cost stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

stack[stack.length - 1]; // peek 3
stack.pop();  // 3
stack.pop();  // 2
stack.pop();  // 1
```

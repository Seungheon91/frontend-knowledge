### Map
Map은 O(1)의 접근성을 가진다. ES5에서는 {}를 사용해서 구현하지만, ES6에는 Map 자료 구조가 추가되었기 때문에 취향에 따라서 골라 사용하면 된다.
Map은 시간복잡도를 줄이는데 결정적인 역할을 하는 경우가 많아서 자주 활용된다.

```
const map = {};
map['p1'] = 1;
map['p2'] = 2;

map['p1']; // 1
map['p2']; // 2

// or 
const map = new Map();
map.set('p1', 1);
map.set('p2', 2);

map.get('p1'); // 1
map.get('p2'); // 2
```

### Set
Set은 Map과 비슷하지만, 중복된 값을 허용하지 않는다. 따라서, 중복이라는 키워드가 떠오르면 Set을 적절히 사용하면 좋다. 구현은 ES6 Set을 사용하는게 편하고 좋다.

```
const set = new Set();
set.add(1);
set.add(2);

set.has(1); // true
set.has(2); // true
set.has(3); // false
```


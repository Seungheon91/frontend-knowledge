## 타입스크립트(Typescript)

### 제네릭
제네릭은 클래스, 함수, 인터페이스 등에서 한 가지 함수가 다양한 타입의 데이터를 받아줘야할 때 올바른 타입을 지정하기 위해 사용하는 재사용 가능한 확장 문법입니다.

```javascript
function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr = [1, 2, 3];

getSize<number>(arr); // 3

const arr2 = ["a", "b", "c"];

getSize<string>(arr2); // 3
```

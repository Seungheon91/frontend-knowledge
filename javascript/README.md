# 📝 Javascript Contents
- [프로그래밍](#프로그래밍)
- [자바스크립트 특징](#자바스크립트-특징)
- [변수](#변수)
- [데이터 타입](#데이터-타입)
- [타입변환과 단축 평가](#타입변환과-단축-평가)
- [배열](#배열)
- [객체 리터럴](#객체-리터럴)
- [원시 값과 객체 비교](#원시-값과-객체-비교)
- [함수](#함수)
- [스코프](#스코프)
- [생성자 함수에 의한 객체 생성](#생성자-함수에-의한-객체-생성)
- [함수와 일급 객체](#함수와-일급-객체)
- [프로토타입](#프로토타입)
- [strict mode](#strict-mode)
- [빌트인 객체](#빌트인-객체)
- [this](#this)
- [실행 컨택스트](#실행-컨택스트)
- [클로저](#클로저)
- [클래스](#클래스)
- 스프레드 문법
- 구조 분해 할당
- 브라우저 랜더링
- DOM
- 이벤트
- 타이머
- 비동기 프로그래밍
- Ajax
- REST API
- Promise
- 제너레이터와 async await
- 에러
- 모듈

---
<br/><br/>
## 프로그래밍
### 프로그래밍이란?
프로그래밍이란 컴퓨터에게 실행을 요구하는 일종의 커뮤니케이션이다. 해결해야 하는 문제(요구사항)를 명확히 이해한 후 적절한 문제 해결 방안을 정의할 필요가 있다. 0과 1밖에 알지 못하는 기계가 실행할 수 있을 정도로 정확하고 상세하게 요구를 설명하는 작업이다.
<br/><br/>
### 컴파일러와 인터프리터
사람이 이해할 수 있는 자연어가 아니라 컴퓨터가 이해할 수 있는 언어, 즉 기계어로 명령을 전달해야합니다.
사람이 이해할 수 있는 약속된 구문으로 구성된 프로그래밍 언어를 사용해 프로그램을 작성한 후, 
그것을 컴퓨터가 이해할 수 있는 기계어로 변환하는 일종의 번역기를 이용하는 것이다.
이 일종의 번역기를 컴파일러(compiler) 혹은 인터프리터(interpreter) 라고 한다.

<br/><br/>
## 자바스크립트 특징
자바스크립트는 HTML, CSS와 함께 웹을 구성하는 요소 중 하나로 웹 브라우저에서 동작하는 유일한 프로그래밍 언어다.

자바스크립트는 개발자가 별도의 컴파일 작업을 수행하지 않는 인터프리터 언어이다. 인터프리터는 소스코드를 즉시 실행하고 컴파일러는 빠르게 동작하는 머신 코드를 생성하고 최적화한다. 이를 통해 컴파일 단계에서 추가적인 시간이 필요함에도 더욱 빠르게 코드를 실행할 수 있다.

자바스크립트는 런타임에 컴파일되며 실행 파일이 생성되지 않고 인터프리터의 도움 없이 실행할 수 없기 때문에 컴파일러 언어라고 할 수는 없다.
<br/><br/>

## 변수
### 변수란?
변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름이다.
<br/><br/>

### 식별자란?
변수의 이름을 식별자라고도 한다. 식별자는 어떤 값을 구별해서 식별할 수 있는 고유한 이름을 말한다. 식별자는 값이 아니라 메모리 주소를 기억하고 있다.
또한 식별자라는 용어는 변수 이름에만 국한해서 사용하지 않는다. 예를 들어서 변수, 함수, 클래스 등의 이름은 모두 식별자다.
즉, 메모리 상에 존재하는 어떤 값을 식별할 수 있는 이름은 모두 식별자라고 부른다.
<br/><br/>

### var 키워드
var 키워드는 뒤에 오는 변수 이름을 새로운 변수를 선언할 것을 지시하는 키워드이다. 자바스크립트 엔진은 var 키워드를 만나면 뒤에 오는 변수 이름으로 새로운 변수를 선언한다.

변수를 선언한 이후, 아직 변수에 값을 할당하지 않았다. 따라서 변수 선언에 의해 확보된 메모리 공간은 비어 있을 것으로 생각할 수 있으나 확보된 메모리 공간에는 자바스크립트 엔진에 의해 undefined라는 값이 암묵적으로 할당되어 초기화된다. 이것이 자바스크립트의 독특한 특징이다.

- var 키워드 특징
1. 변수 중복 선언 가능
2. 함수 레벨 스코프
3. 변수 호이스팅
<br/><br/>

### 호이스팅
자바스크립트엔진은 모든 선언문이 소스코드의 어디에 있든 상관없이 다른 코드보다 먼저 실행한다. 

런타임 이전에 실행 컨텍스트에 의해 소스코드 평가 과정에서 스코프에 등록되고 이를 마치 코드의 제일 위에 있는 것처럼 변수가 어디에 위치하던지 상관없이 어디서든지 변수를 참조할 수 있는 것처럼 만드는 특징을 호이스팅이라고 합니다.

var, let, const, function, class 키워드를 사용해서 선언하는 모든 식별자는 호이스팅됩니다. 모든 선언문은 런타임 이전 단계에서 먼저 실행되기 때문이다.
<br/><br/>

### let 키워드와 var 키워드의 다른점
let 키워드는 var 키워드의 단점을 보완하기 위해 ES6에서 도입된 새로운 키워드

1.변수 중복 선언 금지

var 키워드로 이름이 동일한 변수를 중복 선언하면 아무런 에러가 발생하지 않는다. var 키워드로 변수를 중복 선언하면서 값까지 할당했다면 의도치 않게 먼저 선언된 변수 값이 재할당되어 변경되는 부작용이 발생한다. 

하지만 let 키워드로 이름이 같은 변수를 중복 선언하면 문법 에러(SyntaxError)가 발생한다.

```javascript
// let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않음
let foo = 123;
let foo = 456;  // SyntaxError: Identifier 'foo' has already been declared
```
2.블록 레벨 스코프

```javascript
let foo = 1; // 전역 변수

{
  let bar = 2; // 지역 변수
}

console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined

```
3.변수 호이스팅

var 키워드로 선언한 변수와 달리 let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.

var 키워드였다면 변수 호이스팅에 의해 런타임 이전에 변수가 선언되어 undefined를 출력해야 한다. 하지만 let 키워드에서는 참조에러가 나타난다.

let 키워드로 선언한 변수는 '선언 단계'와 '초기화 단계'가 분리되어 진행된다. 즉, 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 선언 단계가 먼저 실행되지만 초기화 단계는 변수 선언문에 도달했을 때 실행된다. 

만약 초기화 단계가 실행되기 이전에 변수에 접근하려고 하면 참조 에러가 발생한다.

let 키워드로 선언한 변수는 스코프의 시작 지점부터 초기화 단계 시작 지점(변수 선언문)까지 변수를 참조할 수 없다. 스코프의 시작 지점부터 초기화 시작 지점까지 변수를 참조할 수 없는 구간을 일시적 사각지대(TDZ: Temporal Dead Zone) 라 부른다.

4.전역 객체와 let

let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다. 즉, window.foo와 같이 접근할 수 없다.

```javascript
let x = 1;

// let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
console.log(window.x); // undefined
console.log(x); // 1
```
<br/><br/>

### const 키워드
const 키워드는 상수(constant)를 선언하기 위해 사용하지만, 반드시 상수만을 위해 사용하지는 않는다. const 키워드의 특징은 let과 대부분 동일하므로 let 키워드와 다른 점을 중심으로 살펴볼 필요가 있다.

1.선언과 초기화

const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다. 그렇지 않을 경우 문법 에러(SyntaxError)가 발생한다.

```javascript
const bar = 1;
console.log(bar); >>> 1

const foo;
console.log(foo); >>> // SyntaxError: Missing initializer in const declaration
```
2.재할당 금지

var 또는 let 키워드로 선언한 변수는 재할당이 자유로우나 const 키워드로 선언한 변수는 재할당이 금지된다.

```javascript
const foo = 1;
foo = 2; // TypeError: Assignment to constant variable.
```
3.상수

const 키워드로 선언한 변수에 원시 값을 할당한 경우 변수 값을 변경할 수 없다. 

원시 값은 변경 불가능한 값이므로 재할당 없이 값을 변경할 수 있는 방법이 없기 때문이다. 이러한 특징을 이용해 const 키워드를 상수를 표현하는 데 사용하기도 한다.

```javascript
// 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값이다.
// 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
const TAX_RATE = 0.1;

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE;

console.log(afterTaxPrice); // 110
```
<br/><br/>

### 식별자 네이밍 규칙
식별자는 특수문자를 제외한 문자, 숫자, 언더스코어(_), 달러 기호($)를 포함할 수 있다.

단 식별자는 특수문자를 제외한 문자, 언더스코어(_), 달러 기호로 시작해야 한다. 숫자로 시작하는 것은 허용하지 않는다.
<br/><br/>

### 네이밍 컨벤션

```javascript
// 카멜 케이스 (camelCase)
var firstName;

// 스네이크 케이스 (snake_case)
var first_name;

// 파스칼 케이스 (PascalCase)
var FirstName;

// 헝가리언 케이스 (typeHungarianCase)
var strFirstName; // type + identifier
var $elem = document.getElementById("myId"); // DOM 노드
var observable$ = fromEvent(document, "click"); // RxJS 옵저버블
```
<br/><br/>

### 리터럴이란?
리터럴(literal)은 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법을 말합니다.

자바스크립트 엔진은 코드가 실행되는 시점인 런타임에 리터럴을 평가해 값을 생성합니다.

<br/><br/>
## 데이터 타입
### 데이터 타입 종류
**구분**|**데이터 타입**|**설명**|
|:---:|:---:|:---:|
|원시 타입|숫자(number) 타입|숫자, 정수와 실수 구분 없이 하나의 숫자 타입만 존재|
|원시 타입|문자열(string) 타입|문자열|
|원시 타입|불리언(boolean) 타입|논리적 참(true)과 거짓(false)|
|원시 타입|undefined 타입|var 키워드로 선언된 변수에 암묵적으로 할당되는 값|
|원시 타입|null 타입|값이 없다는 것을 의도적으로 명시할 때 사용하는 값|
|원시 타입|심벌(symbol) 타입|ES6에서 추가된 7번째 타입|
|원시 타입|BigInt 타입|길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형|
|객체 타입| |객체, 함수, 배열 등|

### 심벌 타입
심벌은 ES6에서 추가된 타입으로, 변경 불가능한 원시 타입이다. 심벌 값은 다른 값과 중복되지 않는 유일 무이한 값이다.

주로 이름이 충동할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용함.
<br/><br/>

### 데이터 타입이 필요한 이유
1.값을 저장할 때 확보해야 하는 메모리 공간의 크기를 결정하기 위해

2.값을 참조할 때 한 번에 읽어 들여야 할 메모리 공간의 크기를 결정하기 위해

3.메모리에서 읽어 들인 2진수를 어떻게 해석할지 결정하기 위해
<br/><br/>

### 정적 타이핑
C나 자바 같은 정적 타입언어는 변수를 선언할 때 변수에 할당할 수 있는 값의 종류, 즉 데이터 타입을 사전에 선언해야 한다. 이를 명시적 타입 선언이라 한다.

정적 타입 언어는 변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당할 수 있다. 정적 타입 언어는 컴파일 시점에서 타입 체크를 수행한다. 만약 타입 체크를 통과하지 못했다면 에러를 발생시키고 프로그램의 실행 자체를 막는다. 대표적인 정적 타입 언어로 C, C++, 자바, 코틀린, 고, 러스트 등이 있다.
<br/><br/>

### 동적 타이핑
자바스크립트는 정적 타입 언어와 다르게 변수를 선언할 때 타입을 선언하지 않는다. 다만 var, let, const 키워들 사용해 변수를 선언할 뿐이다.

자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정 (타입 추론) 된다. 그리고 재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다. 이러한 특징을 동적 타이핑이라고 하며, 자바스크립트를 정적 타입 언어와 구별하기 위해 동적 타입 언어라고 한다. 대표적인 동적 타입 언어로는 자바스크립트, 파이썬, PHP 등이 있다.

```javascript
var foo;
console.log(typeof foo); // undefined

foo = 3;
console.log(typeof foo); // number

foo = null;
console.log(typeof foo); // object

foo = Symbol(); // 심벌
console.log(typeof foo); // symbol

foo = {}; // 객체
console.log(typeof foo); // object

foo = []; // 배열
console.log(typeof foo); // object

foo = function () {}; // 함수
console.log(typeof foo); // function
```
<br/><br/>

## 타입변환과 단축 평가
### 명시적 타입 변환
자바스크립트의 모든 값은 타입이 있다. 값의 타입은 개발자의 의도에 따라 다른 타입으로 변환할 수 있다. 개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환 또는 타입 캐스팅이라 한다.
```javascript
var x = 10;

// 숫자를 문자열로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10
```
<br/><br/>

### 암묵적 타입 변환
개발자의 의도와는 상관없이 표션식을 평가하는 도중에 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다. 이를 암묵적 타입 변환 또는 강제 타입 변환이라 한다.
```javascript
var x = 10;

// 문자열 연결 연산자 ( + )는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + "";
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10
```
<br/><br/>

### truthy / falsy 한 값
자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가되는 값) 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다. 즉, 제어문의 조건식과 같이 불리언 값으로 평가되어야 할 문맥에서 Truthy값은 true로, Falsy값은 false로 암묵적 타입 변환된다.

아래 값들은 false로 평가되는 Falsy 값이다.
```javascript
false
undefined
null
0, -0
NaN
' '(빈 문자열)
```
Falsy값에 ! 연산자를 붙이면, 모두 Truthy 값으로 평가되어 실행 가능해진다.

```javascript
// 아래의 조건문은 모두 코드 블록을 실행한다.
if (!false) console.log(false + " is falsy value");
if (!undefined) console.log(undefined + " is falsy value");
if (!null) console.log(null + " is falsy value");
if (!0) console.log(0 + " is falsy value");
if (!NaN) console.log(NaN + " is falsy value");
if (!"") console.log("" + " is falsy value");
```
<br/><br/>

## 배열
### 자바스크립트 배열은 자료구조의 배열과 같은가?
자료구조에서 말하는 배열은 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 자료구조를 말한다.

즉, 배열의 요소는 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있다. 이러한 배열은 밀집 배열(dense array)이라 한다.

자바스크립트의 배열은 지금까지 살펴본 자료구조에서 말하는 일반적인 의미의 배열과 다르다.

즉, 배열의 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되며, 연속적으로 이어져 있지 않을 수도 있다.

배열의 요소가 연속적으로 이어져 있지 않는 배열을 희소 배열(sparse array)이라 한다.

이처럼 자바스크립트의 배열(희소 배열)은 엄밀히 말해 일반적인 의미의 배열이 아니다. 자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체다.
<br/><br/>

### 배열의 메서드
- 원본 배열을 직접 변경하는 메서드
- 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드

원본 배열을 직접 변경하는 메서드는 외부 상태를 직접 변경하는 부수효과가 있으므로 사용할 때 주의해야 한다.

가급적 원본 배열을 직접 변경하지 않는 메서드를 사용하는 편이 좋다.

```
Array.isArray 🌟
Array.prototype.indexOf 🌟
Array.prototype.push (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.pop (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.unshift (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.shift (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.concat 🌟
Array.prototype.splice 🌟 (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.slice 🌟
Array.prototype.join 🌟 (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.reverse 🌟 (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.fill 🌟 (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.includes 🌟
```
<br/><br/>

### 고차 함수
고차 함수(Higher-Order Function, HOF)는 함수를 인수로 전달받거나 함수를 반환하는 함수를 말한다.

자바스크립트의 함수는 일급 객체이므로 함수를 값처럼 인수로 전달할 수 있으며 반환할 수도 있다.

고차 함수는 외부 상태의 변경이나 가변(mutable) 데이터를 피하고 불변성(immutability)을 지향하는 함수형 프로그래밍에 기반을 두고 있다.

함수형 프로그래밍은 순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임이다.

함수형 프로그래밍은 순수 함수를 통해 부수 효과를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이려는 노력의 일환이라고 할 수 있다.

대부분의 고차 함수들은 파라미터로 콜백 함수를 받아 사용되기 때문에 원본 배열을 바탕으로 하는 새로운 결과값을 창조하는데 사용된다

```
Array.prototype.sort (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.forEach
Array.prototype.map
Array.prototype.filter
Array.prototype.reduce
Array.prototype.some
Array.prototype.every
Array.prototype.find
```

forEach()
```javascript
// forEach 메서드는 콜백 함수를 호출하면서 3개(① 요소값 ② 인덱스 ③ this)의 인수를 전달한다.
[1, 2, 3].forEach((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${arr}`);
});

/*
요소값: 1, 인덱스: 0, this: [1,2,3]
요소값: 2, 인덱스: 1, this: [1,2,3]
요소값: 3, 인덱스: 2, this: [1,2,3]
*/
```

map()
```javascript
const numbers = [1, 4, 9];

// map 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
// 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다.
const roots = numbers.map((item) => Math.sqrt(item));

// 위 코드는 다음과 같다.
// const roots = numbers.map(Math.sqrt);

// map 메서드는 새로운 배열을 반환한다
console.log(roots); // [ 1, 2, 3 ]
// map 메서드는 원본 배열을 변경하지 않는다
console.log(numbers); // [ 1, 4, 9 ]
```

forEach 메서드와 map 메서드의 공통점은 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다는 것이다.

하지만 forEach 메서드는 언제나 undefined를 반환하고 map 메서드는 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다는 것이다.

즉 forEach 메서드는 단순히 반복문을 대체하기 위한 고차 함수이고 Map 메서드는 요소값을 다른 값으로 매핑한 새로운 배열을 생성하기 위한 고차 함수다.

map 메서드를 호출한 배열과 map 메서드가 생성하여 반환한 배열은 1:1 매핑한다.

forEach 메서드와 마찬가지로 map 메서드의 콜백 함수는 map 메서드를 호출한 배열의 요소값과 인덱스, map 메서드를 호출한 배열 자체, 즉 this를 순차적으로 받을 수 있다.

다시 말해, map 메서드를 호출한 배열의 요소값, 인덱스,호출한 배열 자기 자신(this)를 순차적으로 전달한다.
<br/><br/>

## 객체 리터럴
### 자바스크립트에서 객체란?
자바스크립트는 객체 기반의 프로그래밍 언어이며, 자바스크립트를 구성하는 거의 '모든 것'이 객체다. 원시 값을 제외한 나머지 값(함수, 배열, 정규 표현식 등)은 모두 객체이다. 원시 타입은 단 하나의 값만 나타내지만 객체 타입은 다양한 타입의 값(원시 값 또는 다른 객체)을 하나의 단위로 구성한 복합적인 자료구조이다. 또한 원시 타입의 값, 즉 원시 값은 변경 불가능한 값이지만 객체 타입의 값, 즉 객체는 변경 가능한 값이다.

객체는 0개 이상의 프로퍼티로 구성된 집합이며, 프로퍼티는 키(key)와 값(value)으로 구성된다.
``` javascript
var person = {
  name: "Seungheon",
  age: 33,
};
```
<br/><br/>

### 함수와 메서드의 차이점
자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있다. 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메서드(method)라 부른다. 객체 내부에서 객체의 프로퍼티(상태)를 참조하고 조작할 수 있는 동작을 메서드라 부른다.

즉, 메서드는 객체에 묶여 있는 함수를 의미한다.

```javascript
var person = {
  name: "Lee",
  age: 20,
  hello: function () {
    console.log("hello :" + this.name);
  },
};

console.log(person);
>>>
{ name: 'Lee', age: 20, hello: [Function: hello] }
```
<br/><br/>

### 자바스크립트 객체 생성 방법
자바스크립트는 '프로토타입 기반 객체지향 언어' 로서 '클래스 기반 객체지향 언어' 와는 달리 다양한 객체 생성 방법을 지원한다.

```
1.객체 리터럴
2.Object 생성자 함수
3.생성자 함수
4.Object.create 메서드
5.클래스(ES6)
```
<br/><br/>

### 전역 객체
- 전역 객체는 코드가 실행되기(런타임) 이전 단계에 자바스크립트 엔진에 의해 생성되는 특수한 객체다.
- 클라이언트 사이드 환경(브라우저)에서는 window, 서버 사이드 환경(Node.js)에서는 global 객체를 의미한다.
- 전역 객체는 표준 빌트인 객체(Object, String, Number, Function, Array...) 들과 환경에 따른 호스트 객체, 그리고 var 키워드로 선언한 전역 변수와 전역 함수를 프로퍼티로 갖늗다.
<br/><br/>

## 원시 값과 객체 비교
### 동적 타이핑 자바스크립트가 데이터 타입을 크게 2개로 나눈 이유
1. 원시 타입의 값, 즉 원시 값은 변경 불가능한 값(immutable value)이다. 이에 비해 객체(참조)타입의 값, 즉 객체는 변경 가능한 값(mutable value)이다.

2. 원시 값을 변수에 할당하면 변수(확보된 메모리 공간)에는 실제 값(100, 실제로는 2진수)이 저장된다. 이에 비해 객체를 변수에 할당하면 변수(확보된 메모리 공간)에는 참조 값(메모리 주소, 0x00000613)이 저장된다.

3. 원시 값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달된다. 이를 값에 의한 전달이라 한다. 이에 비해 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값(메모리 주소, 0x00000613)이 복사되어 전달된다. 이를 참조에 의한 전달이라 한다.
<br/><br/>

### 값에 의한 전달
변수에 원시 값을 갖는 변수를 할당하면 할당받는 변수(copy)에는 할당하는 변수(score)의 원시 값이 복사되어 전달된다. 이를 '값에 의한 전달' 이라 한다.
```javascript
var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy); // 80  80
console.log(score === copy); // true

// score 변수와 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값이다.
// 따라서 score 변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향도 주지 않는다.
score = 100;

console.log(score, copy); // 100  80
console.log(score === copy); // false
```
<br/><br/>

### 참조에 의한 전달
객체는 프로퍼티의 개수가 정해져 있지 않으며, 동적으로 추가되고 삭제할 수 있다. 또한 프로퍼티의 값에도 제약이 없다. 따라서 객체는 원시 값(문자열 2바이트*문자, 숫자 8바이트)과 같이 확보해야 할 메모리 공간의 크기를 사전에 정해 둘 수 없다. 이러한 객체의 가변성의 성질 때문에 객체를 할당한 변수가 기억하는 메모리 주소를 통해 메모리 공간에 접근하면 참조 값에 접근할 수 있다. 참조 값은 생성된 객체가 저장된 메모리 공간의 주소, 그 자체이다.
```javascript
var person = {
  name: "Lee",
};

// 참조값을 복사(얕은 복사)
var copy = person;
```
<br/><br/>

## 함수
### 자바스크립트 함수 정의 방법
1. 함수 선언문
2. 함수 표현식
3. Function 생성자 함수
4. 화살표 함수(ES6)
```javascript
case 1 :함수 선언문

function add(x,y){
  return x+y;
}

case 2: 함수 표현식
var add = function(x,y){
  return x + y;
}

case 3: Function 생성자 함수
var add = new Function('x','y', 'return x+y');

case 4: 화살표 함수(ES6)
var add = (x,y) => x+y;
```
<br/><br/>

### 함수 선언문과 함수 표현식의 차이점
```javascript
// 함수 참조
console.dir(add); // ƒ add(x, y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2, 5));
// 7 why? 함수 선언문은 표현식이 아닌 문으로, 런타임 이전에 js 엔진에 의해 실행된다.

console.log(sub(2, 5));
// TypeError: sub is not a function, why? 함수 표현식(표현식인 문)은 런타임에 값을 할당하기 때문에 sub는 현재 undefined로만 초기화된 상태이다.

// ① 함수 선언문
function add(x, y) {
  return x + y;
}

// ② 함수 표현식
var sub = function (x, y) {
  return x - y;
};
```
<br/><br/>

### 즉시 실행 함수
1. 함수 정의와 동시에 즉시 호출되는 함수를 즉시 실행 함수 (IIFE, Immediately Invoked Function Expression) 라고 한다. 즉시 실행 함수는 단 한 번만 호출되며 다시 호출할 수 없다.

```javascript
//익명 즉시 실행함수
(function () {
  var a = 3;
  var b = 5;
  return a * b;
})();
```

2. 즉시 실행 함수는 함수 이름이 없는 익명 함수를 사용하는 것이 일반적이다. 함수 이름이 있는 기명 즉시 실행 함수도 사용할 수 있다. 하지만 즉시 실행 함수를 다시 호출할 수는 없다.

```javascript
//기명 즉시 실행 함수
(function foo() {
  var a = 3;
  var b = 5;
  return a * b;
})();

foo(); //ReferenceError: foo is not defined
```

3. 즉시 실행 함수는 반드시 그룹 연산자 (...)로 감싸야 한다.

```javascript
function () {
 //SyntaxError: Function statements require a function name
...
}
```
<br/><br/>

## 스코프
### 스코프란?
스코프는 유효 범위라는 뜻으로, 식별자(변수)가 유효한 범위를 말합니다.

자바스크립트 엔진은 스코프를 통해 어떤 변수를 참조해야 할 것인지 결정한다. 따라서 스코프란 자바스크립트 엔진이 식별자를 검색할 때 사용하는 규칙이라고도 할 수 있다.
<br/><br/>

### 스코프 종류
스코프는 크게 전역 스코프와 지역 스코프로 구분됩니다.

이는 상대적인 개념이며 전역이란 코드의 가장 바깥 영역을 말합니다. 전역에 변수를 선언하면 전역 스코프를 갖는 전역 변수가 됩니다. 이 전역 변수는 어디서든 참조할 수 있습니다.

지역이란 함수 몸체 내부를 말합니다. 지역은 지역 스코프를 만드는데, 지역에 변수를 선언하면 지역 스코프를 갖는 지역 변수가 됩니다. 지역 변수는 자신의 스코프와 하위 지역 스코프에서 유효합니다.
<br/><br/>

### 렉시컬 스코프
함수를 어디서 '호출' 했는지가 아닌 어디서 '정의' 했는지에 따라 함수의 상위 스코프를 결정하는 것이 정적 스코프 즉, 렉시컬 스코프를 의미합니다.

```javascript
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?
```
소스코드의 실행에 있어서 foo 함수 내부에서 bar 함수를 '호출' 하더라도, bar 함수는 foo 함수와 동일한 스코프인 전역 스코프에 '정의'되어 있기 때문에 foo 함수 내부의 x=10을 참조할 수 없습니다.

따라서 foo, bar의 호출한 결과는 모두 1로 반환됩니다. 이러한 자바스크립트의 정적인 스코프 특징을 '렉시컬 스코프', '정적 스코프' 라고 부릅니다.
<br/><br/>

### 전역 변수로 변수를 선언하면 생기는 문제점
1. 암묵적 결합
2. 변수의 긴 생명주기
3. 스코프 체인 상에서종점에 존재
4. 네임스페이스 오염

① 전역 변수를 선언한 의도는 전역, 즉 코드 어디서든 참조하고 할당할 수 있는 변수를 사용하겠다는 것이다. 이는 모든 코드가 전역 변수를 참조하고 변경할 수 있는 암묵적 결합을 허용하는 것이다. 변수의 유효 범위(스코프)가 클수록 코드의 가독성은 나빠지고 의도치 않게 상태가 변경될 수 있는 위험성도 높아진다.

② 전역 변수는 생명 주기가 길다. 따라서 메모리 리소스도 오랜 기간 소비한다. 또한 전역 변수의 상태를 변경할 수 있는 시간도 길고 기회도 많다. 변수 이름이 중복되기라도 한다면 의도치 않은 재할당이 이뤄지기도 한다.

③ 전역 변수는 스코프 체인 상에서 종점에 존재한다. 이는 변수를 검색할 때 전역 변수가 가장 마지막에 검색된다는 것을 말한다. 즉, 전역 변수의 검색 속도가 가장 느리다. 검색 속도의 차이는 그다지 크지 않지만 속도의 차이는 분명히 있다.

④ 자바스크립트의 가장 큰 문제점 중 하나는 파일이 분리되어 있다 해도 하나의 전역 스코프를 공유한다는 것이다. 따라서 다른 파일 내에서 동일한 이름으로 명명된 전역 변수나 전역 함수가 같은 스코프 내에 존재할 경우 예상치 못한 결과를 가져올 수 있다.
<br/><br/>

## 생성자 함수에 의함 객체 생성
### 생성자 함수란?
생성자 함수란 new 연산자와 함께 호출하여 객체를 생성하는 함수를 말한다. 생성자 함수에 의해 생성된 객체를 인스턴스라고 한다.

자바스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date, RegExp, Promise 등의 빌트인 생성자 함수를 제공한다.

생성자 함수는 객체를 생성하기 위해 사용되므로, 반드시 Object 생성자 함수를 사용해 객체를 생성해야 하는 것은 아니다. (객체 리터럴을 통해서도 만들 수 있기 때문)
<br/><br/>

### 생성자 함수를 사용하는 이유
객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성하기 때문에 같은 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 비효율적이다.

생성자 함수를 통해 객체를 생성한다면 마치 객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

```javascript
// 생성자 함수 (일반 함수와 동일한 방식으로 만들어지는 선언문이다)

function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius; // ex) circle1의 radius에 radius(5)를 할당해줘
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스의 생성
const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
```
<br/><br/>

### 생성자 함수가 객체(인스턴스) 생성하는 과정
1. 생성자 함수 선언
2. 인스턴스 생성
3. 인스턴스 초기화
4. 인스턴스 반환

```javascript
// 1. 생성자 함수 선언
function Circle(radius) {
  // 3. 인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  // 4. 인스턴스 생성시에 생성자 함수를 호출할 때 넣은 인수를 this 바인딩을 통해 프로퍼티에 할당한 뒤, 인스턴스를 반환한다
}
// 2. 인스턴스 생성
const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
```
<br/><br/>

## 함수와 일급 객체
### 일급 객체란?
다음과 같은 조건을 만족하는 객체 를 일급 객체 라 한다.

1. 무명의 리터럴로 생성할 수 있다. (함수 이름 없이)
2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
3. 함수의 매개변수에 전달할 수 있다.
4. 함수의 반환 값으로 사용할 수 있다.

```javascript
// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const predicates = { increase, decrease };

console.log(predicates); // predicates:  { increase: [Function: increase], decrease: [Function: decrease] }

// 3. 함수의 매개변수에게 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
  let num = 0;

  return function () {
    num = predicate(num);
    return num;
  };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
```
<br/><br/>

### 일급 객체로 할 수 있는일
일급 객체로서 함수가 가지는 가장 큰 특징은 일반 객체와 같이 함수의 매개변수에 전달할 수 있으며, 함수의 반환값으로 사용할 수도 있다는 것이다. 이는 함수형 프로그래밍을 가능케 하는 자바스크립트의 장점 중 하나이다.
<br/><br/>

### 함수형 프로그래밍?
외부 상태를 변경하지 않고 외부 상태에 의존하지도 않는 함수를 순수 함수 라 한다. 순수 함수를 통해 부수효과를 최대한 억제하여 오류를 피하고 프로그램의 안전성을 높이려는 프로그래밍 패러다임 을 함수형 프로그래밍 이라 한다.
<br/><br/>

### 순수 함수와 일반 함수의 차이
- 순수 함수: 어떤 외부 상태에 의존하지도 않고 변경하지도 않는, 즉 부수 효과가 없는 함수를 순수 함수라 한다.
- 비순수 함수: 외부 상태에 의존하거나 외부 상태를 변경하는, 즉 부수 효과가 있는 함수를 비순수 함수라고 한다.
<br/><br/>

## 프로토 타입
### 객체지향 프로그래밍?
객체지향 프로그래밍은 프로그램을 명령어 또는 함수의 목록으로 보는 전통적인 명령형 프로그래밍의 절차지향적 관점에서 벗어나

여러 개의 독립적 단위, 즉 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 말한다.
<br/><br/>

### 객체지향 프로그래밍 특징
1.추상화 (Abstraciton)
- 객체를 구성할 수 있는 다양한 속성(프로퍼티) 중에서 프로그램에 필요한 속성만 간추려 내어 표현하는 것을 추상화라 한다.
2.캡슐화 (Encapsulation)
- 데이터 구조와 데이터를 다루는 방법들을 목적에 따라 결합 시켜 묶는 것. 다시 한번 말하자면 변수와 함수를 하나로 묶는것을 말한다.
- 또한 데이터를 절대로 외부에서 직접 접근을 하면 안되고 오로지 함수를 통해서만 접근해야하는데 이를 가능하게 해주는 것이 바로 캡슐화이다.
3.상속 (Inheritance)
- 상위 개념의 특징을 하위 개념이 물려받는 것
4.다형성 (Polymorphism)
- 부모클레스에서 물려받은 가상 함수를 자식 클래스 내에서 오버라이딩 되어 사용되는 것
<br/><br/>

### 자바스크립트는 객체지향 프로그래밍 언어인가?
자바스크립트는 객체지향 프로그래밍 뿐만 아니라 명령형, 함수형 프로그래밍을 지원하는 멀티 패러다임 프로그래밍 언어입니다.

클래스 기반 객체지향 프로그래밍 언어와 달리 프로토타입 기반의 객체지향 프로그래밍입니다.
<br/><br/>

### 프로토 타입이란?
프로토타입은 상속을 구현하기 위해 사용됩니다. 쉬운 예시로 붕어빵을 만들기 위한 붕어빵 틀이라고 생각하면 좋습니다.

기본적인 틀(프로토타입)에 우리가 원하는 앙금(인스턴스를 만들 때 생성자 함수에 들어갈 인수)을 넣어 기존에 만들어 놓은 프로퍼티에 바인딩하여 인스턴스(붕어빵)을 반환합니다.

JavaScript에서 기본 데이터 타입을 제외한 모든 것은 객체입니다. 객체가 만들어지기 위해서는 자신을 만드는 데 사용된 원형인 프로토타입 객체를 이용하여 객체를 만듭니다.

이때 만들어진 객체 안에 __proto__ 속성이 자신을 만들어낸 원형을 의미하는 프로토타입 객체를 참조하는 숨겨진 링크가 있습니다. 이 숨겨진 링크를 프로토타입이라고 합니다.
<br/><br/>

## strict mode
오타나 문법 지식의 미비로 인한 실수를 줄여 안정적인 코드를 생산하기 위해 ES5에 추가된 모드
stric mode는 자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시킨다.
<br/><br/>

### strict mode로 예방할 수 있는 것
1. 암묵적 전역
2. 변수, 함수, 매개변수의 삭제
3. 매개변수 이름의 중복
<br/><br/>

## 빌트인객체
개발자가 모든 기능을 구현하지 않고 편하게 개발할 수 있도록 자바스크립트에서 기본적으로 제공하는 객체
Object, String, Number, Boolean, Symbol, Date, Math, RegExp, Array, Map/Set, WeakMap/WeakSet, Function, Promise, Reflect, Proxy, JSON, Error 등 40여개 표준 빌트인 객체가 있다.
<br/><br/>

### 빌트인 객체 종류
빌트인 객체는 크게 생성자 함수 객체와 그 외 객체로 구분할 수 있다.

Math, Reflect, JSON을 제외한 표준 빌트인 객체는 모두 생성자 함수 객체이다.
생성자 함수 객체는 프로토타입 메서드와 정적 메서드, 그 외 객체는 정적 메서드만 제공한다.

자바스크립트에서 객체는 크게 3개의 객체로 분류할 수 있다.

1. 표준 빌트인 객체
앞서 설명한 자바스크립트에서 기본적으로 제공하는 객체 중 ECMAScript 사양에 정의된 표준 객체. 애플리케이션 전역의 공통 기능을 제공합니다
표준 빌트인 객체는 전역 객체의 프로퍼티로서 제공됩니다. 따라서 별도의 선언 없이 전역 변수처럼 언제나 참조할 수 있다
new 연산자를 사용하여 표준 빌트인 객체와 결합하여 선언하면, 생성된 인스턴스로 하여금 해당 함수에 내장된(빌트인 된) 프로토타입 메서드들을 이용할 수 있다.

2. 호스트 객체
ECMAScript 사양에 정의되어 있지 않지만 자바스크립트 실행 환경(브라우저 또는 Node.js 환경)에서 추가로 제공하는 객체를 말한다
브라우저 환경에서는 DOM, BOM, CANVAS, XMLHttpRequest, fetch, Web Storage, Web Component와 같은 클라이언트 사이드 Web API를 호스트 객체로 제공합니다

3. 사용자 정의 객체
사용자 정의 객체는 표준 빌트인 객체와 호스트 객체처럼 기본 제공되는 객체가 아닌 사용자가 직접 정의한 객체를 말한다.
<br/><br/>

### 래퍼 객체
래퍼 객체는 원시 타입을 마치 객체 타입처럼 사용하는 과정 속에서 생기는 임시 객체이다. 원시 타입인 String, Number, Boolean으로 특정된다.

원시값인 문자열, 숫자, 불리언 값의 경우 이들 원시값에 대해 마치 객체처럼 마침표 표기법(.)으로 접근하면 자바스크립트 엔진이 일시적으로 원시값을 연관된 객체로 변환해 준다.

원시값을 객체처럼 사용하면 자바스크립트 엔진은 암묵적으로 연관된 객체를 생성하여 생성된 객체로 프로퍼티에 접근하거나 메서드를 호출하고 다시 원시값으로 되돌린다.
<br/><br/>

## this
this는 자신이속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수이다.
this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
this는 자바스크립트엔진에 의해 암묵적으로 생성되며, 코드 어디서든 참조 가능
this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정됨
<br/><br/>

### this 바인딩?
바인딩이란 식별자(변수)와 값(원시 값 또는 객체)을 연결하는 과정을 의미한다.
예를들면, 변수 선언은 변수 이름(식별자)과 확보된 메모리 공간의 주소를 바인딩하는 것이다.
this 바인딩은 this(키워드로 분류되지만 식별자 역할을 함) 와 this가 가리킬 객체를 바인딩하는 것이다.

**함수 호출 방식**|**this 바인딩**|
|:---:|:---:|
|일반 함수 호출|전역 객체(window/global)|
|콜백 함수 호출|전역 객체(window/global)|
|내부 함수 호출|전역 객체(window/global)|
|메서드 호출|메서드를 호출한 객체|
|생성자 함수 호출|생성자 함수가 미래에 생성할 인수턴스|
|Function.prototype.apply/call/bind 메서드에 의한 간접 호출	|Function.prototype.apply/call/bind 메서드에 첫 번째 인수로 전달한 객체|
<br/><br/>

## 실행 컨택스트
실행 컨택스트는 소스코드를 실행하는데 필요한 환경을 제공하고 코드의 실행 결과를 관리하는 영역이다.

식별자(변수, 함수, 클래스 등의 이름)를 등록하고 관리하는 스코프와 코드 실행 순서 관리를 구현한 내부 메커니즘으로, 모든 코드는 실행 컨텍스트를 통해 실행되고 관리된다.

실행 컨텍스트는 실행 컨텍스트 스택과 렉시컬 환경으로 구성되어 있다.
1. 실행 컨택스트 스택은 코드의 실행 순서를 관리하는 자료구조로, LIFO(Last In First Out) 구조로 들어오는 코드를 관리함
2. 렉시컬 환경은 모든 식별자와 바인딩된 값, 스코프를 기록 및 관리하는 자료구조이다.
3. 렉시컬 환경은 키와 값을 갖는 객체 형태의 스코프(전역,함수,블록 스코프)를 생성하여 식별자를 키로 등록하고 식별자에 바인딩된 값을 관리한다.
<br/><br/>

## 클로저
클로저는 자신이 선언될 당시의 환경을 기억하는 함수
클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.
해당 함수의 생명 주기가 종료되더라도 함수의 반환된 값이 변수에 의해 아직 참조되고 있다면 생명 주기가 종료되더라도 (실행 컨텍스트 스택에서 푸시되더라도) 렉시컬 환경에 남아 참조가 가능하다.
<br/><br/>

### 클로저를 사용할때 좋은점
클로저는 상태(state)를 안전하게 변경하고 유지하기 위해 사용한다.
상태가 의도치 않게 변경되지 않도록 상태를 안전하게 은닉하고 특정 함수에게만 상태변경을 허용하기 위해 사용한다.
<br/><br/>

### 클로저 생성하는 법
1. 내부(중첩) 함수가 익명 함수로 되어 외부 함수의 반환값으로 사용될 때
2. 내부(중첩) 함수가 외부 함수의 스코프에서 실행될 때
3. 내부 함수에서 사용되는 변수가 외부 함수의 변수 스코프에 포함되어 있을때

```javascript
var name = `Global`;
function outer() {
  var name = `closure`;
  return function inner() {
    console.log(name);
  };
}

var callFunc = outer();
callFunc();

```

위 코드에서 callFunc를 클로저라고 한다. callFunc 호출에 의해 name이라는 값이 console에 찍히는데, 찍히는 값은 Global이 아니라 closure라는 값이다. outer 함수의 context에 속해있는 변수를 참조하는 것이다. 여기서 outer 함수의 지역변수로존재하는 name 변수를 free variable(자유 변수) 라고 한다.

이처럼 외부 함수 호출이 종료되더라도 외부 함수의 지역 변수 및 변수 스코프 객체의 체인 관계를 유지할 수 있는 구조를 클로저라고 한다.

## 클래스
자바스크립트는 프로토타입 기반 객체지향 언어이고, 클래스가 필요 없는 객체지향 프로그래밍 언어이다.

생성자 함수와 프로토타입을 통해서 객체지향 언어의 상속을 구현할 수 있다.

``` javascript
// ES5 생성자 함수
function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHi = function () {
  console.log("Hi! My name is " + this.name);
};

// 인스턴스 생성
var me = new Person("Lee");
me.sayHi(); // Hi! My name is Lee
```

E자바스크립트에서는 프로토타입 기반의 객체지향 프로그래밍을 기반으로 설계되었지만,
이에 어려움을 느끼는 객체지향 프로그래밍에 익숙한 프로그래머들을 위해 ES6부터 클래스 개념을 도입하였다.

### 생성자 함수와 클래스 차이점
1. 클래스를 new 연산자 없이 호출하면 에러가 발생 하지만 생성자 함수는 일반 함수로 호출가능
2. 클래스는 상속을 지원하는 extends와 super 키워드 제공 생성자 함수는 해당 키워드 제공안함
3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작하지만 함수 선언문으로 작성된 클래스는 함수 호이스팅이, 함수 표현식으로 정의한 생성자 함수는 변수 호이스팅이 발생함
4. 클래스 내의 모든 코드에는 암묵적으로 strict mode가 저장되어 실행되며 strict mode를 해제할수 없음. 생성자 함수는 암묵적으로 strict mode가 지정되지 않는다.
5. 클래스의 constructor, 프로토타입 메서드, 정적 메서드는 모두 프로퍼티 어트리뷰트 값이 false인 열거가 되지 않는 값이다.

### 클래스 정의
``` javascript
// 클래스 선언문
class Person {}

// 함수 선언문으로 작성시, 함수 호이스팅이
// 함수 표현식으로 작성시, 변수 호이스팅이 발생한다.
```

### 익명 함수와 기명 함수로 클래스 정의
``` javascript
// 익명 클래스 표현식
const Person = class {};

// 기명 클래스 표현식
const Person = class MyClass {};
```

### 클래스 몸체에 정의할 수 있는 메서드
1. 생성자
2. 프로토타입 메서드
3. 정적 메서드

``` javascript
class Person {
  // constructor: 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public하다.
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  // 정적 메서드 (static을 붙여 정의한다)
  static sayHello() {
    console.log("Hello!");
  }
}

// 인스턴스 생성
const me = new Person("Lee");

// ① 인스턴스의 프로퍼티 참조
console.log(me.name); // Lee
// ② 프로토타입 메서드 호출
me.sayHi(); // Hi! My name is Lee
// ③ 정적 메서드 호출 (호출 시에 인스턴스가 아닌 클래스의 메서드로 동작한다.)
Person.sayHello(); // Hello!
```

### 정적 메서드와 프로토타입 메서드 차이
1. 정적 메서드와 프로토타입 메서드는 자신이 속해 있는 프로토타입 체인이 다르다.
2. 정적 메서드는 클래스로 호출 프로토타입 메서드는 인스턴스로 호출
3. 정적 메서드는 인스턴스를 프로퍼티로 찹조할 수 없지만 프로토타입 메서드는 인스턴스를 프로퍼티로 참조할 수 있다.

### 클래스의 상속
1. 상속에 의한 클래스 확장은 기존 클래스를 상속받아 새로운 클래스를 확장(extends) 하여 정의하는 것
2. 프로토 타입 기반 상속은 프로토타입 체인을 통해 다른 객체의 자산을 상속받는 개념

클래스 확장
``` javascript
class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }

  eat() {
    return "eat";
  }

  move() {
    return "move";
  }
}

// 상속을 통해 Animal 클래스를 확장한 Bird 클래스
class Bird extends Animal {
  fly() {
    return "fly";
  }
}

const bird = new Bird(1, 5);

console.log(bird); // Bird {age: 1, weight: 5}
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true (프로토타입 체인으로 얽혀있기 때문에)
console.log(bird instanceof Object); // true (스코프의 최 상위에는 Object가 있다)

console.log(bird.eat()); // eat
console.log(bird.move()); // move
console.log(bird.fly()); // fly
```

### super 키워드
super 키워드는 함수처럼 호출할 수도 있고 this와 같이 식별자처럼 참조할 수 있는 특수한 키워드다.

1. super를 호출하면 수퍼클래스의 constructor(super-constructor)를 호출함
2. super를 참조하면 수퍼클래스의 메서드를 호출가능

### super 호출
``` javascript
// 수퍼클래스
class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// 서브클래스
class Derived extends Base {
  constructor(a, b, c) {
    super(a, b); // 수퍼클래스에 정의한 프로퍼티(a,b)를 그대로 사용하겠다는 의미
    this.c = c;
  }
}

const derived = new Derived(1, 2, 3);
console.log(derived); // Derived {a: 1, b: 2, c: 3}
```

### super 참조
``` javascript
// 수퍼클래스
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

// 서브클래스
class Derived extends Base {
  sayHi() {
    // super.sayHi는 수퍼클래스의 프로토타입 메서드를 가리킨다.
    return `${super.sayHi()}. how are you doing?`;
  }
}

const derived = new Derived("Lee");
console.log(derived.sayHi()); // Hi! Lee. how are you doing?
```

### 추상화
추상화는 다양한 속성 중에서 프로그램에 필요한 속성만 간추려 내어 표현하는 것이다.

``` javascript
// 수퍼클래스
class Rectangle {
  constructor(width, height) {
    // constructor
    this.width = width;
    this.height = height;
  }

  // 프로토타입 메서드
  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `width = ${this.width}, height = ${this.height}`;
  }
}

// 서브클래스
class ColorRectangle extends Rectangle {
  // extends 키워드를 통해 수퍼클래스를 상속받음
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }

  // 메서드 오버라이딩
  toString() {
    return super.toString() + `, color = ${this.color}`;
  }
}

const colorRectangle = new ColorRectangle(2, 4, "red");
console.log(colorRectangle); // ColorRectangle {width: 2, height: 4, color: "red"}

// 상속을 통해 getArea 메서드를 호출
console.log(colorRectangle.getArea()); // 8
// 오버라이딩된 toString 메서드를 호출
console.log(colorRectangle.toString()); // width = 2, height = 4, color = red
```

위 코드의 흐름은 다음과 같다

서브클래스의 super 호출
수퍼클래스의 인스턴스 생성과 this 바인딩
수퍼클래스의 인스턴스 초기화
서브클래스 constructor로의 복귀와 this 바인딩
서브클래스의 인스턴스 초기화
인스턴스 반환

### 오버라이딩
상위(super) 클래스가 가지고 있는 메서드를 하위(sub) 클래스가 재정의하여 사용하는 방식

### 오버로딩
함수의 이름은 동일하지만 매개변수의 타입 또는 개수가 다른 메서드를 구현하고 매개변수에 의해 메서드를 구별하여 호출하는 방식이다.
자바스크립트는 오버로딩을 지원하지 않지만 arguments 객체를 사용하여 구현할 수는 있다.

## 스프레드 문법

### 스프레드 문법이란?
ES6에서 도입된 스프레드 문법은 하나로 뭉쳐 있는 여러 값들의 집합을 펼쳐서(전개, 분산하여) 개별적인 값들의 목록으로 만든다. (배열 상태가 아닌 개별적인 값들의 목록 상태이다)
``` javascript
let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["js", "react"];
let lang = ["korean", "english"];

console.log("before user: ", user);

user = {
  ...user,
  ...info,
  skills: [...fe, ...lang],
};

console.log("after user: ", user);

/*
before user:  { name: 'Mike' }
after user:  {
  name: 'Mike',
  age: 30,
  skills: [ 'js', 'react', 'korean', 'english' ]
}
*/
```

### 스프레드 문법 사용할 수 있는 대상
1. Array
2. String
3. Map
4. Set
5. DOM 컬렉션
6. arguments와 같이 for of 문으로 순회할 수 있는 이터러블

``` javascript
// ...[1, 2, 3]은 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
console.log(...[1, 2, 3]); // 1 2 3

// 문자열은 이터러블이다.
console.log(..."Hello"); // H e l l o

/* 이터러블이 아닌 일반 객체는 스프레드 문법의 대상이 될 수 없다. */
console.log(...{ a: 1, b: 2 });
// TypeError: Found non-callable @@iterator
```

위 같은 대상에 대해 3가지 상황에서 사용 가능
1.함수 호출문의 인수 목록에서 사용하는 경우
- 요소들의 집합인 배열을 펼쳐서 개별적인 값들의 목록으로 만든 후, 이를 함수의 인수 목록으로 전달해야 하는 경우 유용함
```javascript
const arr = [1, 2, 3];

// 배열 arr의 요소 중에서 최대값을 구하기 위해 Math.max를 사용한다.
const max = Math.max(arr); // -> NaN

const max = Math.max(...arr); // -> 3
```

2.배열 리터럴 내무에서 사용하는 경우
- 스프레드 문법을 배열 리터럴에 사용하면 ES5에서 사용하던 기존의 방식보다 더욱 간결하고 가독성 좋게 표현 가능
```javascript
// ES5
var arr = [1, 2].concat([3, 4]);
console.log(arr); // [1, 2, 3, 4]

// ES6
const arr = [...[1, 2], ...[3, 4]];
console.log(arr); // [1, 2, 3, 4]
```
3.객체 리터럴 내부에서 사용하는 경우
- Rset 프로퍼티와 함께 스프레드 프로퍼티를 사용하면 객체 리터럴의 프로퍼티 목록에서도 스프레드 문법을 사용가능
``` javascript
// 스프레드 프로퍼티
// 객체 복사(얕은 복사)
const obj = { x: 1, y: 2 };
const copy = { ...obj };
console.log(copy); // { x: 1, y: 2 }
console.log(obj === copy); // false

// 객체 병합
const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(merged); // { x: 1, y: 2, a: 3, b: 4 }
```

## 구조 분해 할당
구조화된 배열과 같은 이터러블 또는 객체를 비구조화, 구조 파괴해서 1개 이상의 변수에 개별적으로 할당하는 것을 말합니다. 배열과 같은 이터러블 또는 객체 리터럴에서 필요한 값만 추출하여 변수에 할당할 때 유용합니다.

### 구조 분해 할당의 종류
1. 배열 구조분해 할당
ES6의 배열 구조 분해 할당은 배열의 각 요소를 배열로 추출하여 1개 이상의 변수에 할당합니다.
이때 배열 구조분해 할당의 대상은 이터러블(순회 가능한 상태)여야  하며, 할당 기준은 배열의 인덱스가 됩니다.

``` javascript
const arr = [1, 2, 3];

const [one, two, three] = arr;
/*
다음과 같습니다

const one = arr[0]
const two = arr[1]
const three = arr[2]

const [one, two, three] = [1,2,3]
*/

console.log(one, two, three); // 1 2 3
```
배열 디스트럭처링 할당은 배열과 같은 이터러블에서 필요한 요소만 추출하여 변수에 할당하고 싶을 때 유용

``` javascript
const str = "hello-world-2021";

console.log(str.split("-"));

const [one, two, three] = str.split("-");

console.log(one);
console.log(two);
console.log(three);
```
2. 객체 구조분해 할당

1. ES6의 객체 디스트럭처링 할당은 객체의 각 프로퍼티를 객체로부터 추출하여 1개 이상의 변수에 할당한다.
   이때 객체 디스트럭처링 할당의 대상은 객체여야 하며, 할당 기준은 프로퍼티 키다. (배열처럼 인덱스가 아님)
   순서는 의미가 없으며 선언된 변수 이름과 프로퍼티가 일치하면 할당된다.

``` javascript
var user = { age: 25, name: "junhee" };

var { age, name } = user;

/*
var { age: age, name: name} = user 와 같은 의미 (프로퍼티 축약 표현)
*/

console.log(age, name); // 25 junhee
```

2. 반드시 프로퍼티 키와 변수 이름이 같을 필요는 없다.
``` javascript
var user = { age: 25, name: "junhee" };

var { age: junheeAge, name: junheeName } = user;

/*
위 처럼 새롭게 이름을 지정한 경우 프로퍼티 키로 접근하면 에러가 발생한다
console.log(age, name); // ReferenceError: age is not defined
*/

console.log(junheeAge, junheeName); // 25 junhee

```

3. 객체 디스트럭처링 할당을 위한 변수에 기본값을 설정할 수 있다. 하지만 넘겨받는 값이 우선이다.
``` javascript
var user = { age: 25 };

var { age, name = "default" } = user;

console.log(age, name); // 25 default
```

4. 객체 디스트럭처링 할당은 객체를 인수로 전달받는 함수의 매개변수에도 사용할 수 있다.

``` javascript
case 1

function printTodo(todo) {
  console.log(
    `할일 ${todo.content}은 ${todo.completed ? "완료" : "비완료"} 상태입니다.`
  );
}

case 2

function printTodo({ content, completed }) {
  console.log(`할일 ${content}은 ${completed ? "완료" : "비완료"} 상태입니다.`);
}

printTodo({ id: 1, content: "HTML", completed: true });

```

5. 중첩 객체의 경우는 다음과 같이 사용합니다.

```javascript
const user = {
  name: "junhee",
  age: 25,
  address: {
    zipCode: 14063,
    city: "Anyang",
  },
};

const {
  address: { city },
} = user;

// const city = user.address.city 를 구조 분해 할당하였음

console.log(city); // Anyang

```

## 브라우저 렌더링 과정
1. 클라이언트에서 불러오고 싶은 파일을 서버에 요청한다.
- 주소창에 직접 입력하거나, 클릭을 통해 해당 웹 페이지에 접근한다.
- 클라이언트에서 요청한 URL를 DNS를 통해 IP 주소로 변환하고, 해당 IP를 가진 서버에 GET 요청을 보내게 된다.

2. 서버에서 응답으로 받은 HTML 데이터를 파싱한다. (바이트 > 문자 > 토큰 > 노드 > DOM)
- 서버에 존재하던 HTML 파일이 브라우저의 요청에 의해 응답됨
- 서버는 브라우저가 요청한 HTML 파일을 읽어 메모리에 저장 후 메모리에 저장된 바이트(2진수)를 인터넷을 경유하여 응답함
- 브라우저는 서버가 응답한 HTML 문서를 바이트(2진수) 형태로 응답받음
- 응답된 바이트 형태의 HTML 문서를 meta 태그의 charset 어트리뷰트에 의해 지정된 인코딩 방식을 기준으로 문자열로 변환함
- 문자열로 변환된 HTML 문서를 읽어 들여 문법적 의미를 갖는 코드의 최소 단위인 토큰(token)들로 분해함
- 각 토큰들을 객체로 변환하여 노드들을 생성 토큰의 내용에 따라 문서노드, 요소 노드, 어트리뷰트 노드, 텍스트 노드가 생성됨

3. HTML 마크업을 바탕으로 DOM 트리를 생성한다
- HTML 문서는 HTML 요소들의 집합으로 이루어지며 HTML 요소는 중첩 관계를 갖는다
- 이떄 HTML 요소 간에는 중첩 관계에 의해 부자(부모자식)관계가 형성된다
- 이러한 HTML 요소 간의 부자 관계를 반영하여 모든 노드들을 트리 자료구조로 구성한다.
- 이 노드들로 구성된 트리 자료구조를 DOM이라 부른다.

4. CSS 마크업을 바탕으로 CSSOM 트리를 생성한다 (바이트 > 문자 >토큰 > 노드 > CSSOM)
- HTML 데이터와 마찬가지로 파싱하여 CSSOM 트리 구조로 나타낸다

5. DOM트리와 CSSOM트리를 결합하여 렌더 트리를 형성한다
렌더링 엔진에 의해 문서의 처음부터 끝까지 해석이 완료되어 DOM트리와 CSSOM 트리가 완성된다면, 이 둘을 바탕으로 렌더 트리를 생성한다

6. 렌더 트리에서 레이아웃을 실행한다
- 렌더 트리를 기반으로 HTML 요소의 레이아웃(위치와 크기)를 계산합니다.

7. 개별 노드를 화면에 페인트한다
- 이후 레이아웃을 바탕으로 브라우저 화면에 픽셀을 렌더링하는 페인팅(painting)처리에 입력되면 렌더링이 완료되게 됩니다

### 브라우저의 렌더링 과정에 자바스크립트는 어떻게 동작하나요?
1. HTML/CSS 파싱 과정과 마찬가지로 렌더링 엔진은 HTML을 한 줄씩 순차적으로 파싱하며 DOM을 생성해 나가다가 자바스크립트 파일을 로드하는 <script> 태그나 자바스크립트 코드를 콘텐츠로 담은 <script> 태그를 만나면 DOM 생성을 일시 중단한다.

2. 그리고 <script> 태그의 src 어트리뷰트에 정의된 자바스크립트 파일을 서버에 요청하여 로드한 자바스크립트 파일이나 <script> 태그 내의 자바스크립트 코드를 파싱하기 위해 ② 자바스크립트 엔진에 제어권을 넘긴다. 이후 자바스크립트 파싱과 실행이 종료되면 ① 렌더링 엔진으로 다시 제어권을 넘겨 HTML 파싱이 중단된 지점부터 다시 HTML 파싱을 시작하여 DOM 생성을 재개한다.

3. 자바스크립트 파싱과 실행은 ① 브라우저 렌더링 엔진이 아닌 ② 자바스크립트 엔진이 처리한다. ② 자바스크립트 엔진은 자바스크립트 코드를 파싱하여 CPU가 이해할 수 있는 저수준 언어(low-level language)로 변환하고 실행하는 역할을 한다.

4. ② 자바스크립트 엔진은 자바스크립트를 해석하여 AST(Abstract Syntax Tree: 추상적 구문 트리)를 생성한다. 그리고 AST를 기반으로 인터프리터가 실행할 수 있는 중간 코드(intermediate code)인 바이트코드를 생성하여 실행한다.

5. 리플로우와 리페인트

- 만약 자바스크립트 코드에 DOM이나 CSSOM을 변경하는 DOM API가 사용된 경우 DOM이나 CSSOM이 변경된다.
- 이때 변경된 DOM과 CSSOM은 다시 렌더 트리로 결합되고 변경된 렌더 트리를 기반으로 레이아웃과 페인트 과정을 거쳐 브라우저의 화면에 다시 렌더링한다. 이를 리플로우(reflow), 리페인트(repaint)라 한다.

### 단어 정리
① 파싱

파싱(구문 분석)은 프로그래밍 언어의 문법에 맞게 작성된 텍스트 문서를 읽어 들여 실행하기 위해 텍스트 문서의 문자열을 토큰 단위로 분해하고, 토큰의 문법적 의미와 구조를 반영하여 트리 구조의 자료구조인 파스 트리를 생성하는 일련의 과정을 말한다.

② 렌더링

렌더링은 HTML, CSS, JS로 작성된 문서를 파싱하여 브라우저에 시각적으로 출력하는 것을 말한다.

③ 리소스

HTTP 요청 대상을 "리소스"라고 부르는데, 그에 대한 본질을 이 이상으로 정의할 수 없습니다.

그것은 문서, 사진 또는 다른 어떤 것이든 될 수 있습니다.

각 리소스는 리소스 식별을 위해 HTTP 전체에서 사용되는 Uniform Resource Identifier (URI)에 의해 식별됩니다.

④ DNS

DNS (Domain Name System)는 인터넷에 연결된 리소스를 위한 계층적이고 분산된 명명 시스템입니다. DNS는 도메인 이름 목록 과 연결된 리소스(예: IP 주소)를 유지 관리 합니다.

### script 태그를 body 태그 밑에 둬야하는 이유?
1. HTML을 읽는 과정에 스크립트를 만나면 중단 시점이 생기고 그만큼 Display에 표시되는 것이 지연됨
2. DOM 트리가 생성되기전에 자바스크립트가 생성되지도 않은 DOM의 조작을 시도할 수 있다.

### async/defer 어트리뷰트
동기적으로 코드를 실행하는 자바스크립트에서 이러한 근본적인 문제를 해결하기 위해 <script> 태그에 ① async ② defer 어트리뷰트가 추가되었다.

① async ② defer 어트리뷰트는 다음과 같이 src 어트리뷰트를 통해 외부 자바스크립트 파일을 로드하는 경우에만 사용할 수 있다. 위 코드처럼 <script> 태그 내부에 코드를 작성하는 경우에는 사용할 수 없다.

1. async
HTML 파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 동시에 진행된다. 단, 자바스크립트의 파싱과 실행은 자바스크립트의 파일의 로드가 완료된 직후 진행되며, 이때 HTML 파싱은 중단된다.
여러 개의 script 태그에 async 어트리뷰트를 지정하면 script 태그의 순서와는 상관없이 로드가 완료된 자바스크립트부터 먼저 실행되므로 순서가 보장되지 않는다.
![image](https://user-images.githubusercontent.com/78462110/233821156-dde8ff97-200c-4bfd-9923-961c01739987.png)


2. defer
async 어트리뷰트와 마찬가지로 HTML 파싱과 외부 자바스크립트 파일의 로드가 비동기적으로 동시에 진행된다. 단, 자바스크립트의 파싱과 실행은 HTML 파싱이 완료된 직후, 즉 DOM 생성이 완료된 직후 진행된다. 따라서 DOM 생성이 완료된 이후 실행되어야 할 자바스크립트에 유용하다.
![image](https://user-images.githubusercontent.com/78462110/233821213-8c7b20a1-e5ff-4e7d-92c0-907c6303b27d.png)

### script 내부에서 로딩 순서 제어 (DOMContentLoaded 와 onload)
DOMContentLoaded와 onload를 활용하면 javascript 자체에서 로딩 순서를 제어할 수도 있습니다.
DOMContentLoaded 내부의 코드는 DOM 생성이 끝난 후에 실행되고
onload 내부의 코드는 문서에 포함된 모든 콘텐츠(images, script, css, ...)가 전부 로드된 후에 실행됩니다.

``` javascript
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>DOMContentLoaded</title>
</head>
<body>
    <script>
    	// window.onload가 가장 앞에 위치!
        window.onload = function(){
            console.log("afterwindowload");
            var target = document.querySelector("#test");
            console.log(target);
        }
		// DOMContentLoaded가 두번째에 위치!
        document.addEventListener("DOMContentLoaded", function() {
            console.log("afterdomload");
            var target = document.querySelector('#test');
            console.log(target);
        });
		// 일반 script 코드가 가장 끝에 위치
        console.log("바로시작")
        var target = document.querySelector('#test');
        console.log(target);
    </script>
    <div id="test">test</div>
</body>
</html>
```
위 코드의 console 출력 결과는 일반 script > DOMContentLoaded 안의 코드 > window.onload 안의 코드 순으로 출력됩니다.

![image](https://user-images.githubusercontent.com/78462110/233821360-dbc19bf0-1501-4438-896e-b70e09358d33.png)

## DOM

### DOM 이란?
DOM은 HTMl 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조

### DOM 구성요소
HTML 요소는 렌더링 엔진에 의해 파싱되어 DOM을 구성하는 요소 노드 객체로 변환됨

이때 HTML 요소 어트리뷰트는 어트리뷰트 노드로, HTML 요소의 텍스트 콘텐츠는 텍스트 노드로 변환된다.

DOM은 노드 객체의 계층적인 구조로 구성된다. 노드 객체는 종류가 있고 상속 구조를 갖는다.

노드 객체는 총 12개의 종류(노드 타입)가 있다. 이 중에서 중요한 노드 타입은 다음과 같이 4가지이다.

1. 문서 노드

```<!DOCTYPE>```

문서 노드는 DOM 트리의 최상위에 존재하는 루트 노드로서 document 객체를 가리킨다.

document 객체는 브라우저가 렌더링한 HTML 문서 전체를 가리키는 객체로서 전역 객체 window의 document 프로퍼티에 바인딩되어 있다.

따라서 문서 노드는 window.documnet 또는 document로 참조할 수 있다.

브라우저 환경의 모든 자바스크립트 코드는 script 태그에 의해 분리되어 있어도 하나의 전역 객체 window를 공유한다.

따라서 window의 document 프로퍼티에 바인딩되어 있는 하나의 document 객체를 바라본다. 즉, HTML 문서당 document 객체는 유일하다.

2. 요소 노드
``` javascript
<html> <head> <meta> <link> <body> <ul> <li> <script>
```

요소 노드는 HTML 요소를 가리키는 객체이다. 요소 노드는 HTML 요소 간의 중첩에 의해 부자 관계를 가지며, 이 부자 관계를 통해 정보를 구조화한다.

3. 어트리뷰트 노드
``` javascript
charset="UTF"

rel="stylesheet"
...

id="apple"
```
어트리뷰트 노드는 HTML 요소의 어트리뷰트를 가리키는 객체다. 어트리뷰트 노드는 어트리뷰트가 지정된 HTML 요소의 요소 노드와 연결되어 있다.


4. 텍스트 노드
텍스트 노드는 HTML 요소와 텍스트를 가리키는 객체다. 요소 노드가 문서의 구조를 표현한다면 텍스트 노드는 문서의 정보를 표현한다고 할 수 있다.

## 이벤트

### 마우스 이벤트 타입
**이벤트 타입**|**이벤트 발생 시점**|
|:---:|:---:|
|click|마우스 버튼을 클릭|
|dbclcik|마우스 버튼 더블 클릭|
|mousedown|마우스 버튼 누르고 있을 때|
|mouseup|누르고 있던 마우스 버튼 뗄 때|
|mousemove|마우스 커서 움직일 때|
|mouseenter|마우스 커서를 HTML 요소 안으로 이동했을 때 (버블링 x)|
|mouseover|마우스 커서를 HTML 요소 안으로 이동했을 때 (버블링 o)|
|mouseleave|마우스 커서를 HTML 요소 밖으로 이동했을 때 (버블링 x)|
|mouseout|마우스 커서를 HTML 요소 밖으로 이동했을 때 (버블링 o)|

### 키보드 이벤트

### 포커스 이벤트

### 폼 이벤트

### 값 변경 이벤트

### DOM 뮤테이션 이벤트

### 뷰 이벤트

### 리소스 이벤트

### 이벤트 핸들러 등록 방식
1. 이벤트 핸들러 어트리뷰트 방식
``` javascript
<!DOCTYPE html>
<html>
  <body>
    <button onclick="sayHi('Lee')">Click me!</button>
    <script>
      function sayHi(name) {
        console.log(`Hi! ${name}.`);
      }
    </script>
  </body>
</html>
```

2. 이벤트 핸들러 프로퍼티 방식
```javascript
<!DOCTYPE html>
<html>
  <body>
    <button>Click me!</button>
    <script>
      const $button = document.querySelector("button");

      // 이벤트 핸들러 프로퍼티에 이벤트 핸들러를 바인딩 (익명 함수로 가능)
      $button.onclick = function () {
        console.log("button click");
      };
    </script>
  </body>
</html>
```

3. addEventListener 메서드 방식
``` javascript
<html>
  <body>
    <button>Click me!</button>
    <em></em>

    <script>
      const $button = document.querySelector("button");
      const $em = document.querySelector("em");

      $button.addEventListener("click", function () {
        $em.innerHTML = "Button Cliked 1";
      });
    </script>
  </body>
</html>

```

### 이벤트 전파(propagation)
DOM 트리상에 존재하는 모든 DOM 요소 노드에서 발생한 이벤트는 DOM 트리를 통해 전파됩니다. 이를 이벤트 전파라고합니다.

사용자의 다양한 입력을 통해 동적으로 생성되는 이벤트 객체는 이벤트를 발생시킨 타깃을 중심으로 DOM 트리를 통해 전파됩니다.

전파되는 방향에 따라 3단계로 구분
- 캡처링 단계 : 이벤트가 상위 요소에서 하위 요소 방향으로 전파
- 타깃 단계 : 이벤트가 이벤트 타깃에 도달
- 버블링 단계 : 이벤트가 하위 요소에서 상위 요소 방향으로 전파

![image](https://user-images.githubusercontent.com/78462110/233822604-1ce2d8ef-cc36-4b1f-86cd-601ba8789b77.png)

브라우저는 기본적으로 이벤트 버블링 단계에서 이벤트를 캐치합니다.

``` javascript
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <div>Click me</div>
  </body>
  <script>
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const div = document.querySelector("div");

    html.addEventListener("click", () => console.log("HTML"));
    body.addEventListener("click", () => console.log("BODY"));
    div.addEventListener("click", () => console.log("DIV"));
  </script>
</html>

>>>

DIV
BODY
HTML
```


![image](https://user-images.githubusercontent.com/78462110/233822713-5f81d0ea-0343-4a47-9e8d-0c6c8fa2aac7.png)

이벤트 캡처링 단계라면 HTML > BODY > DIV 순으로 상위노드에서 하위 노드로 내려오며 이벤트를 캐치할 것입니다.

하지만 브라우저는 기본적으로 이벤트 버블링 단계인 클릭하고자 한 이벤트 객체의 타깃인 <div> 에 도달한 후 해당 하위 노드에서 상위노드로 돌아가는 과정에서 이벤틀을 캐치하기 때문입니다.

물론 addEventListener 메서드의 세번째 인수(argument)로 옵션인 [, useCaputure] 자리에 boolean 값인 true를 넣어준다면, 캡처링 단계에서도 이벤트 객체를 캐치할 수 있습니다. (기본값은 false로, 버블링 단계에서 이벤트 객체를 캐치합니다.)

![image](https://user-images.githubusercontent.com/78462110/233822967-f0584afe-ce25-4d04-bf93-4c48f1fb6785.png)

``` javascript
html.addEventListener("click", () => console.log("HTML"), true);
body.addEventListener("click", () => console.log("BODY"), true);
div.addEventListener("click", () => console.log("DIV"));

>>>

HTML
BODY
DIV

```

### 이벤트 위임(delegation)
연속되는 태그에 대해서 공통적으로 이벤트를 줘야할 때 우리가 이벤트 핸들러를 바인딩할 해당 요소의 부모 요소에게 이를 위임하여 이벤트를 진행하는 것을 이벤트 위임이라 합니다.

``` javascript
<!DOCTYPE html>
<html>
  <head>
    <title>eventDelegation</title>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: sans-serif;
      }
      .btn-number {
        background-color: yellowgreen;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <button class="btn-number">1</button>
      <button class="btn-number">2</button>
      <button class="btn-number">3</button>
      <button class="btn-number">4</button>
      <button class="btn-number">5</button>
    </div>
    <script>
      const div = document.querySelector("div");

      div.addEventListener("click", (e) => {
        console.log(e.target.innerHTML);
      });
    </script>
  </body>
</html>

```
만약 공통되는 button 태그에 대해서 이벤트를 준다면, 버튼별 이벤트 onclick 또는 addEventListener 메서드를 사용하여 각 버튼에 해당되는 로직을 바인딩해줘야 합니다.

하지만 이벤트 위임을 통해 부모 요소에 이 작업을 위임하여 현재 클릭하는 타깃(e.target)에 대한 값을 출력할 수 있습니다.

### e.preventDefault
e.preventDefault 메서드는 요소 태그의 기본 동작을 중단합니다.

``` javascript
<!DOCTYPE html>
<html>
  <body>
    <a href="https://www.google.com">go</a>
    <input type="checkbox" />
    <script>
      document.querySelector("a").onclick = (e) => {
        // a 요소의 기본 동작을 중단한다.
        e.preventDefault();
      };

      document.querySelector("input[type=checkbox]").onclick = (e) => {
        // checkbox 요소의 기본 동작을 중단한다.
        e.preventDefault();
      };
    </script>
  </body>
</html>
```

### e.stopPropagation
e.stopPropagation 메서드는 이벤트 전파를 중지시키는 메서드입니다.
이벤트 객체의 경우 상위 태그에도 같은 이벤트가 존재한다면(예를 들어 click 어트리뷰트가 두 요소 모두 존재하는 경우) 상위 태그의 해당 콜백 함수를 호출하는 특징이 있습니다.

``` javascript
<!DOCTYPE html>
<html>
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    div {
      width: 100%;
      height: 100vh;
      background-color: tomato;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      width: 100px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
  <body>
    <div>
      <button>Button</button>
    </div>
    <script>
      const div = document.querySelector("div");
      const button = document.querySelector("button");

      div.addEventListener("click", () => {
        console.log("DIV");
      });

      button.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("BUTTON");
      });
    </script>
  </body>
</html>
```

## 타이머
### 호출 스케쥴링
함수를 명시적으로 호출하지 않고 일정 시간이 경과된 이후에 호출되도록 함수 호출을 예약하려면, 타이머 함수를 사용해야함 

이렇게 타이머 함수를 사용하여 명시적으로 호출하지 않고 일정 시간이 경과된 이후에 호출되도록 함수 호출을 예약하는 것을 호출 스케쥴링이라고 합니다.

### 타이머 함수
1. setTimeout/clearTimeout
- setTimeout 함수로 생성한 타이머는 한 번 동작합니다.
- setTimeout 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머를 식별할 수 있는 고유한 id를 반환한다.
- setTimeout 함수가 반환한 타이머 id는 브라우저 환경일 경우 숫자 node.js 환경인 경우 객체이다.

``` javascript
// setTimeout 스펙
const timeoutdId = setTimeout(func|code[, delay, param1, param2, ...]);

// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
setTimeout(() => console.log("Hi!"), 1000);

// 세 번째 인수로 문자열 'Lee' 전달
setTimeout((name) => console.log(`Hi! ${name}.`), 1000, "Lee");

// 두 번째 인수(delay)를 생략하면 기본값 0이 지정된다.
```

setTimeout 함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하ㅏ여 타이머를 취소할 수 있다.

``` javascript
const timerId = setTimeout(() => console.log("Hi!"), 1000);
console.log(timeId);

clearTimeout(timerId);
```

2. setInterval/clearInterval

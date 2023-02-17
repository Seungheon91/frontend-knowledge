# 목차
- 데이터 구조
  - <a href="https://github.com/Seungheon91/front-end-knowledge/blob/main/javascript-algorithms/data-structures/stack/READ.md">연결 리스트</a>
  - <a href="https://github.com/Seungheon91/front-end-knowledge/blob/main/javascript-algorithms/data-structures/stack/READ.md">이중 연결 리스트</a>
  - <a href="https://github.com/Seungheon91/front-end-knowledge/blob/main/javascript-algorithms/data-structures/stack/READ.md">스택</a>
  - <a href="https://github.com/Seungheon91/front-end-knowledge/blob/main/javascript-algorithms/data-structures/stack/READ.md">큐</a>
  - <a href="https://github.com/Seungheon91/front-end-knowledge/blob/main/javascript-algorithms/data-structures/stack/READ.md">트리</a>
  - <a href="https://github.com/Seungheon91/front-end-knowledge/blob/main/javascript-algorithms/data-structures/stack/READ.md">큐</a>
- 정렬 알고리즘
  - 버블 정렬(Bubble sort)
  - 선택 정렬
  - 삽입 정렬
  - 병합 정렬
  - 힙 정렬
  - 퀵 정렬
- 탐색 알고리즘

<br>
# 시간 복잡도
문제를 해결하는데 걸리는 시간과 입력의 함수 관계 프로그램을 작성할 때에 입력의 크기에 따라서 프로그램이 계산하는 횟수가 크게 달라집니다.
입력된 자료의 양과 알고리즘 실행에 걸리는 시간 사이에는 어느 정도의 관계가 있는데 이것을 알고리즘의 시간 복잡도라 한다.
시간 복잡도를 나타낼 때에는 Big O 표기법을 이용한다.
![image](https://user-images.githubusercontent.com/78462110/219555028-6d9d00fc-22f0-43de-a900-61bedacb7b48.png)

예) 1부터 n까지의 합을 구한다고 할 때
```
// 방법 1
// n의 크기와 상관 없이 1번의 연산을 하기 때문에 O(1)의 시간 복잡도를 가진다.
int n, res = 0;
res = n*(n+1)/2;
System.out.println(res);

// 방법 2
// for를 이용해 n번의 연산을 하기 때문에 O(n) 의 시간 복잡도를 가진다. 
int n, res = 0;
for (int i = 1; i <= n;, i++) {
    res += i;
}
System.out.println(res);
```



**시간복잡도**|**설명**|
|:---:|:---:|
|O(1)|상수 형태. n의 값에 상관없이 일정한 양의 계산만 한다.|
|O(logn)|로그 형태|
|O(n)|선형|
|O(nlogn)|선형로그 형태|
|O(n2),O(n3),...|다차 형태|
|O(2n)|지수 형태|
|O(n!)|팩토리얼 형태|

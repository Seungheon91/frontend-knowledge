
### props와 state차이
state는 자체 컴포넌트 내부에서 사용하는 데이터고 props는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터입니다.

### computed와 watch의 차이점?
- computed 자동으로 값을 변경하고 캐싱해주는 `반응형 getter`
- watch는 Vue 인스턴스의 특정 프로퍼티가 변경될때 지정한 콜백함수가 실행되는 `반응형 콜백`

### computed와 methods의 차이점?
- method는 랜더링을 할때마다 항상 메서드를 호출해야하지만, computed는 예제의 message의 값이 변했을 경우만 다시 랜더링 한다.
- computed는 결과를 캐싱하고 methods는 종속된 값이란 개념이 없다.

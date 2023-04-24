# HTML Contents
- [DOCTYPE](#DOCTYPE)
- [meta 태그](#meta-태그)
- [웹 표준 및 웹 접근성](#웹-표준-및-웹-접근성)

# CSS Contents
- [프로그래밍](#프로그래밍)
- [자바스크립트 특징](#자바스크립트-특징)


## DOCTYPE
```javascript
<!-- HTML5 -->
<!DOCTYPE html>
```
HTML이 어떤 버전으로작성되었는지 미리 선언해, 웹브라우저가 내용을 올바르게 표시할수 있도록 해주는 것입니다.
문서형식을 정의해주는 것이라고 볼 수 있다.
<br></br>

## meta 태그
HTML 문서가 어떤 내용을 담고있고, 키워드는 무엇이며, 누가 만들었는지에 대한 정보를 담고있는 태그입니다.
<br></br>

### meta 태그 요소

`charset`
```javascript
<meta charset="utf-8" />
```
charset요소는 문서에서 허용하는 문자 집합에 대해서 간단히 표시합니다.

utf-8은 전세계적인 character 집합으로 많은 언어의 문자들을 포함합니다.

웹 페이지에서 어떤 문자라도 취급할 수 있다는 것을 의미합니다.

`name, content`

name 요소는 메타 요소가 어떤 정보의 형태를 갖고 있는지 알려줍니다.

content 요소는 실제 메타 데이터의 컨텐츠입니다. 머릿말을 요약하는데 유용합니다.

```javascript
<meta name="author" content="Chris Mills" />

<meta
  name="description"
  content="The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps."
/>
```
<br></br>

### meta 태그

① 검색 엔진을 위한 키워드를 정의
``` javascript
<meta name="keyword" content="HTML, meta, tag, element, reference" />
```

② 웹 페이지에 대한 설명(description)을 정의

``` javascript
<meta name="description" content="HTML meta tag page" />
```

③ 문서의 저자(author)를 정의

``` javascript
<meta name="author" content="TCPSchool" />
```

④ 5초 뒤에 다른 페이지로 리다이렉트(redirect)시키기

``` javascript
<meta http-equiv="refresh" content="5;url=http://www.tcpschool.com" />
```

⑤ 모든 장치에서 웹 사이트가 잘 보이도록 뷰포트(viewport)를 설정
``` javascript
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```


전체 코드
```javascript
<head>
  <meta charset="UTF-8" />
  <meta name="keyword" content="HTML, meta, tag, element, reference" />
  <meta name="description" content="HTML meta tag page" />
  <meta name="author" content="TCPSchool" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HTML meta tag</title>
</head>
```
<br></br>

## 웹 표준 및 웹 접근성


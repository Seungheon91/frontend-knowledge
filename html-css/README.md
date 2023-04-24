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
meta 태그 설명-http://tcpschool.com/html-tags/meta
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

### 웹 표준
웹 표준이란 웹 상에서 표준적으로 사용되는 기술을 말합니다.

웹사이트를 어떠한 운영체제에서나 어떠한 브라우저에서 보더라도 동일하게 보여지도록 W3C(World Wide Web Consortium) 기구 표준에 맞추는 것입니다.

다양한 브라우저, 휴대폰 PDA, 장애인 지원용 프로그램에서도 대응이 가능하므로 접근성이 향상 되고, 장애인, 고령자 등을 포함한 사용자층도 확대 가능하다는 장점이 있습니다.

최신 웹 표준 버전은 HTML5, CSS3이다.
<br></br>

### 웹 접근성
웹 접근성은 모든 사람 (비장애인, 장애인, 노인 등 )이 차별 없이 웹 사이트를 자유롭게 이용할 수 있게 하는 권리를 말합니다. 쉽게 말해서 특정 대상에 한정되어 있지 않고 모든 사용자가 웹사이트를 이용함에 있어 불편함이 없어야 한다는 것입니다.

### HTML5 추가된 내용
- canvas 기능 추가
  - <canvas>태그는 자바스크립트를 통해 다양한 그림을 그릴 수 있는 공간을 제공해준다
  - 해상도 독립적으로 SVG 그래픽을 활용하고 있어서 그래프를 그리거나 게임 그래픽이나 다른 기타 이미지를 실시간으로 그려서 사용할 수 있는 기능을 제공해준다
  - WebGL과 같은 3d 기술의 구현이 웹 브라우저를 통해서도 가능해졌다
- 모든 디바이스에서 웹페이지 호환이 가능해졌다
- 시멘틱 웹 기술을 지원하기 시작했다

  

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

<br></br>

### 웹 접근성에 맞는 마크업 예시
1. 이미지는 사진이라 음성으로 들려줄 순 없지만 이미지에 텍스트로 된 설명을 달아주면 가능합니다.  이미지에 alt, IR기법을 사용하여 대체텍스트를 제공
2. 동영상은 대본이나 자막을 제공하고 자동재생 금지
3. title을 사용해 a 태그에 대한 정보를 적절히 제공해야 함
4. input태그에는 적절한 label이 제공되어야 함
5. table에는 caption, summary, thead, tbody, th 등을 사용
6. 컨텐츠는 위에서 아래로 읽을 수 있는 선형구조이어야 함 (ex) 명확한 헤딩구조(h1~h6)

<br></br>

### 시멘틱 태그
의미요소(Semantic Element)는 HTML로 만든 문서에 추가적으로 의미를 부여해줍니다.

무의미한 요소(Non-Semantic Element)로 문서를 작성할 경우, HTML문서를 접하는 사람이 어떤 데이터를 봐야할지, 어떤 데이터를 제공하는지 파악하기가 어렵습니다.

시멘틱 태그를 사용함으로써 서로 관계가 있는 정보를 파악하고 콘텐츠가 어떤 맥락 안에 있는지 알기 쉽게 해줍니다.

그리고 시멘틱 태그를 잘 지킨다면 이는 검색엔진을 통해 검색이 잘 될 수 있도록 도와줍니다.

**태그**|**요약**|
|:---:|:---:|
|header|헤더|
|nav|내비게이션|
|aside|사이드에 위치하는 공간|
|section|여러 중심 내용을 감싸는 공간|
|article|글자가 많이 들어가는 부분|
|footer|푸터|

<br></br>

### section 태그와 article 태그의 차이점
- article: 문서나 사이트에서 독립된 컨텐츠 영역을 지정합니다. 이 부분을 다른 곳에 옮기더라도 분리되어지고, 의미가 통해야합니다.

- section: 페이지의 주요부분을 의미하며, 긴 글의 세부사항과 같은 관련 컨텐츠의 묶음, 또는 탭 키 사용을 요하는 인터페이스를 가진 웹 어플리케이션에서의 페이지의 묶음 단위를 의미합니다.

<br></br>

### 크로스 브라우징
크로스 브라우저는 웹 사이트 또는 웹 응용 프로그램이 서로 다른 웹 브라우저에서 정확하고 일관성 있게 작동하는 기능을 말합니다.

여기에는 구글 크롬, 모질라 파이어폭스, 사파리, 마이크로소프트 엣지와 같은 인기 있는 브라우저의 다양한 버전과 오페라와 같은 덜 사용되는 브라우저가 포함됩니다. 크로스 브라우징 호환성은 웹 사이트 또는 웹 응용 프로그램에 액세스하여 가능한 한 광범위한 사용자가 사용할 수 있도록 하는 데 중요합니다.

<br></br>

### HTML5 추가된 내용
- canvas 기능 추가
  - <canvas>태그는 자바스크립트를 통해 다양한 그림을 그릴 수 있는 공간을 제공해준다
  - 해상도 독립적으로 SVG 그래픽을 활용하고 있어서 그래프를 그리거나 게임 그래픽이나 다른 기타 이미지를 실시간으로 그려서 사용할 수 있는 기능을 제공해준다
  - WebGL과 같은 3d 기술의 구현이 웹 브라우저를 통해서도 가능해졌다
- 모든 디바이스에서 웹페이지 호환이 가능해졌다
- 시멘틱 웹 기술을 지원하기 시작했다

<br></br>

## SEO
검색 엔진 최적화(SEO: Search Engine Optimization)는 검색 엔진이 웹페이지의 자료를 수집하거나 순위를 방식에 맞게 웹페이지를 구성하여, 검색 결과의 상위에 나올 수 있게하는 행위를 말합니다.

SEO를 위해서는 검색어를 페이지에 적절하게 배치해야 합니다.

검색 엔진은 결과를 보여줄 때, HTML의 태그들을 분석합니다.

이 때, Semantic한 문서는 검색엔진이 유 의미한 결과를 낳을 수 있도록 합니다.


  

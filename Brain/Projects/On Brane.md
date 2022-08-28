---
title: 'On Brane'
slug: '/A370F3'
---

import Admonition from '@theme/Admonition'
import DisplayFlex from '@site/src/components/DisplayFlex'

# 브레인에 대하여

당근마켓 인턴 기간 내내 함께 했던 **브레인**이라는 것의 기술적인 배경과 현 진척도에 대해

당근마켓에서 R&D 엔지니어 인턴으로 재직하면서 **브레인**이라는 것의 기술적인 배경과 현 진척도에 대해 이야기해보려고 한다.

## 0. 미니앱

미니앱은 슈퍼앱 위에서 구동되는 제3사 서비스들의 집합이다.
예를 들어 카카오톡에서 카카오선물하기 같은 서비스가 있는데,
이것을 타사가 개발하여 카카오톡이라는 플랫폼 위에서 서비스하는 개념이다.

중화권에서는 이미 BAT (바이두, 알리바바, 텐센트) 3사가 미니앱으로 시장을 장악하였으며
그 중 1위인 WeChat의 미니앱은 일간 사용자가 4억명이 넘고, 월간 사용자는 9억명을 상회한다.
또한 Apple과 Google이 중화권에서 앱스토어, 플레이스토어를 이용한
플랫폼 파워를 지니지 못하는 이유가 바로 미니앱이다.
중화권 사용자들에게 앱스토어와 플레이스토어는
마치 과거 마이크로소프트에 내장된 인터넷 익스플로러와 같다.
인터넷 익스플로러의 유일한 용도가 Chrome을 찾고 설치하는 것이듯,
중화권 앱스토어와 플레이스토어의 사실상 유일한 용도는 WeChat을 설치하는 것뿐이다.

우선 당근마켓은 미니앱을 위한 환경을 구축하려고 한다.
미니앱이 무엇인지, 그 파급력이 무엇인지는 Google의 미니앱 문서를 전부 번역해두었다.
여기서 이야기하기에는 내용이 과하게 길어질테니 해당 문서를 참고하기 바란다.

<Admonition type="note" title="여기까지 정리" icon="💡">

- 당근마켓은 미니앱 환경을 만들고 싶어한다.
- 미니앱은 쉽고 빠른 개발(웹과 유사한 개발 경험)로 최대 비즈니스 효과(모바일 앱 경험)를 제공한다.
- 당근마켓은 미니앱의 가능성을 카카오톡을 능가할 비즈니스 기회로 염두에 두고 있다.
- **목표**. 한국, 일본, 미국, 영국 등에서 성공할 수 있는 미니앱 모델을 만들어라.

</Admonition>

## 배경 1. 많은 미니앱을 위해

앞서 언급한 BAT의 경우 웹에서 영감을 받은 듯한
[독자적인 언어와 브라우저](https://web.dev/mini-app-markup-styling-and-scripting/)를
개발하여 그 내부를 자신들의 마음대로 뜯어고쳤다.
중화권의 BAT의 경우 독자 규격을 사용하고,
그 3사의 비즈니스 파워가 상당하기 때문에 타사 개발자들에게 여러가지 요구를 할 수 있다.
하지만 대부분의 (소위) 슈퍼앱들은 서비스가 강력하기는 해도,
자사의 SDK를 이용해 재개발하라거나,
슈퍼앱일때만 다르게 동작하는 로직 분기처리를 요구하는 등
타사 개발자들에게 무리한 요구를 하지는 못한다.
그렇게 되면 굳이 구태여 미니앱을 만들지 않을 것이다.
그 노력으로 iOS, Android 앱을 잘 만드는 것이 더 성공 확률이 보장되기 때문이다.

이를 위해 표준 미니앱은 웹 표준을 준수해야 한다.
어떤 웹앱일지라도 약간의 수정을 통해 미니앱으로나 웹앱으로나 코드 변경 없이 동작할 수 있도록 해야한다.

## 배경 2. 예쁘게 보여주기 위해

예쁘게 보여주는 것은 상당히 중요하다.
특히 권한을 요구하는 화면은 더욱 그렇다.
어떠한 맥락도 없이 *서비스가 위치를 사용하고 싶어합니다*고 갑자기 물어본다면
사용자는 거절을 누를 확률이 높고, 그러면 서비스의 운영에 지장이 생길 수 있다.
즉 권한 요구 창은 설득력이 있어야 한다.
그를 위해서는 그에 합당한 인터페이스와 디자인으로 갖춰져야 한다.
즉, **예뻐야 한다**.

예를 들어 스타벅스 웹, 앱, 미니앱에서 위치 정보를 요구하는 경우를 살펴보자.
어떤 권한 요구 창을 승인하고 어떤 권한 요구 창을 거절할 것 같은가?

<DisplayFlex>

![스타벅스 웹앱](../Assets/starbucks-web.png)
![스타벅스 미니앱](../Assets/starbucks-miniapp.png)
![스타벅스 앱](../Assets/starbucks-app.png)

</DisplayFlex>

보다 더 많은 맥락이 주어지는 오른쪽으로 갈수록 승인할 사용자가 많을 것이다.
때문에 표준 미니앱은 최소한 가운데만큼의 맥락을 제공할 수 있어야 한다.

## 배경 3. 웹 표준 권한 요구 창을 예쁘게 보여주기 위해

앞서 이야기한 예시를 이어보자면 위치 정보 권한 요구 창은 [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)가 불릴 때 발생한다.
별거 없다.
다음 코드를 실행하면 바로 나온다.

```js
navigator.geolocation.getCurrentPosition()
```

배경 1과 배경 2에 근거해, 위 코드가 실행되었을 시 (웹 표준 방식으로 위치 정보를 요청 시) **사용자를 설득할 수 있는 배경 정보와 디자인을 갖춘 권한 요구창**이 나타나야 한다.

## 문제 1. 하지만 그것은 브라우저의 영역인데?

저렇게 알림창을 띄우는 것은 브라우저의 영역이다. 때문에,
웹뷰를 그대로 사용해서 (iOS의 경우 WKWebView) 미니앱을 구동하는 경우
저렇게 위치 권한 요구 창이 그대로 나타나게 된다.
이 문제는 현재 당근마켓에 구현된 **당근미니**에도 발생한다.

<DisplayFlex>

![오히려 알 수 없는 URL이 나타나서 거부감을 일으킬 수 있다.](../Assets/karrot-status-quo.png)

</DisplayFlex>

그렇다면 여기서 문제를 어떻게 해결해야 할까?
새로운 브라우저를 만들어야 할까?

## 묘안 1: 어차피 누가 누군지 모른다.

99.99%의 웹앱의 경우 그냥 권한이 필요한 곳에 `getCurrentPosition()`할 뿐이지
그것이 진짜 브라우저에서 실행되는건지는 관심이 아니다.
그렇다면 만약 다음과 같은 **가짜** `navigator`를 만든다면 어떨까?

```js
const navigator = {
  geolocation: {
    getCurrentPosition(success, error) {
      // do some random stuff...
    },
  },
}
```

JavaScript는 `navigator`의 진위를 검사하지 않기에 원하는 동작을 사이에 주입할 수 있다.
이를 **Shim**이라고 한다.

> 컴퓨터 프로그래밍에서 심(shim)은 API 호출을 투명하게 가로채고 전달된 인수를 변경하거나, 작업 자체를 처리하거나, 다른 곳으로 작업을 리디렉션하는 라이브러리입니다. (In computer programming, a shim is a library that transparently intercepts API calls and changes the arguments passed, handles the operation itself, or redirects the operation elsewhere.) — [Shim \(computing\) - Wikipedia](<https://en.wikipedia.org/wiki/Shim_(computing)>)

고양이가 위치 권한을 달라고 요구하는 데모 웹사이트를 만들어보았다.

<DisplayFlex>

![기본 동작](../Assets/vanilla.png)
![강제로 변경한 동작](../Assets/shimmed.png)

</DisplayFlex>

- [anaclumos/poc-geolocation-dialog: Geolocation Shimming Demo](https://github.com/anaclumos/poc-geolocation-dialog)

즉, 이를 조금 더 고도화해서 아예 `document`,
즉 DOM 자체를 JavaScript로 구현하여 원하는 부분만 교체하면
미니앱스러운 경험을 제공할 수 있다.

## 배경 4. 일관적인 경험을 위해

미니앱은 일관적인 경험을 주는 것이 중요하다.
마치 브라우저를 사용할 때 **새로고침, 즐겨찾기, 이전 페이지, 창닫기의 위치가 변하지 않듯이**
여러 미니앱에 있어서도 동일한 경험을 주어야 한다.
이는 내가 번역한 [미니앱 문서](https://web.dev/mini-app-about/#the-user-experience)에도 언급되어 있다.
이를 위해서는 공통 컴포넌트의 일부를 우리가 주입해야 한다.

## 배경 5. 빠른 경험을 위해

서로 다른 미니앱을 열고 닫을 때 빠르게 앱을 열고 닫기 위해 앱의 데이터를 `prefetch` 해올 수 있다.
하지만 앱을 열고 닫을 때마다 데이터가 유지되어야 하기에,
`iframe` 안에 미니앱을 담아두고
외부에서는 슈퍼앱의 웹뷰가 서로 다른 데이터를 처리하고
`prefetch`하는 방식을 생각할 수 있다.

## 문제 2. 얼음 ❄ 땡

하지만 여기서 또다른 문제가 발생한다.
`iframe`은 단일 쓰레드에서 동작한다.
즉, 미니앱이 멈추면 슈퍼앱의 종료 버튼 또한 먹통이 된다.
이를 위해서는 멀티 쓰레드를 도입해야 한다.

<Admonition type="tip" title="어라? JavaScript은 Single-Threaded하지 않나?" icon="🤔">

반은 맞고 반은 틀리다.

- 브라우저 안의 JavaScript은 Single-Threaded하다.
- 하지만 Web Worker라는 별도의 장치를 통해 Multi-Thread 연산을 처리할 수 있다.

</Admonition>

그렇다면 Web Worker에서 `iframe`을 구동한다면 미니앱이 멈추어도 슈퍼앱은 멈추지 않을 것이다.

## 문제 3. Web Worker 안에는 DOM API가 없다

- todo

## 이후

- 미니앱 패키지 번들
- 호스팅
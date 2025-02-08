# 편집 안내

## 구조

이 패키지의 파일은 리버티게임의 실제 문서와 일대일로 대응됩니다.
타입은 `types`에 저장됩니다. types의 1단계 하위 폴더는 이름공간을 의미합니다. 이름공간 폴더 이름은 영어를 사용합니다.
그리고 그 아래에는 이름공간에 속한 각 문서가 포함되며, 하위 문서는 또 다시 폴더 안으로 들어갑니다. 기본 이름공간은 `main` 폴더를 사용합니다.
모든 타입 정의 파일은 `.d.ts` 확장자를 가지며, `.js`로 끝나는 문서들은 `.js` 부분은 생략되고 `.d.ts`로 대체됩니다.
예를 들어, `MediaWiki:Foo/bar.js` 문서에 대한 타입 파일의 경우, 이 패키지에서는 `types/MediaWiki/Foo/bar.d.ts` 경로에 저장합니다.

```text
예시:

types
  └─main                      = :* (기본 이름공간)
      ...
  └─MediaWiki                 = MediaWiki:*
      Common.d.ts             = MediaWiki:Common.js
      Gadgets-definition.d.ts = MediaWiki:Gadgets-definition
      ...
  └─Project                   = Project:* (리버티게임:)
      ...
  └─User                      = User:*
      ...
  ...
```

모든 파일은 [`index.d.ts`](index.d.ts)에 추가되어야 합니다.
단, `types/MediaWiki/Gadget-`으로 시작하는 소도구 파일들은 미디어위키에서 소도구를 등록하듯 [`types/MediaWiki/Gadgets-definition.d.ts`](types/MediaWiki/Gadgets-definition.d.ts)에 추가합니다.
`index.d.ts`와 `types/MediaWiki/Gadgets-definition.d.ts` 파일 안에 파일을 추가할 때는 reference 문법을 사용합니다.

```ts
/// <reference path="types/MediaWiki/Common.d.ts" />
```

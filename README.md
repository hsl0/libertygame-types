![리버티게임 로고](https://libertyga.me/wiki/Special:Redirect/file/Libertygame_logo.svg)

# 리버티게임 타입스크립트 타입 정의

[![NPM Version](https://img.shields.io/npm/v/%40libertygame%2Ftypes)](https://www.npmjs.com/package/@libertygame/types)
[![License](https://img.shields.io/npm/l/%40libertygame%2Ftypes)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Last update](https://img.shields.io/npm/last-update/%40libertygame%2Ftypes)](https://www.npmjs.com/package/@libertygame/types)
[![Issues](https://img.shields.io/github/issues/LibertygameWikiKorea/libertygame-types?logo=github)](https://github.com/LibertygameWikiKorea/libertygame-types/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/LibertygameWikiKorea/libertygame-types?logo=github)](https://github.com/LibertygameWikiKorea/libertygame-types/pulls)

[리버티게임](https://libertyga.me)에서 사용하는 스크립트를 타입스크립트로도 개발할 수 있도록 전역 함수 및 변수나 소도구의 타입 정의를 배포합니다.

**아직 모든 함수나 변수의 타입이 정의된 것은 아닙니다.** 타입이 필요할 때마다 그때그때 정의하고 있으며, 필요한 타입이 없으시다면 [이슈](https://github.com/LibertygameWikiKorea/libertygame-types/issues)를 작성하시거나, 직접 정의 코드를 작성해서 [PR](https://github.com/LibertygameWikiKorea/libertygame-types/pulls)을 요청하시기 바랍니다.

## 타입 불러오기

이 패키지는 npm을 활용해서 간단하게 불러올 수 있습니다. 다음 터미널 명령어를 통해 이 패키지를 설치하세요.

```console
npm i @libertygame/types --save-dev
```

이 패키지에는 [미디어위키 타입](https://www.npmjs.com/package/types-mediawiki)과 [jQuery 타입](https://www.npmjs.com/package/@types/jquery)도 포함되어 있으므로 별도의 패키지를 설치할 필요가 없습니다.

`extends`에 [`@libertygame/types/recommended.json`](recommended.json)을 추가할 것을 권장합니다. 이는 tsconfig를 미디어위키와 리버티게임의 환경에 맞추고 아래 필수 셋팅을 자동으로 해줍니다.

```json
{
	"extends": "@libertygame/types/recommended.json"
}
```

이 패키지는 `@types/`에 속한 패키지가 아니므로 설치만으로 자동으로 추가되지 않습니다. 앞서 설명한 recommend.json을 사용한 경우 함께 추가해주므로 별도의 설정이 필요하지 않지만, tsconfig를 수동으로 설정하거나 include와 files를 모두 재정의한 경우에는 별도로 추가해 주셔야 합니다. [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)에서 [`include`](https://www.typescriptlang.org/tsconfig#include)에 `node_modules/@libertygame/types`를 추가하거나, [`files`](https://www.typescriptlang.org/tsconfig#files)에 `node_modules/@libertygame/types/index.d.ts`를 추가하면 됩니다.

```json
{
	"include": ["node_modules/@libertygame/types"],
	"files": ["node_modules/@libertygame/types/index.d.ts"]
}
```

recommended.json을 사용하지 않고 수동으로 설정한다면, `compilerOptions`의 [`moduleResolution`](https://www.typescriptlang.org/tsconfig#moduleResolution) 옵션은 반드시 `Node` 계열로 설정해야 합니다. 만약 [`module`](https://www.typescriptlang.org/tsconfig#module)이 `CommonJS`나 `Node` 계열로 설정되어있다면 생략하셔도 좋습니다.

```json
{
	"compilerOptions": {
		"moduleResoultion": "node"
	}
}
```

## 도보시오

이 패키지에는 별도의 패키지가 없는 리버티게임의 전역 함수나 변수 및 소도구만 포함되어 있으며, jQuery와 미디어위키 코어를 제외한 별도 패키지가 있는 타입 정의는 포함하지 않습니다. 그 대신 별도의 타입 패키지를 직접 설치하실 수 있습니다.

다음은 리버티게임과 미디어위키에서 사용하는 스크립트에 대한 타입 패키지들의 목록입니다.

- [OOUI](https://www.npmjs.com/package/@types/oojs-ui) (@types/oojs-ui)
- [OOjs](https://www.npmjs.com/package/@types/oojs) (@types/oojs)

## 편집 안내

이 레포지트리를 편집하기 전에 [CONTRIBUTING.md](CONTRIBUTING.md) 문서를 먼저 읽어주세요.

## 라이선스

라이선스는 아직 확정되지 않아 변경될 수 있습니다. 현재 리버티게임의 라이선스인 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)을 임시로 적용하고 있습니다.

<!-- markdownlint-disable-file MD041 -->

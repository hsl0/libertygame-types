# 리버티게임 타입스크립트 타입 정의

[리버티게임](https://libertygame.miraheze.org)에서 사용하는 스크립트를 타입스크립트로도 개발할 수 있도록 전역 함수 및 변수나 소도구의 타입 정의를 배포합니다.

**아직 모든 함수나 변수의 타입이 정의된 것은 아닙니다.** 타입이 필요할 때마다 그때그때 정의하고 있으며, 필요한 타입이 없으시다면 [이슈](https://github.com/hsl0/libertygame-types/issues)를 작성하시거나, 직접 정의 코드를 작성해서 [PR](https://github.com/hsl0/libertygame-types/pulls)을 요청하시기 바랍니다.

## 프로젝트에 타입 불러오기
이 패키지는 npm을 활용해서 간단하게 불러올 수 있습니다.
```console
npm i hsl0/libertygame-types --save-dev
```

이 패키지에는 [미디어위키 타입](https://www.npmjs.com/package/types-mediawiki)과 [jQuery 타입](https://www.npmjs.com/package/@types/jquery)도 포함되어 있으므로 별도의 패키지를 설치할 필요가 없습니다.

타입스크립트 개발 환경이 잘 구축되었다면 별도의 작업은 필요하지 않을겁니다.

## 전역 함수 및 변수 타입 정의
`window` 객체에서 접근할 수 있는 전역 함수 및 변수는 [`global.d.ts`](global.d.ts)에서 정의됩니다.

미디어위키 이름공간의 각 문서들이 이름공간을 뗀 문서 제목의 주석으로 구분되어 있습니다.

```ts
// Common.js
...
```

소도구 등 모듈에 포함된 문서의 경우에는 모듈 이름도 작성하고, 문서 이름은 `///`로 시작하는 주석으로 작성해서 소속된 문서임을 쉽게 알 수 있도록 합니다.

```ts
// ext.gadget.Tasker
/// Gadget-tasker.js
...
```

직접 접근할 수 있는 함수 및 변수에만 `declare`를 붙여주시고, `declare`가 붙은 함수 및 변수에서 사용하는 타입만 작성하시면 됩니다.

자세한 사항은 [타입스크립트 공식 홈페이지](https://www.typescriptlang.org)를 참고해 주세요.

## 모듈 타입 정의
각 모듈 또는 `mw.loader.using()`의 콜백 함수의 `require()`나 `mw.loader.require()`를 통해 불러올 수 있는 것들은 [`modules.d.ts`](modules.d.ts)에서 정의됩니다.

각 모듈은 `declare module` 문에서 선언됩니다.
```ts
declare module 'ext.gadget.CGI2-parser' {
    ...
}
```

보시다시피, 모듈을 선언할 때는 `require()`의 인자로 들어가는 모듈 이름을 `declare module` 바로 뒤에 문자열로 입력해야합니다.

각 모듈에서 `module.exports`를 통해 내보내지는 값은 `declare module` 문에서 `export` 변수에 할당된 값에 대응됩니다. 물론, 여기는 선언 파일이므로 타입 선언이 거기에 들어갑니다.
```ts
declare module 'ext.gadget.CGI2-parser' {
    ...
    export = CGI2Parser;
}
```

`export` 위에는 거기에 사용되는 타입이나, 그 타입을 정의하기 위해 필요한 타입들이 정의됩니다.

자세한 사항은 [타입스크립트 공식 홈페이지](https://www.typescriptlang.org)를 참고해 주세요.

모듈에서 정의되지만, `module.exports`가 아닌 `windows`로 내보내지는 전역 함수 및 변수는 [`global.d.ts`](global.d.ts)에서 정의되므로 [전역 함수 및 변수 타입 정의](#전역-함수-및-변수-타입-정의) 문단을 확인해 주세요.
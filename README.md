# 儲位管理系統

## Features

- [Angular 13](https://angular.io/)

- Using [Jest](https://jestjs.io/) for unit testing

- Using [Tailwind](https://tailwindcss.com/) for main css framework

- Using [Storybook](https://storybook.js.org/) for document maintenance

- Apply [Atomic Design](https://medium.com/uxeastmeetswest/%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88-atomic-design%E7%B0%A1%E4%BB%8B%E5%8F%8A%E5%B7%A5%E4%BD%9C%E5%AF%A6%E4%BE%8B-42e666358d52) component design structure

---

## File Structure

- `core` 載入一次性的檔案，通常具有全域性

  - `guards`

  - `interceptors`

  - `services`

- `pages` 存放所有頁面檔案

  - `feature name`

    - `feature.module.ts`

    - `feature-routing.module.ts`

- `shared` 存放共享檔案

  - `components` 依據 Atomic Design 分類

    - `atoms` 原子

    - `molecules` 分子

    - `organisms` 聚合物

    - `templates` 樣板

  - `modules` 第三方模組

  - `directives`

  - `pipes`

  - `shared.module.ts`

- `data` 存放資料定義與資料來源

  - `schemas` 資料定義結構

  - `services` 取得資料的服務(ex: api service)

- `utils` 提供常用函示

---

## Component Base Design

所有元件都希望有一下結構

- `some.component.html`

- `some.component.scss`

- `some.component.ts`

- `some.component.spec.ts` => 測試檔案

- `some.stories.ts` => Storybook 檔案

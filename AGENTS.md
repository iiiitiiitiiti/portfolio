## コーディング規約

- HTML のクラス命名は **BEM**。接頭辞は3種: `m-`（モジュール = 再利用パーツ）/ `u-`（モジュールから外れたユニークなパーツ）/ `l-`（レイアウト・汎用基礎）
- **CSS は `<style>` タグに書かず、別ファイルで管理する**（`.astro` の frontmatter で import）。JS も同様に別ファイルへ分け、`<script>` 内は `import './xxx.js';` の1行のみにする。ビルド出力も外部 CSS になるよう `astro.config.mjs` で `build.inlineStylesheets: 'never'` を設定済み（変更しない）
- CSS ファイルの置き場所: モジュール・コンポーネント・レイアウトは同名で**隣接**（例: `Heading.astro` + `Heading.css`）。ページ用は `src/pages/` に置けない（ルーティング対象になる）ため `src/styles/pages/` に置く
- 作品詳細の本文は「モジュールの組み上げ」で作る。モジュールは `src/components/modules/` に置き、1モジュール = `.astro`（HTML）+ `.css`（+ 必要なら `.js`）のファイルセット
- モジュールは `src/pages/works/[...slug].astro` で `<Content components={modules} />` により一括注入しているため、`.mdx` 内では import 不要。モジュールを追加したら注入オブジェクトにも追加する

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

# Portfolio

転職用ポートフォリオサイト。Astro + GitHub Pages で構築。

## 開発

```sh
npm install
npm run dev      # http://localhost:4321/portfolio/ で確認
npm run build    # 本番ビルド（dist/ に出力）
```

- Node.js 22.12 以上が必要
- main ブランチへ push すると GitHub Actions が自動でビルド・公開する（`.github/workflows/deploy.yml`）
- 公開 URL: `https://<GitHubユーザー名>.github.io/portfolio/`

## 作品の追加方法

`src/content/works/` に `.mdx` ファイルを1枚置き、本文を**モジュールの組み上げ**で書く。

- **ファイル名は英数字とハイフンのみ**にする（URL になるため。日本語ファイル名は使わない）
- 画像は `public/images/` に置き、`thumbnail` や `ImageBlock` の `src` に `/images/ファイル名` で指定する

```mdx
---
title: 作品タイトル
category: design        # design（デザイン作品）/ tool（自作ツール）/ client-work（実務実績）
summary: 一覧カードに表示される1行紹介
date: 2026-07-08
thumbnail: /images/example.png   # 省略可（省略時はプレースホルダー表示）
tags: [Figma, UIデザイン]        # 省略可
url: https://example.com         # 公開ページがあれば（省略可）
draft: false                     # true にすると非公開（下書き・公開可否未確認の実務実績用）
---

<Heading>見出し</Heading>
<Heading level={3}>小見出し</Heading>

<Text>通常テキスト。1段落 = 1つの Text。</Text>

<ListBlock items={['項目1', '項目2']} />
<ListBlock ordered items={['手順1', '手順2']} />

<ImageBlock src="/images/example.png" alt="代替テキスト" caption="キャプション（クリックで拡大）" />
```

### モジュール

モジュールは `src/components/modules/` に **HTML（.astro）+ CSS（.css）+ 必要なら JS（.js）のファイルセット**で置く。

| モジュール | ファイル | 役割 |
|---|---|---|
| `Heading` | `Heading.astro` + `Heading.css` | 見出し（`level={3}` で小見出し） |
| `Text` | `Text.astro` + `Text.css` | 通常テキスト（段落） |
| `ListBlock` | `ListBlock.astro` + `ListBlock.css` | リスト（`ordered` で番号付き） |
| `ImageBlock` | `ImageBlock.astro` + `ImageBlock.css` + `ImageBlock.js` | 画像（クリックで拡大表示） |

- import は不要（`[...slug].astro` が一括注入している）。**モジュールを新規追加したら `[...slug].astro` の注入オブジェクトにも追加する**
- `.mdx` の地の文に `{` や `<` をそのまま書くと構文エラーになる（`\{` のようにエスケープする）
- プレーン Markdown（`.md`）の作品ファイルも引き続き使える（h2/段落などに最低限のスタイルが当たる）

## コーディング規約

HTML のクラス命名は **BEM**。接頭辞は3種:

| 接頭辞 | 対象 | 例 |
|---|---|---|
| `m-` | モジュール（再利用するパーツ） | `m-work-card`, `m-heading`, `m-tate-label` |
| `u-` | モジュールから外れたユニークなパーツ | `u-hero`, `u-header`, `u-work` |
| `l-` | レイアウト・汎用基礎 | `l-container`, `l-display`, `l-meta` |

CSS / JS はファイル分離で管理する:

- **CSS は `<style>` タグに書かない**。別ファイルにして `.astro` の frontmatter で import する
  - モジュール・コンポーネント・レイアウト → 同名 CSS を**隣に置く**（`Heading.astro` + `Heading.css`）
  - ページ用 → `src/styles/pages/` に置く（`src/pages/` はルーティング対象のため CSS を置けない）
- **JS も別ファイル**にして、`<script>` 内は `import './xxx.js';` の1行のみにする
- ビルド出力もインライン化させず外部 CSS のまま配信する（`astro.config.mjs` の `build.inlineStylesheets: 'never'`）

## サイト構成

| パス | 内容 |
|---|---|
| `src/pages/index.astro` | トップ（ヒーロー + 最新作品6件） |
| `src/pages/works/index.astro` | 作品一覧（カテゴリ別） |
| `src/pages/works/[...slug].astro` | 作品詳細（モジュール注入もここ） |
| `src/pages/about.astro` | プロフィール |
| `src/content.config.ts` | 作品コレクションのスキーマ定義 |
| `src/components/modules/` | 作品本文用モジュール（.astro + .css + .js のセット） |
| `src/components/` | サイト用モジュール（WorkCard・WorksGrid。同名 .css が隣接） |
| `src/layouts/Base.astro` + `Base.css` | 共通レイアウト（ヘッダー・フッター） |
| `src/styles/global.css` | デザイントークン（色・書体・余白）と l- 基礎クラス |
| `src/styles/pages/` | 各ページ専用 CSS（home / works-index / work / about） |
| `src/styles/modules/tate-label.css` | 縦書きラベル（クラスのみのモジュール） |

## 注意事項

- **実務実績は公開可否（契約・社内規約）を確認してから `draft: false` にすること**
- `astro.config.mjs` の `site` は GitHub ユーザー名に合わせて書き換える（`REPLACE-ME` のまま公開しない）
- リポジトリ名を `portfolio` 以外にした場合は `astro.config.mjs` の `base` も合わせて変更する

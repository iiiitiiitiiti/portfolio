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

`src/content/works/` に Markdown ファイルを1枚置くだけ。

- **ファイル名は英数字とハイフンのみ**にする（URL になるため。日本語ファイル名は使わない）
- 画像は `public/images/` に置き、frontmatter の `thumbnail` に `/images/ファイル名` で指定する

```markdown
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

## 概要

本文は Markdown で自由に書く。
```

## サイト構成

| パス | 内容 |
|---|---|
| `src/pages/index.astro` | トップ（ヒーロー + 最新作品6件） |
| `src/pages/works/index.astro` | 作品一覧（カテゴリ別） |
| `src/pages/works/[...slug].astro` | 作品詳細 |
| `src/pages/about.astro` | プロフィール |
| `src/content.config.ts` | 作品コレクションのスキーマ定義 |
| `src/layouts/Base.astro` | 共通レイアウト（ヘッダー・フッター） |
| `src/styles/global.css` | デザイントークン（色・書体・余白） |

## 注意事項

- **実務実績は公開可否（契約・社内規約）を確認してから `draft: false` にすること**
- `astro.config.mjs` の `site` は GitHub ユーザー名に合わせて書き換える（`REPLACE-ME` のまま公開しない）
- リポジトリ名を `portfolio` 以外にした場合は `astro.config.mjs` の `base` も合わせて変更する

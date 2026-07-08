// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // TODO: GitHub リポジトリ作成後、`REPLACE-ME` を自分の GitHub ユーザー名に書き換える
  site: 'https://REPLACE-ME.github.io',

  // リポジトリ名と一致させる（https://<ユーザー名>.github.io/portfolio/ で公開される）
  base: '/portfolio',

  integrations: [mdx()],

  build: {
    // CSS は HTML へインライン化せず、常に外部 CSS ファイルとして出力する（規約: Style タグではなく別ファイル管理）
    inlineStylesheets: 'never',
  },
});
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: GitHub リポジトリ作成後、`REPLACE-ME` を自分の GitHub ユーザー名に書き換える
  site: 'https://REPLACE-ME.github.io',
  // リポジトリ名と一致させる（https://<ユーザー名>.github.io/portfolio/ で公開される）
  base: '/portfolio',
});

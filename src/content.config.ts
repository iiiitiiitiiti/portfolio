import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    // design: デザイン作品 / tool: 自作ツール / client-work: 実務の制作実績
    category: z.enum(['design', 'tool', 'client-work']),
    summary: z.string(),
    date: z.coerce.date(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).default([]),
    url: z.string().url().optional(),
    // true にすると一覧・詳細ページから除外される（公開前の下書きや、公開可否が未確認の実務実績用）
    draft: z.boolean().default(false),
  }),
});

export const collections = { works };

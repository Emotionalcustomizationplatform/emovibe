# EmoVibe — Chakra UI Professional Starter

## 快速开始
1. `git clone <repo>`  
2. `cd emovibe-chakra`  
3. `npm ci`  
4. 复制 `.env.example` -> `.env.local`，填写所有 secret（Supabase, OpenAI, Stripe, MESSAGE_ENCRYPTION_KEY_BASE64 等）  
5. （若用 Prisma）设置 `DATABASE_URL` 并运行 `npx prisma migrate dev`  
6. 在 Supabase 控制台运行 `scripts/db-init.sql`（或直接使用 Prisma migration）  
7. `npm run dev` 并打开 `http://localhost:3000`

## 部署建议
- 前端部署：Vercel（Next.js 最佳）  
- 后端 DB & Auth：Supabase  
- Stripe webhooks：设置 Vercel 环境变量 `STRIPE_WEBHOOK_SECRET` 并将 webhook 指向 `/api/stripe/webhook`  
- OpenAI Key：放到 Vercel 环境变量 `OPENAI_API_KEY`

## 注意
- 上线前务必审核 RLS 和隐私/免责声明条款  
- 消息加密 key 必须是 32 字节 base64

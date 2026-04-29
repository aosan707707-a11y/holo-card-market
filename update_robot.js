name: update_robot.js

on:
  schedule:
    # 毎日 日本時間の午前9時（世界標準時の0時）に実行
    - cron: '0 0 * * *'
  workflow_dispatch: # 手動実行ボタンを有効にする

jobs:
  update-process:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install @supabase/supabase-js puppeteer

      - name: Run Update Script
        env:
          YOUR_SUPABASE_URL: ${{ secrets.YOUR_SUPABASE_URL }}
          YOUR_SUPABASE_SERVICE_ROLE_KEY: ${{ secrets.YOUR_SUPABASE_SERVICE_ROLE_KEY }}
        run: node update_robot.js

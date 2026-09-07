# 完食提示詞菜單

## 部署到 GitHub Pages

1. 建立一個新的 GitHub repository。
2. 解壓縮後，**進到這個資料夾內部**，把裡面的檔案與資料夾全選上傳到 repo 根目錄。
   根目錄應該長這樣（不要多包一層資料夾）：

   ```
   index.html
   support.js
   assets/
   ds/
   ```

3. 進入 repo → Settings → Pages。
4. Source 選 `Deploy from a branch`，Branch 選 `main` / `/ (root)`，按 Save。
5. 等 1–2 分鐘，網址會是 `https://<你的帳號>.github.io/<repo 名稱>/`。

因為 GitHub Pages 是 https，「複製提示詞」按鈕在上面可以正常運作。

## 檔案說明

- `index.html` — 網站主檔（提示詞內容都在裡面，要改文字改這個檔）
- `support.js` — 頁面執行需要的程式
- `assets/` — logo 與插圖
- `ds/` — 完食設計系統（色彩、字級、元件）。字型由 emfont CDN 載入同一套源泉圓體 TW，所以套件內沒有大檔字型。

四個項目的相對位置不能改，否則樣式會失效。資料夾名稱也不要改成 `_` 開頭，GitHub Pages 會忽略。

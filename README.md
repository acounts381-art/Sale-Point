# Sale Point – Android APK (GitHub Actions)

Is project me Sale Point app ki web file (`www/index.html`) hai. GitHub apne aap isse Android APK bana deta hai.

## APK banane ke steps

1. GitHub par naya repository banao (jese `sale-point`).
2. Is folder ki **saari files** (hidden folder `.github` samet) repository me daalo. Terminal se:

   ```
   git init
   git add .
   git commit -m "Sale Point app"
   git branch -M main
   git remote add origin https://github.com/YOUR-NAME/sale-point.git
   git push -u origin main
   ```

3. GitHub me repository ka **Actions** tab kholo. **Build Android APK** workflow push par khud chal jata hai
   (ya **Run workflow** dabao).
4. Build khatam hone par (5 se 10 minute) run ka page kholo, neeche **Artifacts** me `sale-point-apk` download karo.
5. Zip kholo, andar `app-debug.apk` hai. Isse phone me copy karke install karo
   (phone me "Install unknown apps" allow karna hoga).

## Zaroori baatein

- Data (products, retailers, sales, ledger) phone ke andar save rehta hai. App uninstall karne ya phone ka app data clear karne par ye khatam ho jata hai.
- Location tracking tab chalti hai jab app khula ho. Phone lock ho ya app band ho to GPS ruk jata hai.
- Excel/CSV export file banake share menu kholta hai, wahan se Drive, WhatsApp ya Files me save karo.
- App badalni ho to `www/index.html` edit karke dobara push karo, naya APK ban jayega.
- Ye debug APK hai (testing aur khud ke istemal ke liye theek). Play Store ke liye signed release build alag se banani hogi.
- App ka naam `capacitor.config.json` me `appName`, aur package naam `appId` me hai.

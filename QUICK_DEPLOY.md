# 🚀 Quick Deploy Script

This script helps you quickly deploy the Bridge the Canyon app.

## Choose Your Deployment Method

### 1️⃣ Deploy to Vercel (Recommended - Easiest)

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd transition-platform-app

# Deploy
vercel deploy --prod

# Follow the prompts:
# - Setup and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? bridge-the-canyon
# - Directory? ./
# - Build command? npm run build
# - Output directory? dist
```

**Result**: You'll get a URL like `https://bridge-the-canyon.vercel.app`

### 2️⃣ Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to project
cd transition-platform-app

# Build the app
npm run build

# Deploy
netlify deploy --prod --dir=dist

# Follow prompts to create new site
```

**Result**: You'll get a URL like `https://bridge-the-canyon.netlify.app`

### 3️⃣ Build Mobile Apps

#### iOS (TestFlight)
```bash
cd transition-platform-app

# Build
npm run build
npx cap sync ios

# Open in Xcode
npx cap open ios

# In Xcode:
# 1. Select your team
# 2. Product → Archive
# 3. Distribute → TestFlight
```

#### Android (APK for testing)
```bash
cd transition-platform-app

# Build
npm run build
npx cap sync android

# Open in Android Studio
npx cap open android

# In Android Studio:
# Build → Build Bundle(s) / APK(s) → Build APK(s)
# Find APK in: android/app/build/outputs/apk/debug/
```

---

## 📧 Sharing with Colleagues

### Web App
After deploying to Vercel/Netlify, share the URL:

```
Hi team! 👋

Check out Bridge the Canyon - our new transition acceleration platform:
🔗 https://your-app-url.com

Features:
✅ Role-specific learning paths
✅ Interactive assessments
✅ Interview preparation
✅ Progress tracking

Works on any device - just open in your browser!
On mobile, tap "Add to Home Screen" for an app-like experience.
```

### Mobile App (TestFlight)
After uploading to TestFlight:

```
Hi team! 👋

I've set up Bridge the Canyon on TestFlight for testing.

iOS Users:
1. Install TestFlight from the App Store
2. Click this link: [TestFlight Link]
3. Install "Bridge the Canyon"

The app will update automatically as we make improvements!
```

### APK (Android - Quick Testing)
After building the APK:

```
Hi Android users! 👋

Download the Bridge the Canyon app here:
[Link to APK file - use Dropbox, Google Drive, etc.]

To install:
1. Download the APK
2. Enable "Install from Unknown Sources" in Settings
3. Open the APK file to install

Note: This is a test version. We'll have it on Play Store soon!
```

---

## 🎯 One-Line Deploy Commands

**Vercel (after npm install -g vercel)**:
```bash
cd transition-platform-app && vercel deploy --prod
```

**Netlify (after npm install -g netlify-cli)**:
```bash
cd transition-platform-app && npm run build && netlify deploy --prod --dir=dist
```

---

## 📱 Get It on Home Screen (PWA)

Instruct users to add the web app to their home screen:

**iOS (Safari)**:
1. Open the app URL in Safari
2. Tap the Share button (box with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

**Android (Chrome)**:
1. Open the app URL in Chrome
2. Tap the three dots menu
3. Tap "Add to Home Screen"
4. Tap "Add"

---

**Questions?** Check MOBILE_DEPLOYMENT.md for detailed instructions.

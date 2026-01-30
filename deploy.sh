#!/bin/bash

# Bridge the Canyon - Quick Deployment Script
# This script helps you deploy the app quickly

set -e

echo "🌉 Bridge the Canyon - Deployment Helper"
echo "========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "transition-platform-app/package.json" ]; then
    echo "❌ Error: Please run this script from the ArtemisTAP directory"
    exit 1
fi

cd transition-platform-app

echo "📦 Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

echo ""
echo "Choose your deployment method:"
echo "1) 🌐 Build for Web (PWA)"
echo "2) 📱 Setup iOS (requires macOS & Xcode)"
echo "3) 🤖 Setup Android (requires Android Studio)"
echo "4) 🚀 Deploy to Vercel (requires Vercel CLI)"
echo "5) 🎯 Deploy to Netlify (requires Netlify CLI)"
echo "6) 📊 Just build and show me the files"
echo ""
read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo ""
        echo "🌐 Building web version..."
        npm run build
        echo ""
        echo "✅ Build complete!"
        echo "📁 Files are in: transition-platform-app/dist/"
        echo ""
        echo "Next steps:"
        echo "1. Deploy 'dist' folder to any web host"
        echo "2. Or run: npm run preview (to test locally)"
        echo "3. Or use option 4 or 5 to deploy to Vercel/Netlify"
        ;;
    2)
        echo ""
        echo "📱 Setting up iOS..."
        if [[ "$OSTYPE" != "darwin"* ]]; then
            echo "❌ iOS development requires macOS"
            exit 1
        fi
        npm run build
        npx cap sync ios
        echo ""
        echo "✅ iOS setup complete!"
        echo "Opening Xcode..."
        npx cap open ios
        echo ""
        echo "In Xcode:"
        echo "1. Select your Apple Developer team"
        echo "2. Connect an iOS device or simulator"
        echo "3. Click Run button to test"
        echo "4. Product → Archive to prepare for TestFlight"
        ;;
    3)
        echo ""
        echo "🤖 Setting up Android..."
        npm run build
        npx cap sync android
        echo ""
        echo "✅ Android setup complete!"
        echo "Opening Android Studio..."
        npx cap open android
        echo ""
        echo "In Android Studio:"
        echo "1. Wait for Gradle sync to complete"
        echo "2. Connect an Android device or use emulator"
        echo "3. Click Run button to test"
        echo "4. Build → Build Bundle/APK for distribution"
        ;;
    4)
        echo ""
        echo "🚀 Deploying to Vercel..."
        if ! command -v vercel &> /dev/null; then
            echo "Installing Vercel CLI..."
            npm install -g vercel
        fi
        echo ""
        echo "Starting Vercel deployment..."
        vercel deploy --prod
        echo ""
        echo "✅ Deployment initiated!"
        echo "Follow the prompts above to complete deployment"
        ;;
    5)
        echo ""
        echo "🎯 Deploying to Netlify..."
        if ! command -v netlify &> /dev/null; then
            echo "Installing Netlify CLI..."
            npm install -g netlify-cli
        fi
        npm run build
        echo ""
        echo "Starting Netlify deployment..."
        netlify deploy --prod --dir=dist
        echo ""
        echo "✅ Deployment complete!"
        ;;
    6)
        echo ""
        echo "📊 Building..."
        npm run build
        echo ""
        echo "✅ Build complete!"
        echo ""
        echo "📁 Distribution files:"
        ls -lh dist/
        echo ""
        echo "📦 Build summary:"
        du -sh dist/
        echo ""
        echo "You can now:"
        echo "• Test locally: npm run preview"
        echo "• Deploy to web host of your choice"
        echo "• Use scripts 4 or 5 for quick deploy"
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "================================================"
echo "📚 For more detailed instructions, see:"
echo "   • MOBILE_DEPLOYMENT.md"
echo "   • QUICK_DEPLOY.md"
echo "   • PROJECT_STATUS.md"
echo "================================================"
echo ""

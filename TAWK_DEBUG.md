# Tawk.to Debugging Guide

## Changes Made

Added detailed console logging to the Tawk.to widget to help debug production issues.

## How to Debug on Production

1. **Open your production website**
2. **Open Browser DevTools** (F12 or Right-click → Inspect)
3. **Go to the Console tab**
4. **Look for these messages:**

   - ✅ `"Loading Tawk.to widget..."` - Widget initialization started
   - ✅ `"Tawk.to script loaded successfully"` - Script downloaded
   - ✅ `"Tawk.to widget fully loaded and ready"` - Widget ready
   - ✅ `"Scheduling Tawk.to auto-popup in 10 seconds..."` - Auto-popup scheduled
   - ✅ `"Auto-maximizing Tawk.to chat widget"` - Popup triggered

5. **Common Issues & Solutions:**

   ### Widget Not Visible
   - **Check Console** - Look for any error messages
   - **Check Network Tab** - Verify `embed.tawk.to` script loads (Status: 200)
   - **Clear localStorage** - Open Console and run: `localStorage.removeItem('tawk_popup_shown')`
   - **Check Ad Blockers** - Disable any ad blockers or privacy extensions
   - **Check CSP Headers** - Ensure your hosting allows `embed.tawk.to`

   ### Widget Loads on Localhost But Not Production
   - **Verify Tawk.to Property ID** - The ID `696251def40b4a197e1db44a` should match your Tawk.to dashboard
   - **Check Domain Whitelist** - In Tawk.to dashboard, ensure your production domain is whitelisted
   - **Check HTTPS** - Tawk.to requires HTTPS on production
   - **Check Build** - Rebuild and redeploy: `npm run build`

   ### Auto-Popup Not Working
   - The popup only appears once per browser (localStorage)
   - To test again: `localStorage.removeItem('tawk_popup_shown')` and refresh
   - Wait 10 seconds after page load

## Quick Test Commands (Browser Console)

```javascript
// Check if Tawk is loaded
window.Tawk_API

// Check if chat is minimized
window.Tawk_API.isChatMinimized()

// Manually maximize chat
window.Tawk_API.maximize()

// Clear popup flag to test auto-popup again
localStorage.removeItem('tawk_popup_shown')

// Check all Tawk methods available
Object.keys(window.Tawk_API).filter(k => typeof window.Tawk_API[k] === 'function')
```

## Verifying in Tawk.to Dashboard

1. Log into [Tawk.to Dashboard](https://dashboard.tawk.to/)
2. Go to **Administration** → **Channels** → **Chat Widget**
3. Verify your property ID matches: `696251def40b4a197e1db44a`
4. Check **Visibility** settings - ensure it's set to "Always Show"
5. Check **Domains** - ensure your production domain is allowed

## If Still Not Working

Contact me with:
1. Screenshot of browser console
2. Screenshot of Network tab filtered by "tawk"
3. Your production URL
4. What you see in Tawk.to dashboard for "Current Visitors"

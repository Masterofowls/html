# 🚀 Deployment Guide — HTML/CSS Learning Platform

## Quick Deployment Steps

### Prerequisites
- Node.js 18+ installed
- GitHub CLI (`gh`) installed from https://cli.github.com/
- Git repository initialized with `origin` remote

### Step 1: Verify Build

```powershell
npm run build
```

✅ You should see:
```
✓ 41 modules transformed.
dist/index.html                   0.52 kB
dist/assets/index-*.css          15.01 kB
dist/assets/index-*.js          227.75 kB
✓ built in 92ms
```

### Step 2: Deploy to GitHub Pages

**Option A: Using npm script**
```powershell
npm run deploy
```

**Option B: Using PowerShell script**
```powershell
pwsh -File deploy.ps1
```

**Option C: Manual deployment**
```powershell
npm run build
gh pages deploy dist
```

### Step 3: Verify Deployment

After 2-3 minutes, visit:
```
https://YOUR_GITHUB_USERNAME.github.io/html-css-learning/
```

## 📋 What Gets Deployed

```
dist/
├── index.html                 (0.52 KB)
├── assets/
│   ├── index-*.css           (15.01 KB gzipped: 3.37 KB)
│   └── index-*.js            (227.75 KB gzipped: 71.23 KB)
└── Other assets
```

## ✅ Deployment Checklist

- [ ] Node.js 18+ installed
- [ ] GitHub CLI installed
- [ ] Git repository with `origin` remote
- [ ] `npm install` completed
- [ ] `npm run build` succeeds
- [ ] Ready to run `npm run deploy`

## 🔍 Verify Deployment Success

1. **Check build output**
   ```powershell
   npm run build
   ```
   Look for: `✓ built in 92ms`

2. **Verify gh CLI is installed**
   ```powershell
   where.exe gh
   ```
   Should show path like: `C:\Program Files\GitHub CLI\gh.exe`

3. **Check git remote**
   ```powershell
   git remote -v
   ```
   Should show an `origin` URL pointing to GitHub

4. **Check GitHub Pages settings**
   - Go to: https://github.com/YOUR_USERNAME/REPO_NAME/settings/pages
   - Should show deployment from `gh-pages` branch

## 📱 After Deployment

- **Site URL**: `https://YOUR_USERNAME.github.io/html-css-learning/`
- **Update cache**: Hard refresh (Ctrl+Shift+R)
- **Deploy time**: 2-3 minutes for changes to appear
- **Verify status**: Check GitHub deployments tab

## 🐛 Troubleshooting

### Build fails: "TypeScript error"
```powershell
# Clean and rebuild
rm -r dist
npm run build
```

### `gh pages deploy` command not found
```powershell
# Install GitHub CLI
# From: https://cli.github.com/
# Or with winget:
winget install GitHub.cli

# Add to PATH
$env:PATH += ";C:\Program Files\GitHub CLI"
```

### "No git remote 'origin' found"
```powershell
# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/html-css-learning.git
git remote set-url origin https://github.com/YOUR_USERNAME/html-css-learning.git
```

### Site not appearing at custom URL
- Wait 2-3 minutes for GitHub Pages to process
- Hard refresh browser (Ctrl+Shift+R)
- Check GitHub Actions tab for deployment status
- Verify base URL in `vite.config.ts` matches `/html-css-learning/`

## 📊 Build Statistics

| Metric | Size |
|--------|------|
| HTML | 0.52 kB |
| CSS Bundle | 15.01 kB (gzipped: 3.37 kB) |
| JS Bundle | 227.75 kB (gzipped: 71.23 kB) |
| **Total (gzipped)** | **~75 kB** |
| Build Time | ~92 ms |
| Modules | 41 |

## 📝 Environment Variables

Currently using:
- `VITE_BASE_PATH`: `/html-css-learning/` (configured in vite.config.ts)

## 🔐 Security

- ✅ No secrets in code
- ✅ No API keys exposed
- ✅ Safe iframe sandbox for previews
- ✅ CSP-friendly setup

## 📚 Next Steps After Deployment

1. **Test on GitHub Pages**
   - Visit live site
   - Test all lessons
   - Check responsive design
   - Test code editor functionality

2. **Share with others**
   - Share the GitHub Pages URL
   - Add link to GitHub repository README
   - Share on social media/forums

3. **Future improvements**
   - Add more lessons
   - Implement user accounts
   - Add progress tracking
   - Add code challenge system

---

**Need help?** Check the main [README.md](./README.md) for more details.

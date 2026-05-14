# GitHub Pages Deployment Script for HTML/CSS Learning Platform
# Usage: pwsh -File deploy.ps1

# Colors for output
$color_success = @{ ForegroundColor = 'Green' }
$color_info = @{ ForegroundColor = 'Cyan' }
$color_error = @{ ForegroundColor = 'Red' }

Write-Host "🚀 Deploying HTML/CSS Learning Platform to GitHub Pages..." @color_info

# Step 1: Check if we're in the right directory
$projectName = Split-Path -Leaf (Get-Location)
if ($projectName -ne 'html-css-learning') {
  Write-Host "❌ Error: Not in html-css-learning directory" @color_error
  exit 1
}

# Step 2: Check if gh CLI is installed
$ghPath = where.exe gh 2>$null
if (-not $ghPath) {
  Write-Host "❌ Error: GitHub CLI (gh) not found. Please install it first." @color_error
  Write-Host "   Download from: https://cli.github.com/" @color_info
  exit 1
}

Write-Host "✓ GitHub CLI found at: $ghPath" @color_success

# Step 3: Build the project
Write-Host "`n📦 Building project..." @color_info
npm run build
if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Build failed!" @color_error
  exit 1
}
Write-Host "✓ Build completed successfully" @color_success

# Step 4: Check if dist directory exists
if (-not (Test-Path 'dist')) {
  Write-Host "❌ Error: dist directory not found" @color_error
  exit 1
}

# Step 5: Deploy using gh CLI
Write-Host "`n🌐 Deploying to GitHub Pages..." @color_info
Write-Host "   Repository: origin" @color_info

# Check git remote
$remote = git remote get-url origin 2>$null
if (-not $remote) {
  Write-Host "❌ Error: No git remote 'origin' found" @color_error
  exit 1
}

Write-Host "   Remote URL: $remote" @color_info

# Deploy
gh pages deploy dist --dir dist
if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Deployment failed!" @color_error
  exit 1
}

Write-Host "`n✅ Deployment completed successfully!" @color_success
Write-Host "`n📍 Your site is now live at:" @color_info

# Parse GitHub URL to show the live site
$owner = $remote -replace '.*[:/](\w+)/.*', '$1'
$repo = $remote -replace '.*/', '' -replace '\.git$', ''
$siteUrl = "https://$owner.github.io/$repo/"
Write-Host "   $siteUrl" @color_success

Write-Host "`n💡 Tips:" @color_info
Write-Host "   • Site updates take a few minutes to propagate"
Write-Host "   • Clear browser cache if changes don't appear immediately"
Write-Host "   • Check deployment status at: https://github.com/$owner/$repo/deployments"

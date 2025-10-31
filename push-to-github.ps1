# PowerShell script to initialize Git and push to GitHub
# Repository: Ultroniq-IT-Solution-LLP-Website

Write-Host "Setting up Git repository..." -ForegroundColor Green

# Check if Git is installed
$gitPath = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitPath) {
    Write-Host "Git is not installed or not in PATH." -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "After installation, restart PowerShell and run this script again." -ForegroundColor Yellow
    exit 1
}

Write-Host "Git found! Initializing repository..." -ForegroundColor Green

# Initialize Git repository
git init

# Configure Git user
git config user.name "AshishPoojary22"
git config user.email "ashishmurphy@gmail.com"

# Add all files
Write-Host "Adding files..." -ForegroundColor Green
git add .

# Create initial commit
Write-Host "Creating commit..." -ForegroundColor Green
git commit -m "Initial commit: Ultroniq IT Solution LLP Website"

# Add remote repository
Write-Host "Adding remote repository..." -ForegroundColor Green
git remote add origin https://github.com/AshishPoojary22/Ultroniq-IT-Solution-LLP-Website.git

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Green
Write-Host "Note: You may be prompted for your GitHub credentials." -ForegroundColor Yellow
git branch -M main
git push -u origin main

Write-Host "`nDone! Your code has been pushed to GitHub." -ForegroundColor Green
Write-Host "Repository URL: https://github.com/AshishPoojary22/Ultroniq-IT-Solution-LLP-Website" -ForegroundColor Cyan





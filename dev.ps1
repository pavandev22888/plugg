# PlugHub Development Setup
# Windows PowerShell script for quick start

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   PlugHub - VST3 Plugin Manager" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Set PATH
$env:PATH = "C:\Program Files\nodejs;$env:PATH"

# Check Node.js
Write-Host "Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = & cmd /c "set PATH=C:\Program Files\nodejs;!PATH! & node --version"
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js not found. Please install Node.js from https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
& cmd /c "set PATH=C:\Program Files\nodejs;!PATH! & npm install"

if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Starting development server..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "🚀 Dev server: http://localhost:5173" -ForegroundColor Green
Write-Host "📱 PlugHub is starting..." -ForegroundColor Cyan
Write-Host ""

& cmd /c "set PATH=C:\Program Files\nodejs;!PATH! & npm run dev"

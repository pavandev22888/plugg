@echo off
setlocal enabledelayedexpansion

echo.
echo ========================================
echo       PlugHub Full Build Script
echo ========================================
echo.

set "PATH=C:\Program Files\nodejs;!PATH!"
set "CSC_IDENTITY_AUTO_DISCOVERY=false"

echo Cleaning old builds...
rmdir /s /q dist >nul 2>&1
rmdir /s /q dist-electron >nul 2>&1

echo Building React application...
call npm run build
if errorlevel 1 goto error

echo.
echo Building Electron package...
call npm run electron-build
if errorlevel 1 goto error

echo.
echo ========================================
echo     ✓ Build successful!
echo ========================================
echo.
echo Your PlugHub installer is ready!
echo Location: dist\PlugHub-0.1.0.exe
echo.
echo Opening dist folder...
timeout /t 2 /nobreak
start dist
echo.
goto end

:error
echo.
echo ✗ Build failed!
echo.
pause

:end

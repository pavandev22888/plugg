@echo off
setlocal enabledelayedexpansion

echo.
echo ========================================
echo       PlugHub Build Script
echo ========================================
echo.

REM Set PATH for Node.js
set "PATH=C:\Program Files\nodejs;!PATH!"

echo Step 1: Checking Node.js...
node --version
if errorlevel 1 goto error_node

echo Step 2: Installing dependencies...
call npm install
if errorlevel 1 goto error_install

echo.
echo Step 3: Building React application...
call npm run build
if errorlevel 1 goto error_build

echo.
echo Step 4: Creating Electron packages...
call npm run electron-build
if errorlevel 1 goto error_electron

echo.
echo ========================================
echo     ✓ Build successful!
echo ========================================
echo.
echo Your application is ready in the 'dist' folder:
echo   - PlugHub-0.1.0-nsis.exe (Installer)
echo   - PlugHub-0.1.0-portable.exe (Portable)
echo.
echo Opening dist folder...
start dist
echo.

goto end

:error_node
echo.
echo ERROR: Node.js not found!
echo Please install Node.js from: https://nodejs.org
echo.
pause
goto end

:error_install
echo.
echo ERROR: Failed to install dependencies!
echo.
pause
goto end

:error_build
echo.
echo ERROR: Failed to build React application!
echo.
pause
goto end

:error_electron
echo.
echo ERROR: Failed to create Electron packages!
echo.
pause
goto end

:end
echo.
pause

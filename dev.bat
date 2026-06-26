@echo off
echo ========================================
echo    PlugHub - VST3 Plugin Manager
echo ========================================
echo.
echo Setting up environment...
set "PATH=C:\Program Files\nodejs;!PATH!"

echo Installing dependencies...
call npm install --verbose

echo.
echo ========================================
echo Starting development server...
echo ========================================
echo.
echo 🚀 Open: http://localhost:5173
echo.

call npm run dev

pause

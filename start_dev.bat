@echo off
:: Setup PATH for Node.js (Playwright bundle) and NPM (Unity bundle)
set "PATH=C:\Users\pc\AppData\Local\ms-playwright-go\1.57.0;C:\Program Files\Unity\Hub\Editor\6000.2.6f2\Editor\Data\PlaybackEngines\WebGLSupport\BuildTools\Emscripten\node;%PATH%"

echo ===================================================
echo  Starting Bülent Köseoğlu Portfolio Dev Server
echo ===================================================
echo.
npm run dev
pause

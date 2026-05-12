@echo off
setlocal enabledelayedexpansion

REM ============================================================
REM  Titan Arbor Solutions — deploy script
REM
REM  What it does:
REM    1. Activates Node 22 via fnm (auto-detected from .nvmrc)
REM    2. Builds the site to catch errors before pushing
REM    3. Shows you what's changing
REM    4. Prompts for a commit message
REM    5. Stages, commits, and pushes to GitHub
REM    6. GitHub Actions deploys to titanarbor.com (~2 min)
REM
REM  Run by:
REM    Double-click this file in File Explorer, OR
REM    Open a terminal in the project folder and type: deploy.bat
REM ============================================================

cd /d "%~dp0"

echo.
echo ============================================
echo  Titan Arbor Solutions - Deploy
echo ============================================
echo.

REM ----- Locate fnm and activate Node 22 -----
where fnm >nul 2>&1
if errorlevel 1 (
  echo [error] fnm is not on your PATH.
  echo.
  echo If you just installed fnm, close this window and open a fresh
  echo terminal. If fnm has never been installed, run this in a regular
  echo terminal first:
  echo.
  echo     winget install --id Schniz.fnm
  echo     fnm install 22
  echo.
  pause
  exit /b 1
)

REM Source fnm's environment (sets PATH so node/npm point at the right version)
FOR /f "tokens=*" %%i IN ('fnm env --shell cmd') DO @%%i

REM Switch to Node 22 (auto-reads .nvmrc in this folder)
fnm use 22
if errorlevel 1 (
  echo [error] fnm couldn't activate Node 22. Try:
  echo     fnm install 22
  pause
  exit /b 1
)

echo.
node --version
echo.

REM ----- Build the site -----
echo === Building ===
call npm run build
if errorlevel 1 (
  echo.
  echo [error] Build failed. Fix the errors above before deploying.
  echo Nothing has been pushed.
  pause
  exit /b 1
)

REM ----- Check whether there are changes worth deploying -----
echo.
echo === Changes to deploy ===
git status --short

git diff --quiet HEAD >nul 2>&1
set HAS_UNSTAGED=%errorlevel%
git diff --cached --quiet HEAD >nul 2>&1
set HAS_STAGED=%errorlevel%
git ls-files --others --exclude-standard --error-unmatch . >nul 2>&1
set HAS_UNTRACKED=%errorlevel%

if "%HAS_UNSTAGED%"=="0" if "%HAS_STAGED%"=="0" if not "%HAS_UNTRACKED%"=="0" (
  echo.
  echo No changes to commit. Build was clean but there's nothing new to push.
  echo If you wanted to redeploy the same code, use the GitHub Actions
  echo "Re-run all jobs" button instead.
  pause
  exit /b 0
)

REM ----- Get a commit message -----
echo.
set "MSG="
set /p MSG="Commit message (or press Enter for 'Update site content'): "
if "!MSG!"=="" set MSG=Update site content

REM ----- Stage, commit, push -----
echo.
echo === Pushing ===
git add -A
git commit -m "!MSG!"
if errorlevel 1 (
  echo.
  echo [error] git commit failed.
  pause
  exit /b 1
)

git push
if errorlevel 1 (
  echo.
  echo [error] git push failed. Check your network and your GitHub
  echo credentials. You can re-run this script - the commit is already
  echo made locally and just needs to be pushed.
  pause
  exit /b 1
)

echo.
echo ============================================
echo  Done. Deploy is in progress.
echo  Live at https://titanarbor.com in ~2 min.
echo  Watch: https://github.com/SalvadorSTM/titanarbor/actions
echo ============================================
echo.
pause
exit /b 0

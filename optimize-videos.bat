@echo off
REM This script compresses videos using ffmpeg to reduce file sizes by 70-80%%
REM Install ffmpeg first: https://ffmpeg.org/download.html

echo Optimizing videos for web...
echo This will reduce file sizes from 36MB total to approximately 7-10MB
echo.

REM Check if ffmpeg is installed
where ffmpeg >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: ffmpeg is not installed or not in PATH
    echo Please install ffmpeg from https://ffmpeg.org/download.html
    pause
    exit /b 1
)

REM Create backup directory
if not exist "public\assets\videos\backup" mkdir "public\assets\videos\backup"

REM Backup original videos
echo Backing up original videos...
copy "public\assets\videos\Sample1.mp4" "public\assets\videos\backup\" >nul
copy "public\assets\videos\Sample2.mp4" "public\assets\videos\backup\" >nul
copy "public\assets\videos\Sample3.mp4" "public\assets\videos\backup\" >nul
copy "public\assets\videos\Sample4.mp4" "public\assets\videos\backup\" >nul

echo.
echo Compressing Sample1.mp4 (8.3MB -> ~1.5MB)...
ffmpeg -i "public\assets\videos\backup\Sample1.mp4" -c:v libx264 -crf 28 -preset slow -vf "scale=720:-2" -an -movflags +faststart "public\assets\videos\Sample1.mp4" -y

echo.
echo Compressing Sample2.mp4 (7.6MB -> ~1.4MB)...
ffmpeg -i "public\assets\videos\backup\Sample2.mp4" -c:v libx264 -crf 28 -preset slow -vf "scale=720:-2" -an -movflags +faststart "public\assets\videos\Sample2.mp4" -y

echo.
echo Compressing Sample3.mp4 (7.5MB -> ~1.4MB)...
ffmpeg -i "public\assets\videos\backup\Sample3.mp4" -c:v libx264 -crf 28 -preset slow -vf "scale=720:-2" -an -movflags +faststart "public\assets\videos\Sample3.mp4" -y

echo.
echo Compressing Sample4.mp4 (13MB -> ~2.4MB)...
ffmpeg -i "public\assets\videos\backup\Sample4.mp4" -c:v libx264 -crf 28 -preset slow -vf "scale=720:-2" -an -movflags +faststart "public\assets\videos\Sample4.mp4" -y

echo.
echo ========================================
echo Video optimization complete!
echo Original videos backed up to public\assets\videos\backup\
echo Total size reduced from ~36MB to ~7-10MB
echo ========================================
pause

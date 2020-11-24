@echo off

echo Installing/updating bot dependencies
call npm update >NUL

if NOT ["%errorlevel%"]==["0"] (
  pause
  exit /b %errorlevel%
)
@echo off
echo Starting Psyencia Full-Stack Application...
echo.

echo Starting Backend Server (Port 4000)...
start "Backend Server" cmd /k "cd /d D:\Downloads\project\psyencia-full-stack\backend && npm run server"

echo Starting Frontend Server (Port 5173)...
start "Frontend Server" cmd /k "cd /d D:\Downloads\project\psyencia-full-stack\frontend && npm run dev"

echo Starting Admin Server (Port 5174)...
start "Admin Server" cmd /k "cd /d D:\Downloads\project\psyencia-full-stack\admin && npm run dev"

echo.
echo All servers are starting...
echo.
echo Backend: http://localhost:4000
echo Frontend: http://localhost:5173
echo Admin: http://localhost:5174
echo.
echo Press any key to close this window...
pause 
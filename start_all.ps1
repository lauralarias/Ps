Write-Host "Starting Psyencia Full-Stack Application..." -ForegroundColor Green
Write-Host ""

Write-Host "Starting Backend Server (Port 4000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'D:\Downloads\project\psyencia-full-stack\backend'; npm run server"

Write-Host "Starting Frontend Server (Port 5173)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'D:\Downloads\project\psyencia-full-stack\frontend'; npm run dev"

Write-Host "Starting Admin Server (Port 5174)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd 'D:\Downloads\project\psyencia-full-stack\admin'; npm run dev"

Write-Host ""
Write-Host "All servers are starting..." -ForegroundColor Green
Write-Host ""
Write-Host "Backend: http://localhost:4000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:5173" -ForegroundColor Cyan
Write-Host "Admin: http://localhost:5174" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press any key to close this window..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 
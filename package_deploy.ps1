Write-Host "Building Frontend..." -ForegroundColor Cyan
Set-Location frontend
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Error "Frontend build failed!"
    exit 1
}
Set-Location ..

Write-Host "Creating zip files for cPanel upload..." -ForegroundColor Cyan

# Zip Frontend
if (Test-Path frontend.zip) { Remove-Item frontend.zip }
Compress-Archive -Path frontend/dist/* -DestinationPath frontend.zip -Force

# Zip Backend
if (Test-Path backend.zip) { Remove-Item backend.zip }
if (Test-Path temp_backend) { Remove-Item temp_backend -Recurse -Force }
New-Item -ItemType Directory -Path temp_backend | Out-Null
Copy-Item -Path backend/* -Destination temp_backend -Recurse -Exclude "node_modules", ".env" -Force
Compress-Archive -Path temp_backend/* -DestinationPath backend.zip -Force
Remove-Item temp_backend -Recurse -Force

Write-Host "`nZips created successfully!" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
Write-Host "1. 'frontend.zip' -> Upload to cPanel's 'public_html' and extract." -ForegroundColor Yellow
Write-Host "2. 'backend.zip' -> Upload to cPanel's Node.js root folder and extract." -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Green

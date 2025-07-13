Write-Host "Adding files to git..."
git add .
Write-Host "Committing changes..."
git commit -m "Fix build by removing Google OAuth temporarily"
Write-Host "Pushing to GitHub..."
git push origin main
Write-Host "Done!" 
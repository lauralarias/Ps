@echo off
cd /d "D:\Downloads\project\psyencia-full-stack"
echo Adding files...
git add .
echo Committing...
git commit -m "Fix build by removing Google OAuth"
echo Pushing...
git push origin main
echo Done!
pause 
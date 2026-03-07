$src = "$env:USERPROFILE\.cursor\projects\C-Users-FX506-AppData-Local-Temp-342e14fc-fcd0-4e03-b156-8d5bf736e0a3\assets"
$dst = ".\public\projects"
if (Test-Path $src) {
  Copy-Item "$src\*.png" $dst -Force
  Write-Host "OK: images copiees dans public/projects"
} else {
  Write-Host "Dossier source introuvable. Copie les .png manuellement dans public/projects"
}

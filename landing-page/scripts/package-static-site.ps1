$sourceDir = "c:\aaa\agentsPalace\landing-page\out"
$zipFilePath = "c:\aaa\agentsPalace\landing-page\agents-palace-static-site.zip"

# Create a zip file
Compress-Archive -Path "$sourceDir\*" -DestinationPath $zipFilePath -Force

Write-Host "Static site has been packaged to: $zipFilePath"
Write-Host "You can send this zip file to your friend. They can extract it and open index.html in their browser."

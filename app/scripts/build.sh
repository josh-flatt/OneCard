#!/bin/bash

# Angular build
echo "Building Angular application..."
cd app/OneCard.client/
npm install
ng build
cd ../..

# .NET build
echo "Building .NET application..."
cd app/OneCard.server/
dotnet restore
dotnet build OneCard.server.sln
cd ../..

echo "Build process completed."

#!/bin/bash
set -e

# Configuration
SERVICE_NAME="portfolio-josephndelgado"
REGION="us-central1"

echo "Checking for Google Cloud Project..."
PROJECT_ID=$(gcloud config get-value project)

if [ -z "$PROJECT_ID" ]; then
  echo "Error: No Google Cloud Project selected. Please run 'gcloud config set project [PROJECT_ID]'."
  exit 1
fi

echo "Deploying to Project: $PROJECT_ID"
echo "Service: $SERVICE_NAME"
echo "Region: $REGION"

# Build and push the image using Cloud Build (simplest for Cloud Run)
echo "Building and submitting image to Cloud Build..."
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME .

# Deploy to Cloud Run
echo "Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated

echo "Deployment complete!"

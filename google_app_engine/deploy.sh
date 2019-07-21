cd backend/
./deploy.sh
cd ../frontend/
./deploy.sh
cd ..
gcloud -q app deploy dispatch.yaml 

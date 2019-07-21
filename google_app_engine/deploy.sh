cd backend/
./deploy.sh || exit 1
cd ../frontend/
./deploy.sh || exit 1
cd ..
gcloud -q app deploy dispatch.yaml

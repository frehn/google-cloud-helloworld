cd google_app_engine
./deploy.sh || exit 1
cd ../google_functions
./deploy.sh || exit 1
cd ..

# my-test-nodejs-docker-qnap

## Creat the docker image in GitHub

## Deploy to QNAP Container Station
1. Login Qnap by SSH
2. Create the GitHub PAT. <br>
   [https://github.com/settings/tokens]()
   ```
   delete:packages, repo, write:packages
   ```
3. Create `key.txt` file and copy you PAT in this file.
   ```
   vim key.txt
   ```
4. Login GitHub docker.
   ```
   docker login https://docker.pkg.github.com --username bell-rabbit --password-stdin < key.txt
   ```
5. Get the GitHub docker image.
    ```
    docker pull docker.pkg.github.com/bell-rabbit/my-test-nodejs-docker-qnap/my-test-nodejs-docker-qnap:v1.0.0.0
    ```
6. Create your Container in QNAP Container Station UI.

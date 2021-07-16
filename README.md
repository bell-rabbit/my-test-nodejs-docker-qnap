# my-test-nodejs-docker-qnap
## Login your GitHub Account

1. Create the GitHub PAT. <br>
   [https://github.com/settings/tokens](https://github.com/settings/tokens)
   ```console
   $ delete:packages, repo, write:packages
   ```
2. Create `key.txt` file and copy you PAT in this file.
   ```console
   $ vim key.txt
   ```
3. Login GitHub docker.
   ```console
   $ docker login https://docker.pkg.github.com --username bell-rabbit --password-stdin < key.txt
   ```
4. Get the GitHub docker image.
    ```console
    $ docker pull docker.pkg.github.com/bell-rabbit/my-test-nodejs-docker-qnap/my-test-nodejs-docker-qnap:v1.0.0.0
    ```

## Creat the docker image in GitHub
1. Build Docker
   ```console
   $ docker build -t my-test-nodejs-docker-qnap-arm-v7 --no-cache --platform linux/arm/v7 .
   ```
2. Add a Tag
   ```console
   $ docker tag my-test-nodejs-docker-qnap-arm-v7 docker.pkg.github.com/bell-rabbit/my-test-nodejs-docker-qnap/my-test-nodejs-docker-qnap-linux-arm-v7:latest
   ```
3. Push Docker image to GitHub
   ```console
   $ docker push docker.pkg.github.com/bell-rabbit/my-test-nodejs-docker-qnap/my-test-nodejs-docker-qnap-linux-arm-v7:latest
   ```   


## Deploy to QNAP Container Station
1. Login Qnap by SSH
2. Get your Image in GitHub
6. Create your Container in QNAP Container Station UI.

## Deploy to Raspberry Pi

1. Get your Image in GitHub
2. list docker image
   ```console
   $ sudo docker image ls
   ```
3. Run Image
   ```console
   $ sudo docker run --name my-docker-qnap -d -p 80:8080 -v ~/docker/my-test-nodejs-docker-qnap:/usr/src/app/uploads -it docker.pkg.github.com/bell-rabbit/my-test-nodejs-docker-qnap/my-test-nodejs-docker-qnap:latest
   ```
4. list all container (IF)
   ```console
   $ sudo docker ps -a
   ```
5. delete container (IF)
   ```console
   $ sudo docker container rm 6c638d95e5e4
   ```
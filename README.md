# AppNodeDocker


docker build -t node-app .

docker run -p 3000:3000 --name app -d node-app 
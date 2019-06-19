# Spam Reporting Application

# How to run:

1. Clone repository `git clone https://github.com/sagett/spamReportingApp.git`

2. Install dependencies and run local dev server

```
cd ./spamReportngApp/ui
npm install
npm run-script start
```

3. Build docker image

```
cd ./spamReportngApp/server
docker-compose build && docker-compose up
```

4. Go to http://localhost:4460/


# How to run unit test:

`npm run test`

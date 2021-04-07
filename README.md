# PlantApp-backend

## Description
  Shop app where you can buy products and earn money selling those products more expensive
  
## Getting stated
   * To start the app run `npm start`
   > Make sure, you have setted the environments and the Database is running
   
## Environments
  Environments to start the app
  * PORT= The port for the server default `80`
  * NODE_ENV: app environment it can be `dev` or `pro`. default `dev`
  * JWT_SECRECT: Json web token secrect for the session `required`
  * User administrator
    * ADMIN_USERNAME: username for the user administrator. default `admin`
    * ADMIN_PASSWORD: password for the user administrator. default `root`
    * ADMIN_EMAIL: email for the user administrator. default `admin@gmail.com`
  * Database
    * POSTGRES_HOST: postgres host. default `localhost`,
    * POSTGRES_PORT: postgres port. default  `5432`,
    * POSTGRES_PASSWORD: postgres password. `required`,
    * POSTGRES_USER: postgres user. default `postgres`,
    * POSTGRES_DATABASE: psotgres database name. default `plant_test`
    
## Endpoints
  You can see the endpoints docs here https://app.swaggerhub.com/apis/Octavius/Shop-app/1.0.0

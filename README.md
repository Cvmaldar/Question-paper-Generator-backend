# Question-paper-Generator-backend

## Overview
This repository is just a backend of question paper generator based on easy medium hard questions on each subject using a dummy json data implemented using nodejs.

## NOTE
- All questions of same difficulty are considered to be of equal weighage provided subjects are same.
- Sample Data is taken and imported in mongodb atlas using command line mongoimport --uri mongodb+srv://username:PASSWORD @cluster0.kx8frzv.mongodb.net/<DATABASE> --collection <COLLECTION> --type FILETYPE --file FILENAME.
- Live Site Link: [`qpg-p025.onrender.com`](qpg-p025.onrender.com)

## Setup
To run the application, follow these steps:
1. Clone the repository to your local machine.
  ```
git clone https://github.com/Cvmaldar/Question-paper-Generator-backend.git
```
2. Navigate to the project directory.
  ```
cd question-paper-generator
```
3. Install dependencies using npm.

```
npm install
```
4. Create a `.env` file in the root directory and add your MongoDB connection URL and PORT in the following format.
```
MONGO_URL=mongodb://your-mongo-db-url
PORT=3000
```
5. Start the application.

```
npm start
```
The server will be running on [`http://localhost:3000`](http://localhost:3000) by default.

## Endpoints

    
1. ##### `/`
    - Method: GET
    - Description: Get the entire database.
      ![image](https://github.com/Cvmaldar/Question-paper-Generator-backend/assets/92266485/b26b1adb-5e79-403c-b37b-339c32a7d96b)

2. ##### `/addQuestion`
   - Method: POST
   - Description: To add a question in question store.
    ![image](https://github.com/Cvmaldar/Question-paper-Generator-backend/assets/92266485/a6671e77-aed8-453d-bf9f-59cd5076fe6c)

  
3. #### `/questions`
    -Method:GET
    -Description:To generate a question paper on each subject based on difficulty
     ![image](https://github.com/Cvmaldar/Question-paper-Generator-backend/assets/92266485/60b4c6c8-b171-4bbc-8191-98ea3f178ac1)
      ![image](https://github.com/Cvmaldar/Question-paper-Generator-backend/assets/92266485/a612ad50-5cd3-456a-92e8-f387d50d291c)

  

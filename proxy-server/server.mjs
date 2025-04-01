import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); //pull all environment files from .env into server

const app = express(); // create a new express application

const baseUrl = process.env.BASE_URL_FOR_API;
const apiKey = process.env.API_KEY;

app.use(cors(
    //tells the browser that these endpoints are safe, it will not error once we specify our endpoints
    {
        origin: ["http://localhost:5173", "http://localhost:5000"],
        methods: ["GET","POST"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }
))

// fetch the api using express application
// this will be specific to our api idk what it should look like
// all api related tasks should be here to shield it from the frontend
app.get('/api/recipes', async(request, response) => {
    const {query} = request.query; 
    const endpoint = `${baseUrl}?q=${query}&api-key=${apiKey}`;

    try {
        const response = await fetch(endpoint);
        if (!response.ok){
            // throw an error
            throw new Error(`error: ${response.status}`);
        }
        const data = await response.json();
        response.json(data);
    }
    catch(error){ // handle any errors that are thrown
        console.error("Error fetching data from API", error);
        response.status(500).json({error: 'Failed to fetch data'}); // 500 is standard error code from server

    }
}) 

app.listen(5000, () => { //5000 is port
    console.log("server is running");
})
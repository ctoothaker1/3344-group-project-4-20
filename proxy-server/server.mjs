import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); //pull all environment files from .env into server
const app = express(); // create a new express application
const baseUrl = "https://www.themealdb.com/api/json/v1/"; //
const apiKey = process.env.API_KEY;

app.use(cors());
console.log("✅ CORS middleware is running");

// this app.get is for searching the DB with a query
app.get('/api/recipes', async(request, response) => {
    const {query} = request.query; 

    console.log("query in server.mjs recieved from client:", query);

    const endpoint = `${baseUrl}${apiKey}/search.php?s=${query}`; //correct
    console.log('API endpoint:', endpoint);

    try {
        const apiResponse = await fetch(endpoint);
        
        // console.log("response from the api:", apiResponse);
        
        if (!response.status === 200) { // check if the response is not ok (200)
            // throw an error
            throw new Error(`error (server.mjs): ${apiResponse.status}`);
        }
        const data = await apiResponse.json();

        response.json(data);//send response back to the client
    }
    catch(error){ // handle any errors that are thrown
        console.error("Error fetching data from API (server.mjs)", error);
        // response.status(500).json({error: 'Failed to fetch data (server.mjs)'}); // 500 is standard error code from server

    }
}) 

app.get('/api/recipe/:idMeal', async(request,response) => {

    const {idMeal} = request.params;
    console.log(idMeal);
    const endpoint = `${baseUrl}${apiKey}/lookup.php?i=${idMeal}`;
    console.log('API endpoint:', endpoint);

    try {
        const apiResponse = await fetch(endpoint);
        if (!response.status === 200) { // check if the response is not ok (200)
            throw new Error(`error (server.mjs): ${apiResponse.status}`);
        }
        const data = await apiResponse.json();
        response.json(data); //send response back to the client
    }
    catch(error){ // handle any errors that are thrown
        console.error("Error fetching data from API (server.mjs)", error);
    }

});

app.listen(5000, () => { //5000 is port
    console.log("server is running on port 5000");
})
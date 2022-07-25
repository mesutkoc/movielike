# MOVIELIKE  - React Application

## Details

This project is about basic movies site that contains movies and their information as genre, overview, title and poster image.
All information of movies are fetched from server that mentioned above except number of views and votes. 
This number created with random number function.
User can select category and see movies that is about selected category.
User can add movies basket to watch later or remove movies from basket.

### Installation

First, clone this [repository](https://github.com/mesutkoc/movielike.git).

`git clone https://github.com/mesutkoc/movielike.git`

Install npm

`npm install`

Then, go moviedata folder and install json-server.

`npm install -g json-server`

After installation, run

`json-server --watch new_movies.json`

Then server will run on localhost:3000.

Second, open second terminal and go movielike folder.

To run project.

`npm run start`

Application will run on localhost:3001.

To run tests.

`npm run test`

**NOTE**
First run json-server, then run project.
This application uses 2 ports. One of them is runnig on PORT=3001.
If you are not use mac OS, please go package.json file and delete "PORT=3001" from start script.

It should be `"start": "react-scripts start"` 

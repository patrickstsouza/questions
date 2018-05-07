# Location Quiz questions web app

The web app in this repository is used to add questions to the location quiz database.

# Using it

1. Clone this repository and cd into the cloned folder:
```
git clone https://github.com/patrickstsouza/questions
cd questions
```
2. Open the index.html page on the browser.

# Serving via Location Quiz server

Instead of opening the web page from the local computer, the server can serve it via http.

1. Clone the 'server' repository located in https://github.com/patrickstsouza/server
```
git clone https://github.com/patrickstsouza/server
```

2. Clone this repository so that it is in the same directory as the 'server' repository:
```
git clone https://github.com/patrickstsouza/questions
```

The expected final layout is
```
(dir)
    |- server
    |- questions
```

3. Go into the 'server' repository
```
cd server
```

4. Configure the server as detailed in https://github.com/patrickstsouza/server

5. Run the service
```
node httpServer.js
```

6. Open the browser and point it to the server address (i.e., http://developer.cege.ucl.ac.uk:30278/). The questions config page should load.

# Configuring

If you need to point the app to another server that not the one above, you should open the 'questions.js' file and change the variable 'newQuestionEndpoint' to point to the correct server.

# Usage

When the webpage is opened, you can click on any point on the map. Doing this will place a marker at a geographic location and will show a form for entering the question and 4 answers.
Add all necessary information and press 'Add Question' button. The question will be added to the Location Quiz database.

Note that the map does not show existing questions, it only allows you to add new ones.
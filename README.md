# CovidProof by Technowiz
1. The dependencies folder contains important files without which the web app won't run. 
2. The Mysql Database folder contains all the sql schema and data required for the app. 
3. The node_modules folder contains required modules to run an app made using node.js.
4. The public folder contains the images, font files , javascript files and the css files required to render each page of the website.
5. The views folder contains all the .ejs files of the respective pages.
6. app.js is the place where all the connection between retrieval and insertion of information into the database takes place ie basically it is the file dealing with database connectivity.
7. The rest of the files are the ones usualy present by default in any web application.
8. Lets move on to how this app can be run.
9. After downloading all the files open mysql workbench on the computer and import the database folder.
10. Run xampp on your computer select mysql to be running on port 3307.
11. Open command prompt and navigate to the directory where all these files are situated and type "node app.js" and check if it gets connected and running.
12. Open browser and navigate to localhost:3000.
13. Check the various functionalities of our application. 
14. For logging in and other searching activities, refer to the username and passwords already inserted inside the database for correct authentication.
15. Hope you enjoy using our app. 


Medical authorities can enter the info of vaccinated patients at their centers, after which their fingerprint should be registered. This gets updated to the database. Proof is administered by producing a digital certificate after vaccination. This can be verified at Airports, Railway Stations. etc. This will ensure that the whole process of public transportation happens with fluidity, making sure that public health risk is maintained. It needs to be noted that the airport authorities will be given access to the database, verification can not only be done by fingerprint, but also by entered the Unique ID. After getting vaccinated, if the patient suffers from any side effects, the doctors can update that through our web portal. This will be helpful for keeping track and further improving the effectiveness of the vaccine for the future.


# SynopsysProject_2021-22

My project goal is to create a web application that can display when a powerline has fallen down.
It uses a raspberry pi and accelerometer to detect the fallen power line. The idea is to then relay the alert to a database, such as firebase.
Then the application will detect this and update its map. The application will have a map with markers to represent the different powerlines. When it gets the data,
It will change the color of the power line to a multitude of differnet colors, each meaning a different level of danger.
In firebase, there will be a database of all of the coordinates of the power line and their status. The way the application is supposed to be used is when a power
line falls down, it will alert the worker and where it is and the danger it poses to the roads and possible the creation of hazardous conditions. 

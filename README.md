# Check testers experience

> Simple app that lets us check testers how many bugs on what devices have they found. On the front-end, I used React. It is a form that contains two drop-down lists of multiple-choice made with [React Select](https://react-select.com/home) and a button. The back-end is built using Node.js and Express. As my database, I have used CSV files that are parsed using [fast-csv](https://c2fo.github.io/fast-csv/docs/introduction/getting-started).

<img src="https://imgupload.pl/images/2022/02/27/working_app.png" alt="working app" width="1000" height="600">

## Setup the project from the repo locally:
- First clone this repository
```shell
git clone https://github.com/Piotr-Grzybowski/applause.git
```
- Install all dependencies with command npm run install:all
``` shell
npm run install:all
```
- App requires CSV files to work. Files are already in `./backend/db/` folder. Don't do anything like changing names or removing them otherwise, the app may not work.

- Run the project with npm run start
```shell
npm run start
```
Command will start both server and client.

## How it works

As you can see at the beginning you have two drop-down lists with default values as 'All'.

<img src="https://imgupload.pl/images/2022/02/27/start_screen.png" alt="working app" width="1000" height="400">

Whether you chose any criteria or not, after pressing the button 'Check', below the form you should see the results of your search. The result is sorted by the number of total bugs filed by a tester.

<img src="https://imgupload.pl/images/2022/02/27/sorted.png" alt="sorted list of bugs" width="1000" height="600">

The result of your search is returned to you as a nested list. Next to the name of the tester you have the total amount of bugs filed by the tester that matches the given criteria. After clicking on the name you can see some more detailed information. To choose all countries and all devices you may either leave a drop-down list saying 'All Countries' and 'All devices' or just choose every device and every country.

## Possible errors

It may happen you won't find anything matching the given criteria. In that case, you should see an error like this one below.

<img src="https://imgupload.pl/images/2022/02/27/error.png" ale="error, couldn't find any records that matches given criteria" width="1000" height="600">


An app needs to fetch information about testers and devices so it could fill in drop-down lists with proper values. If for some reason, for example, network issues, it won't succeed you should see an error message like the one below.


<img src="https://imgupload.pl/images/2022/02/27/error_network4c15d1528b67d163.png" alt="network issue error" width="1000" height="300">
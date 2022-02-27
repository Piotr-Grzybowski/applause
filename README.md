# Check testers experience

> Simple app that let's us check testers how many bugs on what devices have they found. On frontend it is a simple form made with [React Select](https://react-select.com/home). Backend is built using Node.js and Express. As my database I have used csv files that are parsed using [fast-csv](https://c2fo.github.io/fast-csv/docs/introduction/getting-started).

<img src="https://imgupload.pl/images/2022/02/27/working_app.png" alt="working app" width="800" height="600">

## Setup the project from the repo locally:
- First clone this repository
```shell
git clone https://github.com/Piotr-Grzybowski/applause.git
```
- Install all dependencies with command npm run install:all
``` shell
npm run install:all
```
- App requires csv files to work. Files are already in `./backend/db/` folder. Don't do anything like changing name or removing them otherwise app may not work.

- Run project with npm run start
```shell
npm run start
```
Command will start both server and client.

## How it works

As you can see at the beginning you have two selects with default value of 'All'.

<img src="https://imgupload.pl/images/2022/02/27/app.png" alt="working app" width="800" height="400">

Either you chose any criteria after pressing the button 'Check' below the form you should see results of your search.

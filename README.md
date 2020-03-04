# Travel Quiz

Find location to visit that perfectly fits you right now!
Answer several questions and get cities list with gallery and list of tours available to travel to.
Just [follow here](https://travel-quiz.herokuapp.com) and give it a try!

## Technologies used
- React
- Redux
- SASS
- NodeJS Express-based server
- MongoDB with Mongoose ODM.
- Typescript
- Auth - jwt-based. Both local and 3d party (Google and Facebook). Password hash is being stored at DB. Generated jwt is being stored at session storage clietside.
- Cron to run daily jobs.
- Several 3d party apis implemented.
- Deployment: app is deployed to Heroku, DB is deployed to mLab.

## Project file structure
- Common package.json file at the root folder.
- There're 2 folders: server and client at the root folder for server and client apps respectively.
- Both server and client folders contain specific typescript configs at tsconfig.json.
- **Client app.**
    - App component checks whether the user is authorized or not and renders either MainLandingPage component (with  options to get authorized) or MainPage one that are wrapped with withAuth HOC providing auth methods.
    - MainPage renders all the app including Stepper component which renders all the question containers (stored at ``/client/src/pages/MainPage/QuestionnaireSteps``)
    - The library of reused components is located at ``/client/src/components/shared``.
- **Server app.**
    - Entry point is server.ts file located at ``/server/src/server.ts``. There're 2 api types: api for app and service api.
    - App api contains auth api, search of relevant cities to visit, search of city photos, search of suitable tours.
    - Service api contains DB prefilling with cities' data (tags, Tez Tour ids, coordinates).
    - There're 3 cron tasks firing each day. Temperature is being retrieved from Darksy api for each city. Currency exchange rate is being updated on a daily basis as well via exchangeratesapi.io api.
    - There's a static folder with a set of photos for each city. They're being updated daily via Pixabay api. Images are being stored at the correspinding folders.
    - Tours are being searched via tez-tour.com api.

## How to run the app locally?
- Add .env file with environment variables to the root folder (not committed to the repository)
- Run npm run dev-server to start server
- Run npm run dev-client to start client

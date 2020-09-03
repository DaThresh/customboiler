# customboiler

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />

### `npm run build`

Will build the application with the production webpack & babel configuration.

## Note on dependencies

Make sure to use `--save-dev` on all UI dependencies. This will ensure packages no longer needed once built for production will need to be installed when deployed.

When deploying use `npm ci --production` to install based upon the `package-lock.json` contents w/o the need for UI packages.
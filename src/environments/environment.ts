// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAvKEe6fBtfiezCDI0zj05uGmtc5eMKvuc",
    authDomain: "yuxilab.firebaseapp.com",
    databaseURL: "https://yuxilab.firebaseio.com",
    projectId: "yuxilab",
    storageBucket: "yuxilab.appspot.com",
    messagingSenderId: "526441142390"
  }
};

# Angular 1.x Wrapper for Auth0.js
[![CDNJS version](https://img.shields.io/cdnjs/v/angular-auth0.svg)](https://cdnjs.com/libraries/angular-auth0)

> **Warning**
> This module has been deprecated, as support for [AngularJS](https://angularjs.org/) ended in January 2022. This module will reach end-of-life on October 31, 2023. See the [Migration Guide](./MIGRATION_GUIDE.md) for more information.

This module provides a thin wrapper for [auth0.js](https://auth0.com/docs/libraries/auth0js).

### This is angular-auth0 v3 which is to be used with auth0.js v9 and higher. 

- For use with auth0.js v8, install angular-auth0 v2.
- For use with auth0.js v7, install angular-auth0 v1.

## Installation

```bash
# installation with npm
npm install --save angular-auth0

# installation with yarn
yarn add angular-auth0

# installation with bower
bower install --save angular-auth0
```

Ensure that both `auth0.js` and `angular-auth0.js` are loaded on the page.

```html
<!-- installed with npm or yarn --> 
<script src="node_modules/auth0-js/build/auth0.js"></script>
<script src="node_modules/angular-auth0/dist/angular-auth0.js"></script>
```

```html
<!-- installed with bower --> 
<script src="bower_components/auth0.js/build/auth0.js"></script>
<script src="bower_components/angular-auth0/dist/angular-auth0.js"></script>
```

## Usage

Bring in the `auth0.auth0` module.

```js
var app = angular.module('myApp', ['auth0.auth0']);
```

Configure Auth0.js by using `angularAuth0Provider`. If you haven't done so yet, [sign up for Auth0](https://auth0.com/signup), create a client app, and get your clientID and domain. To learn more about Auth0.js' API and the options it takes, see the [API documentation](https://auth0.com/docs/libraries/auth0js).

```js
app.config(function(angularAuth0Provider) {

  angularAuth0Provider.init({
    clientID: AUTH0_CLIENT_ID,
    domain: AUTH0_DOMAIN
  });
  
});
```

Use `auth0.js` from a controller or service.

```js
app.controller('loginController', function(angularAuth0) {

  var vm = this;
  vm.angularAuth0 = angularAuth0;
  
});
```

```html
<div ng-controller="loginController as vm">

  <button ng-click="vm.login(options)">Log In</button>

</div>
```

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [JSON Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free account in Auth0

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

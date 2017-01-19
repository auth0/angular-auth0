# Auth0.js for Angular 1.x

This module provides a thin wrapper for [auth0.js](https://auth0.com/docs/libraries/auth0js).

> Note: angular-auth0 v1 is to be used with auth0.js v7. For use with auth0.js v8, see the [v2 branch](https://github.com/auth0/angular-auth0/tree/v2).

See the [sample project](https://github.com/auth0-samples/auth0-angularjs-sample/tree/master/02-Custom-Login) for further detail on how to use angular-auth0.

## Installation

**Bower**

```bash
bower install angular-auth0
```

Ensure that both `auth0.js` and `angular-auth0.js` are loaded on the page.

```html
<script src="bower_components/auth0.js/build/auth0.js"></script>
<script src="bower_components/angular-auth0/build/angular-auth0.js"></script>
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
<div ng-controller="loginController as login">

  <button ng-click="login.login(options)">Log In</button>

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

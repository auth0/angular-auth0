# Migrating to auth0-angular

The following is a guide for developers wishing to migrate from using the `angular-auth0` library to `auth0-angular`.

There is **no direct upgrade path** from `angular-auth0` to another SDK that supports [AngularJS](http://angularjs.org/). As such, the recommended approach is to upgrade your app to [Angular](https://angular.io/) and use our [Auth0 Angular SDK](https://github.com/auth0/auth0-angular) that fully supports modern versions of Angular.

If upgrading your application is not possible, consider constructing a wrapper around an alternative SDK, such as [Auth0.js](https://github.com/auth0/auth0.js) or [Auth0 SPA SDK](https://github.com/auth0/auth0-spa-js).

## Upgrade your app to Angular and use the Auth0 Angular SDK

Angular is the modern rewrite of AngularJS and is fully supported by Google. Our Auth0 Angular SDK is the recommended way to integrate Auth0 into Angular apps.

> **Note**
> Auth0 Angular only supports the active versions of Angular as stated in the Angular documentation.

Perform the following actions to migrate to our Auth0 Angular SDK:

- Upgrade your application to use the Angular framework by following the official upgrade guides. The effort and time required to do this depends on the complexity of your application.
- Once your application has been upgraded, follow the instructions to install and configure the Auth0 Angular SDK.

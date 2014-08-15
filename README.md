angular-loading-spinner
=======================

Angular directive ajax loading indicator. This directive uses [urish angular-spinner](https://github.com/urish/angular-spinner) as the loading indicator.

Usage
--------------------------------
Include dependencies in your application:
- angular.js
- spin.js
- angular-spinner.js
- angular-loading-spinner.js


```html
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular.min.js"></script>
  <script type="text/javascript" src="http://fgnass.github.io/spin.js/spin.min.js"></script>
  <script type="text/javascript" src="angular-spinner.min.js"></script>
  <script type="text/javascript" src="angular-loading-spinner.js"></script>

```

Require `ngLoadingSpinner` as dependency in your main module.

```javascript
  angular.module('myapp', ['ngLoadingSpinner']);
```

Insert [angular-spinner](https://github.com/urish/angular-spinner)'s `us-spinner` directive anywhere in your html file. This directive - `us-spinner`, will be shown when there is pending ajax request and will be hidden upon completion of all ajax requests.

This directive also exposes `spinnerActive` model to the `$rootScope`. This can be useful if you want to hide some elements while your application is fetching data from the backend.

Read [angular-spinner docs](https://github.com/urish/angular-spinner) on how to customize the spinner and refer to [spin.js docs](http://fgnass.github.io/spin.js/) for more configuration options.

## License

Released under the terms of MIT License.

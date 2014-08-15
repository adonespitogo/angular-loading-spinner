angular-loading-spinner
=======================

Angular directive ajax loading indicator. This directive is using [urish angular-spinner](https://github.com/urish/angular-spinner).

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

Insert angular-spinner's `us-spinner` direcitive anywhere in your html file where you want the loading indicator to show. This directive (`us-spinner`) will be shown when there is pending ajax request and will be hidden upon completion of all ajax requests.

Read [angular-spinner docs](https://github.com/urish/angular-spinner) on how to customize the spinner and refer to [spin.js docs](http://fgnass.github.io/spin.js/) for more configuration options.
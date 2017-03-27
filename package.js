Package.describe({
  name: 'manuelro:math',
  version: '0.0.1',
  summary: 'Basic arithmetics helper for Meteor',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use('ecmascript');
  api.mainModule('math.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('manuelro:math');
  api.mainModule('math-tests.js');
});

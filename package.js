Package.describe({
  name: 'manuelro:blaze-math',
  version: '0.0.1',
  summary: 'Basic arithmetics Meteor helper for Blaze',
  git: 'https://github.com/manuelro/math',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use('ecmascript');
  api.use('templating@1.3.2', 'client');
  api.mainModule('math.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('manuelro:blaze-math');
  api.mainModule('math-tests.js');
});

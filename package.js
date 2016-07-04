// package metadata file for Meteor.js

var packageName = 'ldk:jquery-oembed-all';  // https://atmospherejs.com/oembed/jquery-oembed-all
var where = 'client';  // where to install: 'client' or 'server'. For both, pass nothing.

Package.describe({
  name: packageName,
  summary: 'Provides client side oembed support to help display embedded content in your Meteor app.',
  version: "1.1.0",
  git: 'https://github.com/nfl/jquery-oembed-all.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.addFiles([
    'jquery.oembed.js'
  ], where
  );
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);
  api.addFiles('test.js', where);
});

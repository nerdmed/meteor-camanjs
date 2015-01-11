Package.describe({
  name: 'nerdmed:camanjs',
  summary: 'CamanJs - canvas manipulation in Javascript / client side only',
  version: '0.0.1',
  git: 'https://github.com/nerdmed/meteor-camanjs.git'
});


Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('caman.full.js','client');
});

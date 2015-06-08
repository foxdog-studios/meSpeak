Package.describe({
  name: 'fds:mespeak',
  version: '0.0.2',
  summary: 'Text-To-Speech on the Web - works with web audio ',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('mespeak.js', ['client']);
  api.add_files('mespeak_config.json', ['client'], {isAsset: true});
  api.add_files('voices/en/en.json', ['client'], {isAsset: true});
  api.export('meSpeak');
});


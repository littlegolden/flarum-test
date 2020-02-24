import app from 'flarum/app';

import QQSettingsModal from './components/QQSettingModal';

app.initializers.add('flarumchina-auth-qq', () => {
  app.extensionSettings['flarumchina-auth-qq'] = () => app.modal.show(new QQSettingsModal());
});
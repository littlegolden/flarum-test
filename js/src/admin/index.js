import app from 'flarum/app';

import QQSettingsModal from './components/QQSettingModal';

app.initializers.add('flarumcn-auth-qq', () => {
  app.extensionSettings['flarumcn-auth-qq'] = () => app.modal.show(new QQSettingsModal());
});
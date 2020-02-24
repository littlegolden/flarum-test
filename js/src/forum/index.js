import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('flarum-auth-qq', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('qq',
      <LogInButton
        className="Button LogInButton--qq"
        icon="fab fa-qq"
        path="/auth/qq">
        {app.translator.trans('flarum-auth-qq.forum.log_in.with_qq_button')}
      </LogInButton>
    );
  });
});

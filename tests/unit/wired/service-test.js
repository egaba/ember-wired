import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | wired', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:wired');
    assert.ok(service);
  });
});

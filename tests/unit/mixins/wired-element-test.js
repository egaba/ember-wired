import EmberObject from '@ember/object';
import WiredElementMixin from 'ember-wired/mixins/wired-element';
import { module, test } from 'qunit';

module('Unit | Mixin | wired-element', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let WiredElementObject = EmberObject.extend(WiredElementMixin);
    let subject = WiredElementObject.create();
    assert.ok(subject);
  });
});

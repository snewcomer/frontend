import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | school', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:school');
    assert.ok(route);
  });
});

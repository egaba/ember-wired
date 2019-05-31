import Mixin from '@ember/object/mixin';

export default Mixin.create({
  wired: Ember.inject.service('wired'),
  animate: false,
  rewireInterval: 0,
  minRewireInterval: 150,
  rewire: Ember.observer('animate', 'wired.allowAnimations', function() {
    Ember.run.next(this.element, function() {
      this.requestUpdate();
    });
  }),
  scheduleNextRewire(interval = this.get('rewireInterval') || Math.round(Math.random() * 1200)) {
    if (this.get('animate') && this.get('wired.allowAnimations')) {
      Ember.run.later(this, function() {
        this.rewire();
        this.scheduleNextRewire();
      }, Math.max(interval, this.get('minRewireInterval')));
    }
  },
  init() {
    this._super(...arguments);
    if (this.get('animate')) {
      this.scheduleNextRewire();
    }
  },
});

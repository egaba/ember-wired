import { observer } from '@ember/object';
import { and } from '@ember/object/computed';
import { next, cancel, later } from '@ember/runloop';
import { inject as service } from '@ember/service';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  wired: service('wired'),
  animated: false,
  rewireInterval: 0,
  minRewireInterval: 150,
  rewire() {
    if (this.get('_state') === 'inDOM' && this.element) {
      next(this.element, function() {
        if (this) {
          try {
            this.requestUpdate();
          } catch(e) { /* unable to rewire */ }
        }
      });
    }
  },
  animate: and('animated', 'wired.allowAnimations'),
  cancelScheduledRewire() {
    const nextRewire = this.get('nextRewire') || null;

    if (nextRewire) {
      cancel(nextRewire);
      if (this.get('_state') === 'inDOM') {
        this.set('nextRewire', null);
      }
    }
  },
  scheduleNextRewire: observer('animate', function(interval = this.get('rewireInterval') || Math.round(Math.random() * 1200)) {
    this.cancelScheduledRewire();

    if (this.get('animate') && this.get('_state') === 'inDOM') {
      const nextScheduledRewire = later(this, function() {
        this.rewire();
        this.scheduleNextRewire();
      }, Math.max(interval, this.get('minRewireInterval')));

      this.set('nextRewire', nextScheduledRewire);
    }
  }),
  didInsertElement() {
    this._super(...arguments);
    this.scheduleNextRewire();
  },
  willDestroyElement() {
    this._super(...arguments);
    this.cancelScheduledRewire();
  },
});

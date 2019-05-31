import Component from '@ember/component';
import layout from './template';
import Wired from 'ember-wired/mixins/wired-element';

export default Component.extend(Wired, {
  layout,
  tagName: 'wired-combo',
  attributeBindings: ['disabled', 'selected'],

  didInsertElement() {
    this.element.addEventListener('selected', (e) => {
      if (this.change) {
        this.change(e);
      }
    });
  }
});

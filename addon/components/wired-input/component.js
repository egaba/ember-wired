import { next } from '@ember/runloop';
import { observer } from '@ember/object';
import Component from '@ember/component';
import layout from './template';
import Wired from 'ember-wired/mixins/wired-element';

export default Component.extend(Wired, {
  layout,
  tagName: 'wired-input',
  disabled: false,
  placeholder: 'placeholder',
  type: 'text',
  value: '',
  attributeBindings: ['placeholder', 'disabled', 'type', 'value', 'blur:onblur'],
  clearValue: observer('value', function() {
    const value = this.get('value');
    if (!value) {
      this.element.pendingValue = value;
    }
  }),
  didInsertElement() {
    this._super(...arguments);

    this.element.pendingValue = this.get('value');

    next(this.element, function() {
      this.firstUpdated();
    });
  }
});

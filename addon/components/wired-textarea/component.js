import { next } from '@ember/runloop';
import Component from '@ember/component';
import layout from './template';
import Wired from 'ember-wired/mixins/wired-element';

export default Component.extend(Wired, {
  layout,
  tagName: 'wired-textarea',
  disabled: false,
  placeholder: 'enter a message',
  type: 'text',
  value: '',
  rows: 4,
  maxrows: 8,
  attributeBindings: ['placeholder', 'disabled', 'type', 'value', 'blur:onblur', 'rows', 'maxrows'],
  didInsertElement() {
    this.element.pendingValue = this.get('value');

    next(this.element, function() {
      this.firstUpdated();
    });
  }
});

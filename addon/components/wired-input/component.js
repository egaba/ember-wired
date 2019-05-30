import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'wired-input',
  disabled: false,
  placeholder: 'enter a message',
  type: 'text',
  value: '',
  attributeBindings: ['placeholder', 'disabled', 'type', 'value', 'blur:onblur'],
  clearValue: Ember.observer('value', function() {
    const value = this.get('value');
    if (!value) {
      this.element.pendingValue = value;
    }
  }),
  didInsertElement() {
    this.element.pendingValue = this.get('value');

    Ember.run.next(this.element, function() {
      this.firstUpdated();
    });
  }
});

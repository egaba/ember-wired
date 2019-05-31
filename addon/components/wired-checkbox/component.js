import Component from '@ember/component';
import layout from './template';
import Wired from 'ember-wired/mixins/wired-element';

export default Component.extend(Wired, {
  layout,
  tagName: 'wired-checkbox',
  disabled: false,
  checked: '',
  attributeBindings: ['disabled', 'checked'],
});

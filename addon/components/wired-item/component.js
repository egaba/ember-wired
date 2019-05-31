import Component from '@ember/component';
import layout from './template';
import Wired from 'ember-wired/mixins/wired-element';

export default Component.extend(Wired, {
  layout,
  tagName: 'wired-item',
  value: null,
  attributeBindings: ['value', 'click:onclick'],
});

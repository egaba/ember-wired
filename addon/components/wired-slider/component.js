import Component from '@ember/component';
import Wired from 'ember-wired/mixins/wired-element';

export default Component.extend(Wired, {
  tagName: 'wired-slider',
  min: 0,
  max: 100,
  value: 0,
  attributeBindings: ['min', 'max', 'value'],
});

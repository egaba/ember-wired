import Component from '@ember/component';
import Wired from 'ember-wired/mixins/wired-element';

export default Component.extend(Wired, {
  tagName: 'wired-toggle',
  checked: false,
  disabled: false,
  attributeBindings: ['checked', 'disabled'],
});

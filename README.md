ember-wired
==============================================================================

This is a wrapper library around WiredJS web components. These components are never drawn the same way twice. Enjoy!

The full list of components found here: https://github.com/wiredjs/wired-elements/tree/master/packages

Showcase: https://wiredjs.com/

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```sh
ember install ember-wired
```

Usage
------------------------------------------------------------------------------

```html
<WiredCard>
  <p>hello world</p>
</WiredCard>
```

### Dynamic content

When your content dynamically changes, you'll need to invoke `el.requestUpdate()` to
redraw the component. Using an observer as an example:

1. Add an `id` to your card

```html
<WiredCard @id={{cardId}}>
  <p>hello world</p>
</WiredCard>
```

2. Call `el.requestUpdate()` when content updates

```js
refreshCard: Ember.observer('activeTab', function() {
  const cardId = this.get('cardId');
  Ember.run.next(function() {
    const el = document.getElementById(cardId);
    if (el) {
      el.requestUpdate();
    }
  });
})
```

### Animated Components

Set `animate=true` on the components. To disable all animations, set the `allowAnimations`
flag in the `wired` service.

```html
<WiredCard @animate=true>
  <p>hello world</p>
</WiredCard>
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

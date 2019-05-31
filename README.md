ember-wired
==============================================================================

This is a wrapper library around WiredJS web components. Enjoy!

https://wiredjs.com/

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

You will need to call `el.requestUpdate()` upon content changes. You'll need to:

1. Add an `id` to your card

```html
<WiredCard @id={{cardId}}>
  <p>hello world</p>
</WiredCard>
```

2. Setup an observer to call `el.requestUpdate()` when your content changes

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

The full list of components found here: https://github.com/wiredjs/wired-elements/tree/master/packages

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

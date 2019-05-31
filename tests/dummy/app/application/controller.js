import Controller from '@ember/controller';

export default Controller.extend({
  basicUsageExample: `
    <WiredCard>
      <p>hello world</p>
    </WiredCard>
  `,

  animatedUsageTemplate: `
    <WiredCard @animated="true">
      <p>hello world</p>
    </WiredCard>
  `,

  componentsList: `
    * WiredButton
    * WiredCard
    * WiredCheckbox
    * WiredInput
    * WiredItem
    * WiredListbox
    * WiredProgress
    * WiredRadio
    * WiredRadioGroup
    * WiredSelect
    * WiredSlider
    * WiredTextarea
    * WiredToggle
  `
});

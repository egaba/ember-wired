'use strict';

module.exports = {
  description: '',

  normalizeEntityName() {},

  afterInstall() {
    return this.addPackagesToProject([
      { name: 'wired-elements' },
    ]);
  },

  beforeUninstall() {
    return this.removePackagesFromProject([
      { name: 'wired-elements' },
    ]);
  }
};

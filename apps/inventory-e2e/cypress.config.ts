import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import eyesPlugin from '@applitools/eyes-cypress'

export default eyesPlugin(defineConfig({
  e2e: nxE2EPreset(__dirname),
}));

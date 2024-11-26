# Applitools Eyes NX Angular MonoRepo / Cypress Example

This is an example for using Applitools Eyes in E2E testing for an NX Monorepo.
Details for setting up the @applitools/eyes-cypress plugin inside of an NX Monorepo are also
provided, below. (See full documentation for the `@applitools/eyes-cypress` plugin here: [https://www.npmjs.com/package/@applitools/eyes-cypress](https://www.npmjs.com/package/@applitools/eyes-cypress).)



## Installation of `@applitools/eyes-cypress` plugin

To install inside of this example project:

```
npm install
```

To install in an existing NX Monorepo:

```
npm i -D @applitools/eyes-cypress
```



## Manual Setup of `@applitools/eyes-cypress` plugin

The `@applitools/eyes-cypress` plugin will be configured manually in this example. Follow the steps documented below to achieve this.


**1. Update `cypress.config.ts`:**

```typescript
import { defineConfig } from 'cypress'
import eyesPlugin from '@applitools/eyes-cypress'
export default eyesPlugin(defineConfig({
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
    }
  }
}))
```

* Import `eyesPlugin` from `@applitools/eyes-cypress`.
* Wrap the call to Cypress' `defineconfig` with a call to `eyesPlugin`.

<br>

**2. Add Applitools Eyes commands to all Cypress e2e projects:**

Add the following import statement to Cypress support file, under all 'e2e' project directories. <br>
(Example in this monorepo: angular-monorepo/apps/angular-store-e2e/src/support/e2e.ts.)

```typescript
import '@applitools/eyes-cypress/commands'
```
<br>

**3. (OPTIONAL) Add or update types and moduleResolution for `@applitools/eyes-cypress`, in tsconfig.json:** 

```json
{
  ...
  "compilerOptions": {
    ...
    "types": ["@applitools/eyes-cypress", "cypress", "node"]
    "moduleResolution": "node" // or "node16"
    ...
  }
}
```
<br>

**4. (OPTIONAL) Add `applitools.config.js` to root directory of node project, to configure global settings for `@applitools/eyes-cypress`.**

* Example in this monorepo: angular-monorepo/applitools.config.js

<br>

**5. Update Cypress spec files to run Visual Testing commands added by `@applitools/eyes-cypress`.**

Start Applitools Eyes Test Session (recommended in a `beforeEach` hook)
```typescript
cy.eyesOpen();
```

Capture a Visual Checkpoint with Applitools Eyes (for each desired UI state in test workflow)
```typescript
cy.eyesCheckWindow();
```

End Applitools Eyes Test Session (recommended in an `afterEach` hook)
```typescript
cy.eyesClose();
```

* Example spec file: angular-monorepo/apps/angular-store-e2e/src/e2e/app.cy.ts<br>
* Example spec file: angular-monorepo/apps/inventory-e2e/src/e2e/app.cy.ts

<br>

**6. Run NX e2e command, to execute Cypress tests (using npx).**

Run e2e tests for angular-store app (as found in this example project)
```
npx nx e2e angular-store-e2e
```

Run e2e tests for inventory app (as found in this example project)
```
npx nx e2e inventory-e2e
```


<br><br>

---

<br><br>

# Tutorial: Building Angular Apps with an Integrated Monorepo Setup

[![integrated monorepo](https://img.shields.io/static/v1?label=Nx%20setup&message=integrated%20monorepo&color=blue)](https://nx.dev/concepts/integrated-vs-package-based#integrated-repos)


Source code for the Angular monorepo application tutorial on the Nx docs:
- Tutorial: https://nx.dev/getting-started/angular-monorepo-tutorial

## What's inside?

This example contains two Angular applications and three shared libraries that started from the `angular-monorepo` preset. 

```
npx create-nx-workspace@latest myngapp --preset=angular-monorepo
```

It contains 

- two Angular application: `apps/angular-store` and `apps/inventory`
- three local libraries: `libs/products`, `libs/orders` and `libs/shared/ui` to demo how to modularize a codebase
- uses [Nx module boundary rules](https://nx.dev/core-features/enforce-project-boundaries) to enforce architectural constraints

Follow through the tutorial linked above for more details.

## How to run it

Clone it locally, install all dependencies using `npm install`. You can then run commands Like

- `npx nx build` to build the Angular application
- `npx nx serve` to serve the app
- you can use `npx nx graph` to visualize the structure


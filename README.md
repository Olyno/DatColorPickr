# DatColorPickr

DatColorPickr is a color picker component based on [pickr](https://github.com/Simonwep/pickr). It includes a lot of librairies as Svelte, React, Vue, Stencil and a lot of more!

Current librairies available:
 
 - - [x] [Svelte](https://github.com/Olyno/DatColorPickr/tree/master/packages/svelte)
 - - [ ] [React](https://github.com/Olyno/DatColorPickr/tree/master/packages/react)
 - - [ ] [Vue](https://github.com/Olyno/DatColorPickr/tree/master/packages/vue)
 - - [ ] [Ember](https://github.com/Olyno/DatColorPickr/tree/master/packages/ember)
 - - [ ] [Preact](https://github.com/Olyno/DatColorPickr/tree/master/packages/preact)
 - - [ ] [Inferno](https://github.com/Olyno/DatColorPickr/tree/master/packages/inferno)

## How install a librairy

Simply replace ``<librairy name>`` with the name in lower case of the librairy you want above:

```bash
npm i -D @datcolorpickr/<librairy name> # or yarn add -D @datcolorpickr/<librairy name>
```

## Contributing

This repository is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) which leverages [pnpm](https://pnpm.js.org/) for dependency management.

To begin, please install ``pnpm``:

```bash
npm install pnpm -g
```

### Working with Plugin Packages

All plugin packages are kept in the ``/packages`` directory.

#### Adding dependencies:

```console
$ pnpm add <package> --filter @datcolorpickr/<name>
```

Where `<package>` is the name of the NPM package you wish to add for a plugin package, and `<name>` is the proper name of the plugin. e.g. `cypress`.

#### Running Tests:

To run tests on all packages which have changes:

```bash
pnpm run test
```

To run tests on a specific package:

```bash
pnpm run test --filter @datcolorpickr/<name>
```

## Meta

[LICENSE (GPL-3)](https://github.com/Olyno/DatColorPickr/blob/master/LICENSE)

*This README.md is based on [Rollup](https://github.com/rollup/plugins) plugins repository*
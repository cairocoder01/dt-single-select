# \<dt-single-select>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i dt-single-select
```

## Usage

```html
<script type="module">
  import 'dt-single-select/dt-single-select.js';
</script>

<dt-single-select></dt-single-select>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
yarn lint
```

To automatically fix linting and formatting errors, run

```bash
yarn format
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
yarn storybook
```

To build a production version of Storybook, run

```bash
yarn storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
yarn start
```

To run a local development server that serves the basic demo located in `demo/index.html`

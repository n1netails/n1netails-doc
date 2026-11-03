# N1netails Doc
N1netails is an open-source project that provides practical alerts and monitoring for applications.

Read the docs here:
https://n1netails.com/

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=n1netails npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Deploy with gh-pages

Pushes to `main` automatically build the site, deploy it to the `gh-pages` branch, and create a `v<version>` tag using the version in `package.json`. Bump the package version in a pull request to create a new tag. If that version is already tagged, the deployment still runs and tag creation is skipped.

To deploy manually:

Prepare docs for deployment:
```bash
npm run gh-pages:predeploy
```

Deploy to gh-pages:
```bash
npm run gh-pages:deploy
```

# KG GMVU Cli

This package helps to globally update the versions of the projects that have a workspace, this package uses the version of the package.json of the workspace to update the versions in all the monorepository folders.

>Important information: This package is not intended to update dependencies, it is only a version manager.
## Installation

`yarn add @kagarisoft/gmvu-cli`

`npm install @kagarisoft/gmvu-cli`

## Usage

First you will have to generate the configuration file that will be used to add the list of packages of your monorepository, to do this type in the terminal the following code after installing the package.
```json
{
  "name": "mymonorepo",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "kg:init" : "gmvu init"
  },
  ...


}
```
then you can use the "bump" command to update the version in the subdirectories.
The bump command occupies the version of the package.json file, so you only need to update the version from the main package.json and the package will take care of the rest.

```json
{
  "name": "mymonorepo",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "kg:bump" : "gmvu bump"
  },
  ...


}
```

## Configuration

To configure the directory list, it is required to initialize the administrator. After that, the administrator will create a file called "kgmono.config.js", here you will create a list of all the package.json of your projects.

> It is important to remember not to put the path of your project, but to put the complete path of the package.json of your projects. This way, the administrator will clone the package.json version from the monorepo and send it to the package.json of your projects.

kgmono.config.js example:
```json
module.exports = [
      "packages/test/package.json",
      "packages/test2/package.json"
];
```

> Important, don't add "../../../"
## Updating version for all projects in your monorepository

To update the version you must update the package.json of the monorepository, this way when using the bump command, it will update the package.json of your projects that are inside the "packages" folder.

./
```json
{
   "name": "mymonorepo",
  "version": "2.0.0",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  ...
}
```

and this is what it will look like in the package.json of your project after updating.

packages/test/package.json:
```json
{
  "name": "test",
  "version": "2.0.0",
  ...
}
```
# KG GMVU Cli

This package helps to globally update the versions of the projects that have a workspace, this package uses the version of the package.json of the workspace to update the versions in all the monorepository folders.

>Important information: This package is not intended to update dependencies, it is only a version manager.
## Installation

`yarn add @kagarisoft/gmvu-cli`

`npm install @kagarisoft/gmvu-cli`

## Usage

First you will have to generate the configuration file that will be used to add the list of packages of your monorepository, to do this type in the terminal the following code after installing the package.
`gmvu init`

> In case you get an error that the command does not exist, you can use it as follows.
```json
{
  "name": "test",
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

`gmvu bump`

> In case you get an error that the command does not exist, you can use it as follows.
```json
{
  "name": "test",
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
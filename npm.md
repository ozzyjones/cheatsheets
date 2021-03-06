Node Package Manager (NPM)
==========================

Interactively create a package.json file:

`npm init`

Install the Latest (Stable) Node
--------------------------------

This is how to install the latest stable version of Node on a Linux system.

```bash
sudo npm install n -g
sudo n stable
```

Uninstall
---------

This uninstalls a package, completely removing everything npm installed on its behalf.

```bash
sudo npm uninstall <package>
```

Reinstall Packages
------------------

The easiest way to reinstall all packages is to delete the `node_modules` folder and execute `npm install`.

Updating Packages
-----------------

| Command           | Description |
|-------------------|-------------|
|`npm update`       | Update all packages in _dependencies_
|`npm update <pkg>` | Update specified package
|`npm update --dev` | Use the `--dev` flag to cause _devDependencies_ to be proccessed as well

Package Version
---------------

### View Current Package Version ###

View the version of the current package.

```bash
npm version
```

### Bump Current Package Version ###

Bump the version number in _package.json_ and _package-lock.json_

```bash
npm version <version>
```

_example_: `npm version 1.0.1`

> Note: with default settings, this will create a tag **v1.0.1** and a commit with **1.0.1**

package.json
------------

### devDependencies vs dependencies ###

* _devDependencies_ - modules which are only required during development
* _dependencies_ - modules which are also required at runtime

### List Installed Packages ###

Navigate to the directory containing the _package.json_ file and run this command to see all the versions of packages that are installed.

`npm ls` 
-or- 
`npm ls <package-name>`

Use the `--gobal` flag to list all the globally (`-g`) installed packages.

`npm ls --global`

(e.g. `npm ls --global jsdoc` will only list the _jsdoc_ package - if it is installed)

Package Version Specifiers
--------------------------

| Specifier | Meaning |
|-----------|---------|
|`~version` | Approximately equivalent to version (e.g. 3.9.*)
|`^version` | Compatible with version (e.g. 3.*.*)
|`version`  | Must match version exactly
|`>version` | Greater than
|`>=version`| Greater than or equal
|`<version` | Less than
|`<=version`| Less than or equal
|`1.2.x`    | 1.2.*
|`*`        | Any version
|`latest`   | Obtains the latest version


See more details [here](https://stackoverflow.com/a/25861938/9666775)

Popular Packages
----------------

### [http-server](https://www.npmjs.com/package/http-server) ###

Install globally with this command:

`npm install http-server -g`

The server can simply be started like this:

`http-server [path] [options]`

This package "magically" serves the _index.html_ file be default.

### [jsdoc](https://www.npmjs.com/package/jsdoc) ###

Install globally with this command:

`npm install -g jsdoc`

Generate JSDoc documentation for a single file like this:

`jsdoc yourJavaScriptFile.js`

By default, the results are placed in the `./out` directory.

See more options with this command:

`jsdoc --help`

### [npm-check-updates (ncu)](https://www.npmjs.com/package/npm-check-updates) ###

Show any new dependencies for the project in the current directory.

`ncu`

> Note: NPM also has a similar command installed natively - `npm outdated`
Tutorial Notes
==============

Code Snippets
--------

### See More/Less Code ###

See example in *piechart.js* tutorial

* Add `div`'s under the "code" block containing "See More Code" and "See Less Code"
* Add the class *collapsed* to the `div` containing the code block to `<div class="code collapsed">...</div>`

```html
<div class='row'>
	<div class="code collapsed"><pre><code class="javascript">
		// Sample Code Block Here
	</code></pre></div>
	<div class="see-more-container" onclick="togglecode(event)"><a>See More Code...</a></div>
	<div class="see-less-container hidden" onclick="togglecode(event)"><a>See Less Code...</a></div>
</div>
```

* Define *tutorialpagelogic* and *jquery* in page requirements

```js
define(["helpers", "tutorialpagelogic", "jquery", ...], function(...) {
	// Code Body
});
```

> Replace any unorthodox code with this regex:

`/See More Code[^<]*/See More Code.../`

This will grab everything up until the first bracket.

INT
---

### General ###

#### Steps for Changes ####

1. Create a feature branch from master
2. When happy, run `grunt lint` and create a commit for the changes
3. Run tests `grunt fulltest:debug:all` on this feature from the feature branch
4. Merge squash these changes into the master branch
5. Switch to master and rebase the feature branch on top of master
6. Review: `git review`

### Building ###

```
grunt build:debug:controls 	# Will not run JSLint or Obfuscation

grunt lint					# Check for JSLint Errors
grunt fulltest:debug:all 	# Run all unit tests locally

grunt unittest:debug:all 		# Unit Tests Only
grunt unittest:debug:controls 	# Controls Unit Tests Only

grunt unittest:obfuscate:controls 	# See if code passes the obfuscation process

grunt all 					# equivalent: 'grunt build:distribution:all'
grunt all --slimdist		# Skip building JSDoc API

grunt cleanup:all 			# Clean
```

**Note:** To get a list of the modules, type in an incorrect module.
If you type in `grunt unittest:debug:xyz`, for example grunt will say it failed to load the module and will provide a list of valid module names.

* 'headers' category is not loading correctly
  + Cannot load *geotoolkit*

### Pushing a New Commit with Git Review ###

1. Commit your desired change on the master branch
2. Rebase your change(s) on top of newer changes (`git pull --rebase`)
3. Push to gerrit (`git review`)

### Cannot load geotookit ###

The *debug* version of the build needs to be used instead.  When the *distribution* version of the build is used then all of the code is obfuscated and the tutorials will no longer run.

#### Debug ####

```grunt build:debug:all```

#### Distribution ####

```grunt all``` => Equivalent to: ```grunt build:distribution:all```

#### Slim Distribution ####

Use the slim distrubtion to save a lot of time but stop from building the JSDoc API documentation.

example: ```grunt all --slimdist```

#### Run Unit Tests (Only) ####
`unittest:debug:all`

### Misc ###

To get JSLint to try to fix its own problems, add this line:
`fix: true`
after "format" in the end of *Gruntfile.js*

### Font ###

How to change the font set:

1. Navigate to [fontello.com](http://fontello.com/)
2. Drag `html5/Utils/3rdparty/fonts/geotoolkit.svg` onto the webpage and your icons will appear.
3. Include any new, desired icons in your webfont
4. Download the webfont

### Tutorial ###

* Note: what fonts are available?
  + I searched in some of the most obvious places and couldn't find any font styles

### Suggestions for Tutorials ###

1. Where can I find the list of available fonts.  (It would be nice to put a link to this list from the pie chart tutorial so that it can be understood)?? *maybe this is not as important as I originally thought*
2. Transparency: Is there any way to make the shapes transparent?  This would be a cool feature but it could also be useful for debugging so that the client could see overlapping shapes.
3. Padding: Can we add HTML-like padding options to the shapes.  In general, using the same style of formatting as HTML (e.g. padding, margin, etc.) could be especially useful because these should be concepts that our end-users already understand.

#### Well Log ####

* UnitFactory only takes in British spelling of "metre" (not "meter") as an option

### Unit Testing ###

Example:

1. Use the geotookit.controls.unit_tests.html
2. Open the page in the browser (This will allow you to see the status of the unit tests)
3. Open *geotoolkit.controls.js* to use the Chrome debugger on the unit tests (Note: watch out for obfuscation issues)

### Copy Error ###

grunt: error
`binding.copyFile(...)` failed
Try opening *cmd* (Windows Command Prompt) as Administrator

```
Parsing C:\git\html5\SchematicsJS\bin\geotoolkit.schematics.js ...
Parsing C:\git\html5\SchematicsWidgetsJS\bin\geotoolkit.schematics.widgets.js ...
Generating output files...
>> fs.js:1910
>>   binding.copyFile(src, dest, flags);
>>           ^
>>
>> Error: EPERM: operation not permitted, copyfile 'C:\git\html5\Utils\jsdoc\templates\doc\static\scripts\collapse.js' -> 'C:\git\html5\GeoToolkitJS\lib\docs\docs\scripts'
```

package.json
Change: 3.4.0 => 3.5.5
`npm install`

### Error ###

Compile Error: >> WARNING>>> LIBRARIES MAY NOT BE RENAMED AFTER A TEST FAILURE!

> Try updating the associated *phantomtests.json* for the files that have been renamed

#### Running Grunt on My Documentation ####

```
npm install -g grunt-cli		# Install the command-line interface
npm init						# Create Basic package.json
npm install grunt --save-dev	# Install lastest Grunt, add to devDependencies
npm install grunt-contrib-jshint --save-dev		# Install plug-in (e.g. jshint)
npm install grunt-markdown
```

If build fails, try
`grunt cleanup:all`
To remove old files

Manually starting a Jenkins build:

* Home >> Query and Trigger Gerrit Patches >> Search
* Check the *Change Nr.* and click *Trigger Seleected*

Some Useful Grunt Links:
[Grunt Markdown](https://github.com/treasonx/grunt-markdown)
[Grunt Plugins](https://github.com/gruntjs)

Opening the distribution version of the package locally

```
cd C:\git\html5\GeoToolkitJS\lib
npm install
```

When resolving someone else's patch from server:

1. Hard reset[^1] to the previous commit on the master branch (this can be either the remote branch or the local master; either one will work)
2. Rebase the remote branch `git pull --rebase`[^2]

[^1]: This is scary.  You will be deleting your local work but it should be safe inside of the server.
[^2]: Your changes should be reflected in your local branch now

Warning: Unable to delete "GeoToolkitJS/lib" file (EBUSY: resource busy or locked, unlink 'C:\git\html5\GeoToolkitJS\lib'). Use --force to continue.

1. Close BASH terminal
2. Stop Server (Note: this server could be open from multiple sources: npm, VSCode, WebStorm, etc.)

### Accessing Built Documentatin ###

1. Build Everything (`grunt build:distribution:all`)
2. Open the index file (`GeoToolkitJS/lib/docs/index.html`)

$ git pull
Auto packing the repository in background for optimum performance.
See "git help gc" for manual housekeeping.
Counting objects: 221640, done.
Delta compression using up to 16 threads.
Compressing objects: 100% (62657/62657), done.
Writing objects: 100% (221640/221640), done.
Total 221640 (delta 145092), reused 220191 (delta 143873)
Unlink of file '.git/objects/pack/pack-0a553086babd6a5f737345218122032d1cfb3889.pack' failed. Should I try again? (y/n) y
Unlink of file '.git/objects/pack/pack-0a553086babd6a5f737345218122032d1cfb3889.pack' failed. Should I try again? (y/n) y
Unlink of file '.git/objects/pack/pack-0a553086babd6a5f737345218122032d1cfb3889.pack' failed. Should I try again? (y/n)
** => Try closing GitKraken or more of the programs with GIT open **

[rebase-interactive]: https://stackoverflow.com/questions/3042437/change-commit-author-at-one-specific-commit
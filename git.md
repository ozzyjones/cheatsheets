Git Stuff
=========

Logging
-------

Show commit logs:

```
git log
git log --author="John Doe"     # Filter by author name
```

Squashing
---------

Squash multiple commits from a feature branch into a single commit on the *master* branch.

1. `git checkout master`
2. `git merge --squash <feature brach>`
3. Commit the all of the changes into a singlel commit (e.g. `git commit`)

Ignoring Files
--------------

Tell GIT which files to ignore from tracking.

Find more information about _.gitignore_ files [here](https://help.github.com/articles/ignoring-files/)

### Debugging Ignores ###

Debug gitignore and exclude files.  

In the following command, all of the path names provided will be checked to see if they are being ignored or excluded.  Use the `--verbose` flag to get more information.

`git ignore [options] pathname...`

Excluding Files
---------------

Excluding files is like ignoring but it only affects files that are on the current system and will not cause any edits that would be undesireable in the .gitignore file.

1. Change to the hidden *.git* directory inside the repository `cd .../.git/info`
2. Edit the *exclude* file to add any files for exclusion `<< exclude`
3. Exit the editor be typing "exclude"
4. Refresh Index `git update-index --assume-unchanged [<file>...]`

### Untrack file that is now in .gitignore ###

Make GIT forget about a file that was tracked but is now in _.gitignore_

`git rm --cached <file>`

Rebasing
--------

1. Checkout the feature branch with the latest changes
2. Use rebase to put the changes onto master `git rebase master`

### Aborting a Rebase ###

```
git rebase --abort
git rebase --quit		# Last Resort (will not undo what has already been done)
```

### Changing the Last N-Commits ###

#### Interactive Rebase ####

The following example demonstrates how to change the last 2 commmits (N=2).  **Important Note:** The commit history will be *changed*.  The commits will be re-written so don't do this on stuff that is already on the server.  See reference documentation [here][rebase-interactive]

1. `git rebase -i HEAD~2`
2. Change the line prefixes from "pick" to "edit" for the desired commits
3. `git commit --amend` to do a general amend
4. Cycle through the commits with `git rebase --continue` until complete

> Note: Change the author in an amend with `git commit --amend --author="Brian Jones <brian.jones@geotoolkit.net>"`

##### Line Prefixes/Commands #####

See the excerpt from the [git-rebase](https://git-scm.com/docs/git-rebase) documentation for the list of commands that can be used during an interactive rebase.

> An editor will be fired up with all the commits in your current branch (ignoring merge commits), which come after the given commit. You can reorder the commits in this list to your heart’s content, and you can remove them. The list looks more or less like this:

```
pick deadbee The oneline of this commit
pick fa1afe1 The oneline of the next commit
...
```

| Command | Description |
|---------|-------------|
| pick    | do nothing to the selected commit
| edit    | edit files and/or the commit message
| reword  | edit the commit message, only
| drop    | delete a commit
| squash  | fold two or more commits into one (use only on **subsequent commits**)

Stashing
--------

```
git stash 			# Stash Changes
git stash drop		# Delete the top stashed element
git stash clear		# Delete all elements from the stash
```

Stage
-----

### Interactive Staging ###

#### Stage a Hunk ####

Stage hunks of code in patches with the `-p` flag.

`git add -p`

##### Options for Staging a Hunk #####

| Option | Description |
|--------|-------------|
| y      | stage this hunk for the next commit
| n      | do not stage this hunk for the next commit
| q      | quit; do not stage this hunk or any of the remaining hunks
| a      | stage this hunk and all later hunks in the file
| d      | do not stage this hunk or any of the later hunks in the file
| s      | split the current hunk into smaller hunks

* How to [stage a hunk](https://stackoverflow.com/a/1085191)
* See the official documentation on interactive staging [here](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging)

Tagging
-------

| Command             | Description |
|---------------------|-------------|
| `git tag`           | List tags
| `git tag [name]`    | Create a local tag
| `git tag -d [name]` | Delete a local tag


Resetting
---------

### Discard Uncommitted Changes ###

Throw away any uncommitted changed and return to the state of the previous commit.

`git reset --hard HEAD`

#### Discard Changes in a Single File ####

This is the same result as discarding uncommitted changes for a single file (like a `git reset --hard` command).

`git checkout HEAD -- my-file.txt`

### Unstage ###

Remove a currently staged file from the index.

`git reset filename.txt`

Reverting
---------

Revert the previous command with this command:

`git revert HEAD`

If the `--no-edit` flag is not used, Git Extensions will open an editor to make changes to the commit.
To use the default message (e.g. 'Revert "My Last Message"') use this command:

`git revert HEAD --no-edit`

Empty Commit
------------

Set the *allow-empty* flag to allow a blank commit to be committed.

`git commit --allow-empty -m "Commit Message"`

Amending
--------

Ammend a commit from the command line without changing the message:

`git commit --amend --no-edit`

Undo the previous ammend:

`git reset --soft HEAD@{1}`

Use this command to change the author of the previous commit:

`git commit --amend --author="Author Name <email@address.com>"`

File Changes Accross All Branches
---------------------------------

`gitk --all <path to file>`

Discard Current Changes
-----------------------

`git checkout -- .`

Branch Information (Verbose)
----------------------------

`git branch [option]`

| Option            | Description |
|-------------------|-------------|
| -l                | Local branch information
| -r                | Remote branch information
| -vv               | Verbose branch information (particularily useful for knowing what remote branches are being tracked by local branches)
| -d [local_branch] | Delete local branch

Copy File to Another Branch
---------------------------

In this example I want to copy a file from the _dev_ branch into another branch, like _master_

1. Make sure you are on the correct branch (the one on which you want to make changes)
2. `git checkout dev -- path/to/your/file`

> Note: this will also work with entire folders (e.g. `git checkout dev -- path/to/your/folder`)

See [here](http://firas.bessadok.com/git-copy-a-file-from-one-branch-to-another/) for more info.

Difftool/Mergetool (Meld)
-------------------------

How to set [Meld](https://stackoverflow.com/a/43238372) as the GIT difftool and mergetool.

For Windows:

```
git config --global diff.tool meld
git config --global difftool.meld.path "C:\Program Files (x86)\Meld\Meld.exe"
git config --global difftool.prompt false

git config --global merge.tool meld
git config --global mergetool.meld.path "C:\Program Files (x86)\Meld\Meld.exe"
git config --global mergetool.prompt false
```

### View the Diff for a Particular Commit ###

This command will show the difference between that commit and its ancestor, where **COMMIT** is a particular commit hash:

`git difftool COMMIT^ COMMIT`

See the full solution [here](https://stackoverflow.com/a/17563740)

Comparing Commits
-----------------

How to compare a file from a previous commit with the same file in the current working directory:

`git diff <commit> <filepath>`

> Note: Make sure to use the commit ID and not the change ID

Branch Changes: Diff from Fork Point
------------------------------------

Get the _diff_ of all the changes that have been made on a branch.

> Note: these examples use the branches **dev** and **master** for demonstration purposes

Find the differences on the **dev** branch from any location

`git diff $(git merge-base --fork-point master dev)..dev`

If **dev** is the _current branch_ this simplifies to:

`git diff $(git merge-base --fork-point master)`

See a more complete explanation of _diff_-ing a branch [here](https://stackoverflow.com/a/29813554)

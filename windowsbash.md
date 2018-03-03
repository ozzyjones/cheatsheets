Windows Bash
============

Documentation regarding the Linux subsystem for Windows 10.

Installing `apt-get`
--------------------

`sudo apt-get update`

See the _full details_ for installing `apt-get` for Linux [here](https://www.howtogeek.com/261449/how-to-install-linux-software-in-windows-10s-ubuntu-bash-shell/)

Installing Java
---------------

Linux may require _java_ to be installed:

Run this command to see if java is available:

`javac -version`

If it is not installed, use this command to isntall it:

`sudo apt-get install default-jdk`

Running the `javac -version` command should now return a result like this:
> javac 1.8.0_151
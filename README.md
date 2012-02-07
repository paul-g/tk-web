TimeKeeper Web (Server + JS Client)
==============================

(Readme is out of date, will be updated soon)

# Installation
--------------------------------

### 1. Get the code

From here, duh :P
  
### 2. Download ExtJs

To run, download ext-4.0 and copy the following (from the ext-4.0 folder) in a folder named ext-4.0 under the project root:

1. The folders src and resources

2. ext-debug.js

3. ext.js

The final directory structure should look like this:

	+tk-client
		-app.js
		-index.html
		-app
			-namespace
				-ClassA.js
				-ClassB.js
		-resources
			-css
			-images
		-ext-4.0
			- ext-debug.js
			- ext.js
			- resources
			- src

### 3. Deploy

You can then use the provided Makefile (after configuring it to match your local setup) to deploy onto an application server. 
This step is required to enable the Ajax functionality.
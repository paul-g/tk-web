TimeKeeper
==============================

A simple example of using the RESTlet framework with ExtJs 4 on Apache Tomcat.

## Requires

* GNU make
* maven 
* Sencha SDK

To setup the Sencha SDK download and extract [ExtJS 4](http://www.sencha.com/products/extjs/download/).
Copy the following (from ext-4.0):

1. The folders src and resources
2. ext-debug.js
3. ext.js

Copy these to `ext-4.0` under `src/main/extjs/app` (the source folder for the JS client).

The final directory structure should match this:

	+src/main/extjs/app
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

### Run

You can now use the provided top level Makefile to:

1. Build the ExtJs client

2. Build the server

3. Deploy the project and start the Tomcat server

Step 1 requires the sencha SDK (available [here](http://www.sencha.com/products/sdk-tools)).
The command `sencha` should be available from your command line.

Steps 2 and 3 require maven to download the required dependencies (including Tomcat 6).

If these are available, you can simply run the build: 

`make`

### Check

You should now be able to point a browser at the url `http://localhost:8080/tkweb/app/` and start the Ext Js application.

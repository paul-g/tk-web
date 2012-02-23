TimeKeeper Web (Server + JS Client)
==============================

# Installation
--------------------------------

The web server is written in Java and uses the RESTlet framework. It is designed to work on Apache Tomcat 6.

The JavaScript client is built using ExtJs.

The build process uses GNU make, maven and Sencha SDK.

Below are the steps required to get started.

### 1. Get the code

From here, duh :P
  
### 2. Add ExtJs

The client is built using the Ext JavaScript library.

Download the [library](http://www.sencha.com/products/extjs/download/) and extract the archive to a folder, for example ext-4.0.

To build the client you must copy the following (from ext-4.0):

1. The folders src and resources

2. ext-debug.js

3. ext.js

Copy these to a folder named - exactly:) - ext-4.0 under src/main/extjs/app (the source folder for the JS client).

The final directory structure should exactly match the one shown below:

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

### 3. Deploy

You can now use the provided top level Makefile to:

1. Build the ExtJs client

2. Build the server

3. Deploy the project and start the Tomcat server

Step 1 requires the sencha SDK (available [here](http://www.sencha.com/products/sdk-tools)).
More precisely, the command `sencha` should be available from your command line.

Steps 2 and 3 require maven, which should be able to download all the required dependencies and plugins (including Tomcat 6).

If these are available, you can simply run the build: 

`make`

### 4. Verify

You should now be able to point a browser at the url `http://localhost:8080/tkweb/app/` and start the Ext Js application.
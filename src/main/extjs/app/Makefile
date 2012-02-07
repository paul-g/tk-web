WEBAPP_HOME=../../webapp/app

all: clean sencha-build

sencha-build:
	sencha create jsb -a index.html -p app.jsb3
	sencha build -p app.jsb3 -d .
	cp index.html $(WEBAPP_HOME)
	mv all-classes.js $(WEBAPP_HOME)
	mv app-all.js $(WEBAPP_HOME)
	mkdir $(WEBAPP_HOME)/ext-4.0
	cp -r ext-4.0/ $(WEBAPP_HOME)
	rm app.jsb3
	
clean:
	cd $(WEBAPP_HOME) && rm -rf *
	
	
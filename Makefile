all: sencha-all mvn-all

sencha-all:
	cd src/main/extjs/app && make

mvn-all:
	mvn package
	mvn tomcat6:run
	
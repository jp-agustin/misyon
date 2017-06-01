# Pre-requisites

### Installation

* First, to install needed packages for the Ionic applications, make sure to have node.js and npm installed. 

* Before creating Ionic projects, you will need to install the Ionic CLI and Cordova.

```
        npm install -g ionic cordova
```

Once done, create the Misyon app base folder:
```
        ionic start Misyon blank
```

* For the database integration, install angularfire2 and firebase packages:

```
        npm install angularfire2 firebase --save
```

### Packages and Plugins

` Note: When Adding new plugins or new libraries (npm install ...), make sure to import it to your files. Common files to check include but not limited to: *app.component.ts, app.module.ts, [nameOfThePage].ts`

1) Run the following command to add Google maps dependencies:

```
    ionic plugin add cordova-plugin-geolocation
    npm install --save @ionic-native/geolocation	
```

2) For the network connectivity status, install the following plugin:

```
    ionic plugin add cordova-plugin-network-information
    npm install --save @ionic-native/network
```

3) For charts:

```
    npm install chart.js --save
```

4) Run the following commands to include calendar:

```
    npm install typings --save
    npm install intl@1.2.5 --save
    npm install ionic2-calendar --save
```

### References

* [Ionic documentation](https://ionicframework.com/docs/)
* [Ionic tutorial](https://www.joshmorony.com/beginners-guide-to-getting-started-with-ionic-2/)
* [Angularfire2 Docu](https://github.com/angular/angularfire2)
# Updates

### Commits

1) Google maps can now be loaded. Current location of the user is also displayed using Geolocation plugin.

Run the following command to add dependencies:

```
    ionic plugin add cordova-plugin-geolocation
    npm install --save @ionic-native/geolocation	
```

2) Added multiple markers using locations in the firebase database:

```
    ionic plugin add cordova-plugin-network-information
    npm install --save @ionic-native/network
```

3) Current missions page for Head was added

4) Basic info window (for markers) added + filtering markers function now working

5) Different pages are now integrated (Lois' pages, Admin overview, Patrick's pages). For charts:

```
    npm install chart.js --save
```

6) Login, Splash Screen, and side menus are now included

7) Edited UI

8) Calendar view now working: Run the following commands to include calendar:

```
    npm install typings --save

    npm install intl@1.2.5 --save

    npm install ionic2-calendar --save
```

9) Organization list (without details page yet) added

---

### References

* [coe134-sampleapp](https://gitlab.com/agustin.johnpatrick/coe134-sampleapp/tree/firebase)
* [Angularfire2 Docu](https://github.com/angular/angularfire2)
* [Geolocation Plugin Docu](https://github.com/apache/cordova-plugin-geolocation)
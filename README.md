Overview
========


![Alt text](cover.png?raw=true "Theme Screenshot")

Compatible with the Hawthorn edx version

How to enable:

* Edit `/edx/app/edxapp/lms.env.json` and set `"ENABLE_COMPREHENSIVE_THEMING": true`.
* Add the path to `COMPREHENSIVE_THEME_DIRS` in `/edx/app/edxapp/lms.env.json`:
```
"COMPREHENSIVE_THEME_DIRS": [
    "/edx/app/edxapp/themes"
] 
```
* Add site theme in the LMS django admin: `http://<lms.url>/admin/theming/sitetheme/`
* Restart LMS and re-compile static files: `/edx/bin/edxapp-update-assets`

License
=======

The code in this repo is licensed under the Apache 2.0 License.
See [LICENSE.txt](LICENSE.txt) for more info.

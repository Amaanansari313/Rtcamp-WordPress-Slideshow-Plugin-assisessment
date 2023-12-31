# Rtcamp Slideshow Assignment
[![Build Status](https://github.com/Amaanansari313/Rtcamp-WordPress-Slideshow-Plugin-assisessment.git)]

* Contributors: (Amaan Ansari)
* License: GPLv2 or later
* License URI: http://www.gnu.org/licenses/gpl-2.0.html



## Demo

You can find the link to demo [here](https://amaan123.000webhostapp.com) 



## Description

###  Admin-Side:

Rtcamp Slider Plugin Creates an admin-side Menu **Rtcamp_Slideshow Settings**. This page provides an interface to create slideshows and add/remove images to the slideshow.
    
1. It uses "LightSlider" library for displaying sliders. 
2. It can add/remove mutiple images  from the slider by just selecting/deselecting it from the slider.
3. It can change the order of images by dragging them.
4. It can  move slider images by pressing the arrow keys.
5. It can add shortcode by just clicking on "Slider Shortcode" Button present in visual editor toolbar it will add [rtcamp-slideshow] to any post/page. 
6. It shows you the live slider preview.


### Front-end:

    When you add shortcode [rtcamp-slideshow] to any post/page, it will be replaced by a
    slideshow of images uploaded from admin-side.

### Organized Code:
     The code was written with `wpbb` boilerplate. As a result, it is highly organized and structured.

### Coding Standards:
     The code was checked with PHPCS by installing composer in the project directory `Wordpress-Extra` and `Wordpress-Docs` ruleset and follows Wordpress Coding Standards as much as possible.

### Unit Test:
     The code was also unit tested.

### Dependencies:
     All the dependencies are managed through npm and stored in `node_modules` directory(which is ofcourse gitignored).

## Libraries Used

* [Lightslider](https://github.com/sachinchoolur/lightslider)
* [WPBB Boilerplate](https://github.com/DevinVinson/WordPress-Plugin-Boilerplate)

## Installation

Install the dependencies and clone the directory into your plugins folder with below command to get started.

```
git clone https://github.com/Amaanansari313/Rtcamp-WordPress-Slideshow-Plugin-assisessment.git /path-to-plugins-folder/Rt-Slideshow
cd /path-to-plugins-folder/Rt-Slideshow
npm install
```

1. Upload the entire `Rt_slideshow` folder to the `/wp-content/plugins/` directory.
2. Activate the plugin through the `Plugins` menu in WordPress.
3. You will find **Rtcamp_Slideshow Settings** menu in your WordPress admin panel.





## Important Notes



For reference, [here's a discussion](http://make.wordpress.org/themes/2013/03/04/licensing-note-apache-and-gpl/) that covers the Apache 2.0 License used by [Bootstrap](http://twitter.github.io/bootstrap/).

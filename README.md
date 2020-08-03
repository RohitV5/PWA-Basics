# Exp_DOJO


1. SSH

SSH is a protocol like FTP,IMAP, POP3, HTTP, HTTPS (transmission is secured that is encrypted, so eavsdropping will not work)

SSH allows us to communicate between two computers over internet. WE can modify files on remote computer. It is also secured.

Shell allows us to talk to the operating system. So we can access the OS and file system on the other system.

HOST is the remote server.
CLIENT is the system you are using to access the remote system.

-->command to connect<--
ssh {user}@{host}
eg: ssh root@ipaddress

How to connect ssh to github?

SSH allows us to connect us to our office laptop from home.

sudo apt-get is a command to install things in ubuntu cmd

Symmetrical Encyrption -  same key to encrypt and decrypt  (SSH shared key)
Assymmetrical Encyrption - public and private keys

Passwords or SSH


2. PERFORMANCE IMPROVEMENT
Optimized Code
Critical Render Path
PWA
GZIP
Minimize Files
Minimize Delivery
CDNs
Caching
DB Scaling
Load Balancing

Media queries can load different images based on size of screen.So use small images for small screen size.
Media queries wont load images which are not required based on media query.

CDNs optimize images and allow faster access to them.
Remove metatags from photos for performance and security reasons



JPGs used for photographs, dont allow transparency..are big bit in filesize
Gifs are bit grainy allows animation , small file size, 
Pngs are smaller than jpegs, used for logos, add transparency
SVGs exapndable vector images, low on filesize, good for 4k display, for icons


# PWA Everything you wanted to know
Progressively enhance webapps to look and feel like native apps
1.Be reliable: Load fast and offline functionality
2.Fast: Respond qickly to user actions
3.Engaging: Feel like a native app on mobile devices

Service Workers are used

Core Building Blocks of PWA are 
1. Service Workers(It is javascript running in background process which allows caching/offline support, push notification), 
2. Application Manifest: Allows our web app installable
3. Responsive Design
4. APIs like geolocation, camera


PWAs and SPAs
Both are different 
PWA can be implemented in SPAs and any other webpage

Progressive Enhancement: Gradually Adding PWA Features into exisiting project

Things we learn
Application manifest
Service Workers Basics
Promise and Fetch API
Service Workers Caching (Offline Access)
Advanced Caching Strategies
Caching Dynamic Data with IndexedDB
Responsive Design
Background Sync
Web Push Notifications
Media API (Camera) & Geolocation
Automated Service Management
SPAs and PWAs with framework


Lighthouse: For Auditing PWA in Google Chrome

Web App Manifest Allows us to install the web app in the mobile.
manifest.json in the root folder has properties for the app


Criteria for installable PWA
Has a web app manifest file
Has a service worker registered on your site
Is served over HTTPS ( a requirement for service workers)
Is visited atleast twice in 5 minutes


SERVICE WORKERS - 
Runs on a seperate javascript thread because they work in the background 
decoupled from HTML pages, manages all pages of a given scope.
It lives on even after the page is closed.
They are good to reacting to events by HTML or javascript. That is what they do.
They listen to specific events.

EVENTS -> FETCH.PUSH_NOTIFICATIONS.NOTIFICATION_INTERACTION.BACKGROUND_SYNC.SERVICE_WORKER_LIFECYCLE

Service workers are used in push notifications because it works even if we close our browser.


Service Worker Life 
Register as a background service -> Installation(Refreshes if changed) -> Activation -> Idle -> Fetch-> Terminated


For Browser Support Check of PWA
Isserviceworkerready.com

start http-server -c-l  
-c --> flag browser cache off for development purpoer because we make code changes in development
based on where service worker file is located it will control all child folders. so bettwer keep it in root folder


Installing Service Worker vs Activating Service Workers


Fetch is triggered by the web application while install and activate arre triggered by the browser.


Request Header is set by the client side and Response Header is set by the server side.


If server is setting Access-Control-Allow-Origin to : localhost:8080, hen this data will be accessible by this origin on the browser.

Mode: 'no-cors' allows to get rid of this error but still we cant access the data using javascript,


Service workers use Fetch and not AJAX.

Service workers relies heavily on PromiseAPI and FetchAPI. Good understanding of these is very important.


Feature 1 of PWA : Caching  -- For offline access or poor connection cases

The Cache API store key value pairs of request and response so if no internet is available it will fetch from the Cache API

Cache the APP SHELL eg. the footer , header , sidebar.

Run the application using localhost unless you are service over HTTPS otherwise serviceWorker will not available in navigator.

In Caching we have to add in the cache and retreive from the cache.

AddAll allows us to cache all in the array.

Change the cache name for versioning. and remove old cache after activation of new cache.

























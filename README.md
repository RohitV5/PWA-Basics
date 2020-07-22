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




















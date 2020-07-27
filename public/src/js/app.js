//  navigator is the browser. so this code will execute if service worker is available for the browser
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log("Service worker registered")
    })
}
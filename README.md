<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        console.log('Service Worker: Registered');
        reg.onupdatefound = () => {
          const installingWorker = reg.installing;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
              alert(' New update available.Please Refresh the page'            }
          };
        };
      })
      .catch(err => console.log('Service Worker: Error: ' + err));
  });
}
	</script>

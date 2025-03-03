function setID(event) {
  event.preventDefault();
  const username = document.querySelector('#name').value;

  fetch(`http://localhost:8080/matomo.php?uid=${username}&rec=1&idsite=1&rand=1`).then(response => {
    if (response.ok) {
      console.log('ID set', username);
    }
  });
}

const btn = document.querySelector('button');

btn.addEventListener('click', event => {
  setID(event);

});


var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function () {
  var u = "//localhost:8080/";
  _paq.push(['setTrackerUrl', u + 'matomo.php']);
  _paq.push(['setSiteId', '1']);
  var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
  g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
})();

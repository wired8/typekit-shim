/**
 * @param typeKitId
 * @param callback
 */
function typekit(typeKitId) {
  var el = document.createElement('script');
  el.src = '//use.typekit.net/' + typeKitId + '.js';
  el.onload = function() {
    Typekit.load();
    delete window.Typekit;
  };
  document.body.appendChild(el);
}

module.exports = typekit;

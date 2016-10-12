/**
 * @param typeKitId
 * @param callback
 */
function typekit(typeKitId, options) {
  console.log("test");
  var el = document.createElement('script');
  el.src = '//use.typekit.net/' + typeKitId + '.js';
  el.onload = function() {
    Typekit.load(options);
    delete window.Typekit;
  };
  document.body.appendChild(el);
}

module.exports = typekit;

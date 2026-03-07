// Redirect away from the feed immediately
if (location.pathname === '/feed' || location.pathname === '/feed/') {
  location.replace('https://www.linkedin.com/mynetwork/');
}

function hideHomeButton() {
  // Find all links pointing to the feed - this is the only stable identifier
  document.querySelectorAll('a[href*="/feed"]').forEach(a => {
    try {
      var url = new URL(a.href, location.origin);
    } catch (e) {
      return;
    }
    // Only match /feed or /feed/ exactly, not /feedback etc.
    if (url.pathname !== '/feed' && url.pathname !== '/feed/') return;
    // Walk up to the closest list item and hide it
    var li = a.closest('li');
    if (li) li.style.cssText = 'display:none!important;visibility:hidden!important;width:0!important;height:0!important;overflow:hidden!important;';
  });
}

// Wait for document.body to exist (script runs at document_start)
if (document.body) {
  hideHomeButton();
  new MutationObserver(hideHomeButton).observe(document.body, { childList: true, subtree: true });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    hideHomeButton();
    new MutationObserver(hideHomeButton).observe(document.body, { childList: true, subtree: true });
  });
}

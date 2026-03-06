// Redirect away from the feed immediately
if (location.pathname === '/feed' || location.pathname === '/feed/') {
  location.replace('https://www.linkedin.com/mynetwork/');
}

function hideHomeButton() {
  const selectors = [
    'button[data-view-name="navigation-homepage"]',
    'a[href*="/feed/"]',
    'a[href$="/feed"]',
    '.global-nav__primary-link-text[title="Home"]',
    'a[data-link-to*="/feed"]',
    'a[aria-label*="Home"]'
  ];
  for (const sel of selectors) {
    document.querySelectorAll(sel).forEach(el => {
      const li = el.closest('li');
      if (li) li.style.display = 'none';
    });
  }
}

hideHomeButton();

const observer = new MutationObserver(hideHomeButton);
observer.observe(document.body, { childList: true, subtree: true });

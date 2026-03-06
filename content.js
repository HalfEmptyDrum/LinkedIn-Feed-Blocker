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

function blockFeed() {
  if (!location.pathname.startsWith('/feed')) return;
  const feed = document.querySelector('.scaffold-finite-scroll, [data-view-name="feed-full-content"], main');
  if (feed) feed.style.visibility = 'hidden';
}

function run() {
  hideHomeButton();
  blockFeed();
}

run();

const observer = new MutationObserver(run);
observer.observe(document.body, { childList: true, subtree: true });

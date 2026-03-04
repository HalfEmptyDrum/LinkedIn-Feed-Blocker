function hideHomeButton() {
  const btn = document.querySelector('button[data-view-name="navigation-homepage"]');
  if (btn) {
    const li = btn.closest('li');
    if (li) li.style.display = 'none';
  }
}

function blockFeed() {
  if (!location.pathname.startsWith('/feed')) return;
  const feed = document.querySelector('.scaffold-finite-scroll, [data-view-name="feed-full-content"], main');
  if (feed) feed.style.visibility = 'hidden';
}

hideHomeButton();
blockFeed();

const observer = new MutationObserver(() => {
  hideHomeButton();
  blockFeed();
});
observer.observe(document.body, { childList: true, subtree: true });

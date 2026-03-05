function blockFeed() {
  if (!location.pathname.startsWith('/feed')) return;
  const feed = document.querySelector('.scaffold-finite-scroll, [data-view-name="feed-full-content"], main');
  if (feed) feed.style.visibility = 'hidden';
}

blockFeed();

const observer = new MutationObserver(blockFeed);
observer.observe(document.body, { childList: true, subtree: true });

function removeMentions() {
  const selectors = [
    'article',                  // Twitter/X
    '[data-testid="feedItem"]'  // Bluesky
  ];

  const posts = document.querySelectorAll(selectors.join(','));

  posts.forEach(post => {
    const text = post.innerText;

    if (text && text.match(/(Trump|Biden)/i)) {
      post.style.display = "none";
    }
  });
}

removeMentions();

const observer = new MutationObserver(removeMentions);
observer.observe(document.body, { childList: true, subtree: true });

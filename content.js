function removeMentions() {
    const selectors = [
        'article',
        '[data-testid="feedItem"]'
    ];

    const posts = document.querySelectorAll(selectors.join(','));

    posts.forEach(post => {
        const text = post.innerText;

        // Putting in keyword one by one is not the best approach
        if (text && text.match(/(Trump)/i)) {
            post.style.display = "none";
        }
    });
}

removeMentions();

const observer = new MutationObserver(removeMentions);
observer.observe(document.body, { childList: true, subtree: true });

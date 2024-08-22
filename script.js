const shareButton = document.getElementById('share-button');
const socialLinksActive = document.getElementById('social-links-active');

shareButton.addEventListener('click', () => {
  const isExpanded = shareButton.getAttribute('aria-expanded') === 'true';
  shareButton.setAttribute('aria-expanded', !isExpanded);
  socialLinksActive.classList.toggle('hidden');
});

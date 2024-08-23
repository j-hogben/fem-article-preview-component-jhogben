const shareButton = document.getElementById('share-button');
const socialLinksContainer = document.querySelector('.social-links-container');

shareButton.addEventListener('click', () => {
  const isExpanded = shareButton.getAttribute('aria-expanded') === 'true';
  shareButton.setAttribute('aria-expanded', !isExpanded);
  socialLinksContainer.setAttribute('aria-hidden', isExpanded);
  socialLinksContainer.toggleAttribute('inert');
});

// Global guards for experimental/browser-specific APIs
if (typeof window !== 'undefined') {
  // Guard for documentPictureInPicture API (experimental, not supported in all browsers)
  if (!('documentPictureInPicture' in window)) {
    window.documentPictureInPicture = null;
  }

  // Suppress errors from external scripts accessing unsupported APIs
  const originalOnError = window.onerror;
  window.onerror = function(message, source, lineno, colno, error) {
    if (typeof message === 'string' && message.includes('documentPictureInPicture')) {
      // Silently ignore documentPictureInPicture errors from third-party scripts
      return true; // Prevent default error logging
    }
    if (originalOnError) {
      return originalOnError.call(window, message, source, lineno, colno, error);
    }
    return false;
  };

  // Also catch unhandled promise rejections
  window.addEventListener('unhandledrejection', function(event) {
    if (event.reason && event.reason.message && event.reason.message.includes('documentPictureInPicture')) {
      event.preventDefault();
    }
  });
}

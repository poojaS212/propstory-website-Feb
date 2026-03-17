// Source - https://stackoverflow.com/a/79517693
// Posted by yoocodeur, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-17, License - CC BY-SA 4.0


export function applyGoogleTranslateFix() {
  if (typeof window !== 'undefined' && !window.__googleTranslateFixApplied) {
    const originalRemoveChild = Node.prototype.removeChild;
    
    Node.prototype.removeChild = function (child) {
      try {
        return originalRemoveChild.call(this, child);
      } catch (error) {
        if (error.name === 'NotFoundError') {
          // Prevents crashes by ignoring the error
          return child;
        }
        throw error;
      }
    };

    const originalInsertBefore = Node.prototype.insertBefore;

    Node.prototype.insertBefore = function (newNode, referenceNode) {
      try {
        return originalInsertBefore.call(this, newNode, referenceNode);
      } catch (error) {
        if (error.name === 'NotFoundError') {
          // If insertion fails, append the element instead
          return this.appendChild(newNode);
        }
        throw error;
      }
    };

    window.__googleTranslateFixApplied = true;
  }
}


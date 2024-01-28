/**
 * Merge multiple class strings into a single string.
 * @param classes - The class strings to merge.
 * @returns The merged class string.
 */
export const mc = (...classes) => {
  const uniqueClasses = new Set();

  for (const classString of classes) {
    let word = '';
    for (const char of classString) {
      if (char === ' ') {
        if (word) {
          uniqueClasses.add(word);
          word = '';
        }
      } else {
        word += char;
      }
    }
    // Ajouter le dernier mot si la chaîne ne se termine pas par un espace
    if (word) {
      uniqueClasses.add(word);
    }
  }
  return Array.from(uniqueClasses).join(' ');
};

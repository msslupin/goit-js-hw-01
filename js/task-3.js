function getElementWidth(content, padding, border) {
  const contentFloat = parseFloat(content);
  const paddingFloat = parseFloat(padding);
  const borderFloat = parseFloat(border);

  const elementFloat = contentFloat + 2 * (paddingFloat + borderFloat);

  return elementFloat; 
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 

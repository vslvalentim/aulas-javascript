
const elementosFake = [
    {
      tagName: 'DIV',
      style: { color: 'blue', display: 'flex' },
      classList: ['container', 'active']
    },
    {
      tagName: 'H1',
      style: { color: 'red', display: 'block' },
      classList: ['title']
    },
    {
      tagName: 'BUTTON',
      style: { color: 'white', display: 'inline-block' },
      classList: ['btn', 'btn-primary']
    }
  ];

  elementosFake.forEach((el) => {
    console.log(
      `Tag: ${el.tagName} | Qtde. de classes: ${el.classList.length} | Classes: ${el.classList.join(', ')}`
    );
  });
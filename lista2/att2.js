
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

  for (const el of elementosFake) {
    if (el.style.color === 'blue') {
      console.log(`O elemento ${el.tagName} é azul!`);
    }
  }
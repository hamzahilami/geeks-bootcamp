const grid = document.getElementById('grid');
const colorPalette = document.getElementById('colorPalette');
const clearBtn = document.getElementById('clearBtn');
let mouseDown = false;

const colors = [
  '#000000', '#7f7f7f', '#e6194B', '#f58231',
  '#ffe119', '#bfef45', '#3cb44b', '#42d4f4',
  '#4363d8', '#911eb4', '#f032e6', '#a9a9a9',
  '#fabebe', '#ffd8b1', '#fffac8', '#aaffc3',
  '#dbefff', '#808000', '#800000', '#808080',
  '#000080', '#008080', '#ff4500', '#2e8b57'
];

let selectedColor = colors[0];

// Create color palette with 3 columns automatically due to CSS grid
colors.forEach(color => {
  const swatch = document.createElement('div');
  swatch.classList.add('color-swatch');
  swatch.style.backgroundColor = color;
  if (color === selectedColor) swatch.classList.add('selected');

  swatch.addEventListener('click', () => {
    selectedColor = color;
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
    swatch.classList.add('selected');
  });

  colorPalette.appendChild(swatch);
});

const gridSize = 40;

function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 30px)`;
  grid.style.gridTemplateRows = `repeat(${size}, 30px)`;
  grid.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mousedown', () => {
      square.style.backgroundColor = selectedColor;
      mouseDown = true;
    });

    square.addEventListener('mouseover', () => {
      if (mouseDown) {
        square.style.backgroundColor = selectedColor;
      }
    });

    grid.appendChild(square);
  }
}

createGrid(gridSize);

document.body.addEventListener('mouseup', () => {
  mouseDown = false;
});

clearBtn.addEventListener('click', () => {
  document.querySelectorAll('.square').forEach(sq => {
    sq.style.backgroundColor = 'white';
  });
});

let container = document.createElement('div');
  
    document.body.appendChild(container);

    container.style.display = 'flex';
    container.style.flexFlow = 'row wrap';
    container.style.width = '800px';
    container.style.height = '800px';
    container.style.margin = 'auto';


function checkerBoard() {
    let alt = true;
    for (let j = 0; j < 64; j++) {
    let tiles = document.createElement('div');

        if (j % 8 === 0) {
            alt = !alt;
        } 

        if (alt) {
            tiles.style.width = '12.5%';
            tiles.style.height = '12.5%';
            //tiles.style.backgroundColor = randomColor();
            tiles.style.background = 'linear-gradient(to bottom right, #90ee90, blue)';
        
            alt = false;
        } else {
            tiles.style.width = '12.5%';
            tiles.style.height = '12.5%';
            //tiles.style.backgroundColor = randomColor();
            tiles.style.background = 'linear-gradient(blue, #90ee90)'

            alt = true;
        }
        container.appendChild(tiles);
    }
 }
 checkerBoard();



 function randomColor() {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);

return `rgb(${r}, ${g}, ${b})`;
}
































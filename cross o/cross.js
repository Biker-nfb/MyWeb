const ex = "x";
const o = "o";
const empty = "";
let player = true;
let gameOn = true;
let step = 0;

const renderX = "<svg class='x board_square--el' viewBox='0 0 80 80'><line class='x__line1' x1='10' y1='10' x2='70' y2='70' /><line class='x__line2' x1='70' y1='10' x2='10' y2='70' /></svg>";
const renderO = " <svg class='o board_square--el' viewBox='0 0 80 80'><circle cx='40' cy='40' r='30'/></svg>";

const winLine = "<svg class='board_square--win' viewBox='0 0 2400 2400'><line class='win_line' x1='0' y1='0' x2='2400' y2='2400' /></svg>";
const winLine2 = "<svg class='board_square--win' viewBox='0 0 2400 2400'><line class='win_line' x1='2400' y1='0' x2='0' y2='2400' /></svg>";
const winLine3 = "<svg class='board_square--win' viewBox='0 0 2400 2400'><line class='win_line' x1='400' y1='0' x2='400' y2='2400' /></svg>";
const winLine4 = "<svg class='board_square--win' viewBox='0 0 2400 2400'><line class='win_line' x1='1200' y1='0' x2='1200' y2='2400' /></svg>";
const winLine5 = "<svg class='board_square--win' viewBox='0 0 2400 2400'><line class='win_line' x1='2000' y1='0' x2='2000' y2='2400' /></svg>";
const winLine6 = "<svg class='board_square--win' viewBox='0 0 2400 2400'><line class='win_line' x1='0' y1='400' x2='2400' y2='400' /></svg>";
const winLine7 = "<svg class='board_square--win' viewBox='0 0 2400 2400'><line class='win_line' x1='0' y1='1200' x2='2400' y2='1200' /></svg>";
const winLine8 = "<svg class='board_square--win' viewBox='0 0 2400 2400'><line class='win_line' x1='0' y1='2000' x2='2400' y2='2000' /></svg>";





const boardCell = [empty, empty, empty, empty, empty, empty, empty, empty, empty]

const cell = Array.from(document.querySelectorAll(".board_square"));




for(let i=0; i<9; i++) {
    cell[i].addEventListener('click', ()=> init(i))
}

function init(arg) {
    if (player === true && boardCell[arg] === empty && gameOn === true) {

        cell[arg].innerHTML = renderX;

        player = false; 
        boardCell[arg] = ex;
        step++;
        checkWin();

    } 

    setTimeout(comp, 1000);
    
}



function randomInt(min, max) // Случайное целое число в диапазоне min-max
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let comp = function(){ //Думает 2 секунды
            while (player === false && gameOn === true) {
                let r = randomInt(0, 8); //Выбирает случайную ячейку
                if (!document.querySelectorAll('.board_square')[r].innerHTML) {    //Если находит пустую
                    document.querySelectorAll('.board_square')[r].innerHTML = renderO; //Ставит нолик в неё
                    boardCell[r] = o;
                    player = true;
                    step++;
                    setTimeout(checkWin, 1000);
                    break;
                }
                
            }
        }

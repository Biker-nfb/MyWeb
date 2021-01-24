const game = {
    boardEl: document.querySelector('.board'),
    board: suffleArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0 ])
    
}

 


function init() {

    const obj = game.boardEl.querySelectorAll('.board__square');
    const join = {};
    for (let i=0; i<obj.length; i++){
        const put = obj[i];
        const num2 = parseInt(put.innerText, 10);
        join[num2] = put; 

    }
    game.board_items = join;
    console.log(join)

    // const el_num = 
}

init();
// idx = 0 ... 15
function getPositionByIndex(idx) {
    const rowIdx = Math.floor(idx / 4);
    const columnIdx = idx % 4;

    return {
        top: `${rowIdx * 25}%`,
        left: `${columnIdx * 25}%`,
    };
}

function suffleArr(arr) {
    return arr.sort(function (el1, el2) {
        return Math.random() - 0.5;
    });
}

function step(num) {
    const numIdx = game.board.findIndex(function(el) {
        return el === num;
    });
    const emptyIdx = game.board.findIndex(function(el) {
        return el === 0;
    });
    const siblingsIdx = {
        top: Math.floor(numIdx / 4) === 0 ? null : numIdx - 4,
        bottom: Math.floor(numIdx / 4) === 3 ? null : numIdx + 4, // ?
        right: numIdx % 4 === 3 ? null :numIdx + 1,
        left: numIdx % 4 === 0 ? null : numIdx - 1,
    };

    console.log({ numIdx, emptyIdx });

    if (Object.values(siblingsIdx).includes(emptyIdx)) {
        // i can do step
        game.board[emptyIdx] = num;
        game.board[numIdx] = 0;
    }else {
         console.warn('can\'t do step');
    }

   
}

const button_win = document.querySelector('.button_win') ;

const perfect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0 ];

button_win.onclick = () => {
        if (game.board.join() !== perfect.join()) {
            game.board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0 ];
        } else {
            game.board 
        }
        
        render()
      
}

const button_color = document.querySelector('.button_color');

button_color.onclick = function() {
    const colors=["red","blue","green", "yellow", "pink"];
    Array.from(document.querySelectorAll(".board__square")).map((i)=>{i.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)]
   })
}


function isWin() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0 ].join() === game.board.join();
}

function render() {
    game.board.forEach(function(num, indx) {
        const position = getPositionByIndex(indx);
        const el = game.board_items[num];
        if (el) {
        el.style.top = position.top;
        el.style.left = position.left;
        } 
        
    })
}
render()

game.boardEl.addEventListener("click", clickByBoard);



 function clickByBoard(e) {
    console.log('clickByBoard', e);
    console.log('target', e.target); // элемент на котором захвачено событие
    console.log('currentTarget', e.currentTarget); // элемент на котором перехвачено событие

    

    const cellItem = e.target.closest('.board__square');
    if (cellItem) {
        step(+cellItem.innerText);
        render();
    }
    if (isWin()) {
        alert('You Win');
    }
   
    }


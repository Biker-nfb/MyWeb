function checkWin () {
    
    for (let i = 0; i <= 2; i++)
    if (boardCell[i*3] === ex && boardCell[i*3 + 1] === ex && boardCell[i*3 +2] === ex || boardCell[i] === ex && boardCell[i+3] === ex && boardCell[i+6] === ex || boardCell[0] === ex && boardCell[4] === ex && boardCell[8] === ex|| boardCell[2] === ex && boardCell[4] === ex && boardCell[6] === ex) {

        if (boardCell[0] === ex && boardCell[4] === ex && boardCell[8] === ex) {
            let renderWinLine = document.querySelector('.winLine');
        renderWinLine.innerHTML = winLine;
        }
       
        if (boardCell[2] === ex && boardCell[4] === ex && boardCell[6] === ex) {
            let renderWinLine2 = document.querySelector('.winLine');
        renderWinLine2.innerHTML = winLine2;
        }

         if (boardCell[i] === ex && boardCell[i+3] === ex && boardCell[i+6] === ex) {
            let renderWinLine3 = document.querySelector('.winLine');
            if(i===0) {
                 renderWinLine3.innerHTML = winLine3;
            }
            if(i===1) {
                 renderWinLine3.innerHTML = winLine4;
            }
             if(i===2) {
                 renderWinLine3.innerHTML = winLine5;
            }
            }

        if (boardCell[i*3] === ex && boardCell[i*3 + 1] === ex && boardCell[i*3 +2] === ex) {
            let renderWinLine4 = document.querySelector('.winLine');
            if (i===0) {
                 renderWinLine4.innerHTML = winLine6;
            }
            if (i===1) {
                 renderWinLine4.innerHTML = winLine7;
            }
             if (i===2) {
                 renderWinLine4.innerHTML = winLine8;
            }
        }

       
        

        let win = document.querySelector('.XWin');
        win.style.display = 'flex';
        gameOn = false; 

            
    
        
    } else if (boardCell[i*3] === o && boardCell[i*3 + 1] === o && boardCell[i*3 +2] === o || boardCell[i] === o && boardCell[i+3] === o && boardCell[i+6] === o || boardCell[0] === o && boardCell[4] === o && boardCell[8] === o || boardCell[2] === o && boardCell[4] === o && boardCell[6] === o){
         if (boardCell[0] === o && boardCell[4] === o && boardCell[8] === o) {
            let renderWinLine = document.querySelector('.winLine');
        renderWinLine.innerHTML = winLine;
        }
       
        if (boardCell[2] === o && boardCell[4] === o && boardCell[6] === o) {
            let renderWinLine2 = document.querySelector('.winLine');
        renderWinLine2.innerHTML = winLine2;
        }

         if (boardCell[i] === o && boardCell[i+3] === o && boardCell[i+6] === o) {
            let renderWinLine3 = document.querySelector('.winLine');
            if(i===0) {
                 renderWinLine3.innerHTML = winLine3;
            }
            if(i===1) {
                 renderWinLine3.innerHTML = winLine4;
            }
             if(i===2) {
                 renderWinLine3.innerHTML = winLine5;
            }
            }

        if (boardCell[i*3] === o && boardCell[i*3 + 1] === o && boardCell[i*3 +2] === o) {
            let renderWinLine4 = document.querySelector('.winLine');
            if (i===0) {
                 renderWinLine4.innerHTML = winLine6;
            }
            if (i===1) {
                 renderWinLine4.innerHTML = winLine7;
            }
             if (i===2) {
                 renderWinLine4.innerHTML = winLine8;
            }
        }
        let win = document.querySelector('.OWin');
        win.style.display = 'flex';
        gameOn = false;
    } else if(step===9) {
       
       let win = document.querySelector('.OWin');
       win.innerHTML = "DRAW"
        win.style.display = 'flex';
        gameOn = false;

       
    }
    
}
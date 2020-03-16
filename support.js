

function getPosTop(i , j){
    return 120*i+20;
}
function getPosLeft(i , j){
    return 120*j+20;
}

function getNumberBackgoundColor(number){
    switch( number ){
        case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "##9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a63";break;
        case 8192:return "#93c";break;
    }
    return "black";

}

function getNumberColor(number){
    //除了2/4，都是白色
    if(number <= 4){
        return "#776e65";
    }
    return "white";
}

function nospace(board){
    //看看有没有格子有0即可
    for( var i = 0; i<4; i++){
        for( var j = 0; j<4; j++){
            if(board[i][j] == 0){
                return false;
            }
        }
    }
    return true;
}



function noBlockHorizontal(row, col1,col2,board){
    for(var k = col1+1; k< col2; k++){
        if( board[row][k] != 0 ){
            return false;
        }
    }
    return true;
}
function noBlockVertical(col, row1, row2, board){
    for(var k = row1+1; k<row2; k++){
        if(board[k][col] !=0){
            return false;
        }
    }
    return true;
}

function canMoveLeft(board){
    //除最左边一列格子其他都需判断是否能够左移
    for( var i = 0; i<4; i++){
        for( var j = 1; j<4; j++){
            if(board[i][j] != 0){
                if( board[i][j-1] == board[i][j] || board[i][j-1] == 0){
                    return true;
                }
            }
        }
    }
    return false;
}
function canMoveRight(board){
    for( var i = 0; i<4; i++){
        for( var j = 2; j>=0; j--){
            if( board[i][j] != 0 ){
                if(board[i][j+1] == 0 || board[i][j+1] == board[i][j] ){
                    return true;
                }
            }
        }
    }
    return false;
}
function canMoveUp(board){
    for( var j = 0; j<4; j++){
        for( var i = 1; i<4; i++){
            if(board[i][j] != 0){
                if(board[i-1][j] == 0 || board[i-1][j] == board[i][j] ){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveDown(board){
    for( var j = 0; j<4; j++){
        for( var i = 2; i >= 0; i--){
            if(board[i][j] != 0){
                if(board[i+1][j] == 0 || board[i+1][j] == board[i][j] ){
                    return true;
                }
            }
        }
    }
    return false;
}

function nomove( board ){
    //复用四个方向能否移动的函数
    if( canMoveLeft(board) || 
        canMoveRight(board) || 
        canMoveUp(board) || 
        canMoveDown(board) ){
        return false;
    }
    return true;
}




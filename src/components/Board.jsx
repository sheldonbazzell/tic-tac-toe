import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneTurn:false,
            board:[[1,1,1],[1,1,1],[1,1,1]]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    updateCell(cell) {
        if(!cell.innerHTML)
            cell.innerHTML = this.state.playerOneTurn ? 'X' : 'O'        
    }

    handleClick(pos, e) {
        let x = pos[0], y = pos[1];
        let newState = this.state;
        newState['playerOneTurn'] = !this.state.playerOneTurn;
        newState['board'][x][y] = newState['playerOneTurn'] ? 2 : 3;
        this.setState(() => ({newState}), this.updateCell(e.target))
    }

    checkBoard() {
        let board = this.state.board;
        let opt1 = board.filter(
            (x, y) => y === 0
        )
        if (opt1[0] === opt1[1] && opt1[1] === opt1[2]) {
            console.log(opt1)
            return opt1[0]
        }
        let opt2 = board.filter(
            (x, y) => y === 1
        )
        if (opt2[0] === opt2[1] && opt2[1] === opt2[2]) {
            console.log(opt1)            
            return opt2[0]
        }
        let opt3 = board.filter(
            (x, y) => y === 2
        )
        if (opt3[0] === opt3[1] && opt3[1] === opt3[2]) {
            console.log(opt3);
            return opt3[0]
        }
        for (let i = 0; i < board.length; ++i) {
            let stack = [board[i][0]];
            if (stack[0] !== 1) {
                for (let j = 1; j < board[i].length; ++j) {
                    if (board[i][j] !== stack[i]){
                        break;
                    }
                    stack.push(board[i][j]);
                }
                if (stack.length === 3) {
                    return stack[0];
                }
            }
        }
        let topLeft = [board[0][0]];
        if (topLeft[0] !== 1) {
            for (let j = 1; j < board.length; ++j) {
                if (board[j][j] === topLeft[0])
                    topLeft.push(board[j][j]); 
            }
            if (topLeft.length === 3) {
                console.log(topLeft);
                return topLeft[0];
            }
        }
        let topRight = [board[0][2]];
        if (topRight[0] !== 1) {
            for (let k = 1; k >= 0; --k) {
                if (board[k][k] === topRight[0])
                    topRight.push(board[k][k]);
            }
            if (topRight.length === 3) {
                return topRight[0];
            }
        }
        return false;

    }

    render() {
        let x = this.checkBoard();
        console.log(x);
        if (x) {
            console.log(x);
            alert(x, " wins!");
        }
        return (
            <Table className="board">
                <tbody>
                    {this.state['board'].map((x, y) => {
                        return (
                            <tr key={y}>
                                {x.map((a,b) => {
                                    return (
                                        <td key={b} onClick={this.handleClick.bind(null, [y,b])}>{}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    }
}

export default Board;
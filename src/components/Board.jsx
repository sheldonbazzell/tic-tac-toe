import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

function Turn(props) {
    return (
        <div id="turn-container">
            <span id="turn">Turn:</span>
            {props.turn &&
                <span className="player">Player One</span>
            }
            {!props.turn &&
                <span className="player">Player Two</span>
            }
        </div>
    )
}

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneTurn:true,
            board:[[1,1,1],[1,1,1],[1,1,1]],
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    updateCell(cell) {
        if (!cell.innerHTML || cell.innerHTML === '&nbsp;') {
            cell.innerHTML = this.state.playerOneTurn ? 'X' : 'O'        
        }
    }

    handleClick(pos, e) {
        let x = pos[0], y = pos[1];
        let newState = this.state;
        newState['playerOneTurn'] = !this.state.playerOneTurn;
        newState['board'][x][y] = newState['playerOneTurn'] ? 2 : 3;
        newState['count']++;
        this.setState(() => ({newState}), this.updateCell(e.target))
    }

    checkBoard() {
        let board = this.state.board;
        if (board[0][0] !== 1) {
            if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
                console.log('here');
                return board[0][0]
            }
        }
        if (board[1][0] !== 1) {               
            if (board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
                console.log('here');
                return board[1][0]
            }
        }
        if (board[2][0] !== 1) {        
            if (board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
                console.log('here');
                return board[2][0]
            }
        }
        if (board[0][0] !== 1) {
            if (board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
                console.log('here');
                return board[0][0]
            }
        }
        if (board[0][1] !== 1) {
            if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
                console.log('here');
                return board[0][0]
            }
        }
        if (board[0][2] !== 1) {
            if (board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
                console.log('here');
                return board[0][2]
            }
        }
        if (board[0][0] !== 1) {
            if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
                console.log('here');
                return board[0][0]
            }
        }
        if (board[0][2] !== 1) {
            if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
                console.log('here');
                return board[0][2]
            }
        }
        if (this.state.count === 9) {
            return "Game Over";
        }
        return false;
    }

    render() {
        let x = this.checkBoard();
        if (x) {
            if (x === "Game Over") {
                let restart = prompt("Game Over. Restart");
                console.log(restart)
                restart !== null ? window.location.reload() : window.close()
            } else {
                let msg = x === 2 ? "X wins!" : "Y wins!";
                alert(msg);
            }
        }
        return (
            <div>
                <Table className="board">
                    <tbody>
                        {this.state['board'].map((x, y) => {
                            return (
                                <tr key={y}>
                                    {x.map((a,b) => {
                                        return (
                                            <td
                                                key={b}
                                                onClick={this.handleClick.bind(null, [y,b])}
                                                >
                                                &nbsp;
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <Turn turn={this.state.playerOneTurn} />
            </div>
        )
    }
}

export default Board;
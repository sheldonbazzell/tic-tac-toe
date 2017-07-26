import React from 'react';
import {Button} from 'react-bootstrap';

class NewGame extends React.Component {
    handleClick() {
        window.locaton.reload();
    }
    render() {
        return (
            <Button
                className="btn button"
                onClick={this.handleClick}>
                    New Game
            </Button>
        )
    }
}

export default NewGame;
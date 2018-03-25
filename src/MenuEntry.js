import React, { Component } from 'react';
import './MenuEntry.css';

class MenuEntry extends Component {
    handleClick(game) {
        this.props.menuEntryClickFunction(game)
    }

    getClass() {
        if (this.props.active) {
            return "active"
        } else {
            return ""
        }
    }

    render() {
        let game = this.props.game;

        return (
            <li onClick={() => this.handleClick(game)} className={this.getClass()}>
                <a>
                    {game.name}
                </a>
            </li>
        )
    }
}

export default MenuEntry;
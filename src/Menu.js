import React, { Component } from 'react';
import MenuEntry from './MenuEntry';

class Menu extends Component {
    render() {
        var currentGameKey = this.props.currentGameKey;
        var menuEntryClickFunction = this.props.menuEntryClickFunction;

        return (
            <ul className="nav nav-pills nav-stacked">
                {
                    this.props.games.map(function (game) {
                        return <MenuEntry key={game.key} game={game}
                                          active={currentGameKey === game.key}
                                          menuEntryClickFunction={menuEntryClickFunction}/>
                    })
                }
            </ul>
        )
    }
}

export default Menu;
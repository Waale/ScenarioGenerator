import React, { Component } from 'react';
import CharacterAttributesRow from './CharacterAttributesRow';

class CharacterAttributes extends Component {
    render() {
        var game = this.props.game;
        var rowLength = 4;

        return game.map(function(attribute, index) {
            return index%rowLength===0 ? game.slice(index, index + rowLength) : null;
        }).filter(function (attribute) {
            return attribute;
        }).map(function(row, rowIndex) {
            return (
                <CharacterAttributesRow key={rowIndex} row={row}/>
            )
        });


    }
}

export default CharacterAttributes;
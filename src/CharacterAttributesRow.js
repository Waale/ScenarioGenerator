import React, { Component } from 'react';
import CharacterAttribute from './CharacterAttribute';

class CharacterAttributesRow extends Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.row.map(function(attribute) {
                        return (
                            <CharacterAttribute key={attribute.name} attribute={attribute}/>
                        );
                    })
                }
            </div>
        )
    }
}

export default CharacterAttributesRow;
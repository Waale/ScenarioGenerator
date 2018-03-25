import React, { Component } from 'react';

class CharacterAttributeValue extends Component {
    render() {
        return (
            <h5>
                {this.props.value}
            </h5>
        )
    }
}

export default CharacterAttributeValue;
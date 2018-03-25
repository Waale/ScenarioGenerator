import React, { Component } from 'react';
import CharacterAttributeValue from './CharacterAttributeValue';
import './CharacterAttribute.css';

class CharacterAttribute extends Component {
    getRandomValue() {
        var attribute = this.props.attribute;
        var min = 1;
        var max = attribute.number;
        var values = attribute.values;
        if (max === undefined) {
            min = attribute.min;
            max = attribute.max;
        }
        var selectedValues = [];
        var i = 1;
        var j = this.getRandomNumber(min, max);
        while (i <= j) {
            var k = this.getRandomNumber(0, values.length - 1);
            var selectedValue = values[k];
            if (!selectedValues.includes(selectedValue)) {
                selectedValues.push(selectedValue);
                i++;
            }
        }
        return selectedValues;
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        let attribute = this.props.attribute;
        return (
            <div className="col col-md-3 char-gen-attribute">
                <h4>{attribute.name}</h4>
                {this.getRandomValue().map(function(value, index) {
                    return <CharacterAttributeValue key={index} value={value}/>
                })}
            </div>
        )
    }
}

export default CharacterAttribute;
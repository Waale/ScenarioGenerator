import React, { Component } from 'react';
import './CharacterGenerator.css';
import CharacterAttribute from './CharacterAttribute';
import FontAwesome from '@fortawesome/react-fontawesome';
import RerollIcon from '@fortawesome/fontawesome-free-solid/faRedoAlt';
import BarsIcon from '@fortawesome/fontawesome-free-solid/faBars';

class CharacterGenerator extends Component {
    handleRerollClick(game) {
        this.props.rerollClickFunction(game);
    }

    handleMobileMenuButtonClick() {
        this.props.mobileMenuClickFunction();
    }

    render() {
        if (this.props.game === undefined) {
            return (
                <div ref="char-gen" className={this.props.class}>
                    <h1>Select a game to generate a random scenario</h1>
                </div>
            )
        } else {
            var game = require("./games/" + this.props.locale + "/" + this.props.game.file);

            return (
                <div ref="char-gen" className={this.props.class}>
                    <div className="char-gen-content">
                        <div className="row char-gen-top-row">
                            <h1 onClick={() => this.handleMobileMenuButtonClick()}>
                                <FontAwesome icon={BarsIcon}
                                             className="bars-icon"/>
                            </h1>
                            <h1>{this.props.game.name}&nbsp;
                                <FontAwesome onClick={() => this.handleRerollClick(this.props.game)}
                                             icon={RerollIcon}
                                             className="reroll-icon"/>
                            </h1>
                        </div>
                        <div className="row">
                            {
                                game.map(function(attribute) {
                                    return (
                                        <CharacterAttribute key={attribute.name} attribute={attribute}/>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="char-gen-background"
                         style={{backgroundImage: "url(images/backgrounds/" + this.props.game.background + ")"}}/>
                </div>
            )
        }
    }
}

export default CharacterGenerator;
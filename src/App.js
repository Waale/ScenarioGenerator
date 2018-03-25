import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import CharacterGenerator from "./CharacterGenerator";

class App extends Component {
    constructor() {
        super();
        this.state = {
            background: undefined,
            game: undefined,
            locale: "en",
            mobileMenuOpen: true
        };
        this.onMenuEntryClick = this.onMenuEntryClick.bind(this);
        this.onMobileMenuButtonClick = this.onMobileMenuButtonClick.bind(this);
        this.onRerollClick = this.onRerollClick.bind(this);
    }

    onMenuEntryClick(game) {
        if (this.state.game !== game) {
            this.setState({
                game: game,
                mobileMenuOpen: false
            })
        }
    }

    onRerollClick(game) {
        this.setState({
            game: game
        })
    }

    onMobileMenuButtonClick() {
        if (this.state.mobileMenuOpen) {
            this.setState({
                mobileMenuOpen: false
            })
        } else {
            this.setState({
                mobileMenuOpen: true
            })
        }
    }

    render() {
        var menuEntryClickFunction = this.onMenuEntryClick;
        var mobileMenuButtonClickFunction = this.onMobileMenuButtonClick;
        var rerollClickFunction = this.onRerollClick;
        var locale = this.state.locale;
        var currentGameKey = null;
        if (this.state.game !== undefined) {
            currentGameKey = this.state.game.key;
        }
        var games = require("./games/" + locale + "/games.json");

        return (
            <div className="App">
                  <div className="row">
                      <div className="col-md-3 left-panel">
                          <Menu games={games} currentGameKey={currentGameKey}
                                menuEntryClickFunction={menuEntryClickFunction}/>
                      </div>
                      <div className={"mobile-menu" + (this.state.game === undefined ? " initial" : "") + (this.state.mobileMenuOpen ? "" : " hidden")}>
                          <Menu games={games} currentGameKey={currentGameKey}
                                menuEntryClickFunction={menuEntryClickFunction}/>
                      </div>
                      <CharacterGenerator class="col-md-9 char-gen" locale={locale} game={this.state.game}
                                          rerollClickFunction={rerollClickFunction}
                                          mobileMenuClickFunction={mobileMenuButtonClickFunction}/>
                  </div>
            </div>
        );
    }
}

export default App;

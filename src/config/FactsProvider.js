import { Component, createContext } from "react"

export const FactsContext = createContext();

export class FactsContextProvider extends Component {
    constructor() {
        super();

        this.state = {
            showFact: true,
            hiddeFact: this.hiddeFact
        }

        this.baseState = this.state;
    }

    hiddeFact = () => this.setState({ showFact: false });

    render() {
        return(
            <FactsContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </FactsContext.Provider>
        )
    }
}
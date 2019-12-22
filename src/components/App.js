import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();

        this.searchInput = React.createRef();
    }

    componentDidMount() {
        this.searchInput.current.focus();
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-6 offset-sm-3">
                        <form>
                            <div className="form-group">
                                <label for="search">Search</label>
                                <input
                                    type="search"
                                    className="form-control"
                                    ref={this.searchInput}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

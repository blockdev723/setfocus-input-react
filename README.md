
# Sample of the method how to set focus on input after rendering in React


## Install

`npm install`

## Run

`npm start`

## Description

//Create this.searchInput reference object in the constructor method

    constructor() {
        super();

        this.searchInput = React.createRef();
    }

//Using a prop called ref, associate input element with a refrenece that's anme is 'searchInput' in Render function.

    <input
        type="search"
        className="form-control"
        ref={this.searchInput} // here //
    />

//Inside of componentDidMount method we're calling focus() method on the current property of this.searchInput reference object:

    componentDidMount() {
        this.searchInput.current.focus();
    }

...

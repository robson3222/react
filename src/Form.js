import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            representante: '',
            Hawb: '',
            Importador:'',
            Data:''
        };

        this.state = this.initialState;
    }
     
    handleChange = event => {
        const { data, value } = event.target;

        this.setState({
            [data] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }



    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { representante, hawb, importador, data } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>representante</label>
                <input 
                    type="text" 
                    name="representante" 
                    value={representante} 
                    onChange={this.handleChange} />

                <label>importador</label>
                <input 
                    type="text" 
                    name="importador" 
                    value={importador} 
                    onChange={this.handleChange} />


                <label>data</label>
                <input 
                    type="text" 
                    name="data" 
                    value={data} 
                    onChange={this.handleChange} />




                <label>hawb</label>
                <input 
                    type="text" 
                    name="hawb" 
                    value={hawb} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
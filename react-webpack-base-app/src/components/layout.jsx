import { hot } from 'react-hot-loader/root'
import React from 'react';
import Header from './header.jsx'

class Layout extends React.Component {
    constructor(props) {
        super();

        //** the layout holds the state; inherit from the properties defined on the <Layout> element
        this.state = {
            title: props.title || '',
            body: props.body || ''
        }

        //** set the context of the event handlers here; sets the "this" reference
        this.handleChange = this.handleChange.bind(this);
    }

    //** define an event handler for the input's onChange event
    handleChange(e) {
        //** set the state, triggering UI update
        this.setState({ title: e.target.value });

        //** if defined, trigger a custom event handler on the consumer
        this.props.onSetTitle && this.props.onSetTitle(e.target.value);
    }

    render() {
        return (
            <React.Fragment>
                <Header title={ this.state.title }/>
                { this.state.body }

                <fieldset>
                    <input id="the-title" type="text" value={ this.state.title } onChange={ this.handleChange }/>
                </fieldset>
            </React.Fragment>
        );
    }
}

export default hot(Layout);

import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'

class DateCountdownInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    render() {
        return(
            <Form inline>
                <FormControl 
                    className="Countdown-input"
                    onChange={event => this.setState({value: event.target.value})} 
                    placeholder="new date"/>
                <Button onClick={() => this.props.action(this.state.value)}>submit</Button>
            </Form>
        )
    }
}

export default DateCountdownInput;
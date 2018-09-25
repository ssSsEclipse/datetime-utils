import React, {Component} from 'react';
import DateCountdownRemainder from './DateCountdownRemainder'
import DateCountdownInput from './DateCountdownInput'
import '../Countdown.css'


class DateCountdownComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2018'
        }

        this.handler = this.handler.bind(this);
    }

    handler(newDeadline) {
        this.setState({
            deadline: newDeadline
        })
    }

    render() {
        return (
            <div className="Countdown">
                <div className="Countdown-title">
                    Countdown to {this.state.deadline}
                </div>

                <DateCountdownRemainder 
                    deadline={this.state.deadline}
                />
                
                <DateCountdownInput 
                    action={this.handler}
                />
            </div>
        )
    }
}

export default DateCountdownComponent
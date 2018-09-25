import React, { Component } from 'react'
import DateCountdownComponent from './components/Countdown/DateCountdown/DateCountdownComponent'

import './App.css'
import { Tab, Row, Col, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Tab.Container id="tabs-with-dropdown" defaultActiveKey="{1}">
                    <Row className="clearfix">
                        <Col sm={12}>
                            <Nav bsStyle="tabs">
                                <NavItem eventKey="{1}">Stopwatch</NavItem>
                                <NavItem eventKey="{2}">Timer</NavItem>
                                <NavDropdown eventKey="{3}" title="Countdown" id="nav-dropdown-within-tab">
                                    <MenuItem eventKey="{3.1}">Date Countdown</MenuItem>
                                    <MenuItem eventKey="{3.2}">Timer Countdown</MenuItem>
                                </NavDropdown>
                            </Nav>
                        </Col>
                        <Col sm={12}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="{1}">WIP</Tab.Pane>
                                <Tab.Pane eventKey="{2}">WIP</Tab.Pane>
                                <Tab.Pane eventKey="{3.1}">
                                    <DateCountdownComponent />
                                </Tab.Pane>
                                <Tab.Pane eventKey="{3.2}">WIP</Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>;
            </div>
        )
    }
}

export default App
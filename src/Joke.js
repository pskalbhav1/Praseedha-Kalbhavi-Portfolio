import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Fade
} from 'reactstrap';
import './App.css';

export default class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
      }

    render() {
        let { setup, punchline } = this.props.humor;
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{setup}</CardTitle>
                        <Button size="sm" color="danger" onClick={this.toggle}>Details</Button>
                        <Fade in={this.state.fadeIn} className='my-2'>
                            <CardText>{punchline}</CardText>
                        </Fade>
                    </CardBody>
                </Card>
            </div>
        );
    }

    toggle() {
        this.setState({
          fadeIn: !this.state.fadeIn
        });
    }
};
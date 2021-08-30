import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            votes: 0

        }
    }

    incrementNumberOfVotes = () => {
        this.setState({
            votes: this.state.votes + 1
        })

    }


    render() {
        return (
            <>
                {/* // <h2>{this.props.title}</h2>
            // <img src={this.props.image_url} alt={this.props.title} title={this.props.title} />
            // <p>{this.props.description}</p> */}



                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} onClick={this.incrementNumberOfVotes} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            votes 💖: {this.state.votes};
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </>
        )
    }
}

export default HornedBeasts;
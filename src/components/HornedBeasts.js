import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



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
        this.props.handleShow();
        this.props.updateSelectedBeastsData(this.props.title, this.props.src, this.props.description);


    }


    render() {
        return (
            <>
                {/* // <h2>{this.props.title}</h2>
            // <img src={this.props.image_url} alt={this.props.title} title={this.props.title} />
            // <p>{this.props.description}</p> */}



                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={this.props.src} onClick={this.incrementNumberOfVotes} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            votes 💖: {this.state.votes}
                            <br></br>
                            {this.props.description};
                        </Card.Text>
                    </Card.Body>
                </Card>

            </>
        )
    }
}

export default HornedBeasts;
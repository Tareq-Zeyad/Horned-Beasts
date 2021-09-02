import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import rawData from './components/HornedBeasts.json'
import SelectedBeast from './components/SelectedBeast';
import Form from 'react-bootstrap/Form'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Data: rawData,
            show: false,
            // because these values from the object array are dynamic data that will move to display from a card to a modal
            title: '',
            src: '',
            description: '',
        };

    }

    handleShow = () => {
        this.setState({
            show: true
        });
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    updateSelectedBeastsData = (title, src, description) => {
        this.setState({
            title: title,
            src: src,
            description: description,
        })

    }

    selectHorn = (event) => {
        console.log(event.target.value);
        let beastsFiltering

        if (event.target.value == 'All') {
            beastsFiltering = rawData;
        }
        else {
            beastsFiltering = rawData.filter(item => {
                if (item.horns === parseInt(event.target.value)) {
                    return item
                }



            })
            console.log(beastsFiltering);

            
        }
        this.setState({
            Data: beastsFiltering,
        });


    };



    render() {
        // console.log(Data);

        return (
            <>
                <Header />

                <Form>
                    <Form.Group controlId="horns">
                        <Form.Select aria-label="Select a horn number:" onChange={this.selectHorn}>
                            <option>Select beast horns number:</option>
                            <option value="All">All</option>
                            <option value="1">One horn</option>
                            <option value="2">Two horns</option>
                            <option value="3">Three horns</option>
                            <option value="100">Wow</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
                <Main

                    Data={this.state.Data}
                    handleShow={this.handleShow}
                    updateSelectedBeastsData={this.updateSelectedBeastsData}
                />
                <SelectedBeast
                    show={this.state.show}
                    handleClose={this.handleClose}
                    title={this.state.title}
                    src={this.state.src}
                    description={this.state.description}
                />
                <Footer />
            </>
        )
    }

}

export default App;
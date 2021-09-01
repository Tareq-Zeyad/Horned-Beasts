import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import rawData from './components/HornedBeasts.json'
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            Data : rawData,
            show : false,
            // because these values from the object array are dynamic data that will move to display from a card to a modal
            title : '',
            src : '',
            description : '',
        };
        
    }

    handleShow = () => {
        this.setState({
          show : true
        });
    }

    handleClose = () => {
        this .setState({
            show : false
        })
    }

    updateSelectedBeastsData = (title,src,description) => {
        this.setState({
            title: title,
            src : src,
            description : description,
        })

    }

    

    render() {
        // console.log(Data);

        return (
            <>
                <Header />
                <Main 
               Data= {this.state.Data}
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
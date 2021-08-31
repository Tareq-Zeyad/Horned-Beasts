import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Data from './components/HornedBeasts.json'
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            show : false
        };
        
    }

    handelShow = () => {
        this.setState({
          show : true
        });
    }

    handelClose = () => {
        this .setState({
            show : false
        })
    }

    

    

    render() {
        // console.log(Data);

        return (
            <>
                <Header />
                <Main 
               Gallery= {Data}
               handelShow={this.handelShow}

                />
                <SelectedBeast
                show={this.state.show}
                handelClose={this. handelClose}
                modalData={this.modalData}
                />
                <Footer />
            </>
        )
    }

}

export default App;
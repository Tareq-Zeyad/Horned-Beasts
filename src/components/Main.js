import React from 'react';
import HornedBeasts from './HornedBeasts' 




class Main extends React.Component {
    render() {
        return (
            <>
            <div style={{display:'flex' , flexFlow:'row' , flexWrap:'wrap' , padding:'4rem'}}>
                {this.props.Data.map (item => {
                    return(
                        <HornedBeasts
                        title={item.title}
                        src={item.image_url}
                        description={item.description}
                        handleShow={this.props.handleShow}
                        updateSelectedBeastsData={this.props.updateSelectedBeastsData}
                        />
                    )
                })
            }

                </div>
            </>
        );
    };
};

export default Main;
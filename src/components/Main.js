import React from 'react';
import HornedBeasts from './HornedBeasts' 




class Main extends React.Component {
    render() {
        return (
            <>
            <div style={{display:'flex' , flexFlow:'row' , flexWrap:'wrap' , padding:'4rem'}}>
                {this.props.Gallery.map (item => {
                    return(
                        <HornedBeasts
                        title={item.title}
                        img={item.image_url}
                        description={item.description}
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
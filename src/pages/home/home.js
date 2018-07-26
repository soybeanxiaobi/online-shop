import React from 'react'

import AllProduct from './child/allProduct'

class Home extends React.Component{
    constructor(){
        super();

        this.state = {
            
        }
    }
    render(){
        return(
            <div className="home">
                <AllProduct />
            </div>
        )
    }
}

export default Home
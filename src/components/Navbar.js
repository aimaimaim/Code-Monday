import React from 'react';

class Navbar extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       date: null
    
    //     };
    //   }

    
    render(){

        // console.log(new Date())
        // const {date} = this.state;
        return(
            <div>
                <h1>Code Monday Assignment</h1>
                
             {/* <b>Today is: {date=>new Date()}</b> */}
            </div>

        );
    }
}

export default Navbar;
import React from "react";

class DisplayInfo extends React.Component {
    render () {
        // destructuring array/object
        const { age, name} = this.props; // object
        return (
            <div>
                <div>My name's {name}</div>
                <div>My age {age}</div>
            </div>
        )
    }
}

export default DisplayInfo;
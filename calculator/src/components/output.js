import React from 'react';
import OutputRow from './outputRow';

const Output = props => {
    return(
        <div>
            <OutputRow value={props.answer} textSize={{fonsize: '20px'}}/>
            <OutputRow value={props.user} />
        </div>
    )
}
export default Output;
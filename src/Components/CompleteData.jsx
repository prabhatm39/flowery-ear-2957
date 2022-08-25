import React from 'react';

const CompleteData = ({suggestions}) => {
    console.log(suggestions);
    return (
        <div>
        {
            suggestions.map((item) => {
                return <div>{item.descTitle}</div>
            })
        }
        </div>
    )
}

export default CompleteData

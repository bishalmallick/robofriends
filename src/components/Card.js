import React from 'react';

// Without destructuring
// const Card = (props) => {
//     return(
//         <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
//             <img alt='Robots' src={`https://robohash.org/${props.id}?200x200`} />
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     )
// }

// With Destructuring
const Card = ({ name, email, id }) => {
    return(
        <div className='bg-light-blue dib br3 pa3 ma2 grow ba bw2 b--near-black shadow-5 tc'>
            <img alt='Robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
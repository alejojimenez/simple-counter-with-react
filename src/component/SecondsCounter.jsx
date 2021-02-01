import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../styles/styles.css';

const SecondsCounter = (props) => {
    return (
        <>
		<div className='wrapper'>
			<div className='container'>
                <h1 className='row display-3 justify-content-center'>Simple Counter</h1>
    			<div className='row display-3 justify-content-center font-weight-normal bg-black rounded'>
					<div className='icon font-text m-3 p-2'>
                        <img className='bg-img'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSwob7a8CVrHJ8lCan784ZwNcgD4RfNASRA&usqp=CAU" alt="Clock" width="90" height="90" />
					</div>
					<div className='six font-text bg-gray m-1 p-3 rounded'>
						{props.digitSix % 10}
					</div>
					<div className='five font-text bg-gray m-1 p-3 rounded'>
						{props.digitFive % 10}
					</div>
					<div className='four font-text bg-gray m-1 p-3 rounded'>
						{props.digitFour % 10}
					</div>
					<div className='three font-text bg-gray m-1 p-3 rounded'>
						{props.digitThree % 10}
					</div>
					<div className='two font-text bg-gray m-1 p-3 rounded'>
						{props.digitTwo % 10}
					</div>
					<div className='one font-text bg-gray m-1 p-3 rounded'>
						{props.digitOne % 10}
					</div>
				</div>
			</div>
		</div>
        </>
    );
}

SecondsCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};    

let counter = 0;
setInterval( () => {
    const six = Math.floor(counter / 100000);
    const five = Math.floor(counter / 10000);
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter);
    console.log(six, five, four, three, two, one);
    
    counter++;
    ReactDOM.render(
    <SecondsCounter
        digitOne={one}
        digitTwo={two}
        digitThree={three}
        digitFour={four}
        digitFive={five}
        digitSix={six}
    />,
    document.querySelector('#root')
    );
}, 1000);

export default SecondsCounter;
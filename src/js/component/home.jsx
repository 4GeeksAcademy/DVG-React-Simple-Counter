import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock} from '@fortawesome/free-regular-svg-icons'
import {useState, useEffect} from "react"
//include images into your bundle


//create your first component
const Home = () => {

	const [counter,setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(counter => counter + 1)
		},1000)

		return () => clearInterval(interval)
	},[counter])

		function calculateSeconds (aCounter, placeValue) {
			return Math.floor(aCounter / placeValue) % 10
		}
	
	return (
	<div className="counterDisplay">
		<div className="clockImg">
			<FontAwesomeIcon icon={faClock} />
		</div>
		<div className="secondsThousands">{calculateSeconds(counter, 1000)}</div>
		<div className="secondsHundreds">{calculateSeconds(counter, 100)}</div>
		<div className="secondsTens">{calculateSeconds(counter, 10)}</div>
		<div className="secondsOnes">{calculateSeconds(counter, 1)}</div>
	</div>)
};

export default Home;

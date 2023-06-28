import React, { useState } from 'react'
import styles from './optionSelector.module.css'

export const options = { SALES: 'Sales (DSW)', TILL: 'Till' }
function OptionSelector({ onOptionChange }) {
	const [selectedOption, setSelectedOption] = useState(options.SALES)

	const handleOptionClick = (option) => {
		setSelectedOption(option)
		onOptionChange(option)
	}

	return (
		<div className={styles.optionSelector}>
			{Object.keys(options).map((optionKey) => (
				<button
					key={optionKey}
					className={`${styles.button} ${
						selectedOption === options[optionKey] ? styles.selected : ''
					}`}
					onClick={() => handleOptionClick(options[optionKey])}>
					{options[optionKey]}
				</button>
			))}
		</div>
	)
}

export default OptionSelector

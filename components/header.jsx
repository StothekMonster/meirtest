import React from 'react'
import styles from './header.module.css'
import backButtonIcon from '../icons/arrow_back.svg'
import Image from 'next/image'
import Link from 'next/link'
function Header({ title, back }) {
	const backButton = back ? (
		<Link href='/'>
			<button className={styles.backButton}>
				<Image src={backButtonIcon} alt='Back' />
			</button>
		</Link>
	) : null

	return (
		<div className={styles.header}>
			{backButton}
			<div className={styles.title}>{title}</div>
		</div>
	)
}

export default Header

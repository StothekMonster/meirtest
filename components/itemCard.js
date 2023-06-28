import React from 'react'
import styles from './itemCard.module.css'
import Image from 'next/image'

const colorCodes = { C400: '#FAF', C484: '#FAF', C890: '#666', C500: '#208' }

function ItemCard({ item }) {
	// console.log(item.);
	const colorToUse = colorCodes[item.color_code] || '#cca'
	console.log(colorToUse)
	console.log(item)
	return (
		<div className={styles.container}>
			{item.image ? (
				<Image
					alt={item.descriptif}
					width={115}
					height={115}
					src={item.image}></Image>
			) : (
				'no image available'
			)}
			<div className={styles.description}>
				<h2 className={styles.cardHeader}>{item.titre}</h2>
				<div className={styles.itemId}>65432345</div>
				<div className={styles.color}>
					<div
						className={styles.swatch}
						style={{ backgroundColor: `${colorToUse}` }}></div>

					<div className={styles.colorName}>{item?.color_name}</div>
				</div>
				<div className={styles.data}>
					{'Quantity:'}
					<div className={styles.quantity}>1</div>
				</div>
				<div className={styles.data}>
					{'Price:'}
					<div className={styles.price}>2600 $</div>
				</div>
			</div>
		</div>
	)
}

export default ItemCard

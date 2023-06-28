import Link from 'next/link'
import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import guy from '../icons/account_user.svg'
function SalesCard({ sale, href }) {
	const firstImage =
		sale.items?.length && sale.items[0].image
			? sale.items[0].image
			: sale.imageUrl
	const currency = sale.items?.length ? sale.items[0].currency : '$'
	const saleStatuses = {
		cancelled: 'CANCELLED',
		inProgress: 'IN_PROGRESS',
		paid: 'PAID',
		pos: 'SENT_TO_POS'
	}
	const date = new Date(sale.createdDate)
	let saleStatus = sale.status
	let statusColor =
		saleStatus === saleStatuses.cancelled
			? 'RED'
			: saleStatus === saleStatuses.inProgress
			? 'ORANGE'
			: saleStatus === saleStatuses.pos
			? 'PURPLE'
			: 'GREEN'

	if (saleStatus === saleStatuses.paid)
		saleStatus = `SID ${sale.documentNumber}`
	return (
		<Link href={href}>
			<div className={styles.cardLink}>
				<div className={styles.container}>
					<div className={styles.cardHeaderWrapper}>
						<Image
							alt='item image'
							className={styles.image}
							src={firstImage}
							width={100}
							height={100}
						/>
						<h2 className={`${styles.cardHeader} ${styles.description}`}>
							<div className={styles.titleProgress}>
								<div className={styles.title}>{sale.title}</div>
								<div
									className={`${styles.status} ${
										statusColor === 'RED'
											? styles.RED
											: statusColor === 'ORANGE'
											? styles.ORANGE
											: statusColor === 'PURPLE'
											? styles.PURPLE
											: styles.GREEN
									}`}>
									{saleStatus}
								</div>
							</div>

							<div className={styles.saleDetails}>
								<div className={styles.currency}>
									{currency} {sale.totalAmount}
								</div>
								|
								<div className={sale.date}>
									{date.toLocaleDateString()}{' '}
									{date.toLocaleTimeString('en-US', {
										hour: 'numeric',
										minute: 'numeric'
									})}
								</div>
							</div>
							<div className={styles.salesAgent}>
								<div className={styles.salesIcon}>
									<Image src={guy} alt='salesman-logo' />
								</div>
								<div className={styles.salesName}>
									{sale.salesAssociate.name}
								</div>
							</div>
						</h2>
					</div>
					<div className={styles.cardImageWrapper}></div>
				</div>
			</div>
		</Link>
	)
}

export default SalesCard

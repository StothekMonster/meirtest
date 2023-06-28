import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import salesData from '../../MOCK_CART_EXO_4.json'
import Header from '../../components/header'
import ItemCard from '../../components/itemCard'

export function getStaticProps({ params }) {
	return {
		props: {
			sale: salesData.find((sale) => sale.orderId == params.id)
		}
	}
}

export function getStaticPaths() {
	return {
		paths: salesData.map((store) => {
			return { params: { id: store.orderId.toString() } }
		}),
		fallback: true
	}
}

const Cart = (props) => {
	const router = useRouter()

	if (router.isFallback) {
		return <div>Loading...</div>
	}

	const { title, items } = props.sale

	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<Header title={title} back />
			{items.map((item) => {
				return <ItemCard key={item.sku} item={item} />
			})}
		</div>
	)
}

export default Cart

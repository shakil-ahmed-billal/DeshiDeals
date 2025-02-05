
const allProduct = async () => {

    console.log(process.env.LIVE_SERVER_URL);
    const productData = await fetch(`${process.env.LIVE_SERVER_URL}/all-product`)
    const data = productData.json()
    return data
}

export default allProduct
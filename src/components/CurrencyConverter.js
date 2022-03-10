import { useState } from 'react'
import axios from 'axios'
import { SwapOutlined } from '@ant-design/icons'
import { Input,Card } from 'antd'
import millify from 'millify'
import { FontSizeOutlined } from '@ant-design/icons'
const CurrencyConverter = () => {

    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA', 'JPY', 'NEO']

    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')

    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')

    const [amount, setAmount] = useState(1)

    const [result, setResult] = useState(0)


    const [exchangedData, setExchangedData] = useState( {

        primaryCurrency: 'BTC',

        secondaryCurrency: 'BTC',

        exchangeRate: 0

    })



    console.log(amount)

    const convert = () => {

        const options = {

            method: 'GET',

            url: 'https://alpha-vantage.p.rapidapi.com/query',

            params: { to_currency: chosenSecondaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', from_currency: chosenPrimaryCurrency },

            headers: {

                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,

            }
        }

        axios.request(options).then((response) => {
            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
            setExchangedData({
                primaryCurrency: chosenPrimaryCurrency,
                secondaryCurrency: chosenSecondaryCurrency,
                exchangeRate: response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']
            })
        }).catch((error) => {
            console.error(error)
        })
    }
    return (
        <div className="currency-converter">
            <div className='input-box'>



                <div className='cov'>
                    
                    <Card 
                    hoverable
                    style={
                        {padding:"10px" , borderRadius: "10px"}
                    }
                    >
                        <h4>FROM</h4>
                    <Input
                        type="number"
                        name="currency-amount-1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />


                    <select
                        value={chosenPrimaryCurrency}
                        name="currency-option-1"
                        className="currency-options"
                        onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                    >
                        {currencies.map((currency) => (<option >{currency}</option>))}
                    </select>
                    </Card>
                </div>
                <SwapOutlined className='covertb' id="convert-button" onClick={convert}></SwapOutlined>
                <div className='cov'>
                    
                    <Card 
                    hoverable
                    style={
                        { borderRadius: "10px",padding:'10px'}
                    }
                    >
                        <h4>TO</h4>
                    <Input
                        name="currency-amount-2"
                        value={result}
                    />


                    <select
                        value={chosenSecondaryCurrency}
                        name="currency-option-2"
                        className="currency-options"
                        onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                    >
                        {currencies.map((currency) => (<option>{currency}</option>))}
                    </select>
                    </Card>
                </div>
                
            </div>
            <div className="exchange-rate">
                <Card>
                <div className="excenter">
                <h1>Exchange Rate</h1>
                <h2>{millify(exchangedData.exchangeRate)}</h2>
                <p  >{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
                </div>
                </Card>
            </div>
        </div>

    )

}

export default CurrencyConverter
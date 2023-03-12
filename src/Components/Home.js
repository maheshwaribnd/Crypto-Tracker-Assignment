import React, { useEffect, useState } from 'react'
import Crypto from './Crypto';
import Footer from './Footer';
import getCoinData from './getCoinData';
import Search from './Search';


function Home() {
    const [coin, setCoin] = useState([]);                   // This state is for getting coins
    const [search, setSearch] = useState("")               // This state is for search coins
    const [displaydata, setdisplaydata] = useState([]);   // This state is for filtered coins with display
    const [sort, setSort] = useState(true);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = await getCoinData()
        if (data) {
            setCoin(data);
            setdisplaydata(data);
        }
    }

    let onChange = (e) => {
        setSearch(e.target.value)

        let filterCoins = coin.filter((coin) => {
            if (coin.name.toLowerCase().includes(search.toLowerCase())) {
                return coin;
            }
        })
        setdisplaydata(filterCoins);
    }

    let PriceChangeFunction = () => {
        setSort((prev) => !prev)
        if(sort){
            const temp = [...displaydata.sort((a, b) => {
                return a.market_cap - b.market_cap
            })]
            setdisplaydata(temp)
            console.log(displaydata);
        }
        else{
            const temp = [...displaydata.sort((a, b) => {
                return b.market_cap - a.market_cap
            })]
            setdisplaydata(temp);
        }
    }

    let MarketCapFunction = () => {
        
        setSort((prev) => !prev);
        if (sort) {
            const temp = [...displaydata.sort((a, b) => {
                return a.market_cap - b.market_cap
            })]
            setdisplaydata(temp);
        }
        else {
            const temp = [...displaydata.sort((a, b) => {
                return b.market_cap - a.market_cap
            })]
            setdisplaydata(temp);
        }
    }


    return (
        <>
            <h1 className='flex justify-center items-center font-bold text-3xl pt-4'>Coinwatch</h1>

            <Search search={search} onChange={onChange} />

            <div className='flex justify-center items-start'>
                <table className='w-3/4 my-3 border-collapse border-spacing-y-6 border-slate-900 md:w-4/5'>
                    <tr className='py-12 border-solid border-2 border-slate-900'>
                        <th className='p-2 border-2 border-slate-900'>Rank</th>
                        <th className='p-2 border-2 border-slate-900'>Name</th>
                        <th className='p-2 border-2 border-slate-900'>Price</th>
                        <th className='p-2 border-2 border-slate-900 hover:cursor-pointer' onClick={PriceChangeFunction}>Price Change 24H</th>
                        <th className='p-2 border-2 border-slate-900 hover:cursor-pointer' onClick={MarketCapFunction}>Market Cap</th>
                    </tr>

                    {displaydata.map((item) => {
                        return <Crypto data={item} />
                    })}
                </table>
            </div>
            <Footer />
        </>
    )
}

export default Home

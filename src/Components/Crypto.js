import React from 'react'

function Crypto({data}) {
  return (
    <>
      <tr className='text-center border-solid'>
        <td className='p-2 border-2 border-slate-900'>{data.market_cap_rank}</td>
        <td className='p-2 border-2 border-slate-900'>{data.name}</td>
        <td className='p-2 border-2 border-slate-900'>${data.current_price}</td>
        <td className='p-2 border-2 border-slate-900'>${data.price_change_24h}</td>
        <td className='p-2 border-2 border-slate-900'>{data.market_cap}</td>
      </tr>
    </>
  )
}

export default Crypto

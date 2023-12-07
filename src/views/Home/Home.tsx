import React, { useState, useEffect, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'


const Component: React.FC = () => {
    const { account, chainId } = useWeb3React()
    // const [input_number, setInput_number] = useState<any>()


    return (
        <>
            <div>
                <h1>this is home page</h1>
                <h1>{account ?? '...'}</h1>
                <h1>{chainId ?? '...'}</h1>
            </div>
        </>
    )
}

export default Component
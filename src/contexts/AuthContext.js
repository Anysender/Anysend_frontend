import React, { useContext, useState } from 'react'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [ currentAccount, setCurrentAccount] = useState()
    const [ currentNetwork, setCurrentNetwork ] = useState()
    const [ amount, setAmount ] = useState()
    const [ tokenAddress, setTokenAddress ] = useState()
    const [ addresses, setAddresses] = useState()
    const [ isUpload, setIsUpload ] = useState(false)
    const [ isPro, setIsPro ] = useState(false)
    const [ balance, setBalance ] = useState()
    const [ tabIndex, setTabIndex ] = useState(0)
    const [ contractAddr, setContractAddr ] = useState()
    const [ isChecked, setIsChecked ] = useState(false)

    const value = {
        currentAccount, setCurrentAccount,
        currentNetwork, setCurrentNetwork,
        amount, setAmount,
        tokenAddress, setTokenAddress,
        addresses, setAddresses,
        isUpload, setIsUpload,
        isPro, setIsPro,
        balance, setBalance,
        contractAddr, setContractAddr,
        tabIndex, setTabIndex,
        isChecked, setIsChecked
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

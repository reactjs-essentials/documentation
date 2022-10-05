import React , {useState} from 'react'

const SharedContext = React.createContext({})

export function SharedContextProvider({children}){
    const [info, setInfo] = useState('no info')
    return (
        <SharedContext.Provider value ={{info, setInfo}}>
            {children}
        </SharedContext.Provider>
    )

}
export default SharedContext;
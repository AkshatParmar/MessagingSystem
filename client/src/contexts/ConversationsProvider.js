import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ConversationsContext = React.createContext()

export function useConversations() {
    return useContext(ConversationsContext)
}

export function ConverationsProvider({ children }) {
    const [conversations, setConversations] = useLocalStorage('conversations', [])

    function createConversation(receipients) {
        setConversations(prevConversations => {
            return [...prevConversations, { receipients, messages: [] }]
        })
    }
    
    return (
        <ConversationsContext.Provider value={{ conversations, createConversation }}>
            {children}
        </ConversationsContext.Provider>
    )
} 
import React, { createContext, useReducer, useEffect, useState, useContext } from 'react'
import CookiePopin from './CookiePopin'
import CookieManage from "./CookieManage"

const COOKIE_NAME = 'consent'
const initial = {
    isSet: 0,
    marketing: 0
}

const CookieConsentStateContext = createContext()
const CookieConsentDispatchContext = createContext()

const CookieConsentProvider = ({ children }) => {
    const [initialCookieValue, setInitialCookieValue] = useState(initial)
    const [popupIsOpen, setPopupIsOpen] = useState(false)
    const [managePopupIsOpen, setManagePopupIsOpen] = useState(false)

    useEffect(() => {
        const getCookie = () => {
            const regex = new RegExp(`(?:(?:^|.*;\\s*)${COOKIE_NAME}\\s*\\=\\s*([^;]*).*$)|^.*$`)
            const cookie = document.cookie.replace(regex, "$1")
            return cookie.length ? JSON.parse(cookie) : undefined
        }

        setInitialCookieValue( getCookie )
        setPopupIsOpen(!initialCookieValue.isSet)
    }, [])

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'toggle':
                return {
                    ...state,
                    [action.value]: !state[action.value],
                }
            case 'accept':
                return {
                    ...state,
                    [action.value]: true,
                }
            case 'decline':
                return {
                    ...state,
                    [action.value]: false,
                }
            case 'acceptAll':
                setPopupIsOpen(false)
                return {
                    ...state,
                    isSet: 2,
                }
            case 'declineAll':
                setPopupIsOpen(false)
                return initial
            case 'hideManageCookiePopup':
                setManagePopupIsOpen(false)
                return state
            case 'showManageCookiePopup':
                setManagePopupIsOpen(true)
                return state
            case 'hideCookiePopup':
                setPopupIsOpen(false)
                return state
            case 'showCookiePopup':
                setPopupIsOpen(true)
                return state
            default:
                throw new Error()
        }
    }, initialCookieValue)

    // Update the cookie when state changes
    useEffect(() => {
        document.cookie = `${COOKIE_NAME}=${JSON.stringify(state)}`
    }, [state])

    return (
        <CookieConsentStateContext.Provider value={state}>
            <CookieConsentDispatchContext.Provider value={dispatch}>
                {children}
                {popupIsOpen && <CookiePopin dispatch={dispatch} />}
                {managePopupIsOpen && <CookieManage dispatch={dispatch} />}
            </CookieConsentDispatchContext.Provider>
        </CookieConsentStateContext.Provider>
    )
}

function useCookieConsentState() {
    const context = useContext(CookieConsentStateContext)
    if (context === undefined) {
        throw new Error('useCookieConsentState must be used within CookieProvider')
    }
    return context
}

function useCookieConsentDispatch() {
    const context = useContext(CookieConsentDispatchContext)
    if (context === undefined) {
        throw new Error('useCookieConsentDispatch must be used within CookieProvider')
    }
    return context
}

export { CookieConsentProvider, useCookieConsentState, useCookieConsentDispatch }

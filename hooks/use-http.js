import { useState } from "react"
import { useDispatch } from "react-redux"
import { feedbackActions } from "../store/feedback-slice"

import Constants from "expo-constants"
const { domain } = Constants.expoConfig.extra

export const useGet = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const getRequest = async (url, token) => {
        try {
            setIsLoading(true)
            const response = await fetch(`${domain}${url}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            const { success, message, data } = await response.json()
            setIsLoading(false)
            if (!success) throw new Error(message)
            return data
        } catch (err) {
            dispatch(feedbackActions.sendFeedback({
                message: err.message,
                success: false
            }))
        }
    }
    return { getRequest, isLoading }
}

export const usePost = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const postRequest = async (url, body, token = null) => {
        try {
            setIsLoading(true)
            const response = await fetch(`${domain}${url}`, {
                method: 'post',
                body: JSON.stringify(body),
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            const { success, message, data } = await response.json()
            setIsLoading(false)
            if (!success) throw new Error(message)
            return data
        } catch (err) {
            dispatch(feedbackActions.sendFeedback({
                message: err.message,
                success: false
            }))
        }
    }
    return { postRequest, isLoading }
}

export const catchAsync = func => {
    return () => {
        func().catch(console.error)
    }
}
import { fetchUser } from '@/store/features/userSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useAuth = () => {
    const dispatch = useDispatch()
    const userSlice = useSelector(state => state.user)
    const [user , setUser ] = useState({
        auth : userSlice.auth,
        user : userSlice.user
    })
    
    

    useEffect(() => {
        dispatch(fetchUser())
    } , [])
    useEffect(() => {
        setUser({
            auth : userSlice.auth,
            user : userSlice.user,
        })
    } , [userSlice.auth])

    return user
}

export default useAuth
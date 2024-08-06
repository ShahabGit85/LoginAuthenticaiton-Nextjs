import { useAuth } from '@/context/context'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const ProtectedRoute = ({childern}) => {
    const router = useRouter()
    const isAuthenticated = useAuth();


    useEffect(()=>{

    },[isAuthenticated])

    if(isAuthenticated){
        router.push("/dashboard/home")
    }

  return childern;
}

export default ProtectedRoute

import React, {useState, useEffect, useContext} from 'react'
import { AiFillHeart } from 'react-icons/ai'
import useAuthCheck from '../../hooks/useAuthcheck'
import { useMutation } from "react-query"
import { useAuth0 } from "@auth0/auth0-react"
import Userdetail from '../../infoContainer/detailcon'
import { toFav } from '../../utils/api'
import { updateFavourites, checkFavourites } from '../../utils/common'

const Heart = ({id}) => {
    const [heartColor, setHeartColor] = useState("white")
    const {validateLogin} = useAuthCheck()
    const {user} = useAuth0()

    const {
        userDetails: { favourites, token },
        setUserDetails,
      } = useContext(Userdetail);
    
      useEffect(()=> {
        setHeartColor(()=> checkFavourites(id, favourites))
     },[favourites])
     

    
      const {mutate} = useMutation({
        mutationFn: () => toFav(id, user?.email, token),
        onSuccess: ()=> {
            setUserDetails((prev)=> (
                {
                    ...prev,
                    favourites: updateFavourites(id, prev.favourites)
                }
            ))
        }
    })

    const handleLike = () => {
        if(validateLogin())
        {
            mutate()
            setHeartColor((prev)=> prev === "#fa3e5f" ? "white": "#fa3e5f")
        }
    }
  return (
    <AiFillHeart size={24} color={heartColor} onClick={(e)=> {
        e.stopPropagation()
        handleLike()
    }}/>  )
}

export default Heart
import {useContext} from 'react'
import { CartContext } from '../../App'

export default function Count(){
    const dataCart = useContext(CartContext)
    return(
        <span className='length_cart'>{dataCart.count}</span>
    )
}
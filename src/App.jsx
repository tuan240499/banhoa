import { createContext, useState, useEffect,Fragment } from 'react'
import { publicRoutes } from './Routers/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DefauLayout from "./Components/defaulayout"
import React from 'react'
export const CartContext = createContext()
function App() {
  const [cartsUser, setCartsUser] = useState([])
  const [user, setUser] = useState({})
  const [count, setCount] = useState(0)
  function getDatas() {
    const userStorage = localStorage.getItem('user')
    if (userStorage) {
      const dataUser = JSON.parse(userStorage)
      setUser(dataUser)
      const cartStorage = localStorage.getItem(`cart${dataUser.userid}`)
      if (cartStorage) {
        const dataCartStorage = JSON.parse(cartStorage)
        setCartsUser({
          userid: dataUser.userid,
          carts: [...dataCartStorage.carts]
        })
      } else {
        const CART = {
          userid: dataUser.userid,
          carts: []
        }
        localStorage.setItem(`cart${dataUser.userid}`, JSON.stringify(CART))
        setCartsUser(CART)
      }
    } else {
      console.log('k')
    }
  }
  useEffect(() => {
    getDatas()
  }, [])

  useEffect(() => {
    if (cartsUser.carts) {
      const total = () => {
        return cartsUser.carts.reduce((a, b) => a + b.count, 0)
      }
      setCount(total())
     
    } else {
      setCount(0)
    }
  })
  function Abc({page}){
    return(
      <div>{page}</div>
    )
  }
  console.log(user)
  return (
    <CartContext.Provider value={{
      cartsUser: cartsUser,
      setCartsUser: setCartsUser,
      user: user,
      setUser: setUser,
      count: count,
      setCount: setCount
    }}>
      <div className="app">
        <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              var Page = route.component
              let Layout = DefauLayout
              if(route.layout){
                Layout = route.layout
              }if(route.layout === null){
                Layout= Abc
              }
              return <Route key={index} path={route.path} element={<Layout page={<Page />}></Layout>}></Route>
            })}
          </Routes>
        </Router>
      </div>
    </CartContext.Provider>
  )
}

export default App

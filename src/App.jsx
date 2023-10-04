import ItemsList from "./ItemsList"
import { useState, useEffect } from "react"

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com"

  const [endpoint, setEndpoint] = useState('users')
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(`${API_URL}/${endpoint}`)
        if(!response.ok) throw Error("Something Went Wrong! Please reload the page.")
        const itemsList = await response.json()
        setItems(itemsList)
      }
      catch(err){
        console.log(err)
      }
    }
    
    fetchItems()

  }, [endpoint])
  

  return (
    <>
      <button type="button" onClick={()=>setEndpoint("users")}>
        users
      </button>
      <button type="button" onClick={()=>setEndpoint("posts")}>
        posts
      </button>
      <button type="button" onClick={()=>setEndpoint("comments")}>
        comments
      </button>
      <ItemsList 
        items={items}
      />
    </>
  )
}

export default App

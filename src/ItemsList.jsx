const ItemsList = ({ items }) => {
  return (
    <ul>
        {items.map((item) => (
            <li className="item" key={item.id}>
                {JSON.stringify(item)}
            </li>
        ))}
    </ul>
  )
}

export default ItemsList
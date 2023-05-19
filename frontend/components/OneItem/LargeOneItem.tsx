interface LargeOneItemProps{
    image?: string
    name?: string
    price?: number
}

const LargeOneItem: React.FC<LargeOneItemProps>=({image,name,price})=>{
    return(
        <div>
            <img src={image}/>
            <p>{name}</p>
            <p>{price} TND</p>
        </div>
    )
}

export default LargeOneItem
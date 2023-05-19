import axios from "axios";
import { useRouter } from "next/navigation";
import "./addtocart.css"

interface AddToCartProps{
  id?: string
}

const AddToCart: React.FC<AddToCartProps> = ({id}) => {

  const currentUser=JSON.parse(localStorage.getItem("currentUser") as any)
  const router=useRouter()

  const handleSubmit= async ()=>{
    if(!currentUser){
      router.push("/login")
    }
    else{
      console.log(currentUser.id,` |  itemid:  ${id}`)
      await axios.post("http://localhost:3001/user/add",{userId: currentUser.id, itemId: id})
      const refreshed = await axios.get(`http://localhost:3001/user/refresh/${currentUser.id}`)
      localStorage.setItem("currentUser",JSON.stringify(refreshed.data as any))
      router.push("/cart")
    }
  }

  return (
    <div>
      <button id="add-button" onClick={handleSubmit}>ADD TO CART</button>
    </div>
  );
};

export default AddToCart;
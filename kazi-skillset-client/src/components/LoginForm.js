import { GiPadlock} from "react-icons/gi"
import { RiAccountCircleLine} from "react-icons/ri"
import { RiLoginCircleLine } from "react-icons/ri"

function LoginForm(){
    return(
        <div className="mt-5">
            <div className="flex justify-center">
                 <form action="http://localhost:3000/login" method="POST" className="shadow-lg shadow-black flex flex-col px-10 bg-white max-w-lg ">
                    <p></p>
                    <div className="my-3 text-center flex justify-center text-slate-300" style={{fontSize: "5em"}}><RiLoginCircleLine /></div>
                   <div className="flex my-3">
                     <div className="border border-black py-2 px-3 flex items-center">
                     <RiAccountCircleLine/>
                     </div>
                      <input type="text" className="outline-none  border border-black p-2" name="username" placeholder="User Name" />
                    </div> 
                   
                     <div className="flex my-3">
                     <div className="border border-black py-2 px-3 flex items-center">
                     <GiPadlock/>
                    </div>
                     <input type="password" className=" outline-none border border-black p-2" name="password" placeholder="Password"/> 
                    </div>
                    <navlink to ="/">Forgot password</navlink>

                    <div className="flex py-4">
                        <div>
                            <input type="checkbox" className="mr-2" />
                            <span>Remember me</span>
                        </div>
                        <button className="bg-sky-700 w-max px-4 py-2 rounded-md my-2 mx-auto hover:bg-sky-500 hover:text-white" >Login</button>
                    </div>

                </form>
            </div> 
        </div>
    )
}

export default LoginForm;

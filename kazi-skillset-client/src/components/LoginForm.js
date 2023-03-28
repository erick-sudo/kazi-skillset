import { GiPadlock} from "react-icons/gi"
import { RiAccountCircleLine} from "react-icons/ri"

function LoginForm(){
    return(
        <div>
            <div className="flex justify-center">
                 <form className="shadow-md shadow-black flex flex-col px-10 bg-slate-400 max-w-lg ">
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
                        <button >Login</button>
                        {/* className="bg-white w-max px-4 py-1 my-2 mx-auto hover:bg-sky-500 hover:text-white" */}
                    </div>

                </form>
            </div> 
        </div>
    )
}

export default LoginForm;

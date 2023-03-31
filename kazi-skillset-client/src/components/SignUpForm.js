function SignUpForm(){

    const categories = ['Health', 'Education', 'Building and Construction', 'Software Services', 'Social Services']

    return(
        <div className="signup-form border">
            <div className="max-w-lg mx-auto"> 
                 <form action="http://localhost:3000/signup" method="POST" className="flex shadow-md shadow-black/50 flex-col px-10 py-5 my-8 pb-2">
                        <label className="text-sm text-slate-400 font-bold py-1">First Name:</label>
                        <input type="text" className="shadow-md py-1 px-3" name="firstname"/>

                        <label className="text-sm text-slate-400 font-bold py-1">Last Name:</label>
                        <input type="text" className="shadow-md py-1 px-3" name="lastname"/>

                        <label className="text-sm text-slate-400 font-bold py-1">Create a username:</label>
                        <input type="text" className="shadow-md py-1 px-3" name="username"/>

                        <label className="text-sm text-slate-400 font-bold py-1">Email Address:</label>
                        <input type="text" className="shadow-md py-1 px-3" name="email"/>

                        <label className="text-sm text-slate-400 font-bold py-1">Phone Number:</label>
                        <input type="text" className="shadow-md py-1 px-3" name="phone"/>

                        <label className="text-sm text-slate-400 font-bold py-1">Include a poster:</label>
                        <input type="text" className="shadow-md py-1 px-3" name="poster"/>

                        <label className="text-sm text-slate-400 font-bold py-1">Category</label>
                        <select className="shadow-md outline-none py-1" name="category_id">
                            {
                                categories.map((category,index) => {
                                    return <option key={index} value={index+1}>{category}</option>
                                })
                            }
                        </select>

                        <label className="text-sm text-slate-400 font-bold py-1">Password:</label>
                        <input type="password" className="shadow-md py-1 px-3" name="password"/>

                        <label className="text-sm text-slate-400 font-bold py-1">Confirm Password:</label>
                        <input type="confirm password" className="shadow-md py-1 px-3" name="password_confirmation"/>

                        <label className="text-sm text-slate-400 font-bold py-1">Add description</label>
                        <textarea name="description" rows="5" className="shadow outline-none p-3 mb-3" ></textarea>


                        <button className="bg-sky-700 w-max px-4 py-2 rounded-md my-2 mx-auto hover:bg-sky-500 hover:text-white">SignUp</button>
                        <a href="/login" className="text-blue-900 text-md text-center">login</a>
            </form>
          </div>
        </div>
        
    )
}

export default SignUpForm;

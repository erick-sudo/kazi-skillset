import React, {useEffect ,useState} from 'react';

function Home (){
    const [searchTerm, setSearchTerm] = useState('')
    const [professionals, setProfessionals] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")

    let url = 'http://localhost:3000/professionals';

    useEffect(() =>{

        if (selectedCategory) {
            url += `?category=${selectedCategory}`;
        }

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const randomProfessionals = data.sort(() => Math.random() - 0.5).slice(0, 10);
            console.log(randomProfessionals)
            setProfessionals(randomProfessionals);
            
        })},[selectedCategory])

    const handleSubmit = (e) => {
            e.preventDefault();
            if (searchTerm.length > 0) {
        // handle search of professionals
                url += `?name=${searchTerm}`;
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                    setProfessionals(data);
            });
            }
             else {
                alert('Input something to search');
            }
    };


    return(
        <>
            <h2>Kazi SkillSet</h2>
            <nav className="navbar navbar-expand-lg">
                <ul 
                style={{
                marginLeft:'20px',
                fontSize:'16px',
                }}
                className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <button className="nav-link active" onClick={() => setSelectedCategory("Education")}>Education</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link active" onClick={() => setSelectedCategory("Health")}>Health</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link active"  onClick={() => setSelectedCategory("Building and Construction")}>Building and Construction</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link active" onClick={() => setSelectedCategory("Software Services")}>Software Services</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link active" onClick={() => setSelectedCategory("Social Services")}>Social Services</button>
                    </li>
                </ul>
                    {/* <div class="dropdown">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Dropdown
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="#">Logout</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                    </div> */}
                </nav>

            
            <div className="searchBar">
                <form onSubmit={handleSubmit}>
                    <input className="miniBar" type="tetx" placeholder="Search" onChange={(e)=>setSearchTerm(e.target.value)}/>
                    <button className="miniBtn"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="professionalList">
                {professionals.map((professional) => (
                    <div className='ui card' key={professional.id}>
                        <div className="image" >
                            <img alt='professional.name' src="./rec-images/background.jpg"/>
                        </div>
                        <div className="content">
                            <div className="header">
                        </div>
                        <div className="meta text-wrap">
                            <div className='prof-details'>
                                <i className="user circle icon" style={{ fontSize: "25px" }} />
                                <h3>Name</h3>
                            </div>
                            <p style={{ marginTop: "25px" }}>Description</p>
                        </div>
                    </div>
                        <div className="extra content">
                            <span>
                                <h4>Starting at KSH</h4>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home;
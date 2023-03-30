import React, {useEffect ,useState} from 'react';

function Home (){
    const [searchTerm, setSearchTerm] = useState('')
    const [professionals, setProfessionals] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [searchResults, setSearchResults] = useState([]);

    let url = 'http://localhost:3000/professionals';

    useEffect(() =>{
        let url = 'http://localhost:3000/professionals';

        if (selectedCategory) {
            url += `?category=${selectedCategory}`;
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const randomProfessionals = data.sort(() => Math.random() - 0.5).slice(0, 12);
                console.log(randomProfessionals)
                setProfessionals(randomProfessionals);
                
            })},[selectedCategory])

    const handleSubmit = (e) => {
            e.preventDefault();
            if (searchTerm.length > 0) {
        // handle search of professionals
                let searchKey = searchTerm.toLocaleLowerCase()
                url += `?name=${searchKey}`;
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                    setSearchResults(data);
                    setProfessionals(searchResults);
                });
            }
             else {
                alert('Input something to search');
            }
    };


    return(
        <>
            <div className="searchBar">
                <form onSubmit={handleSubmit}>
                    <input className="miniBar" type="tetx" placeholder="Search" onChange={(e)=>setSearchTerm(e.target.value)}/>
                    <button className="miniBtn"><i className="fa fa-search"></i></button>
                </form>
            </div>

            <nav className="navbar navbar-expand-lg" style={{backgroundColor:'blue', height:'70px'}}>
                <ul 
                style={{
                marginLeft:'20px',
                fontSize:'16px',
                }}
                className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => setSelectedCategory("Education")}>Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" onClick={() => setSelectedCategory("Health")}>Health</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active"  onClick={() => setSelectedCategory("Building and Construction")}>Building and Construction</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" onClick={() => setSelectedCategory("Software Services")}>Software Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" onClick={() => setSelectedCategory("Social Services")}>Social Services</a>
                    </li>
                </ul>
                </nav>

            {searchResults.length > 0 && (
                <p>
                    Search Results for "{searchTerm}": {searchResults.length}
                </p>
            )}
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
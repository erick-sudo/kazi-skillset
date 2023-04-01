import React, {useEffect ,useState} from 'react';

function Home (){
    const [searchTerm, setSearchTerm] = useState('')
    const [professionals, setProfessionals] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    const [allProfessionals, setAllProfessionals] = useState([])


    useEffect(() =>{
        let url = 'http://localhost:3000/professionals';

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const allProfessionals = data
                setAllProfessionals(allProfessionals)
                const randomProfessionals = allProfessionals.sort(() => Math.random() - 0.5).slice(0, 10);
                setProfessionals(randomProfessionals);
        })
    },[])

    //  function to filter professionals based on their categories

    const handleFilter =()=>{
        // filter the professionals based on the selected category
        if (selectedCategory !== "") {
            const filteredProfessionals = allProfessionals.filter((professional) => professional.category.name === selectedCategory);
            const randomProfessionals = filteredProfessionals.sort(() => Math.random() - 0.5).slice(0, 12);
            setProfessionals(randomProfessionals);
        } else {
            // If no category is selected, display random professionals
            const randomProfessionals = allProfessionals.sort(() => Math.random() - 0.5).slice(0, 12);
            setProfessionals(randomProfessionals);
        }
    }

    //  run the handleFilter function when the selected category is updated

    useEffect(() =>{
        handleFilter()
        setSearchResults([])
    },[selectedCategory])     


    // handle the searching of data on submit
        const handleSubmit = (e) => {
            e.preventDefault();
            if (searchTerm.length > 0) {
                let searchKey = searchTerm;
                let searchUrl = `http://localhost:3000/search?q=${searchKey}`;
                fetch(searchUrl)
                .then((response) => response.json())
                .then((data) => {
                    setSearchResults(data);
                });
            } else {
                alert('Input something to search');
            }
        };

        useEffect(() => {
            if (searchResults.length > 0) {
                setProfessionals(searchResults);
            }
        }, [searchResults]);


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
            <div className="professionalList grid grid-cols-4">
                {professionals.length > 0 ? (
                    professionals.map((professional) => (
                        <div className='ui card' key={professional.id}>
                            <div className="image" >
                                <img alt={professional.username} src="./rec-images/background.jpg"/>
                            </div>
                            <div className="content">
                                <div className="header">
                            </div>
                            <div className="meta text-wrap">
                                <div className='prof-details'>
                                    <i className="user circle icon" style={{ fontSize: "25px" }} />
                                    <h3>Name: {professional.firstname}</h3>
                                </div>
                                <p style={{ marginTop: "25px" }}>Category: {professional.category.name}</p>
                                <p style={{ marginTop: "25px" }}>Job Title: {professional.job_title}</p>
                            </div>
                        </div>
                            <div className="extra content">
                                <span>
                                    <h4>Starting at KSH</h4>
                                </span>
                            </div>
                        </div>
                    ))
                    ) : (
                    <p>No professionals found</p>
                    )}
            </div>
        </>
    )
}

export default Home;
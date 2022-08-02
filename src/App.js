import {useState} from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import UniversityList from "./components/UniversityList";
import Footer from "./components/Footer";

function App() {
    const [universities, setUniversities] = useState([]);

    const universityListHandler = (listOfUniversities) => {
        setUniversities(listOfUniversities);

        console.log(universities)
    };

    return (
        <>
            <Navbar/>
            <Form setUniversityList={universityListHandler}/>
            <UniversityList lsitOfData={universities}/>
            <Footer/>
        </>
    );
}

export default App;

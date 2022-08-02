import {useState, useCallback} from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import UniversityList from "./components/UniversityList";
import Footer from "./components/Footer";
import Modal from "./ui/Modal";

function App() {
    const [universities, setUniversities] = useState([]);
    const [showModal, setShowModal] = useState(true)

    const universityListHandler = useCallback((listOfUniversities) => {
        setUniversities(listOfUniversities);
    }, []);

    const showModalHandler = () => {
        setShowModal(false)
    };

    return (<>
            {showModal && <Modal onClick={showModalHandler}/>}
            <Navbar/>
            <Form setUniversityList={universityListHandler}/>
            <UniversityList lsitOfData={universities}/>
            <Footer/>
        </>);
}

export default App;

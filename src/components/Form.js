import {useState, useEffect} from "react";

import classes from "./Form.module.css";

const Form = props => {
    const [countryName, setCountryName] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);


    const onSearchHandler = event => {
        setErrorMessage(null);
        setCountryName(event.target.value);
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (countryName.trim().length < 2) {
                return;
            }

            let updatedName = countryName.trim().split(" ");

            for (let i = 0; i < updatedName.length; i++) {
                updatedName[i] = updatedName[i].charAt(0).toUpperCase() + updatedName[i].slice(1);
            }

            updatedName = updatedName.join("+");

            console.log(updatedName)
            if (updatedName.includes("++")) {
                setErrorMessage("Please remove extra spaces from name");
                return;
            }

            fetch(`http://universities.hipolabs.com/search?name=${updatedName}`)
                .then(response => response.json())
                .then(resData => {
                    if (resData.length === 0) {
                        setErrorMessage("Not result found, please try again");
                    } else {
                        props.setUniversityList(resData);
                    }
                }).catch(err => {
                setErrorMessage(err.message);
            });
        }, 300);

        return () => clearTimeout(timerId);
    }, [countryName, props])

    const onFormSubmit = event => {
        event.preventDefault();
    };

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={onFormSubmit}>
                <label htmlFor="country">
                    Type name of Country to discover universities
                </label>
                <input
                    type="text"
                    id="country"
                    value={countryName}
                    onChange={onSearchHandler}
                    placeholder="it is desirable that this country be from our planet ☺"
                />
                <button type="submit">Search</button>
                {errorMessage && <p className={classes.error}>{errorMessage}</p>}
            </form>
        </div>
    );
};

export default Form;
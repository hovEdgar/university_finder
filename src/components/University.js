import Card from "../ui/Card";

import classes from "./University.module.css";

const University = props => {
    return (
        <Card>
            <li className={classes.container}>
                <p>Country: {props.country}</p>
                <h3>Name of university</h3>
                <h4>{props.name}</h4>
                <p>Web page: <a href={props.web_pages[0]}>{props.domains[0]}</a></p>
            </li>
        </Card>
    );
};

export default University;
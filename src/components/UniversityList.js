import University from "./University";

import classes from "./UniversityList.module.css";

const UniversityList = props => {
    return (
        <div className={classes.list}>
            <ul>
                {props.lsitOfData.map(univer => {
                    return <University
                        key={Math.random()}
                        name={univer.name}
                        web_pages={univer.web_pages}
                        country={univer.country}
                        domains={univer.domains}
                    />
                })}
            </ul>
        </div>

    );
};

export default UniversityList;
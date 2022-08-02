//https://experienceleague.adobe.com/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content.html?lang=en

//Click the lock (caution) icon, then click Site settings.
// Scroll to Insecure content, then use the drop-down list to change “Block (default)” to “Allow.”
// Reload the VEC page.

import classes from "./Modal.module.css";

const Modal = props => {
    return (
        <div className={classes.backdrop}>
            <div className={classes.modal}>
                <h4>
                    In this app I'm using an open source (not secure "http") dummy webpage
                    for data loading. It can cause an error on your browser.
                    To fix that u need to:
                </h4>
                <div className={classes.instruction}>
                    <ol>
                        <li>Click the lock (caution) icon, then click Site settings.</li>
                        <li>Scroll to Insecure content, then use the drop-down list to change “Block (default)” to
                            “Allow.”
                        </li>
                        <li>Reload the page.</li>
                    </ol>
                </div>
                <p>Fill free to do that as the webpage is open source dummy data</p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://experienceleague.adobe.com/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content.html?lang=en">
                    for more details
                </a>
                <button onClick={props.onClick}>CLOSE</button>
            </div>
        </div>
    );
};

export default Modal;
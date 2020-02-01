import * as React from "react";
import SingleForm from "./partials/single-form";


class MainPage extends React.Component {
    render() {
        return (
            <div className="form">
                <div className="form-title">
                    Example form
                </div>
                <div className="form-content">
                    <SingleForm/>
                </div>
            </div>
        );
    }
}

export default MainPage;
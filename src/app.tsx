import * as React from "react";
import {Provider} from "react-redux";
import './assets/scss/main.scss';
import configureStore from "./store";
import MainPage from "./pages/main-page/main-page";
import SimpleModal from "./layout/modal/simple-modal";

const {store} = configureStore();

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app-container">
                    <div className="app">
                        <div className="container">
                            <div className="page-content">
                                <MainPage/>
                                <SimpleModal/>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}
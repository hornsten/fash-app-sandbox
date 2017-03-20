import Layout from "./layout";
import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import store from "./store"

const root = document.getElementById('mainContent');

ReactDOM.render(
  <Provider store={store}>
  <Layout/>
</Provider>, root);

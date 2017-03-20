import React from "react";
import {connect} from "react-redux";
import TopNav from "./components/top_nav";
import SideNav from "./components/side_nav";
import MainBlock from "./components/main_block";

@connect((store) => {
  return {dashboard: store.dashboard}
})
export default class Layout extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.getElementById('loadbox2').style.display='none';
    document.getElementById('mainContent').style.display='block';

  }

  render() {
    console.log(this.props)
    return (
      <section>
        <TopNav dashboard={this.props.dashboard} dispatch={this.props.dispatch}/>
        {SideNav(this.props)}
        <MainBlock dashboard={this.props.dashboard} dispatch={this.props.dispatch}/>
      </section>
    );
  }
};

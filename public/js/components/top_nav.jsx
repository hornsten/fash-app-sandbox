import React from "react";

class TopNav extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div id="topNavBar">
            <span id="saveButt">
               <i className="fa fa-floppy-o" aria-hidden="true"></i>
            </span>
         </div>
      )
   }

}

export default TopNav;

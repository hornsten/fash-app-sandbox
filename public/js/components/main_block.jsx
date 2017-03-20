import React from "react";
import ClosetPicker from "./closet_picker";

class MainBlock extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
       let {dashboard, dispatch} = this.props;
      let {sideNavExpanded, onDisplay} = dashboard;
      return (
          
         <div id="MainBlock" className={sideNavExpanded ? 'side-nav-expand' : 'side-nav-collapsed'}>
            
            <section className={onDisplay==='closetPicker' ? 'section-containers': 'hide-elm'}>
              <ClosetPicker dashboard={dashboard} dispatch={dispatch}/>
            </section>

            <section className={onDisplay==='outfitIndex' ? 'section-containers': 'hide-elm'}>
                <h1>Outfit Index</h1>
            </section>
            <section className={onDisplay==='partyChat' ? 'section-containers': 'hide-elm'}>
                <h1>Party Chat</h1>
            </section>

         </div>
         
      )
   }
}


export default MainBlock;

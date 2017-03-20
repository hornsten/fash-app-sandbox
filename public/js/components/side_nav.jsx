import React from "react";

const SideNav = ({dashboard, dispatch}) => {
   let expanded = dashboard.sideNavExpanded;
   let editTopClass = expanded ? 'open-close-butt horz-open' : 'open-close-butt horz-close';

   const sideNavViewList = dashboard.sideNavUL.map((viewKey, index) => {
      let data = dashboard[viewKey];
      let liClass = dashboard.onDisplay === viewKey ? 'selected' : '';
      let changeView = () => {
         if (dashboard.onDisplay !== viewKey) {
            dispatch({type: "VIEW_CHANGE", onDisplay: viewKey})
         }
      }
      return <li key={'sidenav_' + index} onClick={changeView} className={liClass}>{data.sideNavText}</li>
   })
   let setNavEvent = (bool) => {
      return () => {
         dispatch({type: "SIDENAV_TOGGLE", sideNavExpanded: bool});
      }
   }
   return (
      <div id="sideNav" className={expanded ? 'side-open' : 'side-close'}>
         <div id="sideNavTop">
            <div className={editTopClass}>
               <i className="material-icons hrz" onClick={setNavEvent(false)}>more_horiz</i>
               <i className="material-icons vrtz" onClick={setNavEvent(true)}>more_vert</i>
            </div>
            <div className="open-close-butt add-ff">
               <i className="fa fa-plus-square-o add-file" aria-hidden="true"></i>
            </div>
         </div>
         <ul className="nice-list">
            {sideNavViewList}
         </ul>
      </div>
   )
}

export default SideNav;

import React, { Component } from "react";
import { DragSource, DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Clothesbin from './Clothesbin';
import Image from './Image';

class ClosetPicker extends React.Component {
   constructor(props) {
      super(props);
   }

// dragStart (event) {

//     event.dataTransfer.setData('text', event.target.id);
    
//   }

// preventDefault(event) {
//     event.preventDefault();
// }

// drop(event) {

//     event.preventDefault();

//     var data = event.dataTransfer.getData("text");
//     var dropItem = document.getElementById(data);
//     dropItem.className='dropped';
//     event.target.appendChild(dropItem);
//     event.target.classList.remove('bg');
   
// }

// handleClick(e) {
// e.preventDefault();

// }

   render() {
       
    let {dashboard, dispatch} = this.props;
      let {sideNavExpanded, onDisplay, closetItems} = dashboard;
      
      let clothesImages = Object.keys(closetItems).map((imgKey,index)=> {

          return <img id={imgKey} draggable="true" onDragStart={this.dragStart} key={imgKey} src={closetItems[imgKey].src}/>
      })

      return (
         <section className="container-fluid closet-container">
        
            <div className="col-md-6 closet-block"> 
                {/*<div id='top-target' className="poly-top target bg" onDragOver={this.preventDefault} onDrop={this.drop}>        </div>
                <div id='bag-target' className="poly-bag target bg" onDragOver={this.preventDefault} onDrop={this.drop}>Bag</div>
                <div id='bottom-target' className="poly-bottom target bg" onDragOver={this.preventDefault} onDrop={this.drop}></div>
                <div id='shoes-target' className="poly-shoes target bg" onDragOver={this.preventDefault} onDrop={this.drop}>Shoes</div>
                <div id='accessory-target' className="poly-accessory target bg" onDragOver={this.preventDefault} onDrop={this.drop}>Accessory</div>
                <div id='prop-target' className="poly-prop target bg" onDragOver={this.preventDefault} onDrop={this.drop}>Prop</div>          */}
            <DragDropContextProvider backend={HTML5Backend}>
          <div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              <Clothesbin />
            </div>
            <div style={{ overflow: 'hidden', clear: 'both' }}>
              <Image id="1j2ie" src="photos.sdfj.png" />
              <Image id="123jfls" src="photos.sdfj.png" />
              <Image id="Pabe23d" src="photos.sdfj.png"/>
            </div>
          </div>
        </DragDropContextProvider>
            </div>
             <div className="col-md-6 closet-block">
                <div className="clothes-items">
                    <div className="closet-tabs-container">
                        <ul>
                            <li>Shoes</li>
                            <li>Shirts</li>
                            <li>Dresses</li>
                        </ul>
                        <div className="gallery">
                        {/*{clothesImages}*/}
                        </div>
                    </div>
                </div>

             </div>
         </section>
      
      )
   }
}


export default ClosetPicker;

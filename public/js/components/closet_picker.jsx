import React, { Component } from "react";
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import Clothesbin from './Clothesbin';
import Image from './Image';
import ItemTypes from './ItemTypes';

@DragDropContext(HTML5Backend)
class ClosetPicker extends React.Component {
   constructor(props) {
      super(props);
    this.state = {
      clothesbins: [
        { accepts: [ItemTypes.TOP], lastDroppedItem: null },
        { accepts: [ItemTypes.BOTTOM], lastDroppedItem: null },
        { accepts: [ItemTypes.DRESS, ItemTypes.TOP, NativeTypes.URL], lastDroppedItem: null },
        { accepts: [ItemTypes.BAG, NativeTypes.FILE], lastDroppedItem: null },
        { accepts: [ItemTypes.ACCESSORY, ItemTypes.FLAIR, NativeTypes.URL], lastDroppedItem: null },
      ],
      images: [
        { id: 'Top', type: ItemTypes.TOP,src:'toppy' },
        { id: 'Bottom', type: ItemTypes.BOTTOM, src:'bottomy' },
        { id: 'Dress', type: ItemTypes.DRESS, src: 'dressy' },
        { id: 'Bag', type: ItemTypes.BAG, src: 'baggy' },
        { id: 'Earrings', type: ItemTypes.ACCESSORY, src: 'earringsy' },
        { id: 'Coffee Mug', type: ItemTypes.FLAIR, src: 'muggy' },
      ],
      droppedImageIds: [],
    };
  }

isDropped(imageId) {
    return this.state.droppedImageIds.indexOf(imageId) > -1;
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
      
    //   let clothesImages = Object.keys(closetItems).map((imgKey,index)=> {

    //       return <img id={imgKey} draggable="true" onDragStart={this.dragStart} key={imgKey} src={closetItems[imgKey].src}/>
    //   })
const { images, clothesbins } = this.state; 
      return (
         <section className="container-fluid closet-container">
        
            <div className="col-md-6 closet-block"> 
                {/*<div id='top-target' className="poly-top target bg" onDragOver={this.preventDefault} onDrop={this.drop}>        </div>
                <div id='bag-target' className="poly-bag target bg" onDragOver={this.preventDefault} onDrop={this.drop}>Bag</div>
                <div id='bottom-target' className="poly-bottom target bg" onDragOver={this.preventDefault} onDrop={this.drop}></div>
                <div id='shoes-target' className="poly-shoes target bg" onDragOver={this.preventDefault} onDrop={this.drop}>Shoes</div>
                <div id='accessory-target' className="poly-accessory target bg" onDragOver={this.preventDefault} onDrop={this.drop}>Accessory</div>
                <div id='prop-target' className="poly-prop target bg" onDragOver={this.preventDefault} onDrop={this.drop}>Prop</div>          */}
           <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {clothesbins.map(({ accepts, lastDroppedItem }, index) =>
            <Clothesbin
              accepts={accepts}
              lastDroppedItem={lastDroppedItem}
              onDrop={item => this.handleDrop(index, item)}
              key={index}
            />,
          )}
        </div>

        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {images.map(({ id,src, type }, index) =>
            <Image
              id={id}
              src={src}
              type={type}
              isDropped={this.isDropped(src)}
              key={index}
            />,
          )}
        </div>
      </div>
          
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
   handleDrop(index, item) {
    const { id } = item;

    this.setState(update(this.state, {
      clothesbins: {
        [index]: {
          lastDroppedItem: {
            $set: item,
          },
        },
      },
      droppedImageIds: id ? {
        $push: [id],
      } : {},
    }));
  }
}

export default ClosetPicker;

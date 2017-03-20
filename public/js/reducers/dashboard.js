const initialState = {
        onStart: true,
        connected: false,
        sideNavExpanded: true,
        sideNavUL: [
          'closetPicker',
          'outfitIndex',
          'partyChat'
        ],
        onDisplay: 'closetPicker',
        closetPicker: {
          sideNavText: 'Closet',
          droppedItems: []
        },
        closetItems: {
          '201393774': {src: '/img/bottom_201393774.jpg',
                        type: 'bottom'},
          '201591292': {src: '/img/dress_201591292.jpg',
                        type: 'dress'},
          '202171178': {src: '/img/dress_202171178.jpg',
                        type: 'dress'},
          '202012027': {src: '/img/shoes_202012027.jpg',
                        type: 'shoes'},
          '199987425': {src: '/img/top_199987425.jpg',
                        type: 'top'},
          '567ec3a81fe': {src: '/img/bag_567ec3a81fe.jpg',
                        type: 'bag'},
          '203456789': {src: '/img/watch_203456789.jpg',
                        type: 'accessory'},
          '683904dea': {src: '/img/flair_683904dea.jpg',
                        type: 'flair'}
        },
        outfitIndex: {
          sideNavText: 'Outfits'
        },
        partyChat: {
          sideNavText: 'Party Chat'
        }
}
    

export default function reducer(state=initialState, action) {

    switch (action.type) {
      case "SIDENAV_TOGGLE": {
        return {...state, sideNavExpanded: action.sideNavExpanded }
        break;
        
      }
      case "VIEW_CHANGE": {
        return  {...state, onDisplay: action.onDisplay }
        break;
        
      }
      case "CONNECTION_LOST": {

        return  {...state, connected: false}
          break;
      }
      case "CONNECTED": {
        return {...state, connected: true}
          break;
      }
      
    }

    return state
}


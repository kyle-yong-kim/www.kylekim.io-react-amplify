export const podcastReducer = (state, action) => {
    switch (action.type) {
        case "Toggle": {
            const itemName = action.payload.itemName;
            const newValue = !state[action.payload.itemName];
            let stateClone = {...state, [itemName]: newValue}
            const element = document.getElementById(action.payload.targetID);
            
            // change the CSS styling
            if (newValue) {
                element.classList.add("active-filter");
                element.classList.remove("deactive-filter");
            }
            else {
                element.classList.add("deactive-filter");
                element.classList.remove("active-filter");
            }
            
            // OMG you have to use spread operator, otherwise React will NOT be able to tell if the state updated or not.
            return stateClone;
        }
        case "NameChange":
            const newName = action.payload;

            return {...state, "name": newName}

        default:
            return {...state};
    }
}

export const podcastModalReducer = (state, action) => {
    switch (action.type) {

        case "NewModal": {
            const modalName = action.payload.modalName;

            return {...state, 
                [modalName]: { 
                    "beginTimeToClassName": action.payload.beginTimeToClassName
                } 
            };
        }

        case "UpdateActiveClass": {
            const activeClassName = action.payload.activeClassName;

            return {...state, 
                "activeClassName": activeClassName
            }
        }

        case "cleanupActiveClass": {
            return {...state,
                "activeClassName": null
            }
        }

        default:
            return {...state};
    }
}
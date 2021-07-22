const initialState = [
    {
        id: 0,
        name: "Rim Messaadi",
        email: "rym@gmail.com",
        number: "552223322"
    },
    {
        id: 1,
        name: "Mustapha ben lazreg",
        email: "mustapha@gmail.com",
        number: "55222000"

    }
]




const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload];// ajouter un nouveau utilisateur a notre state 
            return state;
        case "UPDATE_CONTACT":
            const contactUpdate = state.filter((contact) =>
                contact.id === action.payload.id
                    ? Object.assign(contact, action.payload)
                    : contact
            );
            state = contactUpdate;
            return state;
        case "DELETE_CONTACT":
            const contactFilter = state.filter((contact) =>
                contact.id === action.payload ? null : contact
            );
            state = contactFilter;
            return state;


        default: return state


    }

}


export default ContactReducer;
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
            state = [...state, action.payload];
            return state;


        default: return state


    }

}


export default ContactReducer;
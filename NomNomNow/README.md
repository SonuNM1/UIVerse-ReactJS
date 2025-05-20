- Redux is a state management library that helps us manage and share state across different components in a predictable way. 

It uses: 
    - A store to keep the global state 
    - Actions to describe changes 
    - Reducers to update the state based on actions 
    - Selectors to read the state 

- With Redux Toolkit, we get createSlice, which simplifies creating actions and reducers. 

1. CartSlice.js - defines the state and logic 

- defines the initial cart state cart: []

- Has 2 actions: 

    - addToCart - adds a product to the cart 

    - removeFromCart - removes a product by ID 

- Exports actions and reducers 

2. Store.js - registers the slice 

- This is where all slices come together. If we had more slices (userSlice, productsSlice) we caould include them here too. 

3. FoodCard.jsx - dispatches addToCart when a button is clicked 

- This sends an action to the Redux store. The addToCart reducer updates the state (adds the product to the cart)

4. Cart.jsx - uses useSelector to read from Redux store 

- This reads the cart items from Redux and lets us use them in the UI. 

### Flow in Redux

UI Component (Button Click)
        ↓ dispatch(action)
Action → Redux Store → Reducer updates state
        ↓
  useSelector reads updated state
        ↓
    UI updates automatically


### Steps to follow 

- Create a slice 

- Set up store 

- Provide store globally in main.jsx or index.js 

    <Provider store={store}>
        <App/>
    </Provider>

- Use redux in components 

    - Dispatch an action 
    - Read state 
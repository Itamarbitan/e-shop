import { createContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2'
import './App.css';
import BusinessUserRegistration from './auth/BusinessUserRegistration';
import RouteGuard from './auth/RouteGuard';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import { setToken } from './auth/tokenMenagment';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import MyCards from './pages/MyProducts/MyProducts';
import { postRequest, getRequest } from './services/apiService';
import { IProduct } from './types/types';
import { deleteRequest } from "./services/apiService"
import Edit from './pages/Edit/Edit';
import Cart from './pages/Cart/Cart';
import ProductRegistration from './pages/ProductRegistration/ProductRegistration';


interface Context {
    userName: string;
    user_id: string;
    isAdmin: boolean;
    cardsDisplayMode: string;
    search:string;
    businessCards: Array<IProduct>;
    filteredBusinessCards: Array<IProduct>;
    cartItems : Array<IProduct>;
    handleSignout: Function;
    signIn: Function;    
    handleCardsDisplayMode: Function;
    deleteCard: Function;
    updateBusinessCards: Function;
    updateCart: Function;
    handleSearch: Function;
    getCart: Function;
    addToCart: Function;
    deleteProductFromCart: Function;
    checkout: Function;
}

interface ISigninData {
    email: string;
    password: string;
}

export const AppContext = createContext<Context | null>(null);

function App() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState<string>('');
    const [user_id, setUser_id] = useState<string>('');
    const [search, setSearch] = useState<string>('');
    const [isAdmin,setIsAdmin] = useState<boolean>(false);
    const [cardsDisplayMode, setCardsDisplayMode] = useState<string>('col-12 col-md-6 col-lg-4');  
    const [businessCards, setBusinessCards] = useState<Array<IProduct>>([]);
    const [filteredBusinessCards, setFilteredBusinessCards] = useState<Array<IProduct>>([]);
    const [cartItems, setCartItems] = useState<Array<IProduct>>([]);




    function handleSearch(search: string, data:[IProduct]) {
        setSearch(search);
    
        const term = search.toLowerCase();
        let result = [...data];
    
        if (term.length > 0) {
            result = [...data].filter(card =>
                card.title.toLowerCase().includes(term)
            )
        }
        else {
            setFilteredBusinessCards(data)
        }
    
        setFilteredBusinessCards(result);
    }

    function handleCardsDisplayMode(displayType: string)
    {
        setCardsDisplayMode(displayType);
    }

    function handleSignout() {
        // 1. Clear Local Storage
        localStorage.clear();
        // 2. Clear userName and isAdmin  
        toast.info(`User ${userName} is Signed Out !!!`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });        
        setUserName('');
        setUser_id('');
        setIsAdmin(false); 
        navigate('/signin')
    }

    function signIn(data: ISigninData) {
        const res = postRequest(
            'users/login',
            data,
            false
        );
        
        if (!res) 
            return;

        res
        .then(response => response.json())
        .then(json => {
            if (json.error) {
                toast.error(json.error, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });                
                return;
            }
            toast.success(`User ${json.name} succsessifully Loged In`,{
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });             
            setToken(json.token);
            localStorage.setItem('admin',json.isAdmin);
            setIsAdmin(json.isAdmin);
            setUserName(json.name);
            setUser_id(json.id);
            navigate('/mycards');
        });
    }

    function updateBusinessCards(businessCards: Array<IProduct>) {
        setBusinessCards(businessCards);
        setFilteredBusinessCards(businessCards)    
    }   
    
    function updateCart(items: Array<IProduct>){
        setCartItems(items)
    }

    const deleteCard = (card:IProduct, businessCards: Array<IProduct>) => {
        console.log(`Delete button pressed from ${card.title, card._id}`)
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            const res = deleteRequest(`cards/${card._id}`)
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            const newArray = [...businessCards];
            const index = newArray.indexOf(card);
            if (index > -1) { 
              newArray.splice(index, 1)
              updateBusinessCards(newArray)
            }
          }
        })
      }

      function getCart() {
        const res = getRequest(`cards/cart/${user_id}`);        
        
        if(!res) {
            console.log('No response...')
            return;
        }

        res
        .then(response => response.json())
        .then(json => {
            console.log('this is cart items'+json)
            if (json.error) {               
                return;
            }     
            
            updateCart(json);
        })
        .catch(err => console.log(err));
    }

      const addToCart = (card: IProduct) => {

        toast.success(`product ${card.title} successfully added to cart`,{
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",})

        let found = cartItems.find(product => product._id == card._id)

        if (found){
            found.quantity++
            found.price = found.price + card.price
        }
        else{
            card['quantity'] = 1
            cartItems.push(card);
            const res = postRequest(
                'users/cart',
                card,
                false           
            )
        }
      }

      const deleteProductFromCart = (card:IProduct, businessCards: Array<IProduct>) => {
        console.log(`Delete button pressed from ${card.title, card._id}`)
        Swal.fire({
          title: 'Are you sure?',
          text: "",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            const res = postRequest(`cards/cart/${card._id}`, card)?.then(()=>{
                if (res){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      console.log(card._id)
                      const arr = [...businessCards];
                      const updatedCart = arr.filter(e => e._id !== card._id) 
                      setCartItems(updatedCart)
                }
                  
            }).catch(
                (error)=> console.log(error)
            )
          }
        })
      }

      const checkout = () => {
        toast.success(`purchase has completed successfully`,{
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",});
            navigate('/')

        updateCart([])

    }

    useEffect(() => {
        getCart();
    },[]);  

 
    

    return (
        <AppContext.Provider value={{
            userName,
            user_id,
            isAdmin,
            cardsDisplayMode,
            search,
            businessCards,
            filteredBusinessCards,
            cartItems,
            handleSignout,
            signIn,
            handleCardsDisplayMode,
            deleteCard,
            updateBusinessCards,
            updateCart,
            handleSearch,
            getCart,
            addToCart,
            deleteProductFromCart,
            checkout
        }}>
            <div className="d-flex h-100 flex-column justify-content-between">
                <Navbar />
                <ToastContainer />
                <Routes>
                    <Route 
                        path="/"
                        element={<Home />}  
                    />
                    <Route
                        path="/about"
                        element={<About />} 
                    />
                    <Route 
                        path="/signup"
                        element={<SignUp />}
                    />
                    <Route 
                        path="/businessuserregistration"
                        element={<BusinessUserRegistration />}
                    />
                    <Route
                        path="/productregistration"
                        element={
                            <RouteGuard>
                                <ProductRegistration />
                            </RouteGuard>
                        } 
                    />
                    <Route
                        path="/signin"
                        element={<SignIn handler={signIn} />} 
                    />
                    <Route 
                        path="/edit/:id"
                        element={
                            <RouteGuard>
                                <Edit />
                            </RouteGuard>
                        }
                    />    
                    <Route
                        path="/myProducts"
                        element={
                            <RouteGuard>
                                <MyCards />        
                            </RouteGuard>                            
                        } 
                    />                      
                    <Route
                        path="/cart"
                        element={
                            <RouteGuard>
                                <Cart />
                            </RouteGuard>                            
                        } 
                    />                      
                </Routes>
                <Footer />
            </div>
        </AppContext.Provider>
    );
}

export default App;

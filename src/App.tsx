import { createContext, useState } from 'react';
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
import BusinessCardRegistration from './pages/BusinessCardRegistration/BusinessCardRegistration';
import FavoriteCards from './pages/FavoriteCards/FavoriteCards';
import Home from './pages/Home/Home';
import MyCards from './pages/MyCards/MyCards';
import { postRequest } from './services/apiService';
import { IBusinessCard } from './types/types';
import { deleteRequest } from "./services/apiService"
import Edit from './pages/Edit/Edit';


interface Context {
    userName: string;
    user_id: string;
    isAdmin: boolean;
    cardsDisplayMode: string;
    search:string;
    businessCards: Array<IBusinessCard>;
    filteredBusinessCards: Array<IBusinessCard>;
    handleSignout: Function;
    signIn: Function;    
    handleCardsDisplayMode: Function;
    deleteCard: Function;
    updateBusinessCards: Function;
    handleSearch: Function;
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
    const [businessCards, setBusinessCards] = useState<Array<IBusinessCard>>([]);
    const [filteredBusinessCards, setFilteredBusinessCards] = useState<Array<IBusinessCard>>([]);



    function handleSearch(search: string, data:[IBusinessCard]) {
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

    function updateBusinessCards(businessCards: Array<IBusinessCard>) {
        setBusinessCards(businessCards);
        setFilteredBusinessCards(businessCards)    
    }    

    const deleteCard = (card:IBusinessCard, businessCards: Array<IBusinessCard>) => {
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
              setBusinessCards(newArray)
            }
          }
        })
      }


    

    return (
        <AppContext.Provider value={{
            userName,
            user_id,
            isAdmin,
            cardsDisplayMode,
            search,
            businessCards,
            filteredBusinessCards,
            handleSignout,
            signIn,
            handleCardsDisplayMode,
            deleteCard,
            updateBusinessCards,
            handleSearch                          
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
                        path="/businesscardregistration"
                        element={
                            <RouteGuard>
                                <BusinessCardRegistration />
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
                        path="/mycards"
                        element={
                            <RouteGuard>
                                <MyCards />        
                            </RouteGuard>                            
                        } 
                    />                      
                    <Route
                        path="/favoritecards"
                        element={
                            <RouteGuard>
                                <FavoriteCards />
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

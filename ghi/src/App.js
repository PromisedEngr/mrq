import "./App.css";
import MainPage from "./MainPage.js";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import Nav from './Nav';
import AboutUs from "./InfoPages/AboutUs";
import Features from "./InfoPages/Features";
import WaterForm from "./Water/WaterForm";
import WaterList from "./Water/ListWater";
import Dashboard from "./DashBoard/Dashboard";
import Resources from "./InfoPages/Resources";
import SleepForm from "./Sleep/SleepForm";
import SleepList from "./Sleep/SleepList";
import ExerciseForm from "./ExerciseForm";
import ExerciseList from "./ListExercise";
import Footer from "./Footer";
import SleepCalculator from "./Sleep/SleepCalculator";


function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');


  return (
    <BrowserRouter basename={basename}>
      <AuthProvider baseUrl={process.env.REACT_APP_MRQ_SERVICE}>
        <Nav />
        <div >
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/water" element={<WaterList />}/>
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/features" element={<Features />}/>
            <Route path="/resources" element={<Resources />}/>
            <Route path="/water/new" element={<WaterForm />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/exercise/new" element={<ExerciseForm />}/>
            <Route path="/exercise" element={<ExerciseList/>}/>
            <Route path="/sleep/new" element={<SleepForm />}/>
            <Route path="/sleep/all" element={<SleepList />}/>
            <Route path="/sleep/calculator" element={<SleepCalculator/>}/>
          </Routes>
        </div>
        <Footer />
        </AuthProvider>
    </BrowserRouter>
  )
}
export default App;

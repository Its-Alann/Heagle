
import { render, screen, getByText, getByRole, getByLabelText } from "@testing-library/react"
import { renderer } from "react-test-renderer"
import IndividualProductPage from "../products/IndividualProductPage"
import Login from "../user/Login"
import App from "../../App"
import SellerProducts from "../user/SellerProducts"
import { Router } from "react-router-dom"

describe('Sample Tests', () => {

    test('Sample Test', () => {
        expect(true).toBe(true)
    })
    
    test('Sample Test 2', () => {
        expect(true).toBe(true)
    })
})

describe('Browsing Items Tests', () => {

    
    test('Loads product cards on home screen', () => {
    
        render(<IndividualProductPage />)
        screen.getByText(/Yes, I would recommend this to a friend./i)
    
        });
})


describe('Managing Profiles Tests', () => {

    test('Renders the login buttton on home page', () => {
        render(<App />);
        const linkElement = screen.getByText(/login/i);
        expect(linkElement).toBeInTheDocument();
    });
    
    test('Renders the register buttton on home page', () => {
        render(<App />);
        const linkElement = screen.getByText(/register/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Login form appears', () => {
        
        <Router>
            render(<Login/>)
        </Router>
    
    })
})

describe('Sellers Tests', () => {

    test('Shows the products for sellers', () => {

        <Router>
            render(<SellerProducts/>)
        </Router>
    })
})



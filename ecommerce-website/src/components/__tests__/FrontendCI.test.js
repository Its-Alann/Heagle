
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

import { render, screen, getByText, getByRole, getByLabelText } from "@testing-library/react"
import { renderer } from "react-test-renderer"
import IndividualProductPage from "../products/IndividualProductPage"
import Login from "../user/Login"
import App from "../../App"
import SellerProducts from "../user/SellerProducts"
import { MemoryRouter, Router } from "react-router-dom"
import Register from "../user/Register"
import ShoppingCart from "../cart/ShoppingCart"

describe('Sample Tests', () => {

    test('Sample Test', () => {
        expect(true).toBe(true)
    })
    
    test('Sample Test 2', () => {
        expect(true).toBe(true)
    })
})

describe('Browsing Items Tests', () => {

    test('Loads product cards on individual page', () => {
    
        const { getById } = render(<IndividualProductPage />, { wrapper: MemoryRouter })
        screen.getByText(/Yes, I would recommend this to a friend./i)
        screen.getAllByText("+")
        screen.getAllByText("-")
        screen.getAllByText(/Add to Cart/i)
        });
})


describe('Managing Profiles Tests', () => {

    test("Renders Login page", () => {
        const { getById } = render(<Login />, { wrapper: MemoryRouter })
        screen.getAllByText(/Login/i)
        screen.getAllByText(/Connect to your account/i)
    })

    test('Login form appears', () => {
        
        const { getById } = render(<Login />, { wrapper: MemoryRouter })
        screen.getByPlaceholderText("Email address")
        screen.getByPlaceholderText("Password")
    
    })
    
    
    test("Renders Register page", () => {
        const { getById } = render(<Register />, { wrapper: MemoryRouter })
        screen.getAllByText(/Sign Up/i)
    })
    
    test("Renders boxes for information input", () => {
        const { getById } = render(<Register />, { wrapper: MemoryRouter })
        screen.getByPlaceholderText("First Name")
        screen.getByPlaceholderText("Last Name")
        screen.getByPlaceholderText("Password")
        screen.getByPlaceholderText("Reenter Password")
        screen.getByPlaceholderText("Email")
        screen.getByPlaceholderText("Phone Number")
    })
})

describe('Sellers Tests', () => {

    test('Shows the products for sellers', () => {

        const { getById } = render(<SellerProducts />, { wrapper: MemoryRouter })
    })
})

describe('Shopping Cart Tests', () => {

    test('Renders shopping cart page', () => {

        const { getById } = render(<ShoppingCart />, { wrapper: MemoryRouter })
        screen.getAllByText(/Shopping Cart/i)
    })

    test('Shows items in the shopping cart page', () => {

        const { getById } = render(<ShoppingCart />, { wrapper: MemoryRouter })
        screen.getByText(/My Items/i)
    })

    test('Shows summary of prices', () => {

        const {getById} = render(<ShoppingCart/>, {wrapper: MemoryRouter})
        screen.getByText(/Summary/i)
    })
})


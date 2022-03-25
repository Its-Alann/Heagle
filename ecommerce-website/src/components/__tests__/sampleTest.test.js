
import { render, screen, getByText, getByRole, getByLabelText } from "@testing-library/react"
import IndividualProductPage from "../products/IndividualProductPage"
import Login from "../user/Login"
import App from "../../App"
import { Router } from "react-router-dom"

test('Sample Test', () => {
    expect(true).toBe(true)
})

test('Sample Test 2', () => {
    expect(true).toBe(true)
})

test('Loads product cards on home screen', () => {

    render(<IndividualProductPage/>)
    screen.getByText(/Yes, I would recommend this to a friend./i)

    });

test('Renders the login buttton', () => {
    render(<App />);
    const linkElement = screen.getByText(/login/i);
    expect(linkElement).toBeInTheDocument();
});

// test('Login form appears', () => {
    
//     <Router>

//     render(<Login/>)
//     </Router>
//     screen.getByPlaceholderText(/email address/i)
// })
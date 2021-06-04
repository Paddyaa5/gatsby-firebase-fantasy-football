import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  width: 100vw;
  height: 80px;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: teal;
  .nav-options {
    width: 45vw;
    display: flex;
    justify-content: space-between;
  }
`

const Header = () => (
  <StyledHeader>
    <Link exact to="/">
      LOGO
    </Link>
    <div className="nav-options">
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <button>LOGOUT</button>
    </div>
  </StyledHeader>
)

export default Header

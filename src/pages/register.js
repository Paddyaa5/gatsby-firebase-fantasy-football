import React from "react"
//components
import Layout from "../components/layout"
// import Seo from "../components/seo"
//styles
import { AccountPageStyle } from "../styles/GlobalStyles"

export default function register() {
  return (
    <Layout>
      {/* <Seo title="Home" /> */}
      <AccountPageStyle>
        <h1>Register</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <input className="submit-btn" type="submit" value="Register" />
        </form>
      </AccountPageStyle>
    </Layout>
  )
}

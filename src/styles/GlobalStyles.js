import styled from "styled-components"

export const AccountPageStyle = styled.section`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 350px;
    width: 300px;
    border-radius: 10px;
    background: lightcoral;
    padding: 25px;
    div {
      display: flex;
      flex-direction: column;
      input {
        margin: 10px 0;
        height: 30px;
      }
    }
    .submit-btn {
      height: 40px;
      width: 100px;
    }
  }
`

import styled from 'styled-components'

export const MainDiv = styled.div`
  background-color: #152850;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`
export const LoginDiv = styled.div`
  display: flex;
  background-color: #e0eefe;
  border-radius: 20px;
  height: 500px;
  width: 1000px;
`
export const LoginImg = styled.img`
  height: 100%;
  width: 50%;
`
export const LoginForm = styled.form`
  width: 50%;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
`
export const Heading = styled.h1`
  color: #183b56;
`
export const LabelDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  color: #5a7184;
  margin-bottom: 10px;
  font-weight: bold;
`
export const Input = styled.input`
  height: 33px;
  margin-bottom: 10px;
  border-radius: 3px;
  border-color: #c3cad9;
  padding-left: 5px;
  border-width: 1px;
  outline: none;
  font-size: 12px;
`
export const LoginButton = styled.button`
  margin-top: 20px;
  height: 33px;
  border: none;
  border-radius: 3px;
  background-color: #1565d8;
  color: #ffffff;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 10px;
`

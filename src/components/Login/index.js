import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  MainDiv,
  LoginDiv,
  LoginImg,
  LoginForm,
  Heading,
  Label,
  Input,
  LabelDiv,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {userId: '', pin: '', errMsg: '', showErr: false}

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onFailure = errMsg => {
    this.setState({showErr: true, errMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {userId, pin}
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'GET',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = response.json()
    if (response.ok) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({userId: event.target.value})
  }

  onChangePassword = event => {
    this.setState({pin: event.target.value})
  }

  renderUsername = () => {
    const {userId} = this.state
    return (
      <LabelDiv>
        <Label htmlFor="userId">User ID</Label>
        <Input
          id="userId"
          onChange={this.onChangeUsername}
          type="text"
          placeholder="Enter User ID"
          value={userId}
        />
      </LabelDiv>
    )
  }

  renderPassword = () => {
    const {pin} = this.state
    return (
      <LabelDiv>
        <Label htmlFor="pin">PIN</Label>
        <Input
          id="pin"
          onChange={this.onChangePassword}
          type="password"
          placeholder="Enter PIN"
          value={pin}
        />
      </LabelDiv>
    )
  }

  render() {
    const {errMsg, showErr} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <MainDiv>
        <LoginDiv>
          <LoginImg
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <LoginForm onSubmit={this.onSubmitForm}>
            <Heading>Welcome Back!</Heading>
            {this.renderUsername()}
            {this.renderPassword()}
            <LoginButton type="submit">Login</LoginButton>
            {showErr && <ErrorMsg>{errMsg}</ErrorMsg>}
          </LoginForm>
        </LoginDiv>
      </MainDiv>
    )
  }
}

export default Login

import Cookies from 'js-cookie'
import {
  MainDiv,
  Nav,
  BankLogo,
  LogoutButton,
  HomeHeading,
  HomeImg,
  Content,
} from './styledComponents'

const Home = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <MainDiv>
      <Nav>
        <BankLogo
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <LogoutButton type="button" onClick={onClickLogout}>
          Logout
        </LogoutButton>
      </Nav>
      <Content>
        <HomeHeading>Your Flexibility, Our Excellence</HomeHeading>
        <HomeImg
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </Content>
    </MainDiv>
  )
}

export default Home

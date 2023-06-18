import './MainPage.scss'
import ReferralCol from '../../components/ReferralCol/ReferralCol'
import StepsCol from '../../components/StepsCol/StepsCol'
import AppAvailability from '../../components/AppAvailability/AppAvailability'

const MainPage = () => {
  return (
    <>
      <div className='main-section'>
        <div className='container'>
          <div className='column'>
            <ReferralCol />
          </div>
          <div className='column'>
            <StepsCol />
          </div>
        </div>
      </div>
      <AppAvailability />
    </>
  )
}

export default MainPage

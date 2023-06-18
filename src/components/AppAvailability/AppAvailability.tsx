import './AppAvailability.scss'
import chrome from '../../assets/chrome.svg'
import apple from '../../assets/apple.svg'
import star from '../../assets/star.svg'

const AppAvailability = () => {
  return (
    <div className='appAvailabilityWrapper'>
      <div className='availabilityRow'>
        <a
          className='availabilityItem'
          href='https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk'
        >
          <img src={chrome} alt='Chrome Store' className='storeIcon' />
          <p>
            available in the <br />
            <b> chrome web store</b>
          </p>
        </a>
        <a
          className='availabilityItem'
          href='https://apps.apple.com/app/ratepunk/id1607823726'
        >
          <img src={apple} alt='Apple Store' className='storeIcon' />
          <p>
            available in the <br /> <b>apple app store</b>
          </p>
        </a>
        <div className='chromeReview'>
          <img src={star} alt='Apple Store' className='starIcon' />
          <img src={star} alt='Apple Store' className='starIcon' />
          <img src={star} alt='Apple Store' className='starIcon' />
          <img src={star} alt='Apple Store' className='starIcon' />
          <img src={star} alt='Apple Store' className='starIcon' />
          <p>Chrome Store Reviews</p>
        </div>
      </div>
    </div>
  )
}

export default AppAvailability

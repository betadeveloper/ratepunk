import { useState, ChangeEvent } from 'react'
import axios from 'axios'
import './ReferralCol.scss'

const ReferralCol = () => {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const saveEmailToJSONBin = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.')
      setSuccessMessage('')
      return
    }

    const jsonData = JSON.stringify({ email })
    const jsonBinUrl = 'https://api.jsonbin.io/v3/b/648f54b5b89b1e2299b12b77'
    const headers = {
      'Content-Type': 'application/json',
      'X-Master-Key':
        '$2b$10$L34OABQxoB4p857WyoXKd.44npP5BoH1Az9wXr6Ve4jzyvebW/fIe',
    }

    axios
      .post(jsonBinUrl, jsonData, { headers })
      .then(() => {
        setSuccessMessage('Email saved successfully.')
        setErrorMessage('')
      })
      .catch((error) => {
        setErrorMessage('Failed to save email.')
        setSuccessMessage('')
        console.error(error)
      })
  }

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  return (
    <div className='referralWrapper'>
      <h1 className='referralHeader'>REFER FRIENDS AND GET REWARDS</h1>
      <p className='referralText'>
        Refer your friends to us and earn hotel booking vouchers. We'll give you
        1 coin for each friend that installs our extension. Minimum cash-out at
        20 coins.
      </p>
      <div className='inputWrapper'>
        <div className='inputContainer'>
          <span className='emailIcon' />
          <input
            type='email'
            placeholder='Enter your email address'
            value={email}
            onChange={handleInputChange}
          />
          {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
        </div>
        <button onClick={saveEmailToJSONBin}>Get Referral Link</button>
      </div>
      {successMessage && <p className='successMessage'>{successMessage}</p>}
      <p className='referralNotice'>Limits on max rewards apply.</p>
    </div>
  )
}

export default ReferralCol

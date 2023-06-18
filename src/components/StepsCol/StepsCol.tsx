import './StepsCol.scss'
import invite from '../../assets/invite.svg'
import collectCoins from '../../assets/collect-coins.svg'
import voucher from '../../assets/voucher.svg'

const StepsCol = () => {
  return (
    <div className='stepsWrapper'>
      <div className='stepRow'>
        <div className='stepItem'>
          <img src={invite} alt='Step 1' className='stepImage' />
          <div className='stepInfoWrapper'>
            <p className='step'>Step 1</p>
            <h3>Invite Friends</h3>
            <p>Refer friends with your unique referral link.</p>
          </div>
        </div>
      </div>
      <div className='stepRow'>
        <div className='stepItem'>
          <div className='stepInfoWrapper'>
            <p className='step'>Step 2</p>
            <h3>Collect coins</h3>
            <p>
              Get 1 coin for each friend that installs our extension using your
              referral link.
            </p>
          </div>
          <img src={collectCoins} alt='Step 2' className='stepImage' />
        </div>
      </div>
      <div className='stepRow'>
        <div className='stepItem'>
          <img src={voucher} alt='Step 3' className='stepImage' />
          <div className='stepInfoWrapper'>
            <p className='step'>Step 3</p>
            <h3>Get voucher</h3>
            <p>
              Redeem for a $20 hotel booking voucher once you collect 20 coins.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepsCol

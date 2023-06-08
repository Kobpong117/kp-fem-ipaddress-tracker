const Result = ({addressInfo}) => {
        const {ip, location, isp} = addressInfo
        const {country, region, timezone} = location

  return (
    <section className='result'>
        <div className="info">
            <h5>ip address</h5>
            {ip && <p>{ip}</p>}
        </div>
        <div className="info">
            <h5>location</h5>
            {country && <p>{region && <span>{region},</span>} {country}</p>}
        </div>
        <div className="info">
            <h5>timezone</h5>
            {timezone && <p>UTC{timezone}</p>}
        </div>
        <div className="info">
            <h5>ISP</h5>
            {isp && <p>{isp}</p>}
        </div>
    </section>
  )
}
export default Result
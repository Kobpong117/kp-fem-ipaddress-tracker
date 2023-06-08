const Form = ({submitIpAddress}) => {
  return (
    <form className='search-tap' onSubmit={submitIpAddress}>
        <label>
            <input className='ip-input' type='text' placeholder='Search for any IP address or domain'/>
        </label>
        <button type='submit' className='search-btn'>
            <img src="./images/icon-arrow.svg" alt="search-btn" />
        </button>
    </form>
  )
}
export default Form
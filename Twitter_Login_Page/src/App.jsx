import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='logo-box'>
        <img src='./twitter.png' alt='Twitter logo' className='logo' />
        <h2>Sign in to Twitter</h2>

        <button className='social-btn'>
          <img src='./google.png' alt='Google logo' />
          Sign in with Google
        </button>

        <button className='social-btn'>
          <img src='./apple.png' alt='Apple logo' />
          Sign in with Apple
        </button>

        <div className='separator'>
          <span>or</span>
        </div>

        <form>
          <input
            type='text'
            placeholder='Phone, email or username'
            aria-label='Phone, email or username'
          />
          <button type='submit' className='form-btn'>Next</button>
        </form>
      </div>
    </div>
  )
}

export default App

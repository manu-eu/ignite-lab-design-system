import './styles/global.css'

export function App() {
  return (
    <div className='h-screen w-screen max-h-full max-w-full bg-gray-800 grid place-items-center'>
      <div className='bg-gray-400 text-white px-4 py-3 rounded'>
        <p>
          run <code className='font-mono bg-gray-800 px-1 rounded'>npm run storybook</code> to access the components
        </p>
      </div>
    </div>
  )
}
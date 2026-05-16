import { BrowserRouter } from 'react-router-dom'
import { LoadingScreen } from './components/layout/LoadingScreen'
import { useInitialLoading } from './hooks/useInitialLoading'
import { AppRoutes } from './routes'

function App() {
  const { loading, exiting } = useInitialLoading()

  return (
    <BrowserRouter>
      {loading && <LoadingScreen exiting={exiting} />}
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

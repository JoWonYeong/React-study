import MainProducts from './components/MainProducts'
import './App.css';
// React query 사용 방법 공식 사이트 참고
// https://tanstack.com/query/latest/docs/react/quick-start
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// React query Devtool
// https://tanstack.com/query/v4/docs/react/devtools
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  // Create a client
  const queryClient = new QueryClient();

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <MainProducts />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
export default App;

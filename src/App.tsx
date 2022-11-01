import { Routes, Route } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';
import NotFound from '@/pages/NotFound';
import IssueContextProvider from '@/store/IssueContextProvider';

function App() {
  return (
    <div className="App">
      <Layout>
        <IssueContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </IssueContextProvider>
      </Layout>
    </div>
  );
}

export default App;

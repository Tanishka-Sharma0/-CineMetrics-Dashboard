import { Route, Routes } from "react-router";
import PageWrapper from "./components/layout/PageWrapper";
import Dashboard from "./app/dashboard/Dashboard";
import Search from "./app/search/Search";
import MovieDetail from "./app/movie/MovieDetail";
import Settings from "./app/settings/Settings";


function App() {

  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </PageWrapper>
  )
}

export default App

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { CardPage, CardsPage, HomePage, NewCardPage } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="cards" >
          <Route path=":cardId" element={<CardPage />} />
          <Route path="new" element={<NewCardPage />} />
          <Route index element={<CardsPage /> }/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}




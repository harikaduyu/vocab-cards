import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { AllCardsPage } from "./pages/AllCardsPage";
import { CardPage } from "./pages/CardPage";
import { CardsPage } from "./pages/CardsPage";
import { HomePage } from "./pages/HomePage";
import { NewCardForm } from "./pages/NewCardForm";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="cards" >
          <Route path=":cardId" element={<CardPage />} />
          <Route path="new" element={<NewCardForm />} />
          <Route index element={<CardsPage /> }/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}




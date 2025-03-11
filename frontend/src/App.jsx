import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import UpdateBook from "./pages/UpdateBook";
import DeleteBook from "./pages/DeleteBook"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />}></Route>
      <Route path="/books/details/:id" element={<ShowBook />}></Route>
      <Route path="/books/edit/:id" element={<UpdateBook />}></Route>
      <Route path="/books/delete/:id" element={<DeleteBook/>}></Route>
    </Routes>
  );
};

export default App;

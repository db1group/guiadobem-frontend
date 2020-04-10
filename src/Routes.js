import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import ListaCidades from "./componentes/ListaCidades";
import ListaCategorias from "./componentes/ListaCategorias";
import ListaEstabelecimentos from "./componentes/ListaEstabelecimentos";
import Sobre from "./componentes/Sobre";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ListaCidades} />
      <Route
        path="/listacategorias/:idcidade"
        exact
        component={ListaCategorias}
      />
      <Route
        path="/listacategorias/:idcidade/estabelecimentos/:idcategoria"
        exact
        component={ListaEstabelecimentos}
      />
      <Route path="/sobre" component={Sobre} />
    </BrowserRouter>
  );
}

export default Routes;

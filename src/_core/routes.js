/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Home from "../pages/Home";
import QuemSomos from "../pages/QuemSomos";
import Tratamentos from "../pages/Tratamentos";
import Contato from "../pages/Contato";


const dashboardRoutes = [
    {
        path: "/",
        params: '',
        menu: true,
        name: "Home",
        component: Home,
    },
    {
        path: "/quem_somos",
        params: '',
        menu: true,
        name: "Quem Somos",
        component: QuemSomos,
    },
    {
        path: "/tratamentos",
        params: '',
        menu: true,
        name: "Tratamentos",
        component: Tratamentos,
    },
    {
        path: "/contato",
        params: '',
        menu: true,
        name: "Contato",
        component: Contato,
    }
];

export default dashboardRoutes;

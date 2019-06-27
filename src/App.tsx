import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MainModule from './submodules/mainPage';
import PaymentsModule from './submodules/payments';
import SalaryModule from './submodules/salary';

const App: React.FC = () => {
  return (
      <Router>
        <Navbar color="dark" dark expand="md">
          <Link to="/">MS in Frontend</Link>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/salary">Salary</Link>
            </NavItem>
            <NavItem>
              <Link style={{ marginLeft: "20px" }} to="/payments">Payments</Link>
            </NavItem>
          </Nav>
        </Navbar>

        <Route path="/" exact component={MainModule} />
        <Route path="/payments" exact component={PaymentsModule} />
        <Route path="/salary" exact component={SalaryModule} />
      </Router>
  )
};

export default App;

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/App.css";
import { HomePage } from "../components/Home.page";
import { RQSuperHeroesPage } from "../components/RQSuperHeroes.page";
import { SuperHeroesPage } from "../components/SuperHeroes.page";
import { SuperHero } from "../components/SuperHero.page";
import { ParallelDynamic } from "../components/ParallelDynamic.page";
import { DependentQueries } from "../components/DependentQueries.page";
function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/super-heroes">
            <SuperHeroesPage />
          </Route>
          <Route path="/rq-super-heroes">
            <RQSuperHeroesPage />
          </Route>
          <Route path="/SuperHero/:heroId">
            <SuperHero />
          </Route>
          <Route path="/ParallelDynamic">
            <ParallelDynamic herosID={[1, 3]} />
          </Route>
          <Route path="/DependentQueries">
            <DependentQueries email="email@email.ma" />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;

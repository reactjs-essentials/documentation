import { Routes, Route, Link } from 'react-router-dom'
import Counter from './Counter'
import Home from './Home'

const Menu = () => {

   return (
       <div>
        <header>Menu</header>
        <section>
            <ul>
                <li><Link to ="/">Films</Link></li>
                <li><Link to ="/counter">Counter</Link></li>
            </ul>
        </section>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/counter" element={<Counter/>}></Route>
        </Routes>
        </div>
    )
}

export default Menu;


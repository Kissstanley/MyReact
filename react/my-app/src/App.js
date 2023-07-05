import logo from './logo.svg';
import './App.css';
import SimpsonComponent from "./components/Simpson/SimpsonComponent";
import RickComponent from "./components/Rick&Morty/R&MComponent";

function App() {
  return (
    <>
        <div>
            <SimpsonComponent
                firstname={'Bart'}
                lastname={'Simpson'}
                age={10}
                gender={'male'}
                photo={<img src="https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png" alt="person-photo"/>}
            />
            <SimpsonComponent
                firstname={'Homer'}
                lastname={'Simpson'}
                age={40}
                gender={'male'}
                photo={<img src="http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" alt="person-photo"/>}
            />
            <SimpsonComponent
                firstname={'Marge'}
                lastname={'Simpson'}
                age={38}
                gender={'female'}
                photo={<img src="https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png" alt="person-photo"/>}
            />
            <SimpsonComponent
                firstname={'Lisa'}
                lastname={'Simpson'}
                age={9}
                gender={'female'}
                photo={<img src="https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png" alt="person-photo"/>}
            />
            <SimpsonComponent
                firstname={'Maggie'}
                lastname={'Simpson'}
                age={1}
                gender={'female'}
                photo={<img src="https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png" alt="person-photo"/>}
            />
        </div>
        <div>
            <RickComponent
                id={1}
                name={'Rick Sanchez'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={<img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="person-photo"/>}
            />
            <RickComponent
                id={7}
                name={'Abradolf Lincler'}
                status={'unknown'}
                species={'Human'}
                gender={'Male'}
                image={<img src="https://rickandmortyapi.com/api/character/avatar/7.jpeg" alt="person-photo"/>}
            />
            <RickComponent
                id={8}
                name={'Adjudicator Rick'}
                status={'Dead'}
                species={'Human'}
                gender={'Male'}
                image={<img src="https://rickandmortyapi.com/api/character/avatar/8.jpeg" alt="person-photo"/>}
            />
            <RickComponent
                id={9}
                name={'Agency Director'}
                status={'Dead'}
                species={'Human'}
                gender={'Male'}
                image={<img src="https://rickandmortyapi.com/api/character/avatar/9.jpeg" alt="person-photo"/>}
            />
            <RickComponent
                id={10}
                name={'Alan Rails'}
                status={'Dead'}
                species={'Human'}
                gender={'Male'}
                image={<img src="https://rickandmortyapi.com/api/character/avatar/10.jpeg" alt="person-photo"/>}
            />
            <RickComponent
                id={11}
                name={'Albert Einstein'}
                status={'Dead'}
                species={'Human'}
                gender={'Male'}
                image={<img src="https://rickandmortyapi.com/api/character/avatar/11.jpeg" alt="person-photo"/>}
            />
        </div>
    </>
  );
}

export default App;

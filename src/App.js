
// import ReactDOM from 'react-dom'; устарел 



// ReactDOM.render(<div>

// <h1>Hei</h1>
// <h3>ggg</h3>

// </div>, document.getElementById('app'))

// function inputClick() {

// }


// const inputClick = () => console.log('qqq')
// const mouseOver = () => console.log('musen er her')
//  const tekst = 'Jeg skriver hva som helst'
// let taller = 10 


// function () {
//     return (

//     )
// }

// const Header = () => { это страый вариант, но функцию я создаю через новый способ
//     return(
//     <header> Det er Header!</header>
//     )
// }



//  const App = () => { это создание компонента 
//      <Header/>
//      return(<div className='name'>
//         <Header/>
//          <input placeholder={tekst}
//               onClick={inputClick} onMouseEnter={mouseOver}/>
        
//          <h1>{tekst}</h1>
//         <p>{taller === 5+1 ? 'bra': 'dårlig'}</p>
//          </div>)
//  }


// class App extends React.Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             tekst: 'Jeg skriver hva som helst'
//         }

//         this.inputClick = this.inputClick.bind(this)
//     }

//    // tekst = 'Jeg skriver hva som helst'
//     taller = 10
//     render() {
//         return (<div className='name'>
//             <Header titile='Det er header'/>
//              <input placeholder={this.state.tekst}
//                   onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
            
//              <h1>{this.state.tekst}</h1>
//             <p>{this.taller === 5+1 ? 'bra': 'dårlig'}</p>

//             <img src={Logo}/>
//              </div>
            
//         )
//     }

//     inputClick () {
//         this.setState ({tekst: 'okk'})
//          console.log('qqq')


//     }

//     mouseOver = () => console.log('musen er her')
//     tekst = 'Jeg skriver hva som helst'
//     taller = 10 
// }

// export default App

// import React, { useState } from "react";
// import Header from "./components/Header";
// import Videos from "./components/videos";
// import Logo from './img/Hamar-Aerial-2022.jpg';

// const App = () => {
//   const [tekst, setTekst] = useState("Jeg skriver hva som helst");

//   const inputClick = () => {
//     setTekst("Teksten endret!");
//     console.log("knappen trykt");
//   };

//   const mouseOver = () => console.log("Musen ");

//   return (
//     <div className="container">
//       <Header title="React Start" />
      
//       <input
//         placeholder={tekst}
//         onClick={inputClick}
//         onMouseEnter={mouseOver}
//         className="input-field"
//       />
      
//       <h1>{tekst}</h1>

//       <img src={Logo} alt="Hamar" className="image"/>

//       <Videos 
//         src="video.mp4"
//         title="bla bla bla"
//         time="3:45"
//         className="video-container"
//       />
//        <Videos 
//         src="video.mp4"
//         title="bla bla bla"
//         time="3:45"
//         className="video-container"
//       />
//        <Videos 
//         src="video.mp4"
//         title="bla bla bla"
//         time="3:45"
//         className="video-container"
//       />
//        <Videos 
//         src="video.mp4"
//         title="bla bla bla"
//         time="3:45"
//         className="video-container"
//       />
      
      
//     </div>
//   );
// };

// export default App;














import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './css/main.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // all | completed | active

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1>📝 Oppgaveliste</h1>

      <TodoForm onAdd={addTask} />

      <div className="filters">
        <button onClick={() => setFilter("all")}>Alle</button>
        <button onClick={() => setFilter("active")}>Aktive</button>
        <button onClick={() => setFilter("completed")}>Fullførte</button>
      </div>

      <TodoList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
    </div>
  );
};

export default App;


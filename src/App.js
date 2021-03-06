import {useState, useEffect} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Components/Home/Home';
import Post from './Components/PostPage/PostPage';
import Footer from './Components/Footer/Footer';
import About from './Components/AboutMe';
import './App.css';

function App() {
  const [postData, setPostData] = useState([]);
  
  const getAllPosts = async () => {
    try {
      const res = await fetch('https://eatincolorado-api.herokuapp.com/posts');
      const data = await res.json();
      setPostData(data.reverse());
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllPosts();
  })

  return (
    <div className="App">
      <Link className='title' to='/' ><h1>Eating In Colorado</h1></Link>
      <Switch>
        <Route exact path='/' render={()=> {return <Home data={postData}/>} }/>
        <Route path='/posts/:id' render={(routerProps)=> {
          return <Post routerProps={routerProps}/>} }/>
        <Route path="/about-the-author" render={() => <About />} />
      </Switch>
      <Footer className='footer' />
    </div>
  );
}

export default App;

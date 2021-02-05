import React, {useEffect, useState} from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
import Axios from 'axios';

function App(){

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading:false,
    repos: null,
  });

  useEffect(()=>{
    setAppState({loading: true});
    const apiUrl = `https://api.github.com/users/rajrana437/repos`;
    // fetch(apiUrl)
    // .then((res)=>res.json())
    // .then((repos)=> {
      Axios.get(apiUrl).then((repos)=>{
        const allRepos = repos.data;
        setAppState({ loading: false, repos: allRepos });
      });
  }, [setAppState]);

  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading
        isLoading={appState.loading}
        repos={appState.repos}
        />
      </div>
      <footer>
      <div className='footer'>
        Built{''} with
        <span role='img' aria-label='love'>
            💚
          </span>{' '}
          by Raj Rana
      </div>
      </footer>
      
    </div>
  );
}

export default App;
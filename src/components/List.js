import React from 'react';
import "../App.css";

const List = (props) => {
    const {repos} = props; //We are initializing a prop for the component called repos.
    if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    return (
        <ul>
            <h2 className='list-head'>Available Public Repositories</h2>
            {repos.map((repo) => {
                const url = "https://github.com/rajrana437/"+repo.name;
                return (
                    <div>
                        <a href={url}>
                        <li key={repo.id} className='List'>
                        <span className='repo-text'>{repo.name}</span>
                        <span className='repo-description'> {repo.description}</span>
                    </li>
                        </a>
                        
                    </div>
                    
                   
                    
                );
            })}
        </ul>
    )
}

export default List;
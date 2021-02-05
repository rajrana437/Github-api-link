import React from 'react';

function withListLoading(Component){
    return function withListLoading({ isLoading, ...props }){
        if (!isLoading) return <Component {...props} />;
        return (
            <p style={{textAlign: 'center', fontSize: '30px'}}>
                Hold on, fetching data may take some time..... 
            </p>
        );
    };
} 

export default withListLoading;
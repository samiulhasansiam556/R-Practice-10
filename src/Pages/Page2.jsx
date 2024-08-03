import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../Components/useFetch';

function Page2(props) {

    const {data,loading,error} = useFetch("https://jsonplaceholder.typicode.com/posts")



    console.log(data);

    const navigate = useNavigate();
    const loadingMeassage = <p>Data is loading</p>
    const errorMeassage = <p>Something went wrong</p>

    const todos = 
    data &&
    data.map((todo)=>{
        return(
            <div className="w-[50%] ml-[25%] bg-red-600"  key={todo.id} >
                <h3>{todo.title}</h3>
            </div>
            )
    })

    return (
        <div>
            <h1>Page1</h1>
            <button className='bg-red-600' onClick={() => navigate("/")}>Go to Home</button>
            <button onClick={() => navigate('/page1')}>Go to Page1</button>
  
              {error && loadingMeassage}
              {loading && errorMeassage}
              {todos}
            
        </div>
    );
}

export default Page2;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../Components/useFetch';

function Page1() {

    const {data,loading,error} = useFetch("https://jsonplaceholder.typicode.com/todos")



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
            <button onClick={() => navigate("/")}>Go to Home</button>
            <button onClick={() => navigate('/page2')}>Go to Page2</button>
  
              {error && loadingMeassage}
              {loading && errorMeassage}
              {todos}
            
        </div>
    );
}

export default Page1;
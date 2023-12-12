import React from 'react';

const Blog = () => {
    return (
        
        <div className='conatiner-blog'>
            <div className='bottom'>
                <h4><span className='que'>Question:</span> What are the different ways to manage a state in a React application</h4>
                <p><span className='ans'>Answer:</span> React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers' expertise.</p>
            </div>

            <div className='bottom'>
                <h4><span className='que'>Question:</span> How does prototypical inheritance work?</h4>
                <p><span className='ans'>Answer:</span> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='bottom'>
                <h4><span className='que'>Question:</span> What is a unit test? Why should we write unit tests?</h4>
                <p><span className='ans'>Answer:</span> The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>

            <div className='bottom'>
                <h4><span className='que'>Question:</span> React vs. Angular vs. Vue?</h4>
                <p><span className='ans'>Answer:</span> Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>
        </div>
    );
};

export default Blog;
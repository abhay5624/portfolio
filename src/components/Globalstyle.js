import { createGlobalStyle } from "styled-components";
const Globalstyle = createGlobalStyle` 
*{
margin: 0%;
padding: 0%;
box-sizing: border-box;
}
body{
    background: #1b1b1b;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background: #23d997;
        color: white;
    }
    
}
h2{
        font-weight: lighter;
        font-size: 3rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
      font-size: 2rem;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    a{
        font-size: 0.9rem;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.1rem;
        line-height: 120%;
    }


`;
export default Globalstyle;
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
    /* Primary Palette */
    --Color-primary:#FF577F;
    --Color-primary-Focus:#FF427F;
    --Color-primary-Negative:#59323F;
    --Color-black:#000000;
    /* Grey Scale Palette */
    --Grey-0:#F8F9FA;
    --Grey-1:#868E96;
    --Grey-2:#343B41;
    --Grey-3:#212529;
    --Grey-4:#121214;

    /* Feedback Palette */
    --Color-feedback-Negative:#E83F5B;
    --Color-feedback-Sucess:#3FE864;

}
* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    max-width: 100vw;
  }

body,html{
    width: 100vw;
    height: 100vh;
    background: var(--Color-black);
    color:white;
    box-sizing: border-box;
    

    
}

header{
    display:flex;
    align-items: center;
    height: 113px;;
    border: 1px solid var(--Grey-3);
    padding:0px 120px;
    justify-content: space-between;
    

    @media (max-width:720px){
        flex-direction:column;
        align-items:flex-start;
        justify-content: center;
        height: 130px;
        gap: 10px;
        padding:5px;
        
    }
}
main{


    p{
        font-size: 12px;
    }
    }
    .divContainerButtonTitulo{
        display: flex;
        justify-content: space-between;
        padding: 20px 130px;

        @media (max-width:720px) {
            padding: 10px;

        }
    }
`;

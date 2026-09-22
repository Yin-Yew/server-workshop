* {
    box-sizing: border-box;
}


body {

    font-family: Arial, sans-serif;

    background: #fceff9;

    color: #555;

    margin:0;

    min-height:100vh;

    display:flex;

    justify-content:center;

    align-items:center;

}



.container {

    width:90%;

    max-width:500px;

    background:white;

    padding:35px;

    border-radius:30px;

    box-shadow:0 10px 30px rgba(200,150,200,0.25);

}



h1 {

    text-align:center;

    color:#c77dff;

}



h1 i {

    color:#ffafcc;

}



.input-area {

    display:flex;

    gap:10px;

}



input {

    flex:1;

    padding:12px;

    border-radius:15px;

    border:2px solid #ffd6e0;

    outline:none;

    font-size:16px;

}



button {

    border:none;

    background:#bde0fe;

    color:white;

    padding:12px 18px;

    border-radius:15px;

    cursor:pointer;

}



button:hover {

    background:#a2d2ff;

}



ul {

    padding:0;

    list-style:none;

    margin-top:25px;

}



li {

    background:#fff1e6;

    padding:15px;

    border-radius:18px;

    margin-bottom:12px;

    display:flex;

    justify-content:space-between;

    align-items:center;

}



li i {

    color:#ffb5e8;

    margin-right:8px;

}



.task-delete {

    background:#ffb3c6;

    padding:8px 12px;

}



.task-delete:hover {

    background:#ff8fab;

}



.task-delete i {

    color:white;

}

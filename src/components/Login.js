import React, { useState } from 'react'
import { UserIcon } from '@heroicons/react/solid'
import LinkList from './LinkList'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


const Login = () => {

    const [SpaceApp, setSpaceApp] = useState(false);


  return (
<Router>

<body class={SpaceApp ? "bg-black min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 hidden" : "bg-black min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0"} >
<header class="max-w-lg mx-auto">
    <a href="#">
        <h1 class="text-4xl font-bold text-white text-center">SPACEX</h1>
    </a>
</header>
<main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
    <section>
    <UserIcon className="h-10 w-10 text-black"/>
        <p class="text-gray-600 pt-2">Ingresa a tu usuario</p>
    </section>

    <section class="mt-10">
        <form class="flex flex-col" method="POST" action="#">
            <div class="mb-6 pt-3 rounded bg-gray-200">
                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Usuario</label>
                <input type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-black transition duration-500 px-3 pb-3"/>
            </div>
            <div class="mb-6 pt-3 rounded bg-gray-200">
                <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Contraseña</label>
                <input type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-black transition duration-500 px-3 pb-3"/>
            </div>
            <div class="flex justify-end">
                <a href="#" class="text-sm text-black hover:text-black hover:underline mb-6">Olvidaste tu contraseña</a>
            </div>
                <button class="bg-black hover:bg-black text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" onClick={() => {setSpaceApp(true);}}>
                    <Link to="/spacex">Entrar</Link>
                </button>
        </form>
    </section>
</main>

<div class="max-w-lg mx-auto text-center mt-12 mb-6">
    <p class="text-white">¿Tienes una cuenta? <a href="#" class="font-bold hover:underline">Registrate</a>.</p>
</div>

<footer class="max-w-lg mx-auto flex justify-center text-white">
    <a href="#" class="hover:underline">Andrea . Daniel . Israel . Arturo . Fernando</a>
    <span class="mx-3">•</span>
    <a href="#" class="hover:underline">Privacidad</a>
</footer>
</body>
<Routes>
    <Route exact path='/spacex' element={< LinkList />}></Route>
</Routes>
</Router>
  )
}

export default Login

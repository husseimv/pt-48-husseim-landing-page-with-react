import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import './chest.css';

const Chest = () =>{
return(
<div className="text-center mt-20">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Quickly fin competent</h1>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">candidates</h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">

            <div class="inline-flex rounded-md shadow-sm" role="group">
                <a href="https://www.apple.com/es/app-store/" className="icon__apple inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white p-1 mr-0.5">
                    <FontAwesomeIcon icon={faApple} className="mr-2" />
                    App Store
                </a>

                <a href="https://play.google.com/store/apps?hl=es_419&gl=US" className="icon__google inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                    <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
                    Play Store
                </a>

            </div>

        </div>
</div>
)
}

export default Chest;



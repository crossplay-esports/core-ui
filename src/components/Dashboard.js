import React from "react";
import team from "../images/team-logo.png";
import dribbler from "../images/dribbler.svg";
import manager from "../images/manager.svg";
import passer from '../images/passer.svg';
import shooter from '../images/shooter.svg';

export default function Dashboard() {
  return (
    <div className="border border-gray-100 h-screen p-8">
      <div className="dashboard font-quicksand flex flex-row gap-3 h-screen">
        <div className="left flex flex-col w-3/5">
          <div className="intro flex flex-row">
            <img src={team} className="h-36" />
            <div className="info flex flex-col items-start justify-center">
              <div className="p-1">You are on fire 🔥🔥</div>
              <div className="text-3xl font-extrabold p-1">
                Nice to see you again, chattarbx
                <img className="h-12 inline" src={manager} />
              </div>
              <div className="text-xs text-gray-700 p-1">
                Take some time to analyze your stats, and also your competitors
              </div>
            </div>
          </div>
        </div>
        <div className="right flex flex-col w-2/5 p-4">
          <div className="card-wrapper p-2 rounded-xl bg-gray-100">
            <div className="badges w-full rounded-xl border bg-white shadow-lg p-4 border-gray-200">
              <div className="flex flex-col">
                <span className="text-sm text-gray-600 font-extrabold">
                  Flaunt your badges 🚀
                </span>
                <div className="flex flex-row gap-3 mb-4 mt-2 overflow-x-auto">
                  <div className="bg-yellow-100 w-1/4 rounded-lg flex flex-col text-center">
                    <div>
                      <a
                        href="#"
                        className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        data-te-toggle="tooltip"
                        title="Manager Badge"
                      >
                        <img src={manager} alt="Team Manager" />
                      </a>
                    </div>
                    <span class="m-4 mr-4 bg-purple-800 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                      #manager
                    </span>
                  </div>
                  <div className="bg-gray-100 w-1/4 rounded-lg flex flex-col text-center">
                    <div>
                      <a
                        href="#"
                        className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        data-te-toggle="tooltip"
                        title="Dribbler Badge"
                      >
                        <img src={dribbler} alt="Skilled Dribbler" />
                      </a>
                    </div>
                    <span class="m-4 mr-4 bg-purple-800 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                      #skilled-dribbler
                    </span>
                  </div>
                  <div className="bg-gray-100 w-1/4 rounded-lg flex flex-col text-center">
                    <div>
                      <a
                        href="#"
                        className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        data-te-toggle="tooltip"
                        title="Passer Badge"
                      >
                        <img src={passer} alt="Maestro" />
                      </a>
                    </div>
                    <span class="m-4 mr-4 bg-purple-800 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                      #maestro
                    </span>
                  </div>
                  <div className="bg-gray-100 w-1/4 rounded-lg flex flex-col text-center">
                    <div>
                      <a
                        href="#"
                        className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        data-te-toggle="tooltip"
                        title="Shooter Badge"
                      >
                        <img src={shooter} alt="Sharp Shooter" />
                      </a>
                    </div>
                    <span class="m-4 mr-4 bg-purple-800 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                      #sharp-shooter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
	const [isMenuToggle, setIsMenuToggle] = useState(false);
	return (
		<div>
			{/* mobile bar */}
			<div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
				<Link to="/" className="block p-4 text-white font-bold">
					THE CONNECTER
				</Link>

				<button
					className="p-4"
					onClick={() => setIsMenuToggle(toggle => !toggle)}
				>
					<i className="fas fa-bars"></i>
				</button>
			</div>

			{/* slidebar */}
			<div
				className={
					'bg-gray-900 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out h-full text-white ' +
					(isMenuToggle ? 'translate-x-0' : '')
				}
			>
				<h1 className="my-4 lg:mt-8 lg:mb-24">
					<Link to="/" className="space-x-2 mx-4 text-xl block text-center">
						THE CONNECTER
					</Link>
				</h1>

				<nav>
					<Link
						to="/"
						className="block py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white"
					>
						<i className="far fa-calendar mr-2 text-sky-500"></i>
						프로젝트
					</Link>
					<Link
						to="/"
						className="block py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white"
					>
						<i className="fas fa-calendar-check mr-2 text-sky-500"></i>
						채용 진행 프로젝트
					</Link>
					<Link
						to="/"
						className="block py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white"
					>
						<i className="fas fa-user mr-2 text-sky-500"></i>
						후보자
					</Link>
					<Link
						to="/"
						className="block py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white"
					>
						<i className="fas fa-coins mr-2 text-sky-500"></i>
						빌링
					</Link>
				</nav>
				<Link
					to="/"
					className="text-white absolute bottom-0 left-0 w-64 bg-sky-500 block py-3 text-center"
				>
					후보자 생성
				</Link>
			</div>
		</div>
	);
}

export default NavBar;

import { Link, NavLink } from 'react-router-dom';

const navLinks = [
    { to: '/', icon: '🏠', text: 'Home' },
    { to: '/play', icon: '⚔️', text: 'Play' },
    { to: '/analysis', icon: '📊', text: 'Analysis' },
    { to: '/training', icon: '🧠', text: 'Training' },
];

function NavBar() {
    const linkClassName = ({ isActive }) =>
        `flex items-center gap-4 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ease-in-out ${
            isActive
                ? 'bg-cyan-500/10 text-cyan-400 shadow-inner'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
        }`;

    return (
        <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4 border-r border-gray-700/50">
            {/* Logo Section */}
            <div className="flex-shrink-0 mb-10">
                <Link to="/" className="flex items-center gap-3 group">
                    <span className="text-4xl group-hover:rotate-12 transition-transform duration-300">♟️</span>
                    <div>
                        <span className="text-xl font-bold text-white">Chess Trainer</span>
                        <span className="block text-xs text-cyan-400">AI Powered</span>
                    </div>
                </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex-grow">
                <ul className="space-y-2">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <NavLink to={link.to} className={linkClassName}>
                                <span className="text-2xl w-8 text-center">{link.icon}</span>
                                <span>{link.text}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

        </aside>
    );
}

export default NavBar;
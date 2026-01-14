export const MapExplorer = () => {
    return (
        <div className="flex-1 relative hidden lg:block bg-gray-200 dark:bg-gray-900 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-90"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBixlyyiXiZuIYDgzN9wF3P8eKZWKM7oyFOouJT1DTVkJVjgpMJcWuaj_CJvJlfYrEoIU8-jq797ryhk-J2cGWuc-Nj1MOrS9-bhryDwVXf2NsTd0nVhNkA1l1X2zHvaETCW5Cx4pf8q-ObfoB9PIqGA6e5P2XMC-IIg3PxObWYRhmcHhq8bJVgLssORCVWCfW07r5SOqejd_xXge6-p4_z1qMW8Z7H-HCmd701T0dCm_g333L6y8utvN-n6WUM1kwa2bbuKGnIlLgt')" }}
            >
                {/* Map Overlay */}
                <div className="absolute inset-0 bg-primary/5"></div>

                {/* SVG Route Path */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600">
                    <path
                        className="filter drop-shadow-[0_0_4px_#31532d]"
                        d="M600,150 L400,300 L250,500"
                        fill="none"
                        stroke="#31532d"
                        strokeDasharray="8 4"
                        strokeWidth="4"
                    />

                    {/* Marker 1 */}
                    <g transform="translate(600,150)">
                        <circle fill="#31532d" r="16"></circle>
                        <text fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" x="0" y="5">1</text>
                    </g>

                    {/* Marker 2 */}
                    <g transform="translate(400,300)">
                        <circle fill="#31532d" r="16"></circle>
                        <text fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" x="0" y="5">2</text>
                    </g>

                    {/* Marker 3 */}
                    <g transform="translate(250,500)">
                        <circle fill="#31532d" r="16"></circle>
                        <text fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" x="0" y="5">3</text>
                    </g>
                </svg>
            </div>
        </div>
    );
};

function NavBar() {
    return (
        <div className="bar flex justify-around text-black">
            <div className="options">
                <p className="italic text-6xl tracking-widest font-serif border border-black p-2">
                    Catalog
                </p>
            </div>
            <div className="options">
                <p className="italic text-3xl tracking-widest font-serif p-2">Us</p>
            </div>
            <div className="options">
                <p className="italic text-3xl tracking-widest p-2">🛒</p>
            </div>
        </div>
    )
}

export default NavBar;
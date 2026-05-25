export default function Background({ Count }) {

    const mobileClass =
        "h-screen w-full object-cover hidden max-sm:block";

    const desktopClass =
        "h-screen w-full object-cover max-sm:hidden";

    if (Count === 0) {
        return (
            <div className="w-full h-screen overflow-hidden">
                <img
                    src='https://www.hdcarwallpapers.com/download/lamborghini_terzo_millennio_4k_2-2560x1440.jpg'
                    className={desktopClass}
                />

                <img
                    src='https://images.unsplash.com/photo-1628519592419-bf288f08cef5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VwZXJjYXJ8ZW58MHx8MHx8fDA%3D'
                    className={mobileClass}
                />
            </div>
        );
    }

    else if (Count === 1) {
        return (
            <div className="w-full h-screen overflow-hidden">
                <img
                    src='https://www.supercars.net/blog/wp-content/uploads/2023/07/Rimac-Nevera.jpg'
                    className={desktopClass}
                />

                <img
                    src='https://i.pinimg.com/474x/d4/a3/f3/d4a3f31b426195dc3addafa49601b338.jpg'
                    className={mobileClass}
                />
            </div>
        );
    }

    else if (Count === 2) {
        return (
            <div className="w-full h-screen overflow-hidden">
                <img
                    src='https://i.cdn.newsbytesapp.com/images/14222051717566278.jpg'
                    className={desktopClass}
                />

                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTyfA84gRcKp9ZKF_Lra3CZtM-_evA4-qVA&s'
                    className={mobileClass}
                />
            </div>
        );
    }
}
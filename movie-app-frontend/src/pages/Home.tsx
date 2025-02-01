const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
            <div className="text-center p-6 bg-gray-900 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">
                    Welcome to Movie App
                </h1>
                <p className="text-xl mb-6">
                    Please search for your favorite movies!
                </p>
                <p className="text-lg">
                    Start exploring by typing the movie title in the search bar
                    above.
                </p>
            </div>
        </div>
    );
};

export default Home;

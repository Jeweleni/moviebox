function signin() {
  return (
    <>
      <h1 className="flex justify-center items-center text-red-500 bg-gray-100 font-extrabold ">
        Welcome, Please Sign In
      </h1>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border-2 border-gray-300 p-2 w-full rounded"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border-2 border-gray-300 p-2 w-full rounded"
                placeholder="Your password"
              />
            </div>
            <a
              className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition"
              href="/"
            >
              Sign In
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

export default signin;

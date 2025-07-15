const Contact = () => {
    return (
        <div className="my-20">
            <h1 className="text-center text-2xl mb-4">Contact Us</h1>
            <form className="flex flex-col justify-center items-center border w-fit m-auto">
                <input placeholder="name" type="text" className="border rounded p-1 mt-4" />
                <input placeholder="message" type="text" className="border rounded p-1 m-4" />
                <button className="bg-green-500 py-3 px-8 m-3 rounded">Submit</button>
            </form>
        </div>
    );
}

export default Contact
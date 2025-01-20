const Contact = () => {
    // const handleSubmit = (event) => {
    //     event.preventDefault;
    //     console.log("From Submitted");
    // };
    return (
        <div className="  pt-28 pb-12">
            <h2 className="font-bold text-2xl p-4 m-4">Contact Page</h2>
            <form className="px-8">
                <input
                    type="text"
                    placeholder="name"
                    className="border border-black p-2 m-2"
                />
                <input
                    type="text"
                    placeholder="message"
                    className="border border-black p-2 m-2"
                />
                <button
                    className="border border-black p-2 m-2"
                    type="submit"
                    // onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;

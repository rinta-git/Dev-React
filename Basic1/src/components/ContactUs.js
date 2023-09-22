const ContactUs = () => {
  return (
    <>
      <h1>Hello</h1>
      <p>You are here to contact us. Lets talk 😀</p>
      <form>
        <input
          type="text"
          className="border border-black p-3 m-3"
          placeholder="username"
        />
        <input
          type="text"
          className="border border-black p-3 m-3"
          placeholder="message"
        />
        <button className="border border-black p-3 m-3 rounded-lg">
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactUs;

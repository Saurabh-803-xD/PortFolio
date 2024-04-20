import React, { useEffect,useRef,useState } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    useEffect(() => {
        AOS.init();
      }, []);

  const form = useRef();

  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message:'',
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding form field in the state
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_8cylpx2', 'template_r939qyo', form.current, {
        publicKey: '9tgItXOiHOaAKeToh',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Message sent successfully")
          setFormData({from_name:"",email:'',message:''});
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Failed to send message.");
        },
      );
  };

  return (
    <div className="w-full text-gray-300 mt-14 h-[34rem] mb-3">
      <div className="flex flex-col justify-center items-center text-white">
        {/* Heading */}
      <div data-aos="fade-down" data-aos-duration="400" data-aos-easing="linear" className=' pb-2'>
      <h1 className="text-2xl ml-4 pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold items-center">
          Contact <span className='text-gradient'>Me /</span></h1>
        {/* <h1 className=''>Submit the form below to get in touch with me</h1> */}
        <p className="text-content py-2 lg:max-w-3xl ml-4"
        data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
        Submit the form below to get in touch with me
        </p>
      </div>
        {/* Form */}
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name"
              name="from_name"
              value={formData.from_name}
              required
              onChange={(e) => {
          handleChange(e);
        }}              className="bg-gray-100 text-gray-950 p-2 rounded-md w-full"
              data-aos="fade-down" data-aos-duration="800" data-aos-easing="linear"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              required
              onChange={(e) => {
          handleChange(e);
        }}              className="my-4 p-2 bg-gray-100 w-full text-gray-950 rounded-md"
              data-aos="fade-down" data-aos-duration="800" data-aos-easing="linear"
            />
            <textarea
              name="message"
              value={formData.message}
              className="bg-gray-100 p-2 w-full text-gray-950 rounded-md "
              data-aos="fade-down" data-aos-duration="800" data-aos-easing="linear"
              placeholder="Message"
              onChange={(e) => {
          handleChange(e);
        }}              rows="5"
            ></textarea>
          <div className="mt-4">
          <button
            type='submit'
            value="send"
            className="text-white border-2 px-6 py-3 my-2 flex items-center rounded-sm bg-black gradient-border hover:bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600 font-bold hover:text-black hover:font-bold"
            data-aos="fade-left" data-aos-duration="600" data-aos-easing="linear"
          >
            Send Message
            <span className="group-hover:translate-x-1 duration-300">
            <IoSendSharp className="ml-4" />
            </span>
          </button>
          </div>
        </form>
        </div>  
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';

const Create = (props) => {
  const feedback = props.feedback;
  const setfeedback = props.setfeedback;

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [text, settext] = useState('');
  const [rating, setrating] = useState('');
  const [services, setservices] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const updatedform = {
      name: name,
      email: email,
      text: text,
      rating: rating,
      services: services,
    };

    setfeedback([...feedback, updatedform]);
    setname('');
    setemail('');
    settext('');
    setrating('');
    setservices('');
  };

  localStorage.setItem('feedback', JSON.stringify(feedback));
  console.log(feedback);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-xl p-6">
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">Feedback Form</h1>

        <form onSubmit={submitHandler} className="space-y-4">
          {/* Services Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Service</label>
            <select
              value={services}
              onChange={(e) => setservices(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="select">Select</option>
              <option value="customer_support">Customer Support</option>
              <option value="Delivery">Delivery</option>
              <option value="Product">Product</option>
            </select>
          </div>

          {/* Rating Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Rating</label>
            <select
              value={rating}
              onChange={(e) => setrating(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="Rating">Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Feedback Text */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Feedback</label>
            <textarea
              placeholder="Write your feedback here"
              value={text}
              onChange={(e) => settext(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;

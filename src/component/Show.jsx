import React from "react";

function Show({ feedback }) {
  
  const averageRating = (type)=>{
        const filteredData = feedback.filter((data)=>{return data.services == type})
        const totalRating = filteredData.reduce((statringValue,item)=>{return statringValue + Number(item.rating)},0)
        return (totalRating / (filteredData.length ||1))
      }

      
  const customerFeedback = averageRating("customer_support")
  const DeliveryFeedback = averageRating("Delivery")
  const productQualitFeedback = averageRating("Product")


  return (
    <div className="p-6 font-sans bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Feedback Summary</h2>

      {/* Summary Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Customer Support</h3>
          <p className="text-2xl font-bold text-emerald-500">{customerFeedback}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Delivery</h3>
          <p className="text-2xl font-bold text-emerald-500">{DeliveryFeedback}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Product Quality</h3>
          <p className="text-2xl font-bold text-emerald-500">{productQualitFeedback}</p>
        </div>
      </div>

      <h4 className="text-lg font-medium text-gray-800 mb-4">
        Total Feedback: <span className="font-bold">{feedback.length}</span>
      </h4>

      {/* Feedback Details */}
      <div className="grid grid-cols-1 gap-4">
        {feedback.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
          >
            <p className="text-gray-700 mb-2">
              <strong>Name:</strong> {item.name}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Rating:</strong> {item.rating}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Service:</strong> {item.services}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> {item.email}
            </p>
            <p className="text-gray-700">
              <strong>Feedback :</strong> {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Show;

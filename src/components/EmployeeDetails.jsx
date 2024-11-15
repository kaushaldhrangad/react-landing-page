import React from "react";
const EmployeeDetails = () => {
  const data = [
    { code: 28, name: "Unish kumar", contact: 9099201233, job: "Front End Developer", profile: "Total responsibilty to handle Front End Work" },
    { code: 36, name: "Hari Parmar", contact: 9898512345, job: ".Net Developer", profile: "Handle all .net development" },
    { code: 78, name: "Jigar Gor", contact: 9898123466, job: "Web & Graphic Designer", profile: "Create Website, Graphics etc." },
    { code: 28, name: "Vikash Shah", contact: 9898123478, job: ".Net Developer", profile: "Handle all .net development" },
    { code: 55, name: "Charmi Shah", contact: 9789552451, job: "SEO Executive", profile: "SEO Work " },
    { code: 70, name: "Peter Parker", contact: 9789552451, job: "SEO Executive" , profile: "SEO Work "},
  ];

  return (
    <div
      className="container mx-auto sm:mb-[250px] max-sm:mb-[250px] sm:p-6 lg:mb-[100px] lg:w-[1320px]"
      style={{
        height: "452px",
        top: "3159px",
        left: "300px",
        gap: "0px",
        opacity: "1", // Set to 1 for visibility, change as needed
      }}
    >
      {/* Employee Details Heading */}
    <h2 className="text-2xl flex justify-center my-16 font-bold sm:text-3xl md:text-4xl  title-font mb-2 sm:mb-3 md:mb-4 text-gray-900">
        Employee Details
      </h2>

      {/* Table container with overflow for responsiveness */}
      <div className="">
        <table
          className="min-w-full mb-[250px] table-auto border-collapse"
          style={{
            borderTop: "1px solid #D5D5D5", // Apply the top border
            borderLeft: "1px solid #D5D5D5", // Apply the top border
            borderRight: "1px solid #D5D5D5", // Apply the top border
            borderBottom: "1px solid #D5D5D5", // Apply the top border
          }}
        >
          <thead>
            <tr className="bg-[#252C3A] text-left text-white">
              <th className="px-4 py-3 border-b text-sm sm:text-[20px]">Code</th>
              <th className="px-4 py-3 border-b text-sm sm:text-[20px]">Name</th>
              <th className="px-4 py-3 border-b text-sm sm:text-[20px]">Designation</th>
              <th className="px-4 py-3 border-b text-sm sm:text-[20px]">Contact Details</th>
              <th className="px-4 py-3 border-b text-sm sm:text-[20px]">Job Profile</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 bg-[#F5F5F5] ">
                <td className="px-4 py-4 border-b text-sm sm:text-[18px]">{item.code}</td>
                <td className="px-4 py-4 border-b text-sm sm:text-[18px]">{item.name}</td>
                <td className="px-4 py-4 border-b text-sm sm:text-[18px]">{item.job}</td>
                <td className="px-4 py-4 border-b text-sm sm:text-[18px]">{item.contact}</td>
                <td className="px-4 py-4 border-b  text-sm sm:text-[18px]">{item.profile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDetails;

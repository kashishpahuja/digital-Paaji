import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon

function Popup({ handleMenu }) {
  const [hovered, setHovered] = useState('home'); // Track which item is hovered

  // Image URLs for each list item
  const images = {
    Home: "/Images/popup1.webp", // Replace with your image URL for Home
    About: "/Images/popup2.webp", // Replace with your image URL for About
    Services: "/Images/popup1.webp", // Replace with your image URL for Services
    "Our Work": "/Images/popup1.webp", // Replace with your image URL for Our Work
    Contact: "/Images/popup1.webp", // Replace with your image URL for Contact
  };

  // Mouse enter and leave handlers
  const handleMouseEnter = (item) => {
    setHovered(item);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-[#ede7db] p-8 rounded-lg w-[700px] h-[600px] relative">
          {/* Close Icon in Top Right Corner */}
          <AiOutlineClose
            className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-600"
            onClick={handleMenu} // Close the menu when clicking the icon
          />

          <div>
            <ul className="text-[70px] flex flex-col overflow-x-hidden">
              {["Home", "About", "Services", "Our Work", "Contact"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="marque cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* If item is hovered, show marquee effect */}
                    {hovered === item ? (
                      <div className="animate-marquee text-[#833f3f] font-bold">
                        {Array(10).fill(item).join("  ")}{" "}
                        {/* Repeated text for marquee effect */}
                      </div>
                    ) : (
                      item // Simple text when not hovered
                    )}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Image on bottom right when any item is hovered */}
          {hovered && (
            <div className="w-12 h-12">
              <img
                src={images[hovered]} // Show the corresponding image based on the hovered item
                alt={hovered}
                className="image absolute bottom-4 right-4 w-ful h-auto object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popup;

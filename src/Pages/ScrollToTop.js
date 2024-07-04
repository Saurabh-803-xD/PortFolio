import React, { useState, useEffect, useCallback } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null); // Store timeout ID
  const [isClicked, setIsClicked] = useState(false); // State to track button click

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 20) {
      setIsVisible(true);
      setIsPaused(false); // Reset pause state on scroll
      clearTimeout(timeoutId); // Clear previous timeout
      const id = setTimeout(() => setIsPaused(true), 3000); // Set new timeout
      setTimeoutId(id); // Save timeout ID
    } else {
      setIsVisible(false);
      setIsClicked(false); // Reset isClicked when reaching the top
    }
  }, [timeoutId]); // Include timeoutId in the dependencies array

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsClicked(true); // Set button click state to true
  };

  useEffect(() => {
    const handleScroll = () => {
      toggleVisibility();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId); // Clear timeout on cleanup
    };
  }, [toggleVisibility, timeoutId]); // Include toggleVisibility and timeoutId in the dependencies array

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-2 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-600 text-white rounded-full transform transition-all duration-300 ${
        isVisible && !isPaused ? 'opacity-90 translate-y-0 animate-bounce' : 'opacity-0 translate-y-5'
      }`}
      style={{ display: isVisible && !isPaused ? 'block' : 'none', backgroundColor: isClicked ? '#FCD34D' : '' }}
      title="Go to top"
    >
      {isClicked ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      )}
    </button>
  );
};

export default ScrollToTopButton;

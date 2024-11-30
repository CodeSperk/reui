const CoolHoverButton = () => {
  return (
  <button
    class="relative px-6 py-3 font-bold text-white group cursor-pointer"
    onClick="alert('Button clicked!')"
  >
    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform scale-95 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-100"></span>
    <span class="relative text-lg tracking-wide uppercase">
      Cool Button
    </span>
  </button>

  );
};

export default CoolHoverButton;
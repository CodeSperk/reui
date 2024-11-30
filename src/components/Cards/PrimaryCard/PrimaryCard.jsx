import Image from "next/image";

const PrimaryCard = () => {
  return (
  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
    <Image
      class="w-full h-48 object-cover"
      src="/shirt.png"
      width={60}
      height={100}
      alt="Sample Image"
    />
    <div class="p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-2">Primary Card</h2>
      <p class="text-gray-600 mb-4">This is a description for the card. It provides brief details.</p>
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        onclick="alert('Action clicked!')"
      >
        Learn More
      </button>
    </div>
  </div>
  );
};

export default PrimaryCard;
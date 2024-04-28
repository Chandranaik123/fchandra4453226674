import React from 'react';

function Gallery() {
  let s2='https://drive.google.com/file/d/1lHbMao9ZcUwhO0mL0h1Scf5D4AvhBEoY/preview'
  let s3='https://drive.google.com/file/d/1lHbMao9ZcUwhO0mL0h1Scf5D4AvhBEoY/preview'
  let s4='https://drive.google.com/file/d/1fm_YsJHpF2bhadTgf8MGg4YhxnOJKTgP/preview'
  let s5=''
  return (
    <div className="bg-gray-100 py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Gallery items */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1wphsZnNpRy8yeiEepIX2rddgehWv9z4G/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
            {/* <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center transition duration-300 opacity-0 hover:opacity-100">
              <button className="bg-white px-4 py-2 rounded-full text-gray-900 font-semibold hover:bg-gray-100 transition duration-300">View</button>
            </div> */}
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src=" https://drive.google.com/file/d/1lHbMao9ZcUwhO0mL0h1Scf5D4AvhBEoY/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1fm_YsJHpF2bhadTgf8MGg4YhxnOJKTgP/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1pq1GeisvFQmpiPa6ORk5hS6xTks0oThb/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1ubKJqCCnI-rInSCEbwIq7s4oWr7xpXYz/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/12uiSSLuQI7GQq-QGrwEmrrclcbiFE-AL/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/13lbtGh40ZKw4wkBktgqq5VeTxP2nGvis/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/177AX6i9P4aUYhPRr-WNQNDAirAUuItYP/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1i42jkv7cDUH04JQS4C3z90FnTxPk2CLz/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1c860Q68jDyHPcgVBNew4fLylmTjyj0YG/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1d0MeOazzzzhLq0_koyMsaGyHRpNWo6fv/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1dICyRLIV6bTO10c4cAJacaFlUTO4drjw/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1HCImtDjv2_kByBLQaSsPIt32ZA3EymQH/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1QgtYW7qNfvMxgzrBjPLggLzO979G1lyQ/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1t9qwlGxT26BBZlZhyVlSxSFUA-QxgDbh/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1E8LqzvDr8i-hcIISKZ7lx_0zldkoid-I/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1u7aDl_5xVHISq8yvm5N1GEI6FWYTSy3C/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1p38mpbcYYPQrgrYi4OdPlL4OSOJ8VecO/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/17YOkngFY8wbJ-upRLzJ9Vi0AZOT9DMq0/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1QsMN99GB6fF5SV5UT56luIol-K5A3QDv/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/18NUkvEKBDJznFXjKbyXda6Lvh5OkOwS6/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1_BZDai3-u_ADip099RKH3CN3zHUyZfXR/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1FllAb7YVMZSL1UvDATmUPUuqW01aZWza/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1od3hUl-3tFUnpZvnVzdKdSRvpfntYRht/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1EnF_DvBcDuIiVZ0AgLutA31QDLaY8nSK/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1LNygsRXoVeslxK0sviiNda8dlTnKrhWE/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1rqAPAB1CnksRwpSQVMzVn1za6caAHi4w/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1HB5bXQi-zhl_9aRGsL06u3mM0MdvZ7U-/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1xj5KnZaWqc6xMiOj96xpsfmIhjFNrIn7/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1PfbVmvBNiLrLKT7eCLT2jqY84qfTakRr/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1bmn_su1n0-yA34b9RO_UcXo9vg1AYS1i/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1bmn_su1n0-yA34b9RO_UcXo9vg1AYS1i/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1EcT6KAxN4nCd-VSchKwLayy0n95uvdyC/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1m0EwRr5xHE0MPL-PjHhKLDFEeNB2ZJf8/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://drive.google.com/file/d/1cZ7SexuteIdq7rT-ytIlAJ0ZsHauPVAD/preview" width="640" height="480" className="w-full h-64 object-cover object-center transition duration-300 transform hover:scale-105"></iframe>
          </div>
          
          {/* Repeat this for more gallery items */}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

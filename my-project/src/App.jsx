import { useRef, useState } from "react";
import JsBarcode from "jsbarcode";

function App() {
  const [value, setValue] = useState(0);
  const barcodeRef = useRef(null);

  const generate_barcode = (e) => {
    e.preventDefault()
    try {
      
      if (barcodeRef.current) {
        JsBarcode(barcodeRef.current, value, {
          format: "CODE128",
          displayValue: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 h-screen">
        <div className="flex flex-col items-center bg-white w-96 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">
            สร้าง Barcode
          </h1>

          <form className=" w-full" onSubmit={generate_barcode}>
            <div className="my-3 w-full">
              <input
                type="text"
                placeholder="ชื่อ"
                className="w-full border border-gray-100 rounded-md px-4 py-2 focus:outline-none "
                required
              />
            </div>

            <div className="my-3 w-full">
              <input
                type="text"
                placeholder="รหัสไอดี"
                className="w-full border border-gray-100 rounded-md px-4 py-2 focus:outline-none "
                onChange={(value) => setValue(value.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-lime-500 text-white w-full p-2.5 rounded-md font-bold text-xl hover:bg-lime-300 my-3 transition-colors duration-300"
            >
              สร้าง
            </button>
          </form>

          <svg ref={barcodeRef} className="w-full"></svg>
        </div>
      </div>
    </>
  );
}

export default App;

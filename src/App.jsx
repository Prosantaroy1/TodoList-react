
import { useState } from 'react'
import './App.css'

function App() {

  const [inputs, setInputs] = useState("");
  //
  const [datas, setDatas] = useState([]);
  //add
  const handleAdd = () => {
    const savesData = [...datas, inputs];
    setDatas(savesData);
    setInputs('');
  }
  console.log(datas);
  return (
    <div>
      <h3 className='text-center py-3 bg-black text-2xl text-white font-extrabold'>TODO LIST APP YOUR TEXT SAVE ZONE!</h3>
      <div className='flex flex-col justify-center rounded-2xl items-center'>
        <div className='bg-black flex gap-4 px-48 py-5 mt-12 text-white '>
          <input type="text" value={inputs} onChange={(e) => setInputs(e.target.value)} className='border-green-500 text-black rounded-lg w-[380px] border-2' />
          <button onClick={handleAdd} type="button" className='bg-green-500 px-4 py-2 rounded-xl'>Add</button>
        </div>
        {/*Show Data */}
        <div className='bg-[#0088] w-2/3 mt-2 px-4 py-4 rounded  text-white '>
          <h2 className='text-2xl font-bold pb-2'>Collection To Show Data: </h2>
          <div className='flex flex-col gap-4'>
            {
              datas.map((items, idx) =>

                <div key={idx} className='flex justify-between items-center bg-slate-500 py-3 px-2 rounded-lg pt-2'>
                  <p className=''>{items}</p>
                  <button type="button" className='bg-red-500  px-4 py-2 rounded-xl'>X</button>
                </div>

              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

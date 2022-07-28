import React from 'react'
import {RiCustomerService2Fill as Headset} from 'react-icons/ri'
import {MdOutlineTravelExplore as WorldSearchIcon} from 'react-icons/md'

const Search = () => {
  return (
    <div name="travel" className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga placeat laborum asperiores aliquam nihil. Quidem, omnis pariatur minima nulla eius maiores assumenda error aliquid quae iure. Inventore molestiae dicta temporibus!
                Consectetur mollitia animi non laudantium eos, fugiat exercitationem asperiores ad voluptas sapiente corrupti quam omnis distinctio aliquid possimus deleniti vitae aut autem dicta unde debitis corporis! Assumenda cumque repellat earum.
                Qui atque, voluptates repellat et repudiandae fugit quaerat sed odio! Ipsa amet voluptas magni aliquid debitis nihil, in maxime aut architecto quibusdam, doloribus quis quos, est inventore nisi sunt eveniet.</p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><Headset size={50} /></button>
                    <div>
                        <h3 className='py-2'>LEADING SERVICE</h3>
                        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><WorldSearchIcon size={50} /></button>
                    <div>
                        <h3 className='py-2'>AUTOMATED BOOKINGS</h3>
                        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
             <div className='border text-center py-4'>
               <p>GET AN ADDITIONAL 10% OFF</p>
               <p className='py-4'>12 HOURS LEFT</p>
               <p className='text-gray-200 bg-gray-800 mx-8'>BOOK NOW AND SAVE</p>
            </div>
            <form className='py-4 w-full'>
                <div className='flex flex-col my-2'>
                    <label>Destination</label>
                    <select className="border rounded-md p-2" type="text">
                        <option value="Grande Antigua">Grande Antigua</option>
                        <option value="Key West">Key West</option>
                        <option value="Bora Bora">Bora Bora</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Cozumel">Cozumel</option>
                    </select>
                </div>
                <div className='flex flex-col my-4'>
                     <label>Check-In</label>
                      <input className="border rounded-md p-2" type="date" />
                </div>
                <div className='flex flex-col my-2'>
                      <label>Check-Out</label>
                      <input className="border rounded-md p-2" type="date" />
                </div>
                <button className='w-full my-2'>Rates & Availabilities</button>
            </form>
            </div>
        </div>
  )
}

export default Search
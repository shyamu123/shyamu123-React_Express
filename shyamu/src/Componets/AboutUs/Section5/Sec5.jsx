import React from 'react'
import "./Sec5.css";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sec5 = () => {
  return (
    <>
      <div className=''>
        <div className='flex xs:block lg:flex'>
          <div className='xs:h-[465px] xs:w-[100vw] xs:bg-yellow-300 xs:mt-[100px] lg:hg-[465px] lg:w-[75vw] xl:h-[465px] xl:w-[80vw] xl:bg-green-500 2xl:h-[500px] 2xl:w-[80vw]  z-10'>
          </div>
          
          <div className='text xs:h-[595px] xs:w-auto xs:mt-[50px] xs:ms-[15px] sm:h-[600px] sm:w-auto md:h-[600px] md:w-auto lg:h-[575px] lg:w-[100vw] lg:ml-[-50px] xl:h-[570px] xl:w-[100vw] xl:ml-[-60px] 2xl:h-[600px] border-[2px] border-black'>
            <p className='xs:text-[20px] xs:ms-[15px] xs:mt-[70px] sm:ms-[30px] md:ms-[50px] lg:ms-[90px] 2xl:ms-[170px]'>Get in touch with us to see how</p>
            <p className='xs:text-[45px] xs:ms-[15px] xs:mt-[10px] xs:max-w-[290px] xs:leading-[50px] sm:ms-[30px] sm:max-w-[500px] md:ms-[50px] md:max-w-[700px] lg:ms-[90px] lg:max-w-[500px] lg:text-[41px] xl:max-w-[600px] 2xl:ms-[170px] 2xl:max-w-[600px]'><b>Provide smart and flexible digital services</b></p>

            <div className='w-11/12 lg:w-9/12 2xl:w-8/12 h-auto mx-auto mt-5'>
            <Accordion className='py-3'>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography><p className='font-bold text-lg hover:text-custom-pink hover:duration-300'>Can i cancle my account any time?</p></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.
                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion className='py-3'>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography><p className='font-bold text-lg hover:text-custom-pink hover:duration-300'>What happens after the license expires?</p></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.
                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion className='py-3 mb-20'>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography><p className='font-bold text-lg hover:text-custom-pink hover:duration-300'>Does Harry have any documentations?</p></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.
                </Typography>
              </AccordionDetails>
            </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sec5

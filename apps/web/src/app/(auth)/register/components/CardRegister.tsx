'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { slideLeft } from '@/app/utils/animation/framerLeftRight';
import { imageHeader } from '@/app/utils/animation/framerTopDown';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import FormRegister from './FormRegister';
YupPassword(yup);

const CardRegister = () => {
  return (
    <section>
      <div className="bg-primary">
        <div className="relative overflow-hidden md:flex ">
          <motion.div
            className="md:w-1/2 justify-center bg-white m-5 rounded-2xl "
            variants={slideLeft}
            initial="hidden"
            animate="visible"
          >
            <FormRegister />
          </motion.div>
          <div className=" relative hidden md:flex flex-col w-1/2 justify-around items-center">
            {/* <div>
              <Image
                src="/image/BG.png"
                width={1000}
                height={1000}
                alt="background"
                className="bg-cover bg-no-repeat z-10"
              />
            </div> */}
            <motion.div
              variants={imageHeader}
              initial="hidden"
              animate="visible"
              className="absolute z-50 w-[980px]"
            >
              <Image
                src="/image/login.png"
                width={1000}
                height={1000}
                //   fill
                alt="background"
                className="w-full bg-cover "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardRegister;

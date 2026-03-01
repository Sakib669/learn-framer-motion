import { motion, useScroll } from "motion/react";
interface Props {}

const App = ({}: Props) => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="p-20 text-center">
      {/* <motion.div
        initial={{ x: 0 }}
        animate={{
          transition: {
            duration: 5,
            repeat: 0,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        drag
        whileDrag={{scale: 0.36}}
        whileTap={{scale: .9}}
        whileHover={{backgroundColor: 'blue'}}
        dragConstraints={{left: 0, top: 0, bottom: 400, right: 600}}
        dragDirectionLock={true}
        className="h-30 w-30  bg-red-500 items-center justify-center flex rounded-[50%]"
      >
        <div className="h-10 w-10 mx-auto rounded-[10%]  bg-purple-600" />
      </motion.div> */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-blue-700 origin-left h-3 w-full fixed top-0 left-0"
      ></motion.div>
      <h2 className="text-4xl my-10 font-bold">
        trying to learn framer motion
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem
        nesciunt laboriosam eveniet. Quasi corporis optio quibusdam placeat
        inventore nulla corrupti perspiciatis accusamus atque ipsa. Temporibus
        libero consequuntur, esse qui obcaecati ea iure recusandae dignissimos
        et, sed explicabo quas, eaque eum fugiat! At laudantium officiis commodi
        totam alias quis, pariatur illo! Nam tempore sit maxime, fugit obcaecati
        nemo amet autem explicabo itaque, harum, tenetur ab reiciendis deserunt
        odio. Cupiditate, ipsam quibusdam minus fuga mollitia deleniti? Harum
        porro saepe labore eius temporibus amet at corrupti, laborum assumenda
        veritatis expedita nesciunt ut nihil fugit consequuntur alias itaque
        adipisci reiciendis ipsam neque rem.
        <br />
        <br />
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem
        nesciunt laboriosam eveniet. Quasi corporis optio quibusdam placeat
        inventore nulla corrupti perspiciatis accusamus atque ipsa. Temporibus
        libero consequuntur, esse qui obcaecati ea iure recusandae dignissimos
        et, sed explicabo quas, eaque eum fugiat! At laudantium officiis commodi
        totam alias quis, pariatur illo! Nam tempore sit maxime, fugit obcaecati
        nemo amet autem explicabo itaque, harum, tenetur ab reiciendis deserunt
        odio. Cupiditate, ipsam quibusdam minus fuga mollitia deleniti? Harum
        porro saepe labore eius temporibus amet at corrupti, laborum assumenda
        veritatis expedita nesciunt ut nihil fugit consequuntur alias itaque
        adipisci reiciendis ipsam neque rem.
        <br />
        <br />
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem
        nesciunt laboriosam eveniet. Quasi corporis optio quibusdam placeat
        inventore nulla corrupti perspiciatis accusamus atque ipsa. Temporibus
        libero consequuntur, esse qui obcaecati ea iure recusandae dignissimos
        et, sed explicabo quas, eaque eum fugiat! At laudantium officiis commodi
        totam alias quis, pariatur illo! Nam tempore sit maxime, fugit obcaecati
        nemo amet autem explicabo itaque, harum, tenetur ab reiciendis deserunt
        odio. Cupiditate, ipsam quibusdam minus fuga mollitia deleniti? Harum
        porro saepe labore eius temporibus amet at corrupti, laborum assumenda
        veritatis expedita nesciunt ut nihil fugit consequuntur alias itaque
        adipisci reiciendis ipsam neque rem.
        <br />
        <br />
      </p>
    </div>
  );
};

export default App;

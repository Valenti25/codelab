'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export const FloatImage = () => {

    const multiplier: number = 15;

    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    ease: "linear",
                    duration: 0.3,
                    delay: 3,
                }}
                className="w-[calc(300%+90px)] aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50">
                <motion.div
                    initial={{
                        rotate: 60,
                    }}
                    animate={{
                        rotate: [0, -360],
                    }}
                    transition={{
                        ease: "linear",
                        duration: multiplier + 30,
                        delay: 0,
                        repeat: Infinity
                    }}
                    className="aspect-square bg-transparent rounded-full absolute top-0 left-0 right-0 bottom-0">
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            ease: "linear",
                            duration: multiplier + 30,
                            delay: 0,
                            repeat: Infinity
                        }}
                        className="absolute top-0 left-1/2"
                    >
                        <Image alt="" src="/images/avatar2.png" width={60} height={60} className="scale-50 sm:scale-100" unoptimized />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    ease: "linear",
                    duration: 0.3,
                    delay: 4,
                }}
                className="w-[calc(262.5%+100px)] aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        ease: "linear",
                        duration: multiplier + 25,
                        delay: 0,
                        repeat: Infinity
                    }}
                    className="aspect-square bg-transparent rounded-full absolute top-0 left-0 right-0 bottom-0">
                    <motion.div
                        animate={{
                            rotate: [0, -360],
                        }}
                        transition={{
                            ease: "linear",
                            duration: multiplier + 25,
                            delay: 0,
                            repeat: Infinity
                        }}
                        className="absolute bottom-1/2 left-0"
                    >
                        <Image alt="" src="/images/avatar1.png" width={100} height={100} className="scale-50 sm:scale-100" unoptimized />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    ease: "linear",
                    duration: 0.3,
                    delay: 3,
                }}
                className="w-[calc(225%+100px)] aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50">
                <motion.div
                    animate={{
                        rotate: [0, -360],
                    }}
                    transition={{
                        ease: "linear",
                        duration: multiplier + 20,
                        delay: 0,
                        repeat: Infinity
                    }}
                    className="aspect-square bg-transparent rounded-full absolute top-0 left-0 right-0 bottom-0">
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            ease: "linear",
                            duration: multiplier + 20,
                            delay: 0,
                            repeat: Infinity
                        }}
                        className="absolute top-0 left-1/2"
                    >
                        <Image alt="" src="/images/avatar4.png" width={100} height={100} className="scale-50 sm:scale-100" unoptimized />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    ease: "linear",
                    duration: 0.3,
                    delay: 4,
                }}
                className="w-[calc(187.5%+80px)] aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        ease: "linear",
                        duration: multiplier + 14,
                        delay: 0,
                        repeat: Infinity
                    }}
                    className="aspect-square bg-transparent rounded-full absolute top-0 left-0 right-0 bottom-0">
                    <motion.div
                        animate={{
                            rotate: [0, -360],
                        }}
                        transition={{
                            ease: "linear",
                            duration: multiplier + 14,
                            delay: 0,
                            repeat: Infinity
                        }}
                        className="absolute top-1/2 left-0"
                    >
                        <Image alt="" src="/images/avatar6.png" width={80} height={80} className="scale-50 sm:scale-100" unoptimized />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    ease: "linear",
                    duration: 0.3,
                    delay: 10,
                }}
                className="w-[calc(15%+60px)] aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        ease: "linear",
                        duration: multiplier + 11,
                        delay: 0,
                        repeat: Infinity
                    }}
                    className="aspect-square bg-transparent rounded-full absolute top-0 left-0 right-0 bottom-0">
                    <motion.div
                        animate={{
                            rotate: [0, -360],
                        }}
                        transition={{
                            ease: "linear",
                            duration: multiplier + 11,
                            delay: 0,
                            repeat: Infinity
                        }}
                        className="absolute top-1/2 left-0"
                    >
                        <Image alt="" src="/images/avatar3.png" width={60} height={60} className="scale-50 sm:scale-100" unoptimized />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    ease: "linear",
                    duration: 0.3,
                    delay: 3,
                }}
                className="w-[calc(112.5%+60px)] aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50">
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        ease: "linear",
                        duration: multiplier + 9,
                        delay: 0,
                        repeat: Infinity
                    }}
                    className="aspect-square bg-transparent rounded-full absolute top-0 left-0 right-0 bottom-0">
                    <motion.div
                        animate={{
                            rotate: [0, -360],
                        }}
                        transition={{
                            ease: "linear",
                            duration: multiplier + 9,
                            delay: 0,
                            repeat: Infinity
                        }}
                        className="absolute top-1/2 left-0"
                    >
                        <Image alt="" src="/images/avatar7.png" width={60} height={60} className="scale-50 sm:scale-100" unoptimized />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,

                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    ease: "linear",
                    duration: 0.3,
                    delay: 4,
                }}
                className="w-[calc(75%+60px)] aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50">
                <motion.div
                    animate={{
                        rotate: [0, -360],
                    }}
                    transition={{
                        ease: "linear",
                        duration: multiplier + 10,
                        delay: 0,
                        repeat: Infinity
                    }}
                    className="aspect-square bg-transparent rounded-full absolute top-0 left-0 right-0 bottom-0">
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            ease: "linear",
                            duration: multiplier + 10,
                            delay: 0,
                            repeat: Infinity
                        }}
                        className="absolute top-0 left-1/2"
                    >
                        <Image alt="" src="/images/avatar8.png" width={40} height={40} className="scale-50 sm:scale-100" unoptimized />
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}

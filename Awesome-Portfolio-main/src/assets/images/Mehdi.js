import * as React from "react";
import { motion } from "framer-motion";

const container = {
    hidden: {
        opacity: 1,
        scale: 1,
    },
    visible: {
        opacity: 0,
        scale: 0,
        transition: {
            delay: 2.4,
            duration: 0.3,
        },
    },
};

const svg = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 0.5,
        transition: {
            when: "afterChildren",
            duration: 0.1,
            delay: 3,
            staggerChildren: 0.2,
        },
    },
};

const path = (strokeDashoffset) => ({
    hidden: { strokeDashoffset },
    visible: {
        strokeDashoffset: 0,
    },
});

const pathProps = {
    variants: path(200),
    transition: {
        duration: 1,
    },
};

const rectProps = {
    variants: path(866),
    transition: {
        duration: 1.5,
    },
};

const Mehdi = (props) => {

    return (
        <>
            {/* <motion.div variants={container} initial="hidden" animate="visible">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 378.9 110.9"
                    variants={svg}
                    initial="hidden"
                    animate="visible"
                    {...props}
                >
                    <clipPath id="m">
                        <path d="M25.9 80.1V29.7h2.9l18.3 27.6 18.2-27.6h2.8v50.4h-2.7V34.2L47.7 60.8h-1.4L28.6 34.3V80h-2.7z" />
                    </clipPath>
                    <clipPath id="e">
                        <path d="M92.1 80.8c-2.4 0-4.5-.4-6.3-1.1-1.9-.7-3.5-1.8-4.8-3.3-1.3-1.5-2.3-3.4-3-5.8-.7-2.4-1.1-5.2-1.1-8.6 0-4 .4-7.3 1.3-10s2.1-4.8 3.6-6.4c1.5-1.6 3.3-2.7 5.3-3.5 2-.7 4.2-1.1 6.5-1.1 4.4 0 7.7 1.2 10 3.7 2.2 2.5 3.3 6.5 3.3 12.1v1.9c-.9 0-2.2.1-3.9.3-1.7.1-3.7.3-6 .4-2.4.2-5 .3-7.8.4-2.9.1-5.9.1-9.2.1 0 .3-.1.7-.1 1v1c0 4 .5 7.2 1.5 9.6 1 2.4 2.5 4.1 4.4 5.2 1.9 1.1 4.2 1.6 6.9 1.6 1.6 0 3.3-.1 4.9-.3 1.6-.2 3.1-.4 4.5-.7 1.4-.3 2.7-.6 3.8-.9l.5 2.3c-1.2.3-2.5.6-4 .9-1.5.3-3.1.5-4.8.7-1.8.4-3.6.5-5.5.5zM79.9 57.9c2.9 0 5.6 0 8.3-.1 2.6-.1 5.1-.2 7.2-.3 2.2-.1 4-.2 5.5-.3 1.5-.1 2.5-.2 3-.3 0-3.2-.4-5.8-1.2-7.8-.8-2-1.9-3.4-3.5-4.3-1.5-.9-3.5-1.4-6-1.4-1.4 0-2.9.2-4.4.6-1.5.4-2.9 1.2-4.1 2.2-1.2 1.1-2.3 2.5-3.2 4.4-.7 1.9-1.3 4.4-1.6 7.3z" />
                    </clipPath>
                    <clipPath id="h">
                        <path
                            id="prefix__e"
                            d="M114.8 80.1V26.8h2.8v18.3c1.5-.8 3-1.5 4.5-2.1 1.5-.6 3-1 4.6-1.4 1.6-.4 3.2-.5 5-.5 2.2 0 4 .4 5.5 1.1 1.5.7 2.7 1.9 3.5 3.4.8 1.5 1.2 3.4 1.2 5.7v28.8h-2.8V51.8c0-2.6-.7-4.6-2.1-6.1-1.4-1.5-3.5-2.2-6.4-2.2-1.5 0-3 .2-4.5.5s-2.9.8-4.3 1.4c-1.4.6-2.9 1.3-4.4 2.1v32.6h-2.6z"
                        />
                    </clipPath>
                    <clipPath id="g">
                        <path d="M176.4 80.1l-.5-3.7c-2.3 1.5-4.5 2.7-6.5 3.4-2 .7-4.1 1.1-6.2 1.1-4 0-7.2-1.6-9.4-4.9-2.3-3.2-3.4-7.9-3.4-14 0-4.8.6-8.8 1.8-11.9 1.2-3.1 3-5.4 5.4-6.8 2.4-1.4 5.6-2.2 9.4-2.2 1.3 0 2.8.1 4.3.2s3.1.4 4.7.8V26.8h2.8v53.3h-2.4zm-.5-6.2V44.4c-1.8-.4-3.4-.7-4.8-.9-1.4-.2-2.7-.3-3.9-.3-3.2 0-5.9.6-7.9 1.9-2.1 1.2-3.6 3.2-4.6 5.9-1 2.7-1.5 6.3-1.5 10.7 0 3.6.4 6.6 1.3 9 .9 2.5 2.1 4.3 3.7 5.6 1.6 1.3 3.5 1.9 5.7 1.9 1.3 0 2.6-.1 3.9-.4 1.2-.3 2.5-.8 3.9-1.4 1.2-.6 2.6-1.4 4.2-2.5z" />
                    </clipPath>
                    <clipPath id="j">
                        <path d="M190.5 32c-.8 0-1.3-.1-1.5-.4-.2-.2-.4-.7-.4-1.5s.1-1.3.3-1.5c.2-.2.7-.3 1.5-.3.7 0 1.2.1 1.4.3.2.2.3.7.3 1.5s-.1 1.3-.3 1.5c-.1.3-.6.4-1.3.4zM189 80.1V41.8h2.8v38.3H189z" />
                    </clipPath>
                    <clipPath id="n">
                        <path d="M264.6 80.1V29.7h2.9V57h30.9V29.7h2.8v50.4h-2.8V59.6h-30.9V80h-2.9z" />
                    </clipPath>
                    <clipPath id="l">
                        <path d="M222.2 80.1V29.7c2.4-.2 4.6-.3 6.4-.5 1.8-.1 3.4-.2 4.9-.3 1.4 0 2.9-.1 4.3-.1 3.8 0 6.9.4 9.3 1.3 2.4.9 4.1 2.2 5.2 4 1.1 1.8 1.6 4.2 1.6 7.2s-.7 5.6-2.2 7.7c-1.4 2.2-3.4 3.7-5.8 4.4v.1c3.3.6 5.8 2 7.6 4.2 1.8 2.2 2.7 5.1 2.7 8.6 0 2.5-.3 4.6-1 6.4-.7 1.8-1.7 3.3-3.1 4.4-1.4 1.2-3.3 2-5.6 2.6s-5.1.8-8.3.8h-3c-1 0-1.9 0-2.8-.1-.9 0-1.9-.1-2.9-.1s-2.1-.1-3.3-.2c-1.2.2-2.5.1-4 0zm2.9-27h15.6c2.1 0 4-.5 5.5-1.4 1.6-1 2.8-2.3 3.6-4 .8-1.7 1.3-3.6 1.3-5.8 0-2.4-.5-4.5-1.4-6-.9-1.6-2.4-2.7-4.5-3.4-2.1-.7-4.8-1.1-8.1-1.1h-4.3c-.6 0-1.3.1-1.9.1-.7 0-1.5.1-2.4.1-1 0-2.1.1-3.4.2v21.3zm0 24.7c1.8.1 3.3.2 4.5.3 1.2.1 2.3.1 3.3.2 1 0 1.8.1 2.6.1h2.4c3.8 0 6.8-.4 9.1-1.2 2.3-.8 4-2 5-3.8 1-1.8 1.5-4 1.5-6.9 0-3.5-1.1-6.2-3.2-8.1-2.2-1.9-5.2-2.9-9.1-2.9h-16.1v22.3z" />
                    </clipPath>
                    <clipPath id="p">
                        <path d="M308 80.1l17.9-51h2.7l18 51h-3.1l-5.2-15h-22.1l-5.3 15H308zm8.9-17.6h20.7L327.2 33l-10.3 29.5z" />
                    </clipPath>
                    <g fill="none" stroke="#fff" strokeWidth={7} strokeMiterlimit={10} strokeDasharray={200}>
                        <motion.path
                            {...pathProps}
                            clipPath="url(#m)"
                            d="M25.9 82.3V31.9c7 9.9 13.9 19.8 20.9 29.8 6.2-9.9 12.3-19.8 18.5-29.8.5 16.5.9 32.9 1.4 49.4"
                        />
                        <motion.path
                            {...pathProps}
                            clipPath="url(#e)"
                            d="M105.7 76.5c-6.4 5.1-14.3 6.4-19.9 3.2-6-3.5-7-10.8-7.6-15.3-.6-4.4-1.7-12 3.5-17.6 3.5-3.7 10.6-7.5 17-4.1 4.9 2.6 7.6 8.5 6.7 14.6-8.5.2-16.9.3-25.4.5"
                        />
                        <motion.path
                            {...pathProps}
                            clipPath="url(#h)"
                            d="M115.6 81.5v-3.8c-.1-11.2-.1-22.4-.2-33.7v-.3c.2-6.1.3-12.2.5-18.2 1 7.2 2 14.5 2.9 21.7.3-1.1-2 1.6-.5.2 3.6-3.5 12.9-7.9 16.6-5.5 2.5 1.7 5 5.3 5 5.3v33.4"
                        />
                        <motion.path
                            {...pathProps}
                            clipPath="url(#g)"
                            d="M176.8 74.9c.3 6.8.5 8.2.6 8.2.4 0 .7-21.2.4-41-.1-7.3-.3-13.4-.4-17.5-.9 5.9-1.8 11.7-2.6 17.6-.9-.4-10-4-17.2 1-3.4 2.4-4.9 5.7-5.4 6.8-2 4.4-1.5 8.3-.8 13.5.7 5.6 1.1 9 3.8 12.3.7.9 3.5 4.2 8.1 5 7.6 1.3 13.3-5.6 13.5-5.9z"
                        />
                        <motion.path
                            {...pathProps}
                            clipPath="url(#j)"
                            d="M190.5 79.9l-.3-38c-1.1-3-2.1-6-3.2-9.1 2.5-2 5.1-4 7.6-6"
                        />
                        <motion.path
                            {...pathProps}
                            clipPath="url(#l)"
                            d="M222.2 29.7c0 .3.7 23.6.7 23.9v.3c.2 8.7.5 17.3.7 26 1.1.3 2.7.6 4.7.9 4.2.5 14.7 1.8 22.2-4.4 1.5-1.3 6.1-5 5.8-9.9-.2-3.3-2.5-6-4.3-8-2.2-2.4-4.5-3.9-6-4.8-16.8-.8-20.9-.9-20.9-.7 0 .3 17.7 4.3 24.3-3.6 1.8-2.2 3.2-5.7 2.9-9.4-.1-1.1-.3-5-3.2-7.6-2.6-2.3-5.9-2.4-9.7-2.3-6 0-12.8.2-20.2.6"
                        />
                        <motion.path
                            {...pathProps}
                            clipPath="url(#n)"
                            d="M267.2 28.1c-2.3 35.6-2.9 53.5-1.8 53.6.8.1 2.3-8.3 4.7-25.2 7.8 1.1 16.4 1.8 25.8 1.5 1.9-.1 3.7-.2 5.6-.3l-1.5 24 .6-53.6"
                        />
                        <motion.path
                            {...pathProps}
                            clipPath="url(#p)"
                            d="M307.6 81.4c2.3-6.5 4.6-13.1 6.8-19.6 0 0 0 0 0 0s0 0 0 0 4.5-12.8 11.4-32.7l20.7 51c-3.4-5.5-6.8-11-10.3-16.5-7.3-.6-14.6-1.2-21.8-1.7"
                        />
                    </g>
                    <motion.path
                        {...rectProps}
                        strokeWidth={2}
                        fill="none"
                        stroke="#FFF"
                        strokeMiterlimit={10}
                        d="M12.7 14.8h349.7v83.3H12.7z"
                        strokeDasharray={866}
                        strokeDashoffset={866}
                    />
                </motion.svg>
            </motion.div> */}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 600 600.000000"
            {...props}
        >
            

            <g transform="translate(0.000000,228.000000) scale(0.058000,-0.0580000)"
            fill="#000000" stroke="none">
            <path d="M580 1445 c0 -414 -3 -441 -61 -470 -54 -29 -126 -18 -175 27 -21 19
            -21 19 -90 -58 l-69 -76 35 -30 c84 -69 197 -98 313 -79 128 21 216 88 256
            195 20 54 21 74 21 461 l0 405 -115 0 -115 0 0 -375z"/>
            <path d="M5050 1295 l0 -525 120 0 120 0 0 210 0 210 215 0 215 0 0 -210 0
            -210 120 0 120 0 0 525 0 525 -120 0 -120 0 0 -210 0 -210 -215 0 -215 0 0
            210 0 210 -120 0 -120 0 0 -525z"/>
            <path d="M1228 1530 c-26 -5 -71 -19 -100 -33 -56 -26 -148 -101 -148 -120 1
            -7 33 -31 73 -53 l72 -42 42 38 c22 21 59 44 82 51 80 24 161 -25 161 -97 0
            -19 -1 -34 -3 -34 -59 0 -271 -35 -308 -51 -144 -62 -194 -244 -97 -355 50
            -57 101 -78 188 -77 84 0 130 16 185 64 l35 31 0 -41 0 -41 111 0 110 0 -3
            278 c-3 265 -4 279 -26 327 -42 91 -100 134 -207 154 -65 12 -98 12 -167 1z
            m180 -481 c-4 -42 -12 -57 -41 -87 -30 -30 -44 -36 -89 -40 -44 -3 -58 0 -81
            18 -24 19 -28 28 -25 63 4 54 35 76 124 86 126 15 117 18 112 -40z"/>
            <path d="M2197 1529 c-50 -12 -89 -33 -132 -70 l-35 -31 0 46 0 46 -115 0
            -115 0 0 -375 0 -375 115 0 115 0 0 228 c0 125 5 243 10 263 5 19 24 48 41 65
            25 24 39 29 79 29 60 0 96 -30 110 -91 5 -21 10 -141 10 -266 l0 -228 115 0
            115 0 0 233 c0 204 3 237 19 272 28 60 55 80 111 80 58 0 94 -28 110 -84 5
            -20 10 -141 10 -268 l0 -233 116 0 116 0 -4 283 c-5 319 -10 346 -78 416 -91
            93 -272 89 -381 -8 l-43 -38 -40 43 c-61 63 -152 86 -249 63z"/>
            <path d="M3410 1529 c-69 -13 -144 -55 -190 -105 -137 -149 -143 -416 -12
            -556 139 -149 422 -154 570 -10 23 23 42 46 42 51 0 5 -36 30 -80 56 l-81 46
            -25 -30 c-68 -81 -210 -75 -262 11 -11 18 -22 45 -26 61 l-6 27 246 0 247 0
            -5 103 c-11 207 -93 315 -262 346 -68 12 -92 12 -156 0z m157 -174 c25 -17 35
            -37 48 -92 l7 -33 -142 0 -141 0 7 23 c11 37 31 71 52 90 42 39 120 44 169 12z"/>
            <path d="M4173 1530 c-118 -25 -196 -107 -210 -219 -16 -134 70 -222 250 -256
            43 -8 87 -20 97 -25 29 -15 43 -46 31 -68 -18 -34 -40 -44 -100 -43 -65 0
            -113 16 -164 55 -19 15 -36 26 -39 26 -3 0 -29 -30 -57 -67 l-52 -67 33 -28
            c18 -15 58 -37 88 -49 191 -73 391 -31 467 99 22 38 27 58 28 116 0 137 -65
            201 -241 237 -113 23 -144 39 -144 74 0 30 21 52 60 60 40 9 85 -2 143 -33 26
            -14 48 -23 50 -21 2 2 27 32 55 66 l53 62 -39 26 c-75 49 -217 75 -309 55z"/>
            <path d="M6378 1530 c-26 -5 -71 -19 -100 -33 -56 -26 -148 -101 -148 -120 1
            -7 33 -31 73 -53 l72 -42 42 38 c22 21 59 44 82 51 80 24 161 -25 161 -97 0
            -19 -1 -34 -3 -34 -59 0 -271 -35 -308 -51 -144 -62 -194 -244 -97 -355 50
            -57 101 -78 188 -77 84 0 130 16 185 64 l35 31 0 -41 0 -41 111 0 110 0 -3
            278 c-3 265 -4 279 -26 327 -42 91 -100 134 -207 154 -65 12 -98 12 -167 1z
            m180 -481 c-4 -42 -12 -57 -41 -87 -30 -30 -44 -36 -89 -40 -44 -3 -58 0 -81
            18 -24 19 -28 28 -25 63 4 54 35 76 124 86 126 15 117 18 112 -40z"/>
            <path d="M7320 1529 c-51 -16 -95 -52 -119 -101 l-21 -43 0 68 0 67 -115 0
            -115 0 0 -375 0 -375 115 0 115 0 0 213 c0 201 1 215 24 262 35 77 97 106 183
            87 l41 -9 25 98 c20 79 22 99 11 103 -31 12 -111 14 -144 5z"/>
            <path d="M7960 1525 c-60 -17 -90 -34 -132 -73 l-28 -26 0 47 0 47 -115 0
            -115 0 0 -550 0 -550 115 0 115 0 0 207 c0 197 1 205 18 190 70 -63 231 -82
            327 -39 106 48 184 160 207 294 13 84 4 202 -23 274 -54 146 -212 222 -369
            179z m76 -184 c57 -26 84 -83 84 -175 0 -90 -16 -141 -60 -187 -67 -71 -188
            -58 -239 25 -21 33 -22 46 -19 144 3 94 6 111 27 141 27 37 91 71 136 71 17 0
            48 -9 71 -19z"/>
            <path d="M8750 1529 c-69 -13 -144 -55 -190 -105 -137 -149 -143 -416 -12
            -556 139 -149 422 -154 570 -10 23 23 42 46 42 51 0 5 -36 30 -80 56 l-81 46
            -25 -30 c-68 -81 -210 -75 -262 11 -11 18 -22 45 -26 61 l-6 27 246 0 247 0
            -5 103 c-11 207 -93 315 -262 346 -68 12 -92 12 -156 0z m157 -174 c25 -17 35
            -37 48 -92 l7 -33 -142 0 -141 0 7 23 c11 37 31 71 52 90 42 39 120 44 169 12z"/>
            <path d="M9690 1529 c-51 -16 -95 -52 -119 -101 l-21 -43 0 68 0 67 -115 0
            -115 0 0 -375 0 -375 115 0 115 0 0 213 c0 201 1 215 24 262 35 77 97 106 183
            87 l41 -9 25 98 c20 79 22 99 11 103 -31 12 -111 14 -144 5z"/>
            <path d="M9983 1011 c-55 -26 -77 -67 -70 -135 4 -41 10 -55 41 -83 31 -29 43
            -33 90 -33 62 0 100 24 122 76 19 46 17 83 -6 121 -39 65 -108 86 -177 54z"/>
            </g>

        </svg>
        </>
    );
};

export default Mehdi;

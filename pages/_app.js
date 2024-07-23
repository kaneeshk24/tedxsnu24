import "../styles/root/globals.scss";
import App from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import SwiperCore, { Autoplay } from 'swiper';
import { ConfProvider } from "../context/ConfContext";
import Footer from "../components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { TicketProvider } from "../context/TicketContext";

function MyApp({ Component, pageProps, user }) {
    const getLayout = Component.getLayout || ((page) => page);
    SwiperCore.use([Autoplay])
    const router = useRouter();
    return (
        <>
            <ConfProvider>
                <TicketProvider>
                    <Head>
                        <title>TEDx ShivNadarIOE</title>
                        <meta
                            name="description"
                            content="TEDx Shiv Nadar Insitute of Eminence Annual Conference"
                        />
                    </Head>
                    <Navbar />
                    {
                        getLayout
                            (
                                <AnimatePresence>
                                    <motion.div
                                        key={router.route}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <Component {...pageProps} />
                                    </motion.div>
                                </AnimatePresence>
                            )
                    }
                    {/* <Spons /> */}
                    <section className="FooterSection">
                        <Footer />
                    </section>
                </TicketProvider>
            </ConfProvider>
        </>
    );
}

export default MyApp;
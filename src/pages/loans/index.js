import Head from 'next/head';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import styles from '@/styles/Home.module.css';

export default function Loans () {
    return (
        <>
            <Head>
                <title>NIC ASIA LOANS</title>
                <meta name="description" content="nic asia loans" />
            </Head>
            <AppBar position="static" color="white" sx={{boxShadow:'none'}}>
                <Container maxWidth="xl">
                    <Box component="div" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Box component="a">
                            <Image
                                className={styles.logo}
                                src="/logo.png"
                                alt="NIC ASIA Bank Logo"
                                width={180}
                                height={37}
                                priority
                            />
                        </Box>
                    </Box>
                </Container>
            </AppBar>
        </>
    )
}
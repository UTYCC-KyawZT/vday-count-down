"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Container, Typography, Slide } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';

const calculateTimeLeft = () => {
    const date = new Date();
    let year = date.getFullYear();
    const targetDate = year + '-02-14';
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    }

    return timeLeft as Record<string, number>;
};
function Home() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);
    return (
        <Container fixed>
            <Slide direction='left' in={true} timeout={1000}>
                <Typography className='animate-pulse' variant='h6' sx={{ p: 2 }} >
                    Valentine day ကရောက်လာတော့မယ်နော်
                    <br />
                    ဘယ်မှာလဲ ရည်းစားက 🥹
                </Typography>
            </Slide>

            <Player
                autoplay
                loop
                src="/lottiefiles/feb14.json"
                style={{ height: '300px', width: '300px' }}
            />

            <Slide direction='right' in={true} timeout={2000}>
                <div className='grid lg:grid-cols-3 grid-cols-1 m-5'>
                    <div></div>
                    <div className='border-2 border-gray-400 rounded-lg p-5'>

                        <div className="grid grid-cols-4 text-center text-2xl font-bold">
                            <div>{timeLeft.days}</div>
                            <div>{timeLeft.hours}</div>
                            <div>{timeLeft.minutes}</div>
                            <div>{timeLeft.seconds}</div>
                        </div>
                        <div className="grid grid-cols-4 text-center text-xl">
                            <div>Days</div><div>Hours</div><div>Minutes</div><div>Seconds</div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </Slide>

            <Player
                autoplay
                loop
                src="/lottiefiles/happy-valentine-day.json"
                style={{ height: '300px', width: '300px' }}
            />

            <div className='mt-5 flex mx-auto justify-center'>
                <Typography variant='body2'>
                    Created by <a className='text-orange-500 font-bold' href="https://kyawkingston.com" target='_blank'>Kingston</a>
                </Typography>
            </div>
            <div className='flex mx-auto justify-center'>
                <Player
                    autoplay
                    loop
                    src="/lottiefiles/git.json"
                    style={{ height: '50px', width: '50px' }}
                />
            </div>
            <br />
        </Container>
    )
}

export default Home
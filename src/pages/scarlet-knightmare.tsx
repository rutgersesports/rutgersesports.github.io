import React from 'react'
import styles from '../styles/base.module.css'
import NavigationBar from '../components/navigation-bar'
import Footer from '../components/footer'
import ImageHeader from '@/components/image-header'
import eventsImage from '../images/scarletknightmare-2022-1.jpg'
import bodyImage1 from '../images/scarletknightmare-2022-3.jpg'
import bodyImage2 from '../images/artist-alley-2023-4.jpg'
import BodyText from '@/components/body-text'
import Image from 'next/image'
import Link from 'next/link'
import { ScheduleEvent } from '@/components/schedule'

const events: Array<ScheduleEvent> = [
  {
    name: 'Bandai Namco Card Game',
  },
  {
    name: 'Rhythm Games Club',
  },
  {
    name: 'Smash Melee',
  },
  {
    name: 'Smash Ultimate',
  },
  {
    name: 'Fighting Games Club',
  },
  {
    name: 'Artists Alley',
  },
  {
    name: 'Chess Club',
    startTime: new Date(2023, 10, 28, 12, 0),
    endTime: new Date(2023, 10, 28, 16, 0),
  },
  {
    name: 'RU Unplugged',
    startTime: new Date(2023, 10, 28, 16, 0),
    endTime: new Date(2023, 10, 28, 22, 0),
  },
  {
    name: 'Trivia',
    startTime: new Date(2023, 10, 28, 15, 0),
    endTime: new Date(2023, 10, 28, 17, 0),
  },
  {
    name: 'Costume Contest',
    startTime: new Date(2023, 10, 28, 17, 0),
    endTime: new Date(2023, 10, 28, 20, 0),
  },
  {
    name: 'Genshin Contest',
    startTime: new Date(2023, 10, 28, 20, 0),
    endTime: new Date(2023, 10, 28, 23, 0),
  },
  {
    name: 'Instant Raffle Giveaway',
    isHourly: true,
  },
]

export default function Events() {
  return (
    <div className={styles['base']}>
      <NavigationBar />
      <ImageHeader
        title="Scarlet Knightmare 2023"
        subtitle="Halloween-themed event hosted by Rutgers Esports"
        backgroundImage={eventsImage}
      />
      <BodyText>
        <div style={{ display: 'flex', marginTop: '50px', marginBottom: '50px', justifyContent: 'space-between' }}>
          <Image src={bodyImage1} alt="Woman playing Valorant." width={500} style={{ marginRight: '50px' }} />
          <div>
            <h1>What is Scarlet Knightmare?</h1>
            <p>
              An event hosted by Rutgers Esports run by students. We typically hold friendly competitions such as a
              costume contest, rock paper scissor competition, partner with other gaming-related clubs, and much more.
              During the event, we host giveaways, free-to-use gaming PCs, and allow artists to showcase their art at
              Artist Alley!
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '50px', marginBottom: '50px', justifyContent: 'space-between' }}>
          <div>
            <h1>What is Artist Alley?</h1>
            <p>
              Artist Alley is an event where artists can advertise and sell their work to the Rutgers community. You can
              sign up to become a vendor <Link href={'apply'}>here</Link>. Different types of art ranging from keychains
              to posters from popular franchises have been sold such as Genshin Impact, League of Legends, Valorant, and
              more.
            </p>
          </div>
          <Image
            src={bodyImage2}
            alt="Two women and one man sitting next to each other surrounded by their work."
            width={500}
            style={{ marginLeft: '50px' }}
          />
        </div>
      </BodyText>
      <Footer />
    </div>
  )
}

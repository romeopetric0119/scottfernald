import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'

import { ABOUT_PAGE } from '@/constans/pages'
import Image from 'next/legacy/image'
import IMG_ME from '@/public/media/me.jpg'

const Icon = ({ id, open }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
}

const AboutPage = () => {
  const [open, setOpen] = React.useState(0)

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value)

  return (
    <>
      <Head>
        <title>{ABOUT_PAGE.title}</title>
        <meta name="description" content={ABOUT_PAGE.description} />
        <meta name="og:title" content={ABOUT_PAGE.title} />
        <meta name="og:description" content={ABOUT_PAGE.description} />
        <meta name="og:url" content={process.env.NEXT_PUBLIC_HOST + ABOUT_PAGE.path} />
        <meta name="twitter:title" content={ABOUT_PAGE.title} />
        <meta name="twitter:description" content={ABOUT_PAGE.description} />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_HOST + ABOUT_PAGE.path} />
      </Head>
      <h1 className="page-title" data-text={ABOUT_PAGE.h1}>
        {ABOUT_PAGE.h1}
      </h1>
      <div className="md:flex">
        <div className="mb-5 md:w-56">
          <Image src={IMG_ME} alt={ABOUT_PAGE.body.image.alt} className="block w-full" placeholder="blur" />
        </div>
        <div className="md:flex-1 md:pl-6">
          <h2 className="mb-2 text-2xl font-bold">I’m Arnold Choy</h2>
          <hr className="mb-4 w-20 border-t-[4px]" />
          <div className="mb-16">
            <p className="mb-1 text-xl">I'm a Senior Full Stack Developer & Software Engineer.</p>
          </div>
          <h2 className="mb-2 text-2xl font-bold">My approach to building a beautiful & scalable project on a success story</h2>
          <hr className="mb-4 w-20 border-t-[4px]" />
          <div className="mb-16">
            <p className="mb-1 text-xl">
              Senior full stack developer with 9 years of experience specializing in JavaScript, TypeScript, React, Angular, Vue, Node,
              MERNstack, GraphQL development, and shipping features and writing quality code.
              <br /> I have a keen eye for UX/UI as well as a strong math and computer science background.
              <br />
              An avid learner, a great communicator, and an excellent addition to teams of all sizes.
              <br />
              Honest and reliable with a positive attitude with my skills and experience help me to be a reliable developer and keep
              long-term relationship with clients.
            </p>
          </div>
          <h2 className="mb-2 text-2xl font-bold">What can I do</h2>
          <hr className="mb-4 w-20 border-t-[4px]" />
          <div className="mb-16">
            <p className="mb-1 text-xl text-gray-500">Always seeking beautiful, relieble, scalable products</p>
            <Accordion className="" open={open === 1} icon={<Icon id={1} open={open} />} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(1)} className="pb-3 pt-3 text-xl">
                Single-Page Applications
              </AccordionHeader>
              <AccordionBody className="p-2 text-xl text-gray-500">Dashboard, CRM, POS, Landing page</AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(2)} className="pb-3 pt-3 text-xl">
                Headless & eCommerce
              </AccordionHeader>
              <AccordionBody className="p-2 text-xl text-gray-500">
                Headless & JAMstack projects using Next.js, Gatsby.js, and Nuxt.js, Shopify to Headless migration
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(3)} className="pb-3 pt-3 text-xl">
                Back end Development
              </AccordionHeader>
              <AccordionBody className="p-2 text-xl text-gray-500">Database design, REST/GraphQL APIs, Payment integration</AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(4)} className="pb-3 pt-3 text-xl">
                DevOps Engineering
              </AccordionHeader>
              <AccordionBody className="p-2 text-xl text-gray-500">
                Web hosting, Domain management, AWS/GCP/Azure AD, Routing, Dockerize
              </AccordionBody>
            </Accordion>
          </div>
          <h2 className="mb-2 text-2xl font-bold">Skills I have collected over the years and days</h2>
          <hr className="mb-4 w-20 border-t-[4px]" />
          <div className="mb-6">
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(5)} className="pb-3 pt-3 text-xl">
                Client-side
              </AccordionHeader>
              <AccordionBody className="p-2 text-xl text-gray-500">
                <ul className="block truncate">
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    React
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Vue.js
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Next.js
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Material UI
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Tailwind
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Ant Design
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} icon={<Icon id={6} open={open} />} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(6)} className="pb-3 pt-3 text-xl">
                Server-side
              </AccordionHeader>
              <AccordionBody className="p-2 text-xl text-gray-500">
                <ul className="mb-2 block truncate">
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Node.js
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Express.js
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Ruby
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Apollo/GraphQL
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Restful API
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 7} icon={<Icon id={7} open={open} />} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(7)} className="pb-3 pt-3 text-xl">
                Databases
              </AccordionHeader>
              <AccordionBody className="p-2 text-xl text-gray-500">
                <ul className="mb-2 block truncate">
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    MySQL
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    PostgreSQL
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    ElasticSearch
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    MongoDB
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Redis
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    DynamoDB
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 8} icon={<Icon id={8} open={open} />} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(8)} className="pb-3 pt-3 text-xl">
                DevOps
              </AccordionHeader>
              <AccordionBody className="p-2 text-xl text-gray-500">
                <ul className="mb-2 block truncate">
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    CI/CD
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Docker
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Kubernetes
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Jenkins
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Azure
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    AWS
                  </li>
                  <li
                    key="react"
                    className="mr-2 inline-block border bg-gray-100/50 p-1 text-xl leading-none dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    Google Cloud Platform
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
          </div>
          {ABOUT_PAGE.body.resume_url && (
            <Link
              target="_blank"
              href={ABOUT_PAGE.body.resume_url}
              className="mr-3 inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
            >
              Resume
            </Link>
          )}
          <Link
            href="/contact"
            rel="nofollow"
            className="inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  )
}

export default AboutPage
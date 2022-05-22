import React from 'react';
import { Component, useState } from 'react';
import {fetchWithCache} from '../server/cache'

import i18n from '../locale/locale.js';
import {withTranslation, useTranslation} from 'react-i18next';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

/* import '../public/static/styles/style.css'*/ 

function Bloco({title, description, date, imagesrc, link}) {
	const { t, i18n } = useTranslation();

  return (
      <div className='rounded shadow-md bg-white mx-4' style={{height: "100%", display: "flex", flexFlow: "column nowrap"}}>
        <div className = 'border-gray-700 border-4 rounded-t h-64 '>
          <img  src = {imagesrc}
                style = {
                  {
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }
                }
          />
        </div>
        <div className='flex flex-col my-2 mx-4' style={{padding: "5px", flexGrow: 1}}>
          {
            link ? <a className='text-gray-bold text-lg' style={{fontWeight: "bold", cursor: "pointer"}} href={link} target="_blank">{title}</a> :
            <span className='text-gray-bold text-lg' style={{fontWeight: "bold"}}>{title}</span>
          }
          <span className='text-gray-600 text-base' style={{fontSize: "15px"}}>{date}</span>
          <span className='text-gray-800 text-base' style={{fontWeight: "400", flexGrow: 1}}>{description}</span>

	        <button id="card-button" className="btn btn-primary flex-end" type="button" style={{marginTop:"16px"}}><a href={link} target="_blank" style={{display:"block"}}>{t('activities:seemore')}</a></button>
        </div>
      </div>
  );
}

function App({data}) {
  var cards = data['data']

return (
<div className='container mx-auto px-4 py-8'>
        <ul className='flex flex-row flex-wrap my-4'>
          {
            cards.map((info, index) => (
              <li key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col mb-4'>
              <Bloco title={info.attributes.title} description={info.attributes.description} date={info.attributes.date} imagesrc={info.attributes.imagesrc} link={info.attributes.link}/>
            </li>
            ))
            }
        </ul>
      </div>
      )
}


export const getServerSideProps = async (ctx) => {
  var res;

  //This code does not work because i18n.language ALWAYS returns "pt-BR"
  if (ctx.locale === "en"){
    res = await fetchWithCache("http://localhost:1337/api/atividades?locale=en");
  }
  else {
    res = await fetchWithCache("http://localhost:1337/api/atividades?locale=pt-BR");
  }
  
  return {
    props : {data : res}
  }
} 

function activities ({data}){
  const { t, i18n } = useTranslation();
return (
  <React.Fragment>
    <Head
      title='Ganesh - Activities'
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
    <main>
      <div className='flex justify-center items-center bg-fixed bg-cover bg-center container-top shadow-md'>
        <h1 className='text-4xl text-center text-white'>{t('activities:title')}</h1>
      </div>

      <App data={data} />

      <style jsx>{`
        .container-top {
          background-image: url(/static/images/bgfull.jpg);
          height: 250px;
        }
        .activity_003 {
          background-image: url(/static/images/thumb_blueborne_0.jpg);
          background-size: cover;
          background-position: center;
        }
        .activity_002 {
          background-image: url(/static/images/thumb_unesp_0.jpg);
          background-size: cover;
          background-position: center;
        }
        .activity_001 {
          background-image: url(/static/images/thumb_senc2017_0.jpg);
          background-size: cover;
          background-position: center;
        }
        .img {
          width: "64px";
          vertical-align:middle;
        }
      `}</style>
    </main>
    <Footer />
  </React.Fragment>
);
}

export default activities;

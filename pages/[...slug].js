import React, {useContext, useState, useEffect} from 'react';
import Drupal from './../app/service/Drupal'
import { GlobalContext } from './../app/service/GlobalState';
import Mapper from "./../config/Mapper"
import Head from 'next/head'
import Hooks from './../config/hooks'



export default function Base({...props}) { 
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const componentName = props.pathComponent;
  const ComponentCurrent = Mapper[componentName];  
  return (
      <div role="main">
        <Head>
          <title>{props.metatags.title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <ComponentCurrent data={props.data}/>
      </div>
  )
}

export async function getServerSideProps(context) {
  const params = context.params;
  let baseProps = await Drupal.getData(params.slug); 
  Hooks.basegetserverprops(baseProps);
  return {props: baseProps}
}


import React, {useContext, useState, useEffect} from 'react';
import Drupal from '../app/service/Drupal'
import { GlobalContext } from '../app/service/GlobalState';
import Mapper from "../config/Mapper"
import Head from 'next/head'
import Hooks from '../config/hooks'



export default function Base({...props}) { 
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const componentName = props.pathComponent;
  const ComponentCurrent = Mapper[componentName];  
  return (
      <div role="main">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <ComponentCurrent data={props.data}/>
      </div>
  )
}

export async function getServerSideProps(context) {
  const params = context.params;
  let baseProps = await Drupal.getData(params.slug); 

  console.time('getNodeByAlias1');
  let entity = await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias1');

  console.time('getNodeByAlias2');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias2');

  console.time('getNodeByAlias3');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias3');

  console.time('getNodeByAlias4');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias4');

  console.time('getNodeByAlias5');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias5');

  console.time('getNodeByAlias6');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias6');

  console.time('getNodeByAlias6');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias6');

  console.time('getNodeByAlias7');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias7');

  console.time('getNodeByAlias8');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias8');

  console.time('getNodeByAlias8');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias8');
  console.time('getNodeByAlias8');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias8');
  console.time('getNodeByAlias8');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias8');
  console.time('getNodeByAlias8');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias8');
  console.time('getNodeByAlias8');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias8');
  console.time('getNodeByAlias8');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias8');
  console.time('getNodeByAlias8');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias8');
  console.time('getNodeByAlias8');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias8');
  console.time('getNodeByAlias8');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias8');
  console.time('getNodeByAlias8');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias8');
  console.time('getNodeByAlias8');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias8');
  console.time('getNodeByAlias8');
  await Drupal.getEntity("node", 1); 
  console.timeEnd('getNodeByAlias8');
  /*var string = '{"data":{"nid":[1],"langcode":["en"],"type":[{"target_id":"article","target_type":"node_type","target_uuid":"371d2786-46dd-4e94-8414-f0ed16af4153"}],"title":["dsadadsa"],"body":[],"comment":[{"status":2,"cid":0,"last_comment_timestamp":1687284315,"last_comment_name":null,"last_comment_uid":1,"comment_count":0}],"field_image":[],"field_reference":[{"id":[2],"langcode":["en"],"type":[{"target_id":"test_paragraph","target_type":"paragraphs_type","target_uuid":"b57d4fe5-83e8-421e-89ea-819379e62fd3"}],"field_test":["test"],"field_test2":["testsss"]}],"field_tags":[],"alias":"\/node\/1"}}';
  let baseProps = {"data": JSON.parse(string)};  
  baseProps["pathComponent"] = 'NodetypeArticle';
  baseProps["metatags"] = [];*/
  
  Hooks.basegetserverprops(baseProps);
  return {props: baseProps}
}


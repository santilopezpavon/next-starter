import Head from 'next/head'
import React, {useContext} from 'react';
import Drupal from './../../app/service/Drupal'

export default function NodetypeArticle({data}) {
  const nodeInfo = Drupal.getNodeInfo(data);
  return (
    <>
        <p>{nodeInfo.title} </p>  
        <div>{nodeInfo.body}</div>
    </>
  )
}
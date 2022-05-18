import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';


const LinkList = () => {

const FEED_QUERY = gql`
{
  launchesPast(limit: 10) {
    launch_date_local
    mission_name
  }
  ships {
    name
    home_port
    image
  }
}
`

  const { data } = useQuery(FEED_QUERY);

  return (
    <div className='bg-black'>
      <h1 className='text-center text-4xl text-white bg-black p-10'>
        SPACEX: Lista de barcos
      </h1>
      {data && (
        <>
          {data.ships.map((ships) => (
            <Link name={ships.name} home={ships.home_port} image={ships.image}/>
          ))}
        </>
      )}
    </div>

  );
};

export default LinkList;
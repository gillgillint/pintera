import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../../../client';
import { feedQuery, searchQuery } from '../../../utils/data';
import MasonryLayout from '../../common/MasonryLayout';
import Spinner from '../../common/Spinner';

function Feed() {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      const query = searchQuery(categoryId);

      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading)
    return <Spinner message='We are adding new ideas to our feed!' />;

  if (!pins?.length) return <h4>No pins available</h4>;

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
}

export default Feed;

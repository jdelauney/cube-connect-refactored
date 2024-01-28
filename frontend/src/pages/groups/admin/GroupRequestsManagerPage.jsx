import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { getGroupRequests, updateGroupRequest } from '../../../lib/api/api.js';
import GroupCardRequest from '../components/GroupCardRequest.jsx';

const GroupRequestsManagerPage = () => {
  const [requests, setRequests] = useState([]);
  const { data, loading, error } = useSWR(() => getGroupRequests());

  const requestHandler = (requestID, accepted) => {
    const response = updateGroupRequest(requestID, accepted);
    if (response) {
      setRequests(
        requests.filter(request => {
          return request.request_id !== requestID;
        })
      );
    }
  };

  useEffect(() => {
    if (!loading && data) {
      setRequests(data);
    }
  }, [loading, data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className='container mx-auto p-4'>
      <h2 className='mb-4 text-center text-2xl font-bold'>Gérer les Demandes de Groupe</h2>
      <div className='space-y-4'>
        {requests.map(request => (
          <GroupCardRequest key={`${request.request_id}-${request.group_id}`} request={request} requestHandler={requestHandler} />
        ))}
      </div>
    </div>
  );
};
export default GroupRequestsManagerPage;

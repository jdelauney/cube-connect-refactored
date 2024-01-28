import useSWR from 'swr';
import { getGroups, sendRequestToGroup } from '../../lib/api/api.js';
import GroupCard from './components/GroupCard.jsx';
import { useEffect, useState } from 'react';

const GroupListPage = () => {
  const [groups, setGroups] = useState(null);
  const { data, loading, error } = useSWR(() => getGroups());

  const sendRequest = groupID => {
    sendRequestToGroup(groupID).then(() => {
      setGroups(
        groups.map(group => {
          if (group.group_id === groupID) {
            return {
              ...group,
              requestSent: true,
            };
          }
          return group;
        })
      );
    });
  };

  useEffect(() => {
    if (!loading && data) {
      setGroups(data);
    }
  }, [data, loading]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className={'container mx-auto p-4'}>
      {/*<RecommendedGroupsNotification />*/}
      <h2 className={'mb-5 text-3xl font-bold'}>Groups</h2>
      <div className={'grid gap-6 md:grid-cols-2 lg:grid-cols-3'}>
        {groups.map(group => (
          <GroupCard key={`groupCard-${group.group_id}`} group={group} sendRequestHandler={sendRequest} />
        ))}
      </div>
    </div>
  );
};
export default GroupListPage;

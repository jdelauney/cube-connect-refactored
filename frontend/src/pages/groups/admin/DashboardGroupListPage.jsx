import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { deleteGroup, getGroups } from '../../../lib/api/api.js';
import GroupBaseCard from '../components/GroupBaseCard.jsx';
import Button from '../../../components/ui/Button/Button.jsx';

const DashboardGroupListPage = () => {
  const [ownedGroups, setOwnedGroups] = useState([]);
  const [memberGroups, setMemberGroups] = useState([]);
  const navigate = useNavigate();
  const { data: groups, loading, error } = useSWR(() => getGroups());

  const handleEditGroup = groupID => {
    navigate(`/groups/${groupID}/edit`);
  };

  const handleDeleteGroup = groupID => {
    deleteGroup(groupID)
      .then(response => {
        if (response) {
          setOwnedGroups(
            ownedGroups.filter(group => {
              return group.group_id !== groupID;
            })
          );
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!loading && groups) {
      setOwnedGroups(groups.filter(group => group.is_admin));
      setMemberGroups(groups.filter(group => group.membership_status === 'accepted' && !group.is_admin));
    }
  }, [groups, loading]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className={'container mx-auto p-4 text-white'}>
      <h2 className={'text-2xl font-bold'}>My Groups</h2>
      <div className={'mt-4'}>
        <h3 className={'mb-2 text-xl font-semibold'}>Owned Groups</h3>
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-3'}>
          {ownedGroups.map(group => (
            <GroupBaseCard key={`groupCard-${group.group_id}`} group={group}>
              <div className={'mt-2 flex gap-5'}>
                <Button onClick={() => handleEditGroup(group.group_id)}>Edit</Button>
                <Button onClick={() => handleDeleteGroup(group.group_id)} variant={'danger'}>
                  Delete
                </Button>
              </div>
            </GroupBaseCard>
          ))}
        </div>
      </div>
      <div className={'mt-8'}>
        <h3 className={'mb-2 text-xl font-semibold'}>Member Groups</h3>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          {memberGroups.map(group => (
            <GroupBaseCard key={`groupCard-${group.group_id}`} group={group} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default DashboardGroupListPage;

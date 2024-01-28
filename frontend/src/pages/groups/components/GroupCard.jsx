import GroupBaseCard from './GroupBaseCard.jsx';
import Button from '../../../components/ui/Button/Button.jsx';

const GroupCard = ({ group, sendRequestHandler }) => {
  return (
    <GroupBaseCard group={group}>
      <div className={'flex gap-5'}>
        {group.is_admin && <span className='font-bold text-white'>Owner</span>}
        {group.is_member && <span className='font-bold text-white'>Member</span>}
        {group.requestSent && <span className='font-bold text-white'>Request Pending</span>}
        {!group.is_admin && !group.is_member && !group.requestSent && (
          <Button onClick={() => sendRequestHandler(group.group_id)} className='mt-4'>
            Join Group
          </Button>
        )}
      </div>
    </GroupBaseCard>
  );
};
export default GroupCard;

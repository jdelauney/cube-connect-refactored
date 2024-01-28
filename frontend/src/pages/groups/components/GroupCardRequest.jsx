const GroupCardRequest = ({ request, requestHandler }) => {
  return (
    <div className='flex items-center justify-between rounded-lg bg-white p-4 shadow-lg'>
      <p className='text-lg font-semibold'>
        Demande de <span className='text-blue-600'>{request.requester_name}</span> pour rejoindre <span className='text-blue-600'>{request.group_name}</span>
      </p>
      <div>
        <button onClick={() => requestHandler(request.request_id, true)} className='rounded-l bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600'>
          Accepter
        </button>
        <button onClick={() => requestHandler(request.request_id, false)} className='rounded-r bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600'>
          Refuser
        </button>
      </div>
    </div>
  );
};
export default GroupCardRequest;
